<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @ORM\Entity
 * @ORM\Table(name="address")
 */
class Address extends Model
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
    protected $addressline1;
    /**
     * @ORM\Column(type="string")
     */
    protected $addressline2;
    /**
     * @ORM\Column(type="string")
     */
    protected $addressline3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'addressline1',
        'addressline2',
        'addressline3'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getAddressline1()
    {
        return $this->addressline1;
    }
}
