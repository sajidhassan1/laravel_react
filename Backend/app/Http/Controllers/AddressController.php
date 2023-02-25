<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\User;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Request
     */
    public function store(Request $request)
    {
        $user = User::where('firstname',$request['userName']['name'])->first();
        foreach($request['addressList'] as $data)
        {
            $address = new Address();
            $address->addressline1 = $data['address_line_1'];
            $address->addressline2 = $data['address_line_2']; 
            $address->addressline3 = $data['address_line_3'];
            $user->address()->save($address);
        }
            
        return response()->json('Successfully');
    }

}
