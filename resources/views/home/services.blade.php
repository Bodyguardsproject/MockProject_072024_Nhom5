@extends('layouts.home')
@section('title','Home')
@section('welcome')
<div id="layoutSidenav_content">
    <section class="services_section">
        <div class="container">
            <div class="row">
                @foreach($services as $service)
                    <div class="col-md-6">
                        <div class="service_box">
                            <div class="service_image">
                                <img src="{{ asset('storage/images/' . $service->image) }}" alt="{{ $service->name }}">
                            </div>
                            <div class="service_content">
                                <h3>{{ $service->name }}</h3>
                                <p>{{ $service->description }}</p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
</div>
@endsection
