# web-samadicapital-journal-cdn

Built front-end assets of **SamadiCapital Journal** (journal.samadicapital.com), an AFA Web Studio client project.
They are served to visitors through [jsDelivr](https://www.jsdelivr.com/), because large files from the journal's own domain
are throttled on many networks in Iran.

- **Build output only.** No server code, no student data, no secrets, no keys. The private source repo is
  `AFA-Web-Studio/web-samadicapital-journal`; `tools/build_site.mjs` there writes these files and audits them before
  every publish.
- Files are content-hashed (`app.<hash>.js`). Pages pin them by **commit SHA** and **Subresource Integrity**, so a
  browser only runs the exact bytes that were published. If jsDelivr is unreachable, the page loads the same files
  from its own domain.
- Do not edit by hand.
