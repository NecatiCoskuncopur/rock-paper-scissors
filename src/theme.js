import { createGlobalStyle } from 'styled-components';

export const colors = {
  blue: '#0D31E3',
  butteredRum: '#A46E0A',
  cello: '#1F3756',
  ceriseRed: '#DC2E4E',
  ceruleanBlue: '#2A46C0',
  dark: '#000000',
  fiord: '#3B4363',
  gallery: '#EFEFEF',
  gamboge: '#EC9E0E',
  gullGray: '#97A2B4',
  haiti: '#141539',
  main: '#FFFFFF',
  paleSky: '#606E85',
  roofTerracotta: '#A11B34',
  royalBlue: '#4865F4',
};

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    &:focus {
        outline: none
    }
};
body {
  background: radial-gradient(circle,${colors.cello},${colors.haiti});
  color: ${colors.main};
  font-family: 'Barlow Semi Condensed', sans-serif;
}
`;

export const sizes = {
  widescreen: 1440,
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 640,
  mini: 425,
};

export const device = {
  widescreen: '(max-width: 1440px)',
  desktop: '(max-width: 1280px)',
  laptop: '(max-width: 1024px)',
  tablet: '(max-width: 768px)',
  phone: '(max-width: 640px)',
  mini: '(max-width: 425px)',
};
