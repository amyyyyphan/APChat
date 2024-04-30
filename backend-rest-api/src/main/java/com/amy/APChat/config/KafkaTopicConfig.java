package com.amy.APChat.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaTopicConfig {
    
    @Value("${kafka.topic-1}")
    private String topic1;

    @Value("${kafka.topic-2}")
    private String topic2;

    @Value("${kafka.topic-3}")
    private String topic3;

    @Value("${kafka.topic-4}")
    private String topic4;

    @Value("${kafka.topic-5}")
    private String topic5;

    @Value("${kafka.topic-6}")
    private String topic6;

    @Bean
    public NewTopic topic1() {
        return TopicBuilder.name(topic1).build();
    }

    @Bean
    public NewTopic topic2() {
        return TopicBuilder.name(topic2).build();
    }

    @Bean
    public NewTopic topic3() {
        return TopicBuilder.name(topic3).build();
    }

    @Bean
    public NewTopic topic4() {
        return TopicBuilder.name(topic4).build();
    }

    @Bean
    public NewTopic topic5() {
        return TopicBuilder.name(topic5).build();
    }

    @Bean
    public NewTopic topic6() {
        return TopicBuilder.name(topic6).build();
    }
}
