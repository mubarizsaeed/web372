function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
         // Append one character at a time until the full text is displayed.
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
     // Start the typing effect.
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    loadXMLContent();
});
// Function to load XML content using an AJAX request.

function loadXMLContent() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            processXML(this);
        }
    };
     // Initialize the request to get 'aboutme.xml', and make it asynchronous.
    xhr.open('GET', 'aboutme.xml', true);
    // Send the AJAX request to the server.
    xhr.send();
}

function processXML(xhr) {
    var xmlDoc = xhr.responseXML;
    var imageElement = xmlDoc.getElementsByTagName('image')[0];
      // Extract the 'image' and 'text' elements from the XML.
    var src = imageElement.getElementsByTagName('src')[0].childNodes[0].nodeValue;
    var alt = imageElement.getElementsByTagName('alt')[0].childNodes[0].nodeValue;
    var animationClass = imageElement.getElementsByTagName('animationClass')[0].childNodes[0].nodeValue;
     // Find the '.content' div where the content will be added.
    var textContent = xmlDoc.getElementsByTagName('text')[0].childNodes[0].nodeValue;
    var contentDiv = document.querySelector('.content');

    // Create and append the butterfly image
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add(animationClass, 'butterfly-image'); // Added 'butterfly-image' class for specific styling
    contentDiv.appendChild(img);

    // Create and setup the animated text
    var animatedText = document.createElement('div');
    animatedText.classList.add('animated-text', 'header-text'); // Added 'header-text' for specific styling
    contentDiv.insertBefore(animatedText, img); // Inserting text before the image

    // Call the type effect function
    typeEffect(animatedText, textContent, 100);
}