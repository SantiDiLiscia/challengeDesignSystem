const mediaQueries = {
  mobile: '450px',
  tablet: '1100px',
};

const palette = {
  black100: "#000000",
  black60: "#666666",
  black20: "#CCCCCC",
  black10: "#999999",
  grey20: "#F2F2F2",
  white100: "#FFFFFF",
  galiciaPrimary100: "#FA6400",
  error100: "#F9E7E7",
  error10: "#C51111",
};

const fontWeights = {
  semiBold: 600,
  regular: 400,
};

const fontSizes = {
  fs_small: "0.75rem",
  fs_normal: "1rem",
  fs_big: "1.5rem",
};

const baseTheme = {
  ...mediaQueries, 
  ...palette,
  ...fontWeights, 
  ...fontSizes, 
  lineHeight: "16px",
  semiBold: 600,
}

export const blueTheme = {
  primaryColor: "#5D2ECA",
  primaryColor_dark: "#411f8f",
  borderRadius: "8px",
  ...baseTheme,
};

export const orangeTheme = {
  primaryColor: palette.galiciaPrimary100,
  primaryColor_dark: "#b34700",
  borderRadius: "24px",
  ...baseTheme,
};

