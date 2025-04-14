package com.exemplo.meuprojeto.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.exemplo.meuprojeto.model.DataRecord;

public interface DataRecordRepository extends MongoRepository<DataRecord, String> {
    // Métodos customizados (se necessário) podem ser declarados aqui.
}
