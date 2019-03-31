import colorString from 'color-string';

export const isColorValid = (color) => {
  const isValid = !!colorString.get(color);

  if (!isValid) {
    console.warn(`The color ${color} it's not a valid color, please check your input.`);
  }

  return isValid;
};
