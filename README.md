# Jinhao Jing - Academic Homepage

Personal academic website built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and deployed through GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open `http://127.0.0.1:4000`.

## Deployment

In GitHub Settings > Pages, set the build source to **GitHub Actions**. The `Deploy site` workflow builds with the local plugins that resolve library versions and generate asset cache keys. Publishing directly from a branch skips these plugins and can overwrite the workflow output.
