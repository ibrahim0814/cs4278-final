exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
    toPath: "/",
  })
}
