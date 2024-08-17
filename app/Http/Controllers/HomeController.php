<?php

namespace App\Http\Controllers;
use App\Models\Service;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function services()
    {
        // Thay đổi đường dẫn đến view phù hợp
        $services = Service::all();
        return view('home.services', compact('services'));

    }

    public function about()
    {
        // Thay đổi đường dẫn đến view phù hợp
        return view('home.about');
    }

    public function bodyguards()
    {
        // Thay đổi đường dẫn đến view phù hợp
        return view('home.bodyguards');
    }

    public function jobs()
    {
        // Thay đổi đường dẫn đến view phù hợp
        return view('home.jobs');
    }

    public function quote()
    {
        // Thay đổi đường dẫn đến view phù hợp
        return view('home.quote');
    }
}
