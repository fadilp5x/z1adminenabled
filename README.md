# Z1CRAS - Premium Car Rentals for UAE NRIs

A luxury car rental website specifically designed for UAE-based NRIs (Non-Resident Indians) returning to Kerala. The website features a premium design with UAE architectural aesthetics and high-conversion marketing elements.

## Features

- **Premium Fleet Management**: Dynamic vehicle catalog with admin panel
- **UAE NRI Focused**: Specialized services for UAE residents
- **Responsive Design**: Mobile-first approach with premium aesthetics
- **Real-time Database**: Supabase integration for vehicle management
- **Booking System**: Integrated booking with Web3Forms
- **Admin Panel**: Complete vehicle management system with drag-and-drop ordering

## File Structure

```
/
├── index.html              # Main homepage with UAE NRI design
├── vehicles.html           # Fleet showcase with filtering
├── book.html              # Booking form page
├── admin.html             # Admin panel for vehicle management
├── 404.html               # Custom 404 page
├── script.js              # Main JavaScript functionality
├── vehicles.js            # Vehicle filtering and display logic
├── admin.js               # Admin panel functionality
├── config.js              # Supabase configuration
├── manifest.json          # PWA manifest
├── service-worker.js      # Service worker for offline functionality
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── _redirect              # Netlify redirects
└── favicon/               # Favicon files
```

## Setup Instructions

1. **Supabase Setup**:
   - Create a Supabase project
   - Update `config.js` with your Supabase URL and API key
   - Create the `vehicles` table using the admin panel

2. **Web3Forms Setup**:
   - Get an API key from Web3Forms
   - Update the API key in `book.html`

3. **Deployment**:
   - Deploy to Netlify, Vercel, or any static hosting service
   - Ensure redirects are properly configured

## Admin Panel

Access the admin panel at `/admin.html` to:
- Add/edit/delete vehicles
- Upload vehicle images
- Manage vehicle ordering with drag-and-drop
- View vehicle statistics

## Design Philosophy

The website follows UAE architectural aesthetics with:
- Premium color palette (Gold, Deep Blue, Pearl White)
- High-end typography (Cairo + Inter fonts)
- Luxury-focused imagery and messaging
- Conversion-optimized layouts
- Mobile-responsive design

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Database**: Supabase (PostgreSQL)
- **Forms**: Web3Forms
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Cairo, Inter)
- **Hosting**: Static hosting compatible

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

© 2023 Z1CRAS. All rights reserved.