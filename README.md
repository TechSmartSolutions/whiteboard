# Whiteboard Reader

A small web app that displays text on a realistic whiteboard-style UI.

## Preview locally

1. Start the app:

```bash
npm start
```

2. Open your browser at:

- `http://localhost:3000`

### Optional: choose a custom port

```bash
PORT=4173 npm start
```

Then open `http://localhost:4173`.

## Deploy on cPanel

Yes — for most cPanel hosting you can **just upload the files**.

### Option A (recommended): static upload to `public_html`

1. In cPanel, open **File Manager**.
2. Go to your site root (usually `public_html` or a subdirectory like `public_html/whiteboard`).
3. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `sample.txt`
   - `.htaccess` (included in this repo for route fallback)
4. Visit your domain (or subdirectory URL).

If this app is inside a subfolder, keep all files together in that same folder so `fetch("sample.txt")` works.

### Option B: run Node app on cPanel (only if your plan supports it)

Use this only when you specifically want `server.js` on-host:

1. Open **Setup Node.js App** in cPanel.
2. Create an app pointing to this project directory.
3. Set startup file to `server.js`.
4. Run `npm install` (there are no dependencies, but cPanel may expect this step).
5. Restart the app and open the provided application URL.

Most shared cPanel plans are easier with **Option A**.

## What to expect

- The app loads `sample.txt` by default.
- You can use **Load a .txt file** to display a local text file on the board.
- Unknown nested routes render the app shell when `.htaccess` rewrites are enabled.
