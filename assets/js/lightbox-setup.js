document.addEventListener("DOMContentLoaded", function() {
  // Select all images within the post content
  const images = document.querySelectorAll('.post-content img');
  
  images.forEach(img => {
    // Skip if the image is already wrapped in an anchor tag
    if (img.parentElement.tagName === 'A') {
      return;
    }

    // Create the anchor element
    const anchor = document.createElement('a');
    anchor.href = img.src;
    anchor.setAttribute('data-fancybox', 'gallery');
    
    // Set caption from alt text if available
    if (img.alt) {
      anchor.setAttribute('data-caption', img.alt);
    }
    
    // Wrap the image with the anchor
    img.parentNode.insertBefore(anchor, img);
    anchor.appendChild(img);
  });

  // Initialize Fancybox
  // Ensure Fancybox is available globally
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: {
        type: "classic" // Display thumbnails at the bottom
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
          ],
          right: ["slideshow", "thumbs", "close"],
        },
      },
    });
  }
});
