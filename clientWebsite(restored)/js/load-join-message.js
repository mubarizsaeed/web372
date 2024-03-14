// load-join-message.js
$(document).ready(function() {
    // Load the join-message.html content into the designated div on the login page.
    // The .load() method 
    $("#join-message-container").load("join-message.html", function(response, status, xhr) {
        // Check if the load was successful
        if(status == "error") {
            console.log("Error loading the HTML: " + xhr.status + " " + xhr.statusText);
        } else {
            // After the HTML content is loaded, it's now visible in the #join-message-container.
            // fadeIn jQuery effect for smooth transition of the loaded content.
            $(this).hide().fadeIn(1000);

            // Start the typewriter effect for the text "Join Riley Creates!".
            var text = "Join Riley Creates!";
            var index = 0;
            
            function typeWriter() {
                if (index < text.length) {
                    $('#animated-text').append(text.charAt(index));
                    index++;
                    setTimeout(typeWriter, 100); // Typing speed in milliseconds
                }
            }

            // Initiate the typewriter effect.
            typeWriter();
        }
    });
});
