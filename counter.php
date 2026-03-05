<?php
session_start();

// Google App Script Web App URL
// $url = "https://script.google.com/macros/s/AKfycbxsJWgBNT1agxWG6jedT1NAsnZFht4UkaevkFh8HuEGX8wFDP7sl7Pp5j6Z8OyH3APe/exec";
$url = "https://script.google.com/macros/library/d/1XscoU5G8rgZ9NsqDJbP_4OQ30QHeLST6rrFiKPDxBdEaMCXxya4OkC65/1";


// Check if visitor has already visited in this session
if(!isset($_SESSION['hasVisited'])){
    // Increment the counter by visiting the script URL
    file_get_contents($url);
    $_SESSION['hasVisited'] = "yes";
}

// Optional: Display the count (requires reading from sheet,
// which is more complex; usually, you just record in sheets
// and display a local text file instead)
echo "Thank you for visiting!";
//

?>