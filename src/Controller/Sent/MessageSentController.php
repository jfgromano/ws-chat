<?php

namespace ChatWS\Controller\Sent;

class MessageSentController extends SentController{
    public const NEW_MESSAGE = '/message/new';
    
    public function sendChatMessage($client, $chatMessage){
        $wsMessage = $this->createMessage(self::NEW_MESSAGE, $chatMessage->toArray());
        $client->send($wsMessage->toString());
    }
}