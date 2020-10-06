module.exports = {
  someSidebar: {
    Rhetos: [
      'rhetos/overview',
      'rhetos/quickstart',
      {
        Architecture: [
          'rhetos/architecture/structure-info',
          'rhetos/architecture/rhetos-rest',
          'rhetos/architecture/metadata',
        ],
      },
      {
        'Rest services': [
          'rhetos/rest-services/action',
          'rhetos/rest-services/queryable',
          'rhetos/rest-services/entity',
          'rhetos/rest-services/function',
          'rhetos/rest-services/complex-get',
          'rhetos/rest-services/complex',
          'rhetos/rest-services/templater-report',
        ],
      },
      { Recipes: ['rhetos/recipes/dynamic-query'] },
      'rhetos/configuration',
    ],
  },
};
