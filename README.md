# docs.sqlbuild.com

Redirects the old `docs.sqlbuild.com` address to [sqlbuild.com](https://sqlbuild.com), which now hosts the
SQLBuild docs at `/docs/`. GitHub Pages serves `404.html` for every path, so each old link lands on its
new page:

- `docs.sqlbuild.com/` goes to the homepage.
- `docs.sqlbuild.com/<page>` goes to `sqlbuild.com/docs/<page>/`.
- Files such as `llms.txt` go to the same path on `sqlbuild.com`.
- Pages that no longer exist go to `sqlbuild.com/docs/`.
