// Utility to initialize select2 safely
export const initSelect2 = () => {
  // Wait for both jQuery and select2 to be available
  const waitForDependencies = (callback) => {
    if (typeof window.jQuery !== 'undefined' && 
        typeof window.jQuery.fn.select2 !== 'undefined') {
      callback();
    } else {
      setTimeout(() => waitForDependencies(callback), 100);
    }
  };

  waitForDependencies(() => {
    // Initialize select2 on elements with mySelect class
    if (window.jQuery('.mySelect').length) {
      window.jQuery('.mySelect').select2({
        placeholder: 'Select an option',
        width: '100%',
        dropdownAutoWidth: true,
        minimumResultsForSearch: Infinity
      });
    }
  });
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initSelect2);
