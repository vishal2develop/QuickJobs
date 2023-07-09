// Function to check if a given URL is an image URL
export const checkImageURL = (url) => {
  // If the URL is empty or undefined, return false
  if (!url) return false;
  else {
    // Regular expression pattern to match valid image URLs
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );

    // Test the URL against the pattern and return the result
    return pattern.test(url);
  }
};
