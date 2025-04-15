package com.exemplo.meuprojeto.service;

import com.exemplo.meuprojeto.dto.TweetDTO;
import com.exemplo.meuprojeto.model.TweetEntity;
import com.exemplo.meuprojeto.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TweetService {

    @Autowired
    private TweetRepository tweetRepository;

    public List<TweetDTO> getAllTweets(Sort sort) {
        List<TweetEntity> tweets = tweetRepository.findAll(sort);
        // Converte as entidades para DTOs
        return tweets.stream()
                .map(tweet -> TweetDTO.builder()
                        .tweetId(tweet.getTweetId())
                        .timestamp(tweet.getTimestamp())
                        .content(tweet.getContent())
                        .likes(tweet.getLikes())
                        .retweets(tweet.getRetweets())
                        .analytics(tweet.getAnalytics())
                        .build())
                .collect(Collectors.toList());
    }
}
