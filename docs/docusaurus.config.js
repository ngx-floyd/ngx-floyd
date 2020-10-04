module.exports = {
  title: 'ngx-floyd',
  tagline: 'Collection of libraries',
  url: 'https://ngx-floyd.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ngx-floyd', // Usually your GitHub org/user name.
  projectName: 'ngx-floyd', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ngx-floyd',
      logo: {
        alt: 'Floyd Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/rhetos/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ngx-floyd/ngx-floyd',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Rhetos',
              to: 'docs/rhetos/overview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'ttps://github.com/ngx-floyd/ngx-floyd',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ngx-floyd, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ngx-floyd/ngx-floyd/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
