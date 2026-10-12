# Space Marine Command

Starter web app for a Space Marine datasheet reference and army builder.

## Included
- Home page
- Searchable datasheets
- Army builder with live point totals
- Firebase email/password login wiring
- Firestore saved armies
- Mobile-friendly dark interface
- Five starter unit records

## Firebase setup
1. Create a Firebase project.
2. Add a Web App.
3. Enable Authentication > Email/Password.
4. Create a Firestore database.
5. Paste the Firebase web config into `js/firebase.js`.
6. Use the rules in `firestore.rules`.

## GitHub Pages
This repository is a static site and can be published from the `main` branch root.

## Adding datasheets
Add new unit objects to `data/units.json`. The Datasheets page and Army Builder use that same database.

This is an unofficial fan project and is not affiliated with or endorsed by Games Workshop. Verify current rules and points against official publications.