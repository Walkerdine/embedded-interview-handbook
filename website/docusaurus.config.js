/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Embedded Interview Handbook',
  tagline: 'Prep material to help you ace you next embedded interview',
  url: 'https://Walkerdine.github.io',
  baseUrl: '/embedded-interview-handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Walkerdine',
  projectName: 'embedded-interview-handbook',
  themeConfig: {
    navbar: {
      title: 'Embedded Interview Handbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
          { to: 'docs/intro', label: 'Getting Started', position: 'right' },
          { to: 'blog', label: 'Blog', position: 'right' },
          {
              href: 'https://github.com/Walkerdine/embedded-interview-handbook',
              label: 'GitHub',
              position: 'right',
          },
      ],
    },
    footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Rob Walkerdine. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
                  'https://github.com/Walkerdine/embedded-interview-handbook/tree/main/website/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
                'https://github.com/Walkerdine/embedded-interview-handbook/tree/main/website/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
