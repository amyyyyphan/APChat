package com.amy.APChat.model;

import com.amy.APChat.enums.MessageType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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