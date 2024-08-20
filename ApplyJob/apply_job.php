<?php

    //kết nối database
    include "connect.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application Form</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .application-form {
            width: 400px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .application-form h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .application-form label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        .application-form input[type="text"],
        .application-form input[type="email"],
        .application-form input[type="tel"],
        .application-form input[type="file"],
        .application-form textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .application-form input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .application-form input[type="submit"]:hover {
            background-color: #45a049;
        }
        .mandatory {
            color: red;
        }
    </style>
</head>
<body>
<?php
    // Kết nối database
    include "connect.php";

    if(isset($_POST['add'])) {
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $street_address = $_POST['street_address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $country = $_POST['country'];
        $zip_code = $_POST['zip_code'];

        // Xử lý file upload
        $cv = $_FILES['cv_url'];
        $target_dir = "uploads/"; // Thư mục lưu trữ file

        // Tạo thư mục nếu chưa tồn tại
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        // Tạo tên tệp tin duy nhất để tránh ghi đè
        $cv_name = time() . "_" . basename($cv["name"]);
        $target_file = $target_dir . $cv_name;

        // Kiểm tra và di chuyển file
        if (move_uploaded_file($cv["tmp_name"], $target_file)) {
            $cv_url = $target_file; // Đường dẫn file sau khi đã di chuyển thành công
        } else {
            die("Sorry, there was an error uploading your file.");
        }

        // Chèn dữ liệu vào cơ sở dữ liệu
        $sql = "INSERT INTO `tbl_apply` (`email`, `cv_url`, `first_name`, `last_name`, `street_address`, `city`, `country`, `state`, `zip_code`, `phone`) VALUES 
        ('$email', '$cv_url', '$first_name', '$last_name', '$street_address', '$city', '$country', '$state', '$zip_code', '$phone')";

        if ($conn->query($sql) === TRUE) {
            // Chuyển hướng tới trang confirmation.php sau khi thành công
            header("Location: confirmation.php");
            exit(); // Ngăn chặn việc tiếp tục thực thi mã sau khi chuyển hướng
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    }
?>
<div class="application-form">
    <h2>Job Application Form</h2>
    <form action="apply_job.php" method="POST" enctype="multipart/form-data">
        <label for="first_name">First name <span class="mandatory">*</span></label>
        <input type="text" id="fullname" name="first_name" required>

        <label for="last_name">Last Name <span class="mandatory">*</span></label>
        <input type="text" id="last_name" name="last_name" required>

        <label for="contact">Contact Details (Phone & Email) <span class="mandatory">*</span></label>
        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required>
        <input type="email" id="email" name="email" placeholder="Email Address" required>

        <label for="street_address">Street address<span class="mandatory">*</span></label>
        <input type="text" id="street_address" name="street_address" required>

        <label for="city">City <span class="mandatory">*</span></label>
        <input type="text" id="city" name="city" required>

        <label for="state">State<span class="mandatory">*</span></label>
        <input type="text" id="state" name="state" required>

        <label for="country">Country<span class="mandatory">*</span></label>
        <input type="text" id="country" name="country" required>

        <label for="zip_code">Zipe code<span class="mandatory">*</span></label>
        <input type="text" id="zip_code" name="zip_code" required>

        <label for="cv_url">Upload CV <span class="mandatory">*</span></label>
        <input type="file" id="cv_url" name="cv_url" accept=".pdf, .docx" required>

        <input type="submit" value="Submit" name ='add'>
    </form>
</div>
</body>
</html>
