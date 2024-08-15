@extends('layouts.admin')

@section('title', 'Edit Service')

@section('main')
<div id="layoutSidenav_content">
    <main>
        <div class="container-fluid px-4">
            <h1>Edit Service</h1>
            <form action="{{ route('services.update', $service) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="mb-3">
                    <label for="name" class="form-label">Service Name</label>
                    <input type="text" class="form-control" id="name" name="name" value="{{ $service->name }}" required>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" name="description" rows="3" required>{{ $service->description }}</textarea>
                </div>
                <button type="submit" class="btn btn-primary">Update Service</button>
            </form>
        </div>
    </main>
</div>
@endsection
