<?php

namespace ChatWS\Controller\Received;

use ChatWS\Controller\Sent\UserSentController;
use ChatWS\Entity\User;

class UserController
{
    private $userSent;

    public function __construct()
    {
        $this->userSent = new UserSentController();
    }

    public function register($context, $clients, $from, $msg)
    {
        $user = new User($msg->get('name'), $from->resourceId);

        if ($context->getUserById($user->getId())) {
            return;
        }

        $context->addUser($user);
        $this->userSent->sendUserDescriptionMessage($from, $user);

        foreach ($clients as $client) {
            if ($client != $from) {
                $this->userSent->sendUserOnlineMessage($client, $user);
            }
        }
    }

    public function disconnect($context, $clients, $conn)
    {
        $user = $context->getUserById($conn->resourceId);

        if ($user) {
            foreach ($clients as $client) {
                $this->userSent->sendUserOfflineMessage($client, $user);
            }
            $context->removeUser($user);
        }
    }

    public function connect($context, $clients, $conn)
    {
        $users = $context->getUsers();
        foreach ($users as $user) {
            if ($user->getId() !== $conn->resourceId) {
                $this->userSent->sendUserOnlineMessage($conn, $user);
            }
        }
    }
}
