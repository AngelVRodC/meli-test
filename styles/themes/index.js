const defaultTheme = {
  colors: {
    primary: '#FFF159',
    secondary: '#EEEEEE',
  },
  assets: {
    meliLogo: 'https://i.ibb.co/4TVj4Pj/Logo-ML.png',
    searchIcon: 'https://i.ibb.co/hWLDGgX/ic-Search.png'
  },
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

export default defaultTheme;