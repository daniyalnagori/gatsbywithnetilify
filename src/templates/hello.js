import React from 'react'
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const studentTemplate = ({pageContext: {data}}) => {
    console.log('props',data)
    return (
        <Layout>
            <section style={{display:'flex',justifyContent:'center',flexFlow:'column',alignItems:'center'}}>
           {/* <h2>{data}</h2> */}
           <div>{documentToReactComponents(data?.detail?.json)}</div>
            </section>
        </Layout>
    )
}

export default studentTemplate