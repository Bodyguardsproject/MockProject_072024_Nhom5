@extends('layouts.admin')

@section('title', 'Add Service')

@section('main')
<div id="layoutSidenav_content">
    <main>
        <div class="container-fluid px-4">
            <h1>Add Service</h1>
            <form action="{{ route('services.store') }}" method="POST">
                @csrf
                <div class="mb-3">
                    <label for="name" class="form-label">Service Name</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Add Service</button>
            </form>
        </div>
    </main>
</div>
@endsection
