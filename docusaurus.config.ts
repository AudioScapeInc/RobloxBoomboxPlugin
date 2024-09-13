import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Audioscape.ai Boombox',
  tagline: 'The Ultimate Music Player for Roblox',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://audioscape.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/RobloxBoomboxPlugin/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AudioScapeInc', // Usually your GitHub org/user name.
  projectName: 'RobloxBoomboxPlugin', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/audioscape-icon.png',
    navbar: {
      title: 'Audioscape.ai Boombox',
      logo: {
        alt: 'Audioscape.ai Logo',
        src: 'img/audioscape-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://github.com/AudioScapeInc/RobloxBoomboxPlugin',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/MShtx9aaHh',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCTRM6f4vFy1Yek1qrfBLxrA',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/audioscapeinc',
            },
            {
              label: 'Audioscape.ai',
              href: 'https://audioscape.ai',
            },
            {
              label: 'Audio Discovery Tool',
              href: 'https://portal.audioscape.ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AudioScape. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
