<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    // Chỉ định các thuộc tính được phép gán hàng loạt
    protected $fillable = [
        'name',
        'description',
    ];
}
