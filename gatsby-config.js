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
        spaceId: `wgxsuk9hdesc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'fyB8tdIXo5q6XGSvfVgbbetvwBGX9JLp1wx2-_obIvw',
      },
    },
  ],
}
































