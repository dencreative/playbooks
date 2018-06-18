<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['body'];


    public function entry() {

        return $this->belongsTo(Entry::class);
    }
}
