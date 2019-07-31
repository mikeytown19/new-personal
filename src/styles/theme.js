export const theme = {

  colors: {
    white: '#fff',
    black: '#000',
    dark: '#202E39',
    pink: '#FE7BA4',
    orange: '#FE8C6D'

  },
  gradient: {
    default: `linear-gradient(180deg, #FE8C6D 0%, rgba(255, 255, 255, 0) 100%), #FE7BA4`,
    reverse: `linear-gradient(180deg, #FE7BA4 0%, rgba(255, 255, 255, 0) 100%), #FE8C6D`
  },

  mediaSizes: {
    small: {
      selector: 'max-width',
      values: '640px'
    },
    medium: {
      selector: 'max-width',
      values: '1023px'
    },
    mediumUp: {
      selector: 'min-width',
      values: '640px'
    },
    mediumOnly: {
      values: ['640px', '1023px']
    },
    largeUp: {
      selector: 'min-width',
      values: '1024px'
    },
  },

  maxWidth: '1200px',

  fonts: {
    MavenPro: 'Open Sans, sans-serif',
    SourceSansPro: 'Source Sans Pro, sans-serif',
  },

};

