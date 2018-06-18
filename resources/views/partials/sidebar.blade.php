<aside class="sidebar">
    <div class="scrollbar-inner">

        <div class="user">
            <div class="user__info" data-toggle="dropdown">
                <img class="user__img" src="/backend/demo/img/profile-pics/8.jpg" alt="">
                <div>
                    <div class="user__name">{{ Auth::user()->name }}</div>
                    <div class="user__email">{{ Auth::user()->email }}</div>
                </div>

                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(-5px, 62px, 0px); top: 0px; left: 0px; will-change: transform;">
                    <a class="dropdown-item" href="">View Profile</a>
                    <a class="dropdown-item" href="">Settings</a>
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        Log Out 
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </a>
                </div>
            </div>
        </div>

        <ul class="navigation">
            <li><a href="/"><i class="zmdi zmdi-home"></i> Dashboard </a></li>
            <li><a href="/playbooks"><i class="zmdi zmdi-view-list"></i> Playbooks </a></li>

            <li>
                <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                     <i class="zmdi zmdi-square-right"></i> Log Out 
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </li>
            
        </ul>
    </div>
</aside>