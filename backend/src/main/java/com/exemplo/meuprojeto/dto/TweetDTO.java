package com.exemplo.meuprojeto.dto;

import lombok.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TweetDTO {
    private Long tweetId;
    private Date timestamp;
    private String content;
    private Integer likes;
    private Integer retweets;
    private Integer analytics;
    private String categoria;
}
