export default defineAppConfig({
  ui: {
    colors: {
      primary: 'myblue',
      neutral: 'zinc',
      secondary: 'mygreen',
    },
    card: {
      slots: {
        root: 'rounded shadow-md dark:shadow-none',
      },
    },
  },
})
