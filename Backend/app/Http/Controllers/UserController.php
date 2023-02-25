<?php

namespace App\Http\Controllers;

use App\Models\User;
use Faker\Provider\UserAgent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request;
        $validator = Validator::make( $request->all(),[
        'first_name' => 'required',
        'last_name' => 'required',
        'email_address'=>'required|email',
        'phone_number' => 'required|min:10|numeric',
        // 'dob' => 'required',
    ]);

    if ($validator->fails()) {
        $errors = $validator->errors();
        return $errors->toJson();
    } else 
        {User::Create([
            'firstname' => $request->first_name,
            'lastname' => $request->last_name,
            'emailaddress' => $request->email_address,
            'phonenumber' => $request->phone_number,
            'dob' => $request->dob
            //  ?? new \DateTime()
        ]);
        return response()->json('Successfully');

    }
    }

}
