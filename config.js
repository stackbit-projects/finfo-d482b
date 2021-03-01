module.exports = {
  siteTitle: 'Finfo.app', // <title>
  manifestName: 'newage',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-newage/`, // This path is subpath of your hosting https://domain/portfolio
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/s23h',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/finfoc/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/finfoc1',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://www.facebook.com/finfoc',
    },
  ],
};
