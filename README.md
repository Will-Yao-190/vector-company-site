# Vector Company Site

This is the general Vector company website for real estate services:

- Property rentals
- Flipping
- Tax sale opportunity support

## Run Locally

```powershell
cd C:\Dev\VectorCompany
node server.js
```

Then open:

```text
http://localhost:4173
```

If you run it at the same time as another Vector project, choose another port:

```powershell
$env:PORT=4174; node server.js
```

## Deploy To Azure Static Web Apps

Use these build settings:

```text
App location: /
Api location: <blank>
Output location: /
Build command: <blank>
```

This is a static React site, so it does not need a build step.
