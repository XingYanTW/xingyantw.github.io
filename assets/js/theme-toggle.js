/**
 * Theme Toggle Functionality
 * Handles switching between light and dark modes and persisting the preference.
 */

/**
 * Safely retrieves an item from localStorage.
 * Handles cases where localStorage might be disabled or inaccessible.
 * @param {string} key - The key to retrieve.
 * @returns {string|null} The value or null if not found/error.
 */
const getStoredTheme = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn('LocalStorage access denied or not supported:', e);
    return null;
  }
};

/**
 * Safely sets an item in localStorage.
 * @param {string} key - The key to set.
 * @param {string} value - The value to set.
 */
const setStoredTheme = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('Unable to save theme preference:', e);
  }
};

/**
 * Toggles the current theme between 'light' and 'dark'.
 * Updates the DOM attribute and saves the preference.
 */
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  setStoredTheme('theme', newTheme);
};

/**
 * Initializes the theme based on stored preference or system settings.
 * Should be called as early as possible to prevent flash of unstyled content.
 */
const initTheme = () => {
  const savedTheme = getStoredTheme('theme');
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Fallback to system preference if no saved theme
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', systemPreference);
  }
};

// Run initTheme immediately to apply the correct theme before the page renders fully
initTheme();

// Setup event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
    // Add aria-label for accessibility if not present
    if (!toggleButton.getAttribute('aria-label')) {
        toggleButton.setAttribute('aria-label', 'Toggle Dark/Light Mode');
    }
  } else {
    console.debug('Theme toggle button not found on this page.');
  }
});
