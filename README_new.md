## Official Company Website

A clean, minimal static website for the Official Company Website project. This repository contains a single-page site intended to be served as a static site or previewed locally for development and testing.

Key points
- Purpose: Provide a simple company landing page and static assets.
- Structure: Static HTML/CSS with optional backend utilities in the `backend/` folder.

Contents
- `index.html` — main site entry.
- `style.css` — site styling.
- `assets/` — images and supporting files.
- `backend/` — minimal backend utilities (optional).
- `LICENSE` — project license.

Quick preview

1. Easiest: open `index.html` in your browser.
2. Recommended (serves files over HTTP):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

or with Node.js:

```powershell
npx http-server -p 8000
# then open http://localhost:8000
```

Development

- Edit `index.html` and `style.css` for content and styling updates.
- Keep commits focused and add short descriptions when creating pull requests.

Backend (optional)

If you plan to use the small API utilities in `backend/`, create a virtual environment and install dependencies:

```powershell
python -m venv .venv; .\.venv\Scripts\Activate; pip install -r backend\requirements.txt
```

Deployment

This is a static site and can be hosted on any static provider (GitHub Pages, Netlify, Vercel, S3). For GitHub Pages, enable Pages from the `main` branch in repository settings.

Contributing

- Fork the repository and open a pull request with a clear description.
- For larger changes, open an issue first to discuss the approach.

License

See `LICENSE` for license details.

Contact

Open an issue or contact the repository owner for questions or help.

---
_Last updated: 2025-11-14_
