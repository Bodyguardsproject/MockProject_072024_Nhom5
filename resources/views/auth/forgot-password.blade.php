<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <link rel="icon" type="image/png" href="{{ asset('site/images/icons/favicon.ico') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/vendor/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/vendor/animate/animate.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/vendor/css-hamburgers/hamburgers.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/vendor/select2/select2.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/css/util.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('site/css/main.css') }}">
    <style>
        .custom-btn {
            padding: 8px 16px;
            font-size: 14px;
            border-radius: 20px;
            text-align: center;
            white-space: nowrap;
            display: inline-block;
            border: none;
            box-shadow: none;
        }

        .btn-return {
            background-color: #f2f2f2;
            color: #333;
            border: 1px solid #ccc;
        }

        .btn-reset {
            background-color: #ffc107;
            color: white;
        }

        .button-group {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .button-group a,
        .button-group button {
            flex: 1;
            margin: 0 5px;
        }

        .button-group button {
            border: none;
        }
    </style>
</head>

<body>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">

                <form class="login100-form validate-form" method="POST" action="{{ route('password.email') }}">
                    @csrf
                    @if (session('status'))
                    <div class="status-message">
                        {{ session('status') }}
                    </div>
                @endif

                <!-- Display validation errors -->
                @error('email')
                    <div class="status-message">
                        {{ $message }}
                    </div>
                @enderror
                    <span class="login100-form-title">
                        Reset your password
                    </span>
                    <span class="login100-form-title-phu">
                        If the account exists, we will email you instructions to reset the password.
                    </span>

                    <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input class="input100" type="email" name="email" placeholder="Email" value="{{ old('email') }}" required autofocus>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="button-group">
                        <a class="custom-btn btn-return" href="{{ route('login') }}">
                            Return to Login
                        </a>
                        <button class="custom-btn btn-reset" type="submit">
                            {{ __('Reset Password ') }}
                        </button>
                    </div>

                </form>
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="{{ asset('site/images/1.png') }}" alt="IMG">
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('site/vendor/jquery/jquery-3.2.1.min.js') }}"></script>
    <script src="{{ asset('site/vendor/bootstrap/js/popper.js') }}"></script>
    <script src="{{ asset('site/vendor/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('site/vendor/select2/select2.min.js') }}"></script>
    <script src="{{ asset('site/vendor/tilt/tilt.jquery.min.js') }}"></script>

    <script>
        $('.js-tilt').tilt({
            scale: 1.1
        });
    </script>
    <script src="{{ asset('site/js/main.js') }}"></script>
</body>

</html>
