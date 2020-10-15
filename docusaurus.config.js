/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: '新新老师',
  tagline: '简单、生动、有趣の霓虹笔记:)',
  url: 'https://xinxinsensei.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/facebook/create-react-app/edit/master/docusaurus/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    algolia: {
      apiKey: '3be60f4f8ffc24c75da84857d6323791',
      indexName: 'create-react-app',
    },
    navbar: {
      title: '新新老师',
      logo: {
        alt: '新新老师',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/getting-started', label: '笔记', position: 'right' },
        {
          href: 'https://github.com/jianyongliu/xinge',
          label: '帮助',
          position: 'right',
        },
        {
          href: 'https://github.com/jianyongliu/xinge',
          label: '源码',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '笔记',
          items: [
            {
              label: '开始',
              to: 'docs/getting-started',
            },
            {
              label: '考级',
              href: 'https://jp.izaodao.com/Index/Teacher/show?uid=28114746',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: '动漫',
              href: 'https://jp.izaodao.com/Index/Teacher/show?uid=28114746',
            },
            {
              label: '电影',
              href: 'https://jp.izaodao.com/Index/Teacher/show?uid=28114746',
            },
          ],
        },
        {
          title: '课堂',
          items: [
            {
              label: '我的在线课堂',
              href: 'https://jp.izaodao.com/Index/Teacher/show?uid=28114746',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} 新新老师`,
    },
  },
};

module.exports = siteConfig;
