import rgb2hex from 'rgb2hex';
import blendColors from 'utils/blendColors';

export const getNavHoverColor = color => blendColors(rgb2hex(color).hex, '#FFF', 0.93);
export const getButtonHoverColor = color => blendColors(rgb2hex(color).hex, '#000', 0.08);
export const getButtonFocusColor = color => blendColors(rgb2hex(color).hex, '#000', 0.16);
export const getButtonOutline = (color, thickness = '0.2rem') => {
  const newColor = blendColors(rgb2hex(color).hex, '#fff', 0.7);
  return `0 0 0 ${thickness} ${newColor} !important`;
};

export const formatColorValue = (color, defaultColor) => {
  const formattedColor = color ?? defaultColor;

  if (formattedColor.startsWith('rgb') || formattedColor.startsWith('#')) {
    return formattedColor;
  }

  return `#${formattedColor}`;
};
