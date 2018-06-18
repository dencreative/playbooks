<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use Carbon\Carbon;

use SlackChat;
use SlackUser;


class SlackCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'slack:notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notify of working hours for the previous day.';


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        // slack_id => everhour_id 
        $users = [
            "UA8AQ7RHD" => "58024", //Lee Noad
            "U0MUM6L8P" => "58027", //Rob Swallow
            "U907CGVC2" => "58268", //Jessica Le Marchand
            "U0MNAHMM4" => "58269", //Emilie Jacob
            "UAC5Y63FY" => "58270", //Adam Wilson
            "U0MNA30F4" => "58271", //Rimo Cabales
            "U0Y2QKDME" => "58272", //Hannah Lavender-Jones
            "U0MNAHY0N" => "58273", //Paul Hume
            "U7GN3UP1B" => "58274", //Guilherme Reis
            "U6K9SQ4TB" => "58275", //Catherine Porritt
            "U0N4NJFNH" => "58277", //Piers Beckley
            "U1TCRDG7R" => "58420", //Dmitrij Burakov
            "UB14LN4AU" => "59691", //Nik Alexandrov
            "U0MN6BPTL" => "58023", //Bill Kingston
            "U0NDS689G" => "58276", //Alex Wybraniec
            "UAR5JANMS" => "58335", //Robert Koteles
        ];

        $client = new Client();
        $headers = [
            'X-Api-Key' => '9ffb-ee32-869489-4602ba-8ad640c4', 
            'Content-Type' => 'application/json'
        ];


        $sub_date = strtotime('-1 day', time());
        $yesterday = date("Y-m-d", $sub_date);
        $url = sprintf(
            'https://api.everhour.com/team/time/export?from=%1$s&to=%1$s&fields=date,user', 
            $yesterday);

        $request = new Request(
            'GET',
            $url,
            $headers);


        $response = $client->send($request);
        
        $user_hours = json_decode($response->getBody());
        
        foreach ($user_hours as $user) {
            $user_time = gmdate("H", $user->time);
            $user_id = $user->user->id;

            // $this->line($user->user->name . ': ' . $user_id . ': ' . $user_time . ' hours');

            if(in_array($user_id, $users) and ($user_time < 6)) {
                $slack_id = array_search($user_id, $users);
                $message = sprintf('You only logged %d working hour(s) yesterday. Please log the rest of your time for yesterday.' , $user_time);

                SlackChat::message("UA8AQ7RHD", $message, ['as_user' => 'true',]);
            };

        }

        // dd(SlackUser::all());
    }
}
