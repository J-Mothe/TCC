package com.exemplo.meuprojeto.controller;

import com.exemplo.meuprojeto.dto.TweetDTO;
import com.exemplo.meuprojeto.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tweets")
public class TweetController {

    @Autowired
    private TweetService tweetService;

    @GetMapping("/listar")
    public ResponseEntity<List<TweetDTO>> listarTodos() {
        List<TweetDTO> lista = tweetService.getAllTweets(Sort.by("timestamp").descending());
        return ResponseEntity.ok(lista);
    }
}
