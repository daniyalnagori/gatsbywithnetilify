// import React from "react"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/Layout";
// const ComponentName = ({ data: { allContentfulProduct } }) => {
//   return (
//     <Layout>
//       <section style={{ display: 'flex', justifyContent: 'space-around' }}>
//         {
//           allContentfulProduct.nodes.map((product) => {
//             console.log('product', product)
//             return (
//               <article key={product.id}>
//                 <h3>{product.title}</h3>
//                 <img src={product.image.fluid.src} alt={product.title} width={200} height={200} />
//                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <span>${product.price}</span>
//                   <Link to={`/products/${product.slug}`}>More Details</Link>
//                 </div>
//               </article>)
//           })
//         }
//       </section>
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     allContentfulProduct {
//       nodes {
//         title
//         slug
//         id
//         price
//         info {
//           info
//         }
//         image {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }
// `

// export default ComponentName













// import React from "react"
// import { graphql,Link } from "gatsby"
// import Layout from "../components/Layout";

// const ComponentName = ({ data:{allContentfulProduct} }) => {
//   console.log(allContentfulProduct)
//   return (
//     <Layout>
//       <section style={{display:'flex',justifyContent:'space-around'}}>
//           {
//             allContentfulProduct.nodes.map((product) => {
//                 return (
//                   <article key={product.id}>
//                    <h2>{product.title}</h2> 
//                   <img src={product.image.fluid.src} alt={product.title} width={200} height={200}/>
//                   <p>{product.price}</p>
//                   <Link to={`/products/${product.slug}`}>More Info</Link>
//                   </article>
//                 )
//             })      
//           }
//       </section>
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     allContentfulProduct {
//       nodes {
//         title
//         slug
//         id
//         price
//         image {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }
// `

// export default ComponentName



















import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/Layout";
const ComponentName = ({ data:{products} }) => {
  return(
    <Layout>
      <section style={{display:'flex',justifyContent:'space-around'}}>
        {
          products.nodes.map((product) => {
            return (
              <article key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.image.fluid.src} alt={product.title} width={200} height={200}/>
              <div style={{display: 'flex',justifyContent: 'space-between'}}>
                <span>{product.price}</span>
                <Link to={`/products/${product.slug}`}>More Info</Link>
              </div>

              </article>
            )
          })
        }
      </section>
    </Layout>
    )
}

export const query = graphql`
  {
   products: allContentfulProduct {
      nodes {
        image {
          fluid {
            src
          }
        }
        title
        slug
        id
        price
      }
    }
  }
`

export default ComponentName


























