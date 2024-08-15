<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    // Hiển thị danh sách dịch vụ
    public function index()
    {
        $services = Service::all();
        return view('admin.services.index', compact('services'));
    }

    // Hiển thị form thêm dịch vụ
    public function create()
    {
        return view('admin.services.create');
    }

    // Lưu dịch vụ mới
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        Service::create($request->all());
        return redirect()->route('services.index')->with('success', 'Service added successfully.');
    }

    // Hiển thị form chỉnh sửa dịch vụ
    public function edit(Service $service)
    {
        return view('admin.services.edit', compact('service'));
    }

    // Cập nhật dịch vụ
    public function update(Request $request, Service $service)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $service->update($request->all());
        return redirect()->route('services.index')->with('success', 'Service updated successfully.');
    }

    // Xóa dịch vụ
    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->route('services.index')->with('success', 'Service deleted successfully.');
    }
}
