import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 >Kontakt</h1>
    <p>Block Lab GmbH</p>
    <a href="mailto:info@block-lab.ch">info@block-lab.ch</a>
      <br></br>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage
