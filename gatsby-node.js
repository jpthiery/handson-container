/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/markdown.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___step] }
        limit: 1000
      ) {
        edges {
          previous {
            frontmatter {
              title
              path
            }
          }
          node {
            frontmatter {
              path
              title
            }
          }
          next {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ previous, node, next }) => {
      const previousNode = (previous !== null ) ? {
        path: previous.frontmatter.path,
        title: previous.frontmatter.title
    } : null
    const nextNode = (next !== null ) ? {
      path: next.frontmatter.path,
      title: next.frontmatter.title
  } : null
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          previous: previousNode ,
          next: nextNode 
        }, // additional data can be passed via context
      })
    })
  })
}
