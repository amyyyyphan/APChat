package com.amy.APChat.controller;

import com.amy.APChat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;

    @PostMapping("/chat")
    public void sendMessage(@RequestBody Message message) {
        kafkaTemplate.send(message.getTopic(), message);
    }
}