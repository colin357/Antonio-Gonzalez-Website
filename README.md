# Antonio Gonzalez · Loan Officer Website

Static one-page site for Antonio Gonzalez, loan officer with American Pacific Mortgage in Sacramento, CA.

## Structure

- `index.html` – all page content
- `styles.css` – styling (Fraunces + Instrument Sans via Google Fonts)
- `script.js` – nav, scroll reveal, contact form
- `assets/` – headshot and favicon

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Live Instagram feed

The Instagram section is a [Behold](https://behold.so) widget. Feed layout,
post count, and styling are managed in the Behold dashboard, not in this repo.

## Before launch

- Confirm the American Pacific Mortgage licensing disclaimer wording with compliance.
- The contact form opens the visitor's email client. To collect submissions server-side, point the form at a service such as Formspree or Netlify Forms.
