<?php

namespace ChatWS\Entity;

class User
{
    const TYPE_SYSTEM = "System";
    const TYPE_USER = "User";

    protected $name;
    protected $id;
    protected $type;

    public function __construct($name, $id, $type = self::TYPE_USER)
    {
        $this->name = $name;
        $this->id = $id;
        $this->type = $type;

        if ($type !== self::TYPE_USER && $type !== self::TYPE_SYSTEM) {
            $this->type = self::TYPE_USER;
        }
    }

    public function getName()
    {
        return $this->name;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getType()
    {
        return $this->type;
    }

    public function toJson()
    {
        return json_encode($this->toArray());
    }

    public function toArray()
    {
        return [
            'name' => $this->getName(),
            'id' => $this->getId(),
            'type' => $this->getType()
        ];
    }
}
