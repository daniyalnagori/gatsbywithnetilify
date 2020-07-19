/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    name: "daniyal",
    age: 24,
    address: "defence",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1rbu995a7lfy`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'u3y8BrM-29UJN8itvGTGcu7pVQWr_N6u3k35f7h8RzE',
      },
    },
  ],
}
































