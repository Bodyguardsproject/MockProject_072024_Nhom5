@extends('layouts.admin')

@section('title', 'Services')

@section('main')
<div id="layoutSidenav_content">
    <main>
        <div class="container-fluid px-4">
            <h1>Services</h1>
            <div class="add-service-btn">
                <a href="{{ route('services.create') }}" class="btn btn-primary">
                    Add Services
                    <i class="fas fa-plus"></i>
                </a>
            </div>
            <div class="card mb-4">
                <div class="card-body">
                    @if(session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Image</th> <!-- Cột ảnh -->
                                <th class="action-column">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($services as $service)
                                <tr>
                                    <td>{{ $service->name }}</td>
                                    <td>{{ $service->description }}</td>
                                    <td>
                                        @if($service->image)
                                            <img src="{{ asset('storage/images/' . $service->image) }}" alt="{{ $service->name }}" style="width: 100px;">
                                        @else
                                            No Image
                                        @endif
                                    </td>
                                    <td class="table-action-buttons">
                                        <a href="{{ route('services.edit', $service) }}" class="btn btn-edit">Edit</a>
                                        <form action="{{ route('services.destroy', $service) }}" method="POST" style="display: inline;">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-delete">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</div>
@endsection
