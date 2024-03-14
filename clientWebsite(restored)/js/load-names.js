// Function to load image names from a JSON file and insert them into the DOM
function loadImageNames() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                var imageBoxes = document.querySelectorAll('.image-box');

                data.forEach(function(item, index) {
                    if (imageBoxes[index]) { // Check if the element exists
                        imageBoxes[index].querySelector('h6').textContent = item.name;
                    }
                });
            } else {
                console.error('Error loading JSON');
            }
        }
    };
    xhr.open('GET', 'images-names.json', true);
    xhr.send();
}
