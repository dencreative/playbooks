<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Vendor styles -->
        <link rel="stylesheet" href="/backend/vendors/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css">
        <link rel="stylesheet" href="/backend/vendors/bower_components/animate.css/animate.min.css">
        <link rel="stylesheet" href="/backend/vendors/bower_components/jquery.scrollbar/jquery.scrollbar.css">
        <link rel="stylesheet" href="/backend/vendors/bower_components/select2/dist/css/select2.min.css">

        <!-- App styles -->
        <link rel="stylesheet" href="/backend/css/app.min.css">
        <link rel="stylesheet" href="/backend/css/custom.css">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>

    <title>Den Playbooks</title>

    <body data-ma-theme="black">
        <main class="main">
            <div class="page-loader">
                <div class="page-loader__spinner">
                    <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>

            <header class="header row" style="background-color: #252525;">
                <div class="navigation-trigger hidden-xl-up " data-ma-action="aside-open" data-ma-target=".sidebar">
                    <div class="navigation-trigger__inner">
                        <i class="navigation-trigger__line"></i>
                        <i class="navigation-trigger__line"></i>
                        <i class="navigation-trigger__line"></i>
                    </div>
                </div>

                <div class="header__logo hidden-sm-down col-md-2 col-sm-12 col-xs-12">
                    <h1><a href="index.html"><img src="https://www.elixirr.com/wp-content/themes/elixirr/img/elixirr_logo_darkbckgrnd.svg" style="width: 100%;"/></a></h1>
                </div>

                <form class="search col-md-10">
                    <div class="search__inner">
                        <input type="text" class="search__text" placeholder="Search for people, files, documents...">
                        <i class="zmdi zmdi-search search__helper" data-ma-action="search-close"></i>
                    </div>
                </form>
            </header>

            <aside class="sidebar">
                <div class="scrollbar-inner">
                    <div class="user">
                        <div class="user__info" data-toggle="dropdown">
                            <img class="user__img" src="/backend/demo/img/profile-pics/8.jpg" alt="">
                            <div>
                                <div class="user__name">Nikolay Alexandrov</div>
                                <div class="user__email">shnikolay@apple.com</div>
                            </div>
                        </div>
                    </div>

                    <ul class="navigation">
                        <li><a href="index.html"><i class="zmdi zmdi-home"></i> Playbooks </a></li>

                        <li class="navigation__sub">
                            <a href=""><i class="zmdi zmdi-view-week"></i> Variants</a>

                            <ul>
                                <li><a href="hidden-sidebar.html">Hidden Sidebar</a></li>
                                <li><a href="boxed-layout.html">Boxed Layout</a></li>
                                <li><a href="hidden-sidebar-boxed-layout.html">Boxed Layout with Hidden Sidebar</a></li>
                                <li><a href="top-navigation.html">Top Navigation</a></li>
                            </ul>
                        </li>

                        <li><a href="index.html"><i class="zmdi zmdi-square-right"></i> Log Out </a></li>


                    </ul>
                </div>
            </aside>

            <section class="content">
                <div class="content__inner">
                    <header class="content__title">
                        <h1>Playbooks</h1>
                        <small>Below is the list of playbooks.</small>
                    </header>

                    <div class="row todo">
                        <div class="col-md-12">
                            <div class="card">
                                @yield('content')
                            </div>
                        </div>
                    </div>

                    <div class="modal fade show" id="modal-new-todo" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">New Todo List</h5>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="What do you want to do?">
                                    </div>

                                    <div class="form-group select2-parent">
                                        <select class="select2">
                                            <option>Select a Label</option>
                                            <option>#Messages</option>
                                            <option>#Clients</option>
                                            <option>#Server</option>
                                            <option>#Marketing</option>
                                            <option>#Work Related</option>
                                            <option>#Website</option>
                                        </select>
                                    </div>

                                    <div class="form-group mb-0">
                                        <label>Set Priority</label>

                                        <div class="btn-group btn-group-toggle btn-group-justified" data-toggle="buttons">
                                            <label class="btn active">
                                                <input type="radio" name="options" id="option1" autocomplete="off" checked> !
                                            </label>
                                            <label class="btn">
                                                <input type="radio" name="options" id="option2" autocomplete="off"> !!
                                            </label>
                                            <label class="btn">
                                                <input type="radio" name="options" id="option3" autocomplete="off"> !!!
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-link">Save</button>
                                    <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                   <!--  <button class="btn btn-primary btn--action btn--fixed zmdi zmdi-plus" data-toggle="modal" data-target="#modal-new-todo" style="color:"></button> -->
                </div>

                

                <footer class="footer hidden-xs-down">
                    <p>© Material Admin Responsive. All rights reserved.</p>

                    <ul class="nav footer__nav">
                        <a class="nav-link" href="">Homepage</a>

                        <a class="nav-link" href="">Company</a>

                        <a class="nav-link" href="">Support</a>

                        <a class="nav-link" href="">News</a>

                        <a class="nav-link" href="">Contacts</a>
                    </ul>
                </footer>
            </section>
        </main>

        <!-- Older IE warning message -->
            <!--[if IE]>
                <div class="ie-warning">
                    <h1>Warning!!</h1>
                    <p>You are using an outdated version of Internet Explorer, please upgrade to any of the following web browsers to access this website.</p>

                    <div class="ie-warning__downloads">
                        <a href="http://www.google.com/chrome">
                            <img src="img/browsers/chrome.png" alt="">
                        </a>

                        <a href="https://www.mozilla.org/en-US/firefox/new">
                            <img src="img/browsers/firefox.png" alt="">
                        </a>

                        <a href="http://www.opera.com">
                            <img src="img/browsers/opera.png" alt="">
                        </a>

                        <a href="https://support.apple.com/downloads/safari">
                            <img src="img/browsers/safari.png" alt="">
                        </a>

                        <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">
                            <img src="img/browsers/edge.png" alt="">
                        </a>

                        <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
                            <img src="img/browsers/ie.png" alt="">
                        </a>
                    </div>
                    <p>Sorry for the inconvenience!</p>
                </div>
            <![endif]-->

        <!-- Javascript -->
        <!-- Vendors -->
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="/backend/vendors/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="/backend/vendors/bower_components/popper.js/dist/umd/popper.min.js"></script>
        <script src="/backend/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="/backend/vendors/bower_components/select2/dist/js/select2.full.min.js"></script>
        <script src="/backend/vendors/bower_components/jquery.scrollbar/jquery.scrollbar.min.js"></script>
        <script src="/backend/vendors/bower_components/jquery-scrollLock/jquery-scrollLock.min.js"></script>

        <!-- App functions and actions -->
        <script src="/backend/js/app.min.js"></script>
        

    </body>
</html>