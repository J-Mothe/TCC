package com.exemplo.meuprojeto.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.exemplo.meuprojeto.model.DataRecord;
import com.exemplo.meuprojeto.service.DataService;

@RestController
@RequestMapping("/api/data")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping
    public List<DataRecord> getAllData() {
        return dataService.findAll();
    }

    @PostMapping
    public DataRecord createData(@RequestBody DataRecord record) {
        return dataService.save(record);
    }
    
    // Outros endpoints conforme necessário.
}
