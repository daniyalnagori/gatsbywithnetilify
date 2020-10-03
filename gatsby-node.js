// const path = require('path');
// exports.createPages = async ({graphql,actions}) => {
// const {createPage} = actions;
// const result = await graphql(`
//     {
//     products: allContentfulProduct {
//         nodes {
//           slug
//           price
//           info{
//               info
//           }
//           title
//           image{
//               fluid{
//                   src
//               }
//           }
//         }
//       }
      

//       students:  allContentfulStudent {
//           nodes {
//             username
//             rollnumber
//           }
//         }
      

//     }


// `)
// console.log('-result------------',result.data.students)
// result.data.products.nodes.forEach((data) => {
//     createPage({
//         path: `/products/${data.slug}`,
//         component: path.resolve('./src/templates/productTemplate.js'),
//         context: {
//             data: data
//         }
//     })
// })

// }


// exports.createPages = async ({graphql,actions}) => {
//     const {createPage} = actions;
//     const result = await graphql(`
//     {
//         allContentfulService {
//           nodes {
//             title
//           }
//         }
//       }
//     `)
//     console.log('result',result)
// }


// graphql
// exports.createPages = async ({graphql,actions}) => {
//     const {createPage} = actions;
//     const result = await graphql(`
//     {
//         allContentfulService {
//           nodes {
//             title
//           }
//         }
//       }
//     `)
//     console.log('resulrsss',result.data.allContentfulService.nodes);
//     result.data.allContentfulService.nodes.forEach((data) => {
//         createPage({
//             path: `/products/${data.title}`,
//             component: path.resolve('./src/templates/productTemplate.js'),
//             context: {
//                 data: data
//             }
//         })
//     })
// }




const path = require('path');
exports.createPages = async ({graphql, actions}) => {
    const {createPage} =  actions;
    const result = await graphql (`
    {

        allContentfulService {
        nodes {
          title
          detail {
            json
          }
        }
      }
    }
    `)
      console.log('result',result);
      result.data.allContentfulService.nodes.forEach((data) => {
        console.log('data',data);

        createPage({
            path: `/products/${data.title}`,
            component: path.resolve('./src/templates/hello.js'),
            context: {
                data: data
            }
        })
      })
}



















