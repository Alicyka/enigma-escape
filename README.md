# Enigma Escape — Escape Room Website (demo)

**🔗 Live demo: https://alicyka.github.io/enigma-escape/**

A responsive multi-page website for a fictional escape room business, built with **HTML, CSS and vanilla JavaScript**, plus a **Firebase Firestore** real-time booking system.

> This is a portfolio/demo project. It is a rebranded version of a booking site I originally built for a real escape room business; all names, images, contact details and API keys have been replaced with generic placeholders.

## Features
- Fully responsive layout (mobile menu, fluid grids) — works from 320px up
- Real-time reservation form: shows live free/occupied 90-minute slots per day, prevents double-booking (Firestore `onSnapshot` + `setDoc`)
- Themed room pages, pricing, vouchers, events and legal pages
- No build step — pure static site, deployable anywhere

## Tech
HTML5 · CSS3 (custom properties, grid, media queries) · JavaScript (ES modules) · Firebase Firestore · Git

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Enable the booking system (optional)
The reservation page needs your own free Firebase project:
1. Create a project at https://console.firebase.google.com and add a **Web app**.
2. Enable **Firestore Database**.
3. Copy your SDK config into the `firebaseConfig` object in `rezervari.html`.
4. Set Firestore rules appropriately before going live.

## Structure
```
index.html            Home (hero, rooms, reviews)
lost-expedition.html  Room 1 (available)
dragons-hoard.html    Room 2 (coming soon)
preturi.html          Pricing
rezervari.html        Booking form (Firebase)
vouchere.html         Gift vouchers
petreceri.html        Parties & events
contact.html          Contact + map
termeni / confidentialitate / gdpr / livrare / anulare   Legal pages
style.css             Styles
script.js             Mobile menu
img/                  (optional) your own royalty-free images
```
