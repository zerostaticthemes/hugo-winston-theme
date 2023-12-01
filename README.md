# Hugo Winston Theme

Hugo Winston is a bold minimal blogging theme.

[Live Demo](https://hugo-winston.netlify.app/) |
[Zerostatic Themes](https://www.zerostatic.io/)

![Hugo Winston Theme screenshot](https://www.zerostatic.io/theme/hugo-winston/hugo-winston-screenshot.png)

## Theme features

- Posts (Markdown)
- Basic Page (Markdown)
- SCSS (Hugo Pipelines)
- Responsive design
- 100/100 Google Lighthouse speed score
- 100/100 Google Lighthouse SEO score
- 100/100 Google Lighthouse accessibility score
- Google analytics configured in `config.toml`
- Configure GID using env variable HUGO_GOOGLE_ANALYTICS_ID, compatible with Netlify.
- Title, meta description and meta tags automatically generated for every page
- OG Meta data for Facebook and Twitter
- Semantic HTML document structure

## Installation

**1. Install Hugo**

To use this theme you will first need to have Hugo installed. Please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

> ⚠️ **Note:** Check your Hugo version - **Hugo Extended** is required!

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets which means if you are not using the Hugo extended version this theme will not work. To check your version of Hugo, run `hugo version`. Make sure you see **/extended** after the version number, for example _Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown_ You do not need to use version v0.51 specifically, it just needs to have the _/extended_ part.

**2. Create a new Hugo site**

This will create a fresh Hugo site in the folder `mynewsite`.

```
hugo new site mynewsite
```

**3. Install the theme**

Download or git clone this theme into the sites themes folder `mynewsite/themes`. You should end up with the following folder structure `mynewsite/themes/hugo-winston-theme`

```
cd mynewsite
git clone https://github.com/zerostaticthemes/hugo-winston-theme.git themes/hugo-winston-theme
```

**4. Copy the example content**

Copy the entire contents of the `mynewsite/themes/hugo-winston-theme/exampleSite/` folder to root folder of your Hugo site, ie `mynewsite/`. To copy the files using terminal, make sure you are still in the projects root, ie the `mynewsite` folder.

```
cp -a themes/hugo-winston-theme/exampleSite/. .
```

**6. Run Hugo**

After installing the theme for the first time, generate the Hugo site.

You run this command from the root folder of your Hugo site ie `mynewsite`

```
hugo
```

For local development run Hugo's built-in local server.

```
hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

# Localhost inside exampleSite

You can run this site without installing it as a hugo theme using the following command. I use this for theme development.

```
hugo server --source=exampleSite --theme=../..
```

# Configuration

### Config options

```toml
# config.toml
[params]
  google_analytics_id = ""
  twitter_handle = "@zerostaticio"
  showAuthorOnHomepage = true
  showAuthorOnPosts = false
  showIntroContentOnHomepage = true
  showPostsOnHomepage = true
  usePaginationOnHomepage = false
  limitPostsOnHomepage = 3 # only used if usePaginationOnHomepage is false
  sortPostsByDateOldestFirst = false
  addDot = true
  addFrame = true
  highlightColor = '#7b16ff'
  baseColor = "#ffffff"
  baseOffsetColor = "#eaeaea"
  headingColor = "#1c1b1d"
  textColor = "#4e5157"
  dotColor = "#7b16ff"
  enableGoogleFonts = true 
  googleFontsUrl = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
  fontFamilyHeading = "Poppins"
  fontFamilyParagraph = "Helvetica"
  fontFamilyMonospace = "monospace"
```

### Google Analytics

Add your google analytics ID to the `config.toml`

```toml
# config.toml
[params]
  google_analytics_id="UA-132398315-1"
```

### Plausible Analytics

Add your plausible analytics domain to the `config.toml`.
This is `data-domain` in your [tracking script code](https://plausible.io/docs/plausible-script).

```toml
# config.toml
[params]
  plausible_analytics_domain = "example.com"
```

# Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zerostaticthemes/hugo-winston-theme)

This theme includes a `netlify.toml` which is [configured to deploy to Netlify](https://discourse.gohugo.io/t/deploy-your-theme-to-netlify/15508) from the `exampleSite` folder. If you have installed this theme into a new Hugo site and the exampleSite folder was copied or removed, you should delete the `netlify.toml` file.


### More Hugo Themes by Zerostatic

- [Hugo Hero](https://github.com/zerostaticthemes/hugo-hero-theme) - Open-source business theme
- [Hugo Whisper](https://github.com/zerostaticthemes/hugo-whisper-theme) - Open-source documentation theme
- [Hugo Serif](https://github.com/zerostaticthemes/hugo-serif-theme) - Open-source business theme
- [Hugo Winston](https://github.com/zerostaticthemes/hugo-winston-theme) - Open-source blog theme
- [Hugo Advance](https://www.zerostatic.io/theme/hugo-advance/) - Premium advanced multi page business & marketing theme
- [Hugo Paradigm](https://www.zerostatic.io/theme/hugo-paradigm/) - Premium landing page + site builder theme
- [Hugo Lever](https://www.zerostatic.io/theme/hugo-lever/) - Premium personal / bio theme
- [Hugo Shard](https://www.zerostatic.io/theme/hugo-lever/) - Premium SAAS / landing page theme

### Find hundreds more Hugo themes on Built At Lightspeed

[<img alt="Built At Lightspeed Hugo themes directory screenshot" width="400px" src="https://www.zerostatic.io/images/builtatlightspeed-hugo-themes.jpg" />](https://builtatlightspeed.com/category/hugo)
