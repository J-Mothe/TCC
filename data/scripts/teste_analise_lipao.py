from transformers import pipeline
from collections import Counter

analisador = pipeline(
    "text-classification",
    model="lipaoMai/BERT-sentiment-analysis-portuguese"
)

def classificar_sentimento(label, score):
    if label.upper() == "LABEL_0":
        return "negativo"
    elif label.upper() == "LABEL_1":
        if score < 0.70:
            return "neutro"
        else:
            return "positivo"
    else:
        return "indefinido"

frases = [
    "A iniciativa é maravilhosa, parabéns aos envolvidos!",
    "Horrível! Um descaso completo com a população.",
    "Achei normal, nada de especial.",
    "Foi um ótimo projeto, superou as expectativas.",
    "Total desperdício de dinheiro público.",
    "Não gostei, mas pelo menos tentaram fazer algo.",
    "Excelente trabalho da secretaria de educação!",
    "Ridículo o que estão fazendo com a saúde.",
    "Tá bom, mas podia ser melhor.",
    "Muito feliz com o novo sistema implantado!",
    "Uma vergonha. Não tem justificativa pra isso.",
    "O evento foi bem organizado e útil.",
    "Sem opinião formada, ainda estou avaliando.",
    "Detestei. Só piora cada vez mais.",
    "Gostei bastante da nova plataforma de ensino.",
    "Nada mal, funciona como esperado.",
    "O governo precisa urgentemente rever suas ações.",
    "A entrega foi rápida e eficiente, obrigado!",
    "Não tem problema, acontece com qualquer um.",
    "Simples, objetivo e funcional. Gostei.",
    "Tudo bem.",
    "Foi feito o que precisava ser feito.",
    "Recebi as informações conforme solicitado.",
    "A reunião ocorreu como o esperado.",
    "Sem comentários relevantes.",
    "Não tenho uma opinião formada sobre isso.",
    "O serviço foi realizado.",
    "O produto chegou.",
    "Foi entregue.",
    "O sistema está funcionando.",
    "A apresentação aconteceu conforme o cronograma.",
    "O atendimento foi adequado.",
    "A resposta veio no prazo.",
    "Foi um dia comum.",
    "Nenhuma novidade significativa.",
    "Sem problemas aparentes.",
    "Não houve atrasos.",
    "Processo executado normalmente.",
    "Nada além do esperado.",
    "Transação concluída com sucesso."
]

print(f"{'Frase':<80} | {'Sentimento':<10} | {'Confiança'}")
print("-" * 105)

contador = Counter()

for frase in frases:
    resultado = analisador(frase)[0]
    sentimento = classificar_sentimento(resultado["label"], resultado["score"])
    score = resultado["score"]
    contador[sentimento] += 1
    print(f"{frase[:78]:<80} | {sentimento:<10} | {score:.2f}")

print("\n📊 Resumo:")
for categoria, total in contador.items():
    print(f"→ {categoria}: {total}")
