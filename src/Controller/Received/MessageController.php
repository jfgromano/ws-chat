<?php

namespace ChatWS\Controller\Received;

use ChatWS\Controller\Sent\MessageSentController;
use ChatWS\Entity\Message;

class MessageController
{

    private $messageSent;
    
    public function __construct()
    {
        $this->messageSent = new MessageSentController();
    }
    
    public function save($context, $clients, $from, $msg)
    {
        $user = $context->getUserById($from->resourceId);
        $message = new Message($msg->get('text'), $user->getName());
        foreach ($clients as $client) {
            $this->messageSent->sendChatMessage($client, $message);
        }
    }
}
