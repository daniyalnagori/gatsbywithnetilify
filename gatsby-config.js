/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
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
        spaceId: `wgxsuk9hdesc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
































