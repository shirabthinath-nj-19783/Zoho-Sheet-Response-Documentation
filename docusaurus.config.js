// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zoho Sheet - Response Documentation',
  tagline: 'Response Structure',
  favicon: 'https://static.zohocdn.com/sheet/cdn_static/images/favicon.fd1a0ec9def8f9d6d9cb71c842ceb8da.ico',

  // Set the production URL of your site
  url: 'https://shirabthinath-nj-19783.github.io',  // Your GitHub Pages URL
  baseUrl: '/Zoho-Sheet-Response-Documentation/',  // Your GitHub repo name

  organizationName: 'shirabthinath-nj-19783',  // Your GitHub username
  projectName: 'Zoho-Sheet-Response-Documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/shirabthinath-nj-19783/Zoho-Sheet-Response-Documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/shirabthinath-nj-19783/Zoho-Sheet-Response-Documentation/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Response Structure',
      logo: {
        alt: 'Zoho Sheet Logo',
        src: 'https://static.zohocdn.com/sheet/cdn_static/images/sheet_logo.7ada89f54b25c6077d79a47f014ad5a9.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Introduction',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      showLastUpdateTime: true,
      showLastUpdateAuthor: true,
    },
  },
};

module.exports = config;