const bell = document.getElementById('svgBell');

// bell.addEventListener('click', function() {
//     // Play a sound when the SVG is clicked
//     const audio = new Audio('./christmas-sounds.mp3');
//     audio.play();
//     });

function handleBellAction() {
    // Your code here to ring the bell or perform any action
    const audio = new Audio('./christmas-sounds.mp3');
    audio.play();


    fetch('https://profile-counter.glitch.me/popisgod/count.svg') // Replace with your API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response; // Returning the response object without parsing
        })
        .then(response => {
            console.log('Data fetched:', response);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}