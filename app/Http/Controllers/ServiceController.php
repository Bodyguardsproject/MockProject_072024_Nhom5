<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $service = new Service();
        $service->name = $request->name;
        $service->description = $request->description;

        // Xử lý tải lên ảnh
        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('public/images', $imageName);
            $service->image = $imageName;
        }

        $service->save();
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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $service->name = $request->name;
        $service->description = $request->description;

        // Xử lý cập nhật ảnh
        if ($request->hasFile('image')) {
            if ($service->image) {
                Storage::delete('public/images/' . $service->image);
            }
            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('public/images', $imageName);
            $service->image = $imageName;
        }

        $service->save();
        return redirect()->route('services.index')->with('success', 'Service updated successfully.');
    }

    // Xóa dịch vụ
    public function destroy(Service $service)
    {
        if ($service->image) {
            Storage::delete('public/images/' . $service->image);
        }
        $service->delete();
        return redirect()->route('services.index')->with('success', 'Service deleted successfully.');
    }
}
