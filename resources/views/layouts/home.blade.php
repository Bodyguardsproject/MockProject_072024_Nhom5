<!DOCTYPE html>
<html>

<head>
    <!-- Basic -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Site Metas -->
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>BodyGuards</title>


    <!-- bootstrap core css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('home/css/bootstrap.css') }}" />

    <!-- fonts style -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">

    <!--owl slider stylesheet -->
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

    <!-- font awesome style -->
    <link href="{{ asset('home/css/font-awesome.min.css') }}" rel="stylesheet" />
    <!-- nice select -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css"
        integrity="sha256-mLBIhmBvigTFWPSCtvdu6a76T+3Xyt+K571hupeFLg4=" crossorigin="anonymous" />
    <!-- datepicker -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css">
    <!-- Custom styles for this template -->
    <link href="{{ asset('home/css/style.css') }}" rel="stylesheet" />
    <!-- responsive style -->
    <link href="{{ asset('home/css/responsive.css') }}" rel="stylesheet" />

</head>

<body>

    <div class="hero_area">
        <!-- header section strats -->
        <header class="header_section">
            <div class="header_bottom">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg custom_nav-container">
                        <a class="navbar-brand" href="index.html">
                            <img src="{{ asset('home/images/logo.PNG') }}" alt="">
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="d-flex mr-auto flex-column flex-lg-row align-items-center">
                                <ul class="navbar-nav">
                                    <li class="nav-item {{ request()->routeIs('home') ? 'active' : '' }}">
                                        <a class="nav-link" href="{{ route('home') }}">Home <span
                                                class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item {{ request()->routeIs('services') ? 'active' : '' }}">
                                        <a class="nav-link" href="{{ route('services') }}">Services</a>
                                    </li>
                                    <li class="nav-item {{ request()->routeIs('about') ? 'active' : '' }}">
                                        <a class="nav-link" href="{{ route('about') }}">About Us</a>
                                    </li>
                                    <li class="nav-item {{ request()->routeIs('bodyguards') ? 'active' : '' }}">
                                        <a class="nav-link" href="{{ route('bodyguards') }}">BodyGuards</a>
                                    </li>
                                    <li class="nav-item {{ request()->routeIs('jobs') ? 'active' : '' }}">
                                        <a class="nav-link" href="{{ route('jobs') }}">Jobs</a>
                                    </li>
                                    <li class="nav-item {{ request()->routeIs('quote') ? 'active' : '' }}">
                                        <a class="nav-link" href="{{ route('quote') }}">Quote</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="quote_btn-container">
                                @if (Route::has('login'))
                                    @auth
                                        @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
                                            <button
                                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                                <img class="h-8 w-8 rounded-full object-cover"
                                                    src="{{ Auth::user()->profile_photo_url }}"
                                                    alt="{{ Auth::user()->name }}" />
                                            </button>
                                        @else
                                            <form method="POST" action="{{ route('logout') }}" class="d-inline">
                                                @csrf
                                                <button type="submit" class="logout-btn">
                                                    <i class="fa fa-user" aria-hidden="true"></i>
                                                    <span>Log Out</span>
                                                </button>
                                            </form>
                                        @endif
                                    @else
                                        <a href="{{ route('login') }}">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                            <span>Login</span>
                                        </a>
                                        @if (Route::has('register'))
                                            <a href="{{ route('register') }}">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span>Sign Up</span>
                                            </a>
                                        @endif
                                    @endauth
                                @endif
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>


        <!-- end header section -->
        <!-- slider section -->
        <section class="">

            <a>
                <img src="{{ asset('home/images/bg_1.PNG') }}" alt="" class="cropped-img">
            </a>
            <a class="overlay-img">
                <img src="{{ asset('home/images/services.png') }}" alt="overlay-img">
            </a>
        </section>

        <!-- end slider section -->
    </div>


    @yield('welcome')





    <!-- info section -->
    <section class="info_section ">
        <div class="container">

            <div class="info_bottom layout_padding2">
                <div class="row info_main_row">
                    <div class="col-md-6 col-lg-4">
                        <h5>
                            <img src="{{ asset('home/images/logo.PNG') }}" alt="" class="logo-ft">
                        </h5>
                        <div class="post_box">

                            <p>
                                As one of the top Security Guard Service providers in the nation, we provide thorough,
                                responsive, and professional guards on call 24/7
                            </p>
                        </div>

                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-box">
                            <h3>Services</h3>
                            <div class="services-list ">
                                <div class="service-item p-3">
                                    <a >Service 1</a>
                                </div>
                                <div class="service-item mb-3">
                                    <a>Service 2</a>
                                </div>
                                <div class="service-item mb-3">
                                    <a >Service 3</a>
                                </div>
                                <div class="service-item mb-3">
                                    <a >Service 4</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="">
                            <h3>
                                Contacts
                            </h3>


                            <p>
                                Open 24/7
                            </p>


                            <p>
                                Phone Number
                            </p>


                            <p>
                                sales@fastguardservice.com

                            </p>


                            <p>
                                925 S 21 ave , Hollywood, FL, United States, Florida
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- end info_section -->


    <!-- footer section -->

    <!-- footer section -->

    <!-- jQery -->
    <script src="{{ asset('home/js/jquery-3.4.1.min.js') }}"></script>
    <!-- bootstrap js -->
    <script src="{{ asset('home/js/bootstrap.js') }}"></script>
    <!-- nice select -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"
        integrity="sha256-Zr3vByTlMGQhvMfgkQ5BtWRSKBGa2QlspKYJnkjZTmo=" crossorigin="anonymous"></script>
    <!-- owl slider -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <!-- datepicker -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
    <!-- custom js -->
    <script src="{{ asset('home/js/custom.js') }}"></script>


</body>

</html>
