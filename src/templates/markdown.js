import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import Spoiler from "../components/spoiler";
import rehypeReact from "rehype-react"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  console.log(pageContext)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst } = markdownRemark
  let previousLink
  if (pageContext.previous == null) {
    previousLink = "|-"
  } else {
    previousLink = <Link to={pageContext.previous.path} >{pageContext.previous.title}</Link>
  }
  let nextLink
  if (pageContext.next == null) {
    nextLink = "-|"
  } else {
    nextLink = <Link to={pageContext.next.path} >{pageContext.next.title}</Link>
  }
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "code-spoiler": Spoiler },
  }).Compiler

  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        {
          renderAst(htmlAst)
        } 
      </div>
      {previousLink} - {nextLink}
    </div>
    </Layout>
  )
  
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      htmlAst
      frontmatter {
        title
        path
        step
      }
    }
  }
`