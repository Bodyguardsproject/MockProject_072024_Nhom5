<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service; // Đảm bảo import model Service

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng services
        Service::create([
            'name' => 'Dịch vụ bảo vệ sự kiện',
            'description' => 'Cung cấp bảo vệ chuyên nghiệp cho các sự kiện lớn và nhỏ.',
        ]);

        Service::create([
            'name' => 'Dịch vụ bảo vệ doanh nghiệp',
            'description' => 'Đảm bảo an ninh cho các doanh nghiệp với đội ngũ bảo vệ dày dạn kinh nghiệm.',
        ]);

        Service::create([
            'name' => 'Dịch vụ bảo vệ cá nhân',
            'description' => 'Cung cấp dịch vụ bảo vệ cá nhân cho các cá nhân và gia đình.',
        ]);
    }
}
