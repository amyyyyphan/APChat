package com.amy.APChat.consumer;

import com.amy.APChat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumer {
    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(topics = "${kafka.topic-1}", groupId = "${kafka.consumer.group-id-1}")
    public void listen(Message message) {
        System.out.println(message.getSender() + ": " + message.getContent());
        template.convertAndSend("/chat/food", message);
    }

}
