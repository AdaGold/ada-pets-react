
const speciesEmoji = (species) => {
  
  if (species === 'cat') {
    return '\ud83d\udc08';
  }
  else if (species === 'dog') {
    return '\ud83d\udc15';
  }
  else {
    return '\u2753';
  }
};

export default speciesEmoji;