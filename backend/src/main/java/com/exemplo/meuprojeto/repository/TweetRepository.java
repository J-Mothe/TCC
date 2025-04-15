package com.exemplo.meuprojeto.repository;

import com.exemplo.meuprojeto.model.TweetEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TweetRepository extends MongoRepository<TweetEntity, Long> {
    // O MongoRepository já disponibiliza métodos como findAll(), findById(), etc.
}
