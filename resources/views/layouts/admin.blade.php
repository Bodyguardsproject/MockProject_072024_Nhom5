<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Dashboard - SB Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
    <link href="{{ asset('AD1/css/styles.css') }}" rel="stylesheet" />
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
</head>

<body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark">
        <!-- Navbar Brand-->
        <a class="navbar-brand" href="index.html">
            <img src="{{ asset('AD1/logo.PNG') }}" alt="Logo"> <!-- Đặt đường dẫn đến logo của bạn -->

        </a>
        <!-- Sidebar Toggle-->
        <!-- Sidebar Toggle-->
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                class="fas fa-bars"></i></button>
        <!-- Navbar Search-->
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
                <i class="fas fa-search"></i>
                <input class="form-control" type="text" placeholder="Tìm kiếm..." aria-label="Search for..."
                    aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button">Tìm kiếm</button>
            </div>
        </form>
        <!-- Navbar-->
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <button class="logout-button bg-logout">
                <i class="fas fa-sign-out-alt"></i>
                Logout
            </button>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-question-circle fa-fw"></i> <!-- Dấu hỏi -->
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-cog fa-fw"></i> <!-- Cài đặt -->
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-bell fa-fw"></i> <!-- Chuông -->
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link " href="#" x>
                    <i class="fas fa-user fa-fw"></i>

                </a>

            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu ">
                    <div class="nav">


                        <a class="nav-link" href="index.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <a class="nav-link" href="services.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-circle-o-notch"></i></div>
                            Services
                        </a>
                        <a class="nav-link" href="account.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                            Account
                        </a>
                        <a class="nav-link" href="quotes.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-quote-left"></i></div>
                            Quotes
                        </a>
                        <a class="nav-link" href="training.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-bolt"></i></div>
                            Training
                        </a>
                        <a class="nav-link" href="contract.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-file-contract"></i></div>
                            Contract
                        </a>
                        <a class="nav-link" href="feedback.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-comments"></i></div>
                            Feedback
                        </a>
                        <a class="nav-link" href="recruitment.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-briefcase"></i></div>
                            Recruitment
                        </a>
                        <a class="nav-link" href="setting.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-cog"></i></div>
                            Setting
                        </a>


                    </div>
                </div>

            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <h1>Services</h1>
                    <div class="add-service-btn">
                        <button type="button">
                            Add Services
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="card mb-4">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Service 1</td>
                                        <td>Description</td>
                                        <td class="table-action-buttons">
                                            <button class="btn btn-edit">Edit</button>
                                            <button class="btn btn-edit">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Service 2</td>
                                        <td>Description</td>
                                        <td class="table-action-buttons">
                                            <button class="btn btn-edit">Edit</button>
                                            <button class="btn btn-edit">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Service 3</td>
                                        <td>Description</td>
                                        <td class="table-action-buttons">
                                            <button class="btn btn-edit">Edit</button>
                                            <button class="btn btn-edit">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Service 4</td>
                                        <td>Description</td>
                                        <td class="table-action-buttons">
                                            <button class="btn btn-edit">Edit</button>
                                            <button class="btn btn-edit">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>


        </div>
        @yield('main')
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
    <script src="{{ asset('AD1/js/scripts.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
    <script src="{{ asset('AD1/assets/demo/chart-area-demo.js') }}"></script>
    <script src="{{ asset('AD1/assets/demo/chart-bar-demo.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
        crossorigin="anonymous"></script>
    <script src="{{ asset('AD1/js/datatables-simple-demo.js') }}"></script>
</body>

</html>
