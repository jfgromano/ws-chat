<?php

namespace ChatWS;

use JFGRomano\Core\WebSocket\Context;

class ChatContext implements Context{
    public function __construct()
    {
        $this->data = [];
        $this->data['users'] = [];
    }

    public function getUsers(){
        return $this->data['users'];
    }

    public function addUser($user){
        $this->data['users'][$user->getId()] = $user;
        return $this;
    }

    public function removeUser($user){
        unset($this->data['users'][$user->getId()]);
        return $this;
    }

    public function getUserById($id){
        if(isset($this->data['users'][$id])){
            return $this->data['users'][$id];
        }
        return false;
    }
    
    public function get($key){
        return $this->data[$key];
    }

    public function set($key, $value){
        $this->data[$key] = $value;
        return $this;
    }
}