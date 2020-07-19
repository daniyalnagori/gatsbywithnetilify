import React from 'react'
import  Layout from "../components/Layout";
// import ComponentName from '../queries/sitedata'
const blog = ({data}) => {
    console.log('props',data);
    return (
        <Layout>
            <h1 style={{color:'red',textTransform: 'uppercase'}}>
            hello VLOG
            </h1>
            <p>{data.site.siteMetadata.address}</p>
            {/* <ComponentName/> */}
        </Layout>
    )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        address
      }
    }
  }
`

export default blog
