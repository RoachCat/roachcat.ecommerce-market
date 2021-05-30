module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import "./src/assets/CSS/styles.scss";
                `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/roachcat.ecommerce-market'
    : '/'
};

