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

Instagram has no public embed for a profile feed, so the site uses a free
[Behold](https://behold.so) widget:

1. Sign up at behold.so with Antonio's Instagram account and create a feed
   (grid layout, 4 to 8 posts works well with the section).
2. Copy the feed ID Behold gives you.
3. In `index.html`, paste it into `data-behold-id=""` on the
   `#instagram-feed` element.

Until an ID is set, the section shows placeholder tiles.

## Before launch

- Replace the placeholder NMLS number in the footer with Antonio's personal NMLS ID.
- Confirm the American Pacific Mortgage licensing disclaimer wording with compliance.
- The contact form opens the visitor's email client. To collect submissions server-side, point the form at a service such as Formspree or Netlify Forms.
