import csv
from datetime import datetime
from bson.json_util import dumps

def convert_numeric(value):
    value = value.strip()
    if not value:
        return 0
    if 'K' in value:
        try:
            return float(value.replace('K', '')) * 1000
        except ValueError:
            return 0
    if 'M' in value:
        try:
            return float(value.replace('M', '')) * 1000000
        except ValueError:
            return 0
    try:
        return int(value)
    except ValueError:
        try:
            return float(value)
        except ValueError:
            return 0

def process_csv(input_file, output_file):
    processed_data = []
    
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
            except Exception:
                timestamp_dt = None

            processed_record = {
                'tweet_id': tweet_id_num,
                'timestamp': timestamp_dt,
                'content': row.get('Content', '').strip(),
                'likes': convert_numeric(row.get('Likes', '')),
                'retweets': convert_numeric(row.get('Retweets', '')),
                'analytics': convert_numeric(row.get('Analytics', ''))
            }
            processed_data.append(processed_record)
    
    with open(output_file, 'w', encoding='utf-8') as jsonfile:
        jsonfile.write(dumps(processed_data, indent=4))

if __name__ == "__main__":
    input_csv = '../raw/1000_brasilia_educação.csv'   # Caminho do CSV bruto (Mudar nome)
    output_json = '../processed/brasilia_educação.json'  # Caminho para o JSON processado (Mudar nome)
    process_csv(input_csv, output_json)
    print("Processamento concluído!")
