<?php

namespace ChatWS\Controller\Sent;

use JFGRomano\Core\WebSocket\Message as WSMessage;

abstract class SentController{
    protected function createMessage($command, $array) : WSMessage{
        return new WSMessage($command, $array);
    }
}