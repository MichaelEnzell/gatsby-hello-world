/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `MySweetSite`,
    homeText: 'Home',
    homeLink: '/',
    aboutText: 'About',
    aboutLink: '/about/',
    contactText: 'Contact',
    contactLink: '/contact/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
