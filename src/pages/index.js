import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`docker`, `handson`, `initiation`]} />
    <h1>Hand's on d'intitiation a Docker</h1>
    <p>
      Vos collegues parlent de conteneur, de docker. Sont-ils entrain de se reorienter dans la filliere de la marine marchande ? <br/>
      Premiere chose: vous n'etes pas fou.
    </p>
    <h3>A qui s'adresse ce handson ?</h3>
    <p>
      Ce handson sert a s'initier a Docker par la pratique. Les pre requis sont : 
      <ul>
        <li>de savoir ce que c'est que Docker (dans les grandes lignes hein ^^)</li>
        <li>d'avoir une machine a disposition avec une connection a internet et un client SSH.</li>
      </ul>
    </p>


    <div>
      <h2>Sommaire</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { order: ASC, fields: [frontmatter___step] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
