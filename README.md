# The Curriculum Vitae Template

This is an effort to publish and update my CV using Github Pages, utilizing NodeJS/HTML/CSS.

## Motivation

GitHub Pages is probably the best place developer could store it's CV. Giving a potential employer a link to your CV stored on GitHub shows your strong desire for automation and definitely stands you out.

The idea behind **The Curriculum Vitae Template** is to provide anyone a quick solution for creating and managing CV (both HTML and PDF versions) with the help of GitHub.

## Installation

1. Create a new repo out of this template.
1. Clone the newly created repo.
1. Install project dependencies with `npm install`.
1. Run `npm run deploy` to initialize `gh-pages`. This is a one time action. Further deployments will be initiated by GitHub Actions on every push to `master`.

## Usage

1. Start local development server with `npm start`.
1. Update contents of `src` folder to fit your needs. This item is explained [below](#update-contents).
1. Commit and push your changes.
1. GitHub Actions will automatically build the latest version and deploy it to GitHub Pages.
1. Open `http://your-username.github.io/your-cv-repo`.

### Update contents

The project uses [HandlebarsJS](https://github.com/wycats/handlebars.js/) as a template engine.

The main HTML template could be found in [src/templates/index.html](src/templates/index.html). Metadata for the template could be found in [src/metadata/metadata.js](src/metadata/metadata.js).

Don't forget to update [src/assets/favicon.ico](src/assets/favicon.ico). You can generate a new favicon out of your photo with [icoconvert.com](http://icoconvert.com/).
