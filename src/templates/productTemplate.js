import React from 'react'
import Layout from "../components/Layout";
const productTemplate = ({pageContext: {data}}) => {
    console.log('props',data)
    return (
        <Layout>
            <section style={{display:'flex',justifyContent:'center',flexFlow:'column',alignItems:'center'}}>
                <h2>{data.title}</h2>
                <img src={data.image.fluid.src} alt={data.title}/>
                <p>{data.info.info}</p>
                <p>{data.price}</p>
            </section>
        </Layout>
    )
}

export default productTemplate
