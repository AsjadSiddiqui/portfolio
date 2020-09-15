module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio`,
        siteUrl: `https://vibrant-liskov-2ea3a3.netlify.app/`,
        siteName: `Asjad Siddiqui`,
        siteShortName: `AS`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Software developer, Full Stack Developer`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `asjadsidd@outlook.com`,
        social: {
          // Usernames
          twitter: `AsjadSidd`,
          gitHub: `AsjadSiddiqui`,
          stackOverflow: `14207902/asjad-siddiqui`,
          linkedIn: `in/asjad-s-7449131a9/`,
          resumeInPdf: `#`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi!, I'm Asjad Siddiqui`,
          h2Text: `I'm a Full Stack Developer who loves creating Mobile Apps, I have
              worked as a software developer since 2017.`,
          typewriter: [
            `Coding is my passion 😎`,
            `I live in Pakistan 🇵🇰`,
            `I 💖 Flutter`,
            `I make <strong>awesome</strong> Mobile Apps`,
            `Python 🐍 is my favorite programming language`,
            `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
            `I think one of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
            `You actually <strong>read</strong> all this? You got time to burn...`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-151335375-1`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `vibrant-liskov-2ea3a3.netlify.app/`,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: false,
        },
      },
    },
  ],
}
