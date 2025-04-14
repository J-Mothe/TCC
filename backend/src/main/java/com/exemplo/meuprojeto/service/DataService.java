package com.exemplo.meuprojeto.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.exemplo.meuprojeto.model.DataRecord;
import com.exemplo.meuprojeto.repository.DataRecordRepository;

@Service
public class DataService {

    @Autowired
    private DataRecordRepository repository;

    public List<DataRecord> findAll() {
        return repository.findAll();
    }

    public DataRecord save(DataRecord record) {
        return repository.save(record);
    }
    
    // Outros métodos de lógica de negócio podem ser implementados aqui.
}
