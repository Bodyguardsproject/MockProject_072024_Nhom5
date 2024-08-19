<?php

    //kết nối database
    include "connect.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Feedback</title>
    <style>
        .star-rating {
            direction: rtl;
            display: inline-flex;
        }
        .star-rating input[type="radio"] {
            display: none;
        }
        .star-rating label {
            font-size: 2em;
            color: #ccc;
            cursor: pointer;
        }
        .star-rating input[type="radio"]:checked ~ label {
            color: gold;
        }
        .star-rating label:hover,
        .star-rating label:hover ~ label {
            color: gold;
        }
    </style>
</head>
<body>
    <?php
        if(isset($_POST['add']))
        {
            $rating = $_POST['rating'];
            $comments = $_POST['comments'];
            $conn -> query("INSERT INTO `tbl_feedback_service_sg`(`rating`, `comments`) VALUES ($rating,'$comments')");
            $conn->close();
        }
    ?>
    <h2>Leave Your Feedback</h2>
    <form action="feedbacks_user.php" method="POST">
        <label for="rating">Rate your experience:</label><br>
        <div class="star-rating">
            <input type="radio" id="star5" name="rating" value="5"><label for="star5">★</label>
            <input type="radio" id="star4" name="rating" value="4"><label for="star4">★</label>
            <input type="radio" id="star3" name="rating" value="3"><label for="star3">★</label>
            <input type="radio" id="star2" name="rating" value="2"><label for="star2">★</label>
            <input type="radio" id="star1" name="rating" value="1"><label for="star1">★</label>
        </div>
        <br><br>
        <label for="comments">Your Comments:</label><br>
        <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Write your comments here..."></textarea>
        <br><br>
        <button type="submit" name='add'>Send Feedback</button>
    </form>
</body>
</html>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $rating = isset($_POST['rating']) ? $_POST['rating'] : 'No rating';
    $comments = isset($_POST['comments']) ? htmlspecialchars($_POST['comments']) : 'No comments';

    // Here, you can save the feedback to a database or send it via email
    // For demonstration, we'll just display the feedback

    echo "<h2>Thank you for your feedback!</h2>";
    echo "<p>Rating: $rating stars</p>";
    echo "<p>Comments: $comments</p>";
} else {
    echo "<p>No feedback received.</p>";
}
?>
