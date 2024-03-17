package com.amy.APChat.consumer;

import com.amy.APChat.model.Message;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumer {

    @KafkaListener(topics = "${kafka.topic-1}", groupId = "${kafka.consumer.group-id-1}")
    public void listen(Message message) {
        System.out.println(message.getContent());
    }

}
