export default {
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        tour: 'tours.html',
        about: 'about.html'
      }
    }
  }
}
 