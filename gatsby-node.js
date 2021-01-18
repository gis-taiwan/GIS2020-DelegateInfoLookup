exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allDelegatesCsv {
        nodes {
          GIS_Code
        }
      }
    }
  `)
  data.allDelegatesCsv.nodes.forEach((node) => {
    const GIS_Code = node.GIS_Code
    actions.createPage({
      path: GIS_Code,
      component: require.resolve(`./src/templates/Schedule.js`),
      context: { GIS_Code: GIS_Code },
    })
  })
}
