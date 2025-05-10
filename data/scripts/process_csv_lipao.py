import csv
import re
from datetime import datetime
import os
from transformers import pipeline
from bson.json_util import dumps

analisador = pipeline("text-classification", model="lipaoMai/BERT-sentiment-analysis-portuguese")

def convert_numeric(value):
    if value is None:
        return 0
    value = str(value).strip().replace(",", ".")
    if not value:
        return 0
    try:
        if 'K' in value.upper():
            return float(value.upper().replace('K', '')) * 1000
        elif 'M' in value.upper():
            return float(value.upper().replace('M', '')) * 1000000
        else:
            return float(value)
    except ValueError:
        return 0

def analisar_sentimento(texto):
    try:
        texto = re.sub(r"http\S+", "", texto)
        texto = re.sub(r"[@#]\S+", "", texto)
        texto = re.sub(r"\s+", " ", texto).strip()

        if len(texto.split()) < 4:
            return "neutro"

        resultado = analisador(texto[:512])[0]
        label = resultado["label"].upper()
        score = resultado["score"]

        if label == "LABEL_0":
            return "negativo"
        elif label == "LABEL_1":
            return "neutro" if score < 0.70 else "positivo"
        else:
            return "neutro"
    except Exception:
        return "neutro"

def format_number(value):
    if value % 1 == 0:
        return {"$numberInt": str(int(value))}
    else:
        return {"$numberDouble": str(value)}

def process_csv_e_salva_json(input_file, output_file, categoria_forcada="educação"):
    dados_final = []

    with open(input_file, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            tweet_id_str = row.get('Tweet ID', '').strip()
            if tweet_id_str.startswith("tweet_id:"):
                tweet_id_str = tweet_id_str[len("tweet_id:"):]
            try:
                tweet_id_num = int(tweet_id_str)
            except ValueError:
                tweet_id_num = 0

            timestamp_str = row.get('Timestamp', '').strip()
            try:
                timestamp_dt = datetime.fromisoformat(timestamp_str.replace("Z", "+00:00"))
                timestamp_ms = int(timestamp_dt.timestamp() * 1000)
            except Exception:
                timestamp_ms = 0

            texto = row.get('Content', '').strip()
            sentimento = analisar_sentimento(texto)

            likes = format_number(convert_numeric(row.get('Likes', '')))
            retweets = format_number(convert_numeric(row.get('Retweets', '')))
            analytics = format_number(convert_numeric(row.get('Analytics', '')))

            doc = {
                "tweet_id": { "$numberLong": str(tweet_id_num) },
                "timestamp": { "$date": { "$numberLong": str(timestamp_ms) } },
                "content": texto,
                "likes": likes,
                "retweets": retweets,
                "analytics": analytics,
                "categoria": categoria_forcada,
                "sentimento": sentimento
            }

            dados_final.append(doc)

    with open(output_file, 'w', encoding='utf-8') as jsonfile:
        jsonfile.write(dumps(dados_final, indent=4))
    print(f"✅ JSON gerado com {len(dados_final)} registros e salvo em {output_file}")

if __name__ == "__main__":
    input_csv = os.path.abspath('../raw/1000_brasilia_educação.csv')
    output_json = os.path.abspath('../processed/brasilia_educacao_com_sentimento.json')
    process_csv_e_salva_json(input_csv, output_json, categoria_forcada="educação")
