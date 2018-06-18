<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    protected $fillable = ['title', 'description'];

    public function categories() {

        return $this->belongsToMany(Category::class);

    }
}
