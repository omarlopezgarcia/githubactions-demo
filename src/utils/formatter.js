function capitalize(text) {
    if (typeof text !== 'string') throw new Error('Input must be a string');
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
  }
  
  module.exports = { capitalize, formatCurrency };
  