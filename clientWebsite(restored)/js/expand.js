$(document).ready(function() {
    function handleMouseEvents() {
        $('.images').on('mouseenter', '.image-box', function() {
            $(this).find('.expand-text').show();
        }).on('mouseleave', '.image-box', function() {
            $(this).find('.expand-text').hide();
        });
    }

    function handleExpandTextClick() {
        $('.images').on('click', '.expand-text', function(event) {
            const $imageBox = $(this).closest('.image-box');
            const imageName = $imageBox.data('name');

            $imageBox.toggleClass('fullscreen');
            if ($imageBox.hasClass('fullscreen')) {
                $.ajax({
                    url: 'images-descriptions.json',
                    dataType: 'json',
                    success: function(data) {
                        const imageInfo = data.find(item => item.name === imageName);
                        if (imageInfo && !$imageBox.find('.image-description').length) {
                            const descriptionDiv = $('<div/>', {
                                class: 'image-description',
                                text: imageInfo.description
                            }).show(); // Ensure the description is shown
                            $imageBox.append(descriptionDiv);
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Error loading JSON:', error);
                    }
                });
                $imageBox.find('.add-to-gallery-btn').hide();
                $imageBox.find('h6').hide();
            } else {
                $imageBox.find('.image-description').remove();
                $imageBox.find('.add-to-gallery-btn').show();
                $imageBox.find('h6').show();
            }
            event.stopPropagation();
        });
    }

    handleMouseEvents();
    handleExpandTextClick();

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                $(mutation.addedNodes).filter('.image-box').each(function() {
                    const $expandText = $('<div/>', {
                        class: 'expand-text',
                        text: '\u2921'
                    }).hide();
                    $(this).append($expandText);
                });
            }
        });
    });

    observer.observe($('.images')[0], {
        childList: true,
        subtree: true
    });
});
