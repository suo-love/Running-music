module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'text-color': '#111',
            'border-color': '#eee',
            'background-color':'#00e079'
          },
        },
      },
    },
  },
};
