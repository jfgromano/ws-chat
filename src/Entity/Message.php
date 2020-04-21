<?php

namespace ChatWS\Entity;

class Message{
    protected $text;
    protected $date;
    protected $from;

    public function __construct($text, $sender, $date = null)
    {
        if($date === null){
            $date = time();
        }

        $this->text = $text;
        $this->sender = $sender;
        $this->date = $date;
    }

    public function getText()
    {
        return $this->text;
    }
    public function getDate()
    {
        return $this->date;
    }
    public function getSender()
    {
        return $this->sender;
    }

    public function toJson(){
        return json_encode($this->toArray());
    }

    public function toArray(){
        return [
            'text' => $this->getText(),
            'sender' => $this->getSender(),
            'date' => $this->getDate()
        ];
    }

}