package com.amy.APChat.controller;

import com.amy.APChat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/chat")
    public void sendMessage(@RequestBody Message message) {
        String topic = message.getTopic() + "-chat";
        kafkaTemplate.send(topic, message);
    }
}