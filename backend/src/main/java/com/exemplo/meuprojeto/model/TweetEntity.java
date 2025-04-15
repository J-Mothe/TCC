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
@Document(collection = "twitter") // Certifique-se de usar o nome correto da collection
public class TweetEntity {

    @Id
    private String id; // Mapeia o campo _id (ObjectId) como String

    @Field("tweet_id")
    private Long tweetId; // Mapeia o campo tweet_id do documento

    private Date timestamp;
    private String content;
    private Integer likes;
    private Integer retweets;
    private Integer analytics;
}
