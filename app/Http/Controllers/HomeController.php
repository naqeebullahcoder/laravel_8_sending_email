<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function sendEmail(Request $req){

        $data = [
            'name'=>$req->name,
            'email'=>$req->email,
            'phone'=>$req->phone,
            'message'=>$req->message
        ];
        Mail::to('visiter@liveservermail.com')->send(new ContactMail($data));
        return view('home')->with('Email Succefully Sent!');
    }

}
