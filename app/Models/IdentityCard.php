<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdentityCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'links',
        'specialization',
        'locations',
        'photo_path',
        'video_path',
    ];
}
