<?php

namespace ChatWS\Controller\Sent;

class UserSentController extends SentController{
    public const USER_DESCRIPTION = '/user/description';
    public const USER_ONLINE = '/user/online';
    public const USER_OFFLINE = '/user/offline';
    
    public function sendUserDescriptionMessage($client, $user){
        $message = $this->createMessage(self::USER_DESCRIPTION, $user->toArray());
        $client->send($message->toString());
    }

    public function sendUserOnlineMessage($client, $user){
        $message = $this->createMessage(self::USER_ONLINE, $user->toArray());
        $client->send($message->toString());
    }

    public function sendUserOfflineMessage($client, $user){
        $message = $this->createMessage(self::USER_OFFLINE, $user->toArray());
        $client->send($message->toString());
    }
}