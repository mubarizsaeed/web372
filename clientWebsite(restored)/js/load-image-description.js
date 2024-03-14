$(document).ready(function() {
    $('.images').on('click', '.expand-text', function(event) {
        const $imageBox = $(this).closest('.image-box');
        const imageName = $imageBox.data('name');

        // Check if the image is being expanded or collapsed
        if ($imageBox.hasClass('fullscreen')) {
            // Load and display the description when the image is expanded
            fetch('images-descriptions.json')
                .then(response => response.json())
                .then(data => {
                    const imageInfo = data.find(item => item.name === imageName);
                    if (imageInfo) {
                        const descriptionDiv = $('<div/>', {
                            class: 'image-description',
                            text: imageInfo.description
                        });
                        $imageBox.append(descriptionDiv);
                    }
                })
                .catch(error => console.error('Error loading image descriptions:', error));
        } else {
            // Remove the description when the image is collapsed
            $imageBox.find('.image-description').remove();
        }

        // Toggle fullscreen class and other UI changes
        $imageBox.toggleClass('fullscreen');
        $imageBox.find('.add-to-gallery-btn, h6').toggle();
        event.stopPropagation();
    });
});
