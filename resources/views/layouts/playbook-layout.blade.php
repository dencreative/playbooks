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
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
         
         
        <!-- App styles -->
        <link rel="stylesheet" href="/backend/css/app.min.css">
        <link rel="stylesheet" href="/css/app.css">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>
         var CSRF_TOKEN = '{{ csrf_token() }}';
        </script>

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

            @include('partials.header')

            @include('partials.sidebar')

            <section class="content">
                <div class="content__inner">
                    <header class="content__title">
                        @yield('header')
                    </header>
            

                    @include('partials.errors')
                    
                    <div class="card row">
                         @yield('content')
                        
                    </div>

                    @include('partials.modals.delete')
                
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

        <script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

        <!-- App functions and actions -->
        <script src="/backend/js/app.min.js"></script>
        <script src="{{ asset('js/wysiwyg-editor.js') }}"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>

        @yield('js')
        

    </body>
</html>