<?php

namespace App\Http\Controllers;

use App\Models\IdentityCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class IdentityCardController extends Controller
{
    public function create(){
        return Inertia::render('CreateAccount/IdentityCard');
    }

    public function store(Request $request){
        $request->validate([
            'photo' => ['required', 'file'],
            'video' => ['required', 'file'],
            'links' => ['required'],
            'specialization' => ['required', 'string'],
            'locations' => ['required'],
        ]);

        DB::beginTransaction();
        try {

            $user = Auth::user();
            
            $data_create = [
                'user_id' => $user->id,
                'photo_path' => json_encode([
                    'path' =>$request->file('photo')->store("identity_card/photo/{$user->id}"),
                    'original_name' => $request->file('photo')->getClientOriginalName(),
                ]),
                'video_path' => json_encode([
                    'path' =>$request->file('video')->store("identity_card/video/{$user->id}"),
                    'original_name' => $request->file('video')->getClientOriginalName(),
                ]),
                'links' => json_encode($request->links),
                'locations' => json_encode($request->locations),
                'specialization' => $request->specialization,
            ];

            IdentityCard::create($data_create);
            
            DB::commit();

            toast("success", "Success store your identity card, next please select a service!");

            return redirect()->route('account.payment.create');

        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
}
