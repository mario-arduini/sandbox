module.exports = {
  siteMetadata: {
    title: "sandbox",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-fast-google-fonts",
      options: {
        link:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,700&family=Montserrat:wght@200;300;400;600;700&family=Open+Sans&family=Inconsolata&family=Roboto:wght@400&family=Syne+Mono&display=swap",
      },
    },
  ],
};
