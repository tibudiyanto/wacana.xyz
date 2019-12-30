module.exports = {
  siteMetadata: {
    title: `Theo Budiyanto`,
    name: `@tibudiyanto`,
    siteUrl: `https://wacana.xyz`,
    description: `Theo Budiyanto blog`,
    hero: {
      heading: `Engineering and Chill`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tibudiyanto`
      },
      { name: "github", url: "https://github.com/tibudiyanto" },

      { name: "instagram", url: "https://instagram.com/tibudiyanto" }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.jpg`
      }
    }
  ]
};
