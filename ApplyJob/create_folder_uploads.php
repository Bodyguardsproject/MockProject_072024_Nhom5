<?php
    $target_dir = "uploads/"; // Đường dẫn tới thư mục cần tạo

    // Kiểm tra xem thư mục có tồn tại hay không
    if (!is_dir($target_dir)) {
        // Nếu thư mục không tồn tại, tạo mới với quyền 0777 (đọc, ghi, thực thi cho tất cả người dùng)
        if (mkdir($target_dir, 0777, true)) {
            echo "Thư mục '$target_dir' đã được tạo thành công.";
        } else {
            die("Không thể tạo thư mục '$target_dir'.");
        }
    } else {
        echo "Thư mục '$target_dir' đã tồn tại.";
    }
?>    