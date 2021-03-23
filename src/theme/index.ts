const theme = {
  fonts: {
    regular: "Open Sans",
  },

  colors: {
    primary: "rgb(241, 168, 26)",
    white: "#ffffff",
    grey: "#ededed",
    red: "#ff0000",
  },
  fontSizes: {
    base: "16px",
    caption: "11px",
    h1: { lg: "48px", md: "34px", xs: "24px" },
    h2: { lg: "34px", md: "24px", xs: "20px" },
    button: "14px",
    formGroupLabel: "14px",
  },
  ruler: Array.from({ length: 10 }, (_e, i) => i * 4),
  dimensions: {
    inputHeight: "44px",
    buttonHeight: "44px",
    button: {
      default: {
        height: "44px",
        padding: "0 25px",
      },
    },
  },
  breakPoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  borderRadius: {
    default: "2px",
    large: "8px",
    button: "4px",
    input: "2px",
  },
};

export default theme;
