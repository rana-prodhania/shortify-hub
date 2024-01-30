<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UrlShortenerController extends Controller
{
    public function index()
    {
        $urls = auth()->user()->urls;
        return $urls;
    }
    public function shorten(Request $request)
    {
        $request->validate([
            'original_url' => 'required|url',
        ]);

        // Check if the URL already exists
        $existingUrl = Url::where('original_url', $request->original_url)->first();
        if ($existingUrl) {
            return response()->json(['short_url' => $existingUrl->short_url]);
        }

        // Generate a unique short key
        $shortKey = Str::random(6);

        // Create a new short URL
        $url = Url::create([
            'original_url' => $request->original_url,
            'short_url' => $shortKey,
            'user_id' => Auth::user()->id
        ]);

        return response()->json(['short_url' => $url->short_url]);
    }

    public function redirect($shortUrl)
    {
        $url = Url::where('short_url', $shortUrl)->first();
        return redirect($url->original_url);
    }
}
