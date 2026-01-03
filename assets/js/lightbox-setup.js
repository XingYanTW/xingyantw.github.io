/**
 * Lightbox Setup Script
 * Automatically wraps images in post content with anchor tags for Fancybox
 * and initializes the Fancybox library.
 */

/**
 * Wraps images within the post content with anchor tags to enable lightbox functionality.
 * Skips images that are already wrapped in anchor tags.
 */
const setupLightboxImages = () => {
  try {
    // Select all images within the post content
    const images = document.querySelectorAll('.post-content img');
    
    if (images.length === 0) {
      return;
    }

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
      // Insert anchor before image, then move image inside anchor
      if (img.parentNode) {
          img.parentNode.insertBefore(anchor, img);
          anchor.appendChild(img);
      }
    });
  } catch (error) {
    console.error('Error setting up lightbox images:', error);
  }
};

/**
 * Initializes the Fancybox library with custom settings.
 * Checks if Fancybox is available before initialization.
 */
const initFancybox = () => {
  // Ensure Fancybox is available globally
  if (typeof Fancybox !== 'undefined') {
    try {
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
    } catch (error) {
      console.error('Error initializing Fancybox:', error);
    }
  } else {
    console.warn('Fancybox library not found. Lightbox functionality will be disabled.');
  }
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  setupLightboxImages();
  initFancybox();
});
