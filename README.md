# Hugo Winston Theme

Hugo Winston is a bold minimal blogging theme.

[Live Demo](https://hugo-winston.netlify.app/) |
[Zerostatic Themes](https://www.zerostatic.io/)

<a href="https://www.buymeacoffee.com/zerostatic" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

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

# Installation
### Install Hugo

To use this theme you will need to have Hugo installed. If you don't already have Hugo installed please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

### Check Hugo version (Hugo 0.51+ Extended is required)

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets. Please make sure you have the **Hugo Extended** version installed. If you are not using the extended version this theme will not not compile.

To check your version of Hugo, run:

```
hugo version
```

This will output the currently installed version of Hugo. Make sure you see `/extended` after the version number, for example `Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown` You do not need to use version v0.51 specifically, you can use any version of Hugo above 0.51. It just needs to have the `/extended` part

### Create a new Hugo site

```
hugo new site mynewsite
```

This will create a fresh Hugo site in the folder `mynewsite`.

### Install theme with Git

Clone this repo into the themes folder
```
cd mynewsite
git clone https://github.com/zerostaticthemes/hugo-winston-theme.git themes/hugo-winston-theme
```

### Copy example content

Copy the entire contents of the `mynewsite/themes/hugo-winston-theme/exampleSite/` folder to root folder of your Hugo site, ie `mynewsite/`

To copy the files using terminal, make sure you are still in the projects root, ie the `mynewsite` folder.

```
cp -a themes/hugo-winston-theme/exampleSite/. .
```

### Update config.toml

After you copy the `config.toml` into the root folder of your Hugo site you will need to update the `baseURL`, `themesDir` and `theme` values in `mynewsite/config.toml`

```
baseURL = "/"
themesDir = "themes"
theme = "hugo-winston-theme"
```

### Run Hugo

After installing the theme for the first time, generate the Hugo site.

You run this command from the root folder of your Hugo site ie `mynewsite/`

```
hugo
```

For local development run Hugo's built-in local server.

```
hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

# Configuration

### Config options

```
// config.toml
[params]
  google_analytics_id = ""
  twitter_handle = "@zerostaticio"
  showAuthorOnHomepage = true
  showAuthorOnPosts = false
  showPostsOnHomepage = false
  addFrame = true
  addDot = true
```

### Google Analytics

Add you google analytics ID to the `config.toml`

```
// config.toml
[params]
  google_analytics_id="UA-132398315-1"
```

# Deploying to Netlify

This theme includes a `netlify.toml` which is configured to deploy to Netlify from the `exampleSite` folder. See this discussion on how to deploy your site on Netlify from the `exampleSite` folder - https://discourse.gohugo.io/t/deploy-your-theme-to-netlify/15508

Most likely if you are deploying to Netlify and created a new Hugo site or added this theme to an existing Hugo site then you are not deploying from the `exampleSite` directory and you can delete the `netlify.toml` file.

### Other Hugo Themes by Zerostatic

- [Hugo Whisper](https://github.com/zerostaticthemes/hugo-whisper-theme)
- [Hugo Serif](https://github.com/zerostaticthemes/hugo-serif-theme)
- [Hugo Winston](https://github.com/zerostaticthemes/hugo-winston-theme)
- [Hugo Advance](https://www.zerostatic.io/theme/hugo-advance/)
- [Hugo Paradigm](https://www.zerostatic.io/theme/hugo-paradigm/)


🇦🇺 **Made in Australia** by Robert Austin - leave a star mate!
