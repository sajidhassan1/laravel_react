<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User extends Authenticatable
{
    use HasFactory;



    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $firstname;

    /**
     * @ORM\Column(type="string")
     */
    protected $lastname;

    /**
     * @ORM\Column(type="string")
     */
    protected $emailaddress;

    /**
     * @ORM\Column(type="int")
     */
    protected $phonenumber;

    /**
     * @ORM\Column(type="date")
     */
    protected $dob;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'emailaddress',
        'phonenumber',
        'emailaddress',
        'dob'
    ];

    
    public function address()
    {
        return $this->hasMany(Address::class);
    }

}
