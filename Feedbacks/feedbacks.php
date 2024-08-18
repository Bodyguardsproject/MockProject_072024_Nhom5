<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedbacks</title>
    <style>
        .feedback-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .feedback-card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            width: 300px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .feedback-title {
            font-size: 18px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        .feedback-description {
            font-size: 14px;
            margin-bottom: 15px;
        }
        .star-rating {
            color: #ffcc00;
        }
    </style>
</head>
<?php

    //kết nối database
    include "connect.php";

    $sql = "SELECT * FROM tbl_feedback_service_sg";
    $result = mysqLi_query($conn, $sql);
?>
<body>

    <h1>Feedbacks</h1>
    <div class="feedback-grid">
        <?php
        if( mysqLi_num_rows($result) > 0)
        {
            while($row = mysqli_fetch_array($result))
            {
                // Sample array of feedbacks
        $feedbacks = [
            ['title' => $row['id_bodyguard'], 'description' => $row['comments'], 'rating' => $row['rating']],
        ];

        // Phần này để tạo khung
        foreach ($feedbacks as $feedback) {
            echo '<div class="feedback-card">';
            echo '<div class="feedback-title">' . htmlspecialchars($feedback['title']) . '</div>';
            echo '<div class="feedback-description">' . htmlspecialchars($feedback['description']) . '</div>';
            echo '<div class="star-rating">' . str_repeat('★', $feedback['rating']) . str_repeat('☆', 5 - $feedback['rating']) . '</div>';
            echo '</div>';
        }
            }
        }
        ?>
    </div>

</body>
</html>
