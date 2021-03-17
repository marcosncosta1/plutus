'use strict';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#283346',
      lightgray: '#eeeeee',
      gray: '#dfdfdf',
      darkgray: '#b7b7b7',
      overlay: 'rgba(10,10,10,0.4)',
      white: '#ffffff',
      blue: '#4c40e5',
      lightblue: '#3087d8',
      grayblue: '#f5f9fc',
      purple: '#4c41e5',
      red: '#de4c51',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '34px',
      '3xl': '46px',
    },
    borderRadius: {
      sm: '5px',
      DEFAULT: '10px',
      lg: '25px',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      DEFAULT: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      lg: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.04)',
      xl: '0 25px 50px -12px rgba(0,0,0,0.25)',
    },
    extend: {
      gridTemplateRows: {
        main: 'auto minmax(0, 1fr) auto',
        'contract-setup': 'auto auto minmax(0, 1fr)',
      },
      gridTemplateColumns: {
        'contract-setup': '1fr 24rem 1fr',
      },
      spacing: {
        '5pc': '5%',
      },
      width: {
        'sm': '375px',
        'md': '640px',
        'lg': '768px',
      },
      boxShadow: {
        deep: "0 2.5px 5px 0 rgba(0, 0, 0, 0.22)",
        "current-step": "0 25px 50px -12px rgb(0 0 0 / 25%)",
      },
      height: {
        'contract-card': '500px',
      },
      maxWidth: {
        'sm': '375px',
        'md': '640px',
        'lg': '768px',
        'contract-card': '360px',
      },
      minWidth: {
        'button-min': '120px',
      },
    },
  },
  variants: {
    // note 'disabled' goes last so that it takes priority
    backgroundColor: ['hover', 'disabled'],
    backgroundImage: ['hover', 'disabled'],
    boxShadow: ['hover', 'disabled'],
    cursor: ['hover', 'disabled'],
    spacing: ['first', 'last'],
    margin: ['first', 'last'],
    textColor: ['hover', 'disabled'],
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    container: false,
    space: true,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
    accessibility: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundColor: true,
    backgroundImage: true,
    gradientColorStops: true,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: true,
    borderOpacity: false,
    borderRadius: true,
    borderStyle: false,
    borderWidth: true,
    boxSizing: false,
    cursor: true,
    display: true,
    flexDirection: true,
    flexWrap: false,
    placeItems: false,
    placeContent: false,
    placeSelf: false,
    alignItems: true,
    alignContent: false,
    alignSelf: false,
    justifyItems: false,
    justifyContent: true,
    justifySelf: false,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    order: false,
    float: true,
    clear: false,
    fontFamily: false,
    fontWeight: true,
    height: true,
    lineHeight: true,
    listStylePosition: false,
    listStyleType: false,
    maxHeight: true,
    maxWidth: true,
    minHeight: false,
    minWidth: true,
    objectFit: false,
    objectPosition: false,
    opacity: true,
    outline: true,
    overflow: true,
    overscrollBehavior: false,
    placeholderColor: false,
    placeholderOpacity: false,
    pointerEvents: true,
    position: true,
    inset: true,
    resize: false,
    boxShadow: true,
    ringWidth: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringColor: false,
    ringOpacity: false,
    fill: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textAlign: true,
    textOpacity: false,
    textOverflow: false,
    fontStyle: false,
    textTransform: true,
    textDecoration: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    userSelect: false,
    verticalAlign: false,
    visibility: true,
    whitespace: true,
    wordBreak: false,
    width: true,
    zIndex: true,
    gap: true,
    gridAutoFlow: false,
    gridTemplateColumns: true,
    gridAutoColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: true,
    gridAutoRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    transform: true,
    transformOrigin: false,
    scale: false,
    rotate: false,
    translate: true,
    skew: false,
    transitionProperty: true,
    transitionTimingFunction: false,
    transitionDuration: true,
    transitionDelay: false,
    animation: false,
  },
};
