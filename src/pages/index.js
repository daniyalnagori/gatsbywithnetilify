import React, { useEffect, useState } from "react"
import Layout from "../components/Layout";

export default function Home() {
  let [state, updateState] = useState({
    name: ""
  })
  const { name } = state;
  useEffect(() => {
    fetch('/.netlify/functions/hello-world',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:"hello world===="})
    })
      .then(res => res.text())
      .then(text => {
        console.log(text,'========')
        updateState({
          name: text
        })
      })
  }, [name])
  return <div>
    <Layout>
      <h1>
        {name}
          </h1>
  
    </Layout>

  </div>
}
