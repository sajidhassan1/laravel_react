<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    use HasFactory;
    
    
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     *  @ORM\Column(type="string")
     */
    protected $ip;
    /**
     *  @ORM\Column(type="string")
     */
    protected $browser;
    /**
     *  @ORM\Column(type="string")
     */
    protected $devicetype;
    /**
     *  @ORM\Column(type="string")
     */
    protected $useragent;

     protected $fillable = [
        'ip',
        'browser',
        'devicetype',
        'useragent'
    ];
}
