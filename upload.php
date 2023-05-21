<?php
if ($_FILES["image"]["error"] == UPLOAD_ERR_OK) {
    $filename = $_FILES["image"]["name"];
    move_uploaded_file($_FILES["image"]["tmp_name"], "uploads/" . $filename);
}
header("Location: gallery.html");
exit;
?>
