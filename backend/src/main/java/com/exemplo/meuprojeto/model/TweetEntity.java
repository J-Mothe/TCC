package com.exemplo.meuprojeto.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "twitter")
public class TweetEntity {

    @Id
    private String id;

    @Field("tweet_id")
    private Long tweetId;

    private Date timestamp;
    private String content;
    private Integer likes;
    private Integer retweets;
    private Integer analytics;
    private String categoria;
}
