document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ZPsLj3qCSzIfuaoLHbTlpgfq7nGgeQcF7kSsaqiS'; // Use your actual Freesound API key
    const audioObjects = {};
    const container = document.querySelector('body'); // Use a more specific container if possible
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('sound-btn')) {
            const box = event.target.closest('.image-box');
            const soundId = box.getAttribute('data-sound-id');
            let audio = audioObjects[soundId] || new Audio();

            if (!audio.src) { // If this sound hasn't been fetched yet
                fetch(`https://freesound.org/apiv2/sounds/${soundId}/?token=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        audio.src = data.previews['preview-hq-mp3'];
                        audio.play();
                        audioObjects[soundId] = audio; // Cache this Audio object
                        event.target.textContent = 'Stop Sound';
                    })
                    .catch(error => console.error('Error fetching sound:', error));
            } else if (audio.paused) {
                audio.play();
                event.target.textContent = 'Stop Sound';
            } else {
                audio.pause();
                audio.currentTime = 0;
                event.target.textContent = 'Play Sound';
            }
        }
    });
});
