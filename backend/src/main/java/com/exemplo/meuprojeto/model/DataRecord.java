package com.exemplo.meuprojeto.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dataRecords")
public class DataRecord {

    @Id
    private String id;
    private String texto;
    private String data;
    private String fonte; // Ex: "Twitter" ou "Facebook"
    private String sentimento; // "positivo", "negativo" ou "neutro"

    // Getters e Setters

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getTexto() {
        return texto;
    }
    public void setTexto(String texto) {
        this.texto = texto;
    }
    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }
    public String getFonte() {
        return fonte;
    }
    public void setFonte(String fonte) {
        this.fonte = fonte;
    }
    public String getSentimento() {
        return sentimento;
    }
    public void setSentimento(String sentimento) {
        this.sentimento = sentimento;
    }
}
