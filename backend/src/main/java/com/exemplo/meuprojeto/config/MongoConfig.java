package com.exemplo.meuprojeto.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.exemplo.meuprojeto.repository")
public class MongoConfig {
}