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
    public void foodChatListener(Message message) {
        System.out.println("(Topic: food) " + message.getSender() + ": " + message.getContent());
        template.convertAndSend("/chat/food", message);
    }

    @KafkaListener(topics = "${kafka.topic-2}", groupId = "${kafka.consumer.group-id-2}")
    public void computerScienceChatListener(Message message) {
        System.out.println("(Topic: computer science) " + message.getSender() + ": " + message.getContent());
        template.convertAndSend("/chat/computer-science", message);
    }

    @KafkaListener(topics = "${kafka.topic-3}", groupId = "${kafka.consumer.group-id-3}")
    public void engineeringChatListener(Message message) {
        System.out.println("(Topic: engineering) " + message.getSender() + ": " + message.getContent());
        template.convertAndSend("/chat/engineering", message);
    }

    @KafkaListener(topics = "${kafka.topic-4}", groupId = "${kafka.consumer.group-id-4}")
    public void mathChatListener(Message message) {
        System.out.println("(Topic: math) " + message.getSender() + ": " + message.getContent());
        template.convertAndSend("/chat/math", message);
    }

    @KafkaListener(topics = "${kafka.topic-5}", groupId = "${kafka.consumer.group-id-5}")
    public void moviesChatListener(Message message) {
        System.out.println("(Topic: movies) " + message.getSender() + ": " + message.getContent());
        template.convertAndSend("/chat/movies", message);
    }

}
