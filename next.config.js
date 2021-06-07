// next.config.js
module.exports = {
  images: {
    domains: ['i.ibb.co'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/items',
        permanent: true,
      },
    ]
  },
}