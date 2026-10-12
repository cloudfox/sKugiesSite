import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'sKugies Website',
  tagline: 'A Portfolio and Dev site.',
  favicon: 'img/favicon.ico',

  url: 'https://cloudfox.github.io,
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Steven Kugies',
  projectName: 'cloudfox.github.io/',
  onBrokenLinks: 'throw',

  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'default',
      logo: {
        alt: 'SRO Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `Made with love by volunteers from <a href="https://roboticsoutreach.org">Southampton Robotics Outreach</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
