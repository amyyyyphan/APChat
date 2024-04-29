package com.amy.APChat.model;

import com.amy.APChat.enums.MessageType;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private MessageType type;
    private String topic;
    private String sender;
    private String senderId;
    private String content;
}