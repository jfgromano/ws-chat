<?php
return [
    '/message/save' => 'ChatWS\Controller\Received\MessageController@save',
    '/user/register' => 'ChatWS\Controller\Received\UserController@register',
    '/@websocket/disconnect' => 'ChatWS\Controller\Received\UserController@disconnect',
    '/@websocket/connect' => 'ChatWS\Controller\Received\UserController@connect'
];