// Get all the images
const images = document.querySelectorAll('.image-container img');

// Add click event to display images in full-screen mode
images.forEach(image => {
  image.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <div class="overlay-content">
        <img src="${image.src}" alt="Full Screen Image" style="width: 90%; height: auto; border-radius: 10px;">
        <button class="close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(overlay);

    // Close the overlay when the close button is clicked
    overlay.querySelector('.close-btn').addEventListener('click', () => {
      overlay.remove();
    });
  });
});

// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event to show a message
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default action of the link
    alert("You're already in the Shinex Hub");
  });
});
