const path = require('path');
exports.createPages = async ({graphql,actions}) => {
const {createPage} = actions;
const result = await graphql(`
    {
    products: allContentfulProduct {
        nodes {
          slug
          price
          info{
              info
          }
          title
          image{
              fluid{
                  src
              }
          }
        }
      }
    }
`)
console.log('-result------------',result)
result.data.products.nodes.forEach((data) => {
    createPage({
        path: `/products/${data.slug}`,
        component: path.resolve('./src/templates/productTemplate.js'),
        context: {
            data: data
        }
    })
})

}







