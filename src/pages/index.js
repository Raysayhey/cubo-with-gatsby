import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Cube from '../components/Cube'
import '../components/index.css'
// import positions from "../util/positions"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div style={{ maxWidth: `6666px` ,  justifyContent: `center`}}>
        {/* <Link to="/page-2/"><Cube /></Link> */}
        <Cube />
    </div>
  
  </Layout>
)

export default IndexPage
