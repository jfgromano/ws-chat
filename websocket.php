<?php

use ChatWS\ChatContext;
use JFGRomano\Core\WebSocket\JsonMessageParser;
use JFGRomano\Ratchet\RatchetDriver;
use JFGRomano\Ratchet\RatchetRouter;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

require __DIR__ . '/vendor/autoload.php';

$routes = require __DIR__ . '/routes.php';
$router = new RatchetRouter($routes, new JsonMessageParser());
$context = new ChatContext();
$webSocketInterface = new RatchetDriver($context, $router);

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            $webSocketInterface
        )
    ),
    9000
);

$server->run();
