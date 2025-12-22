# PIB Website - Partners International Brokers

Modern, responsive website for PIB (Partners International Brokers s.a.l.) with bilingual support (English/Arabic).

## Clean URL Structure

The website uses clean, SEO-friendly URLs:

### English URLs
- **Home**: `https://yourwebsite.com/` or `https://yourwebsite.com`
- **About Us**: `https://yourwebsite.com/about-us`
- **Services**: `https://yourwebsite.com/services`
- **Our Founder**: `https://yourwebsite.com/our-founder`
- **Partners**: `https://yourwebsite.com/partners`
- **Contact Us**: `https://yourwebsite.com/contact-us`

### Arabic URLs
- **Home**: `https://yourwebsite.com/ar`
- **About Us**: `https://yourwebsite.com/ar/about-us`
- **Services**: `https://yourwebsite.com/ar/services`
- **Our Founder**: `https://yourwebsite.com/ar/our-founder`
- **Partners**: `https://yourwebsite.com/ar/partners`
- **Contact Us**: `https://yourwebsite.com/ar/contact-us`

## Features

- ✅ Clean, SEO-friendly URLs
- ✅ Bilingual (English/Arabic)
- ✅ Responsive design
- ✅ Contact form with EmailJS integration
- ✅ WhatsApp integration
- ✅ Social media links (Facebook, Instagram, LinkedIn)
- ✅ Animated UI elements
- ✅ Browser caching & compression
- ✅ Security headers

## Deployment

### For Apache Servers (Most Common)

1. Upload all files to your web server
2. Make sure `.htaccess` file is uploaded (it handles clean URLs)
3. Ensure `mod_rewrite` is enabled on your Apache server
4. The website should work automatically with clean URLs

### For Nginx Servers

If your hosting uses Nginx instead of Apache, add this to your Nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /ar {
    try_files $uri $uri/ /index-ar.html;
}

location /ar/ {
    try_files $uri $uri/ /index-ar.html;
}

# Redirect index.html to root
if ($request_uri ~ "^/index\.html") {
    return 301 /;
}

# Redirect index-ar.html to /ar
if ($request_uri ~ "^/index-ar\.html") {
    return 301 /ar;
}
```

### For Static Hosts (Netlify, Vercel, etc.)

Create a `_redirects` file in the root directory:

```
# Netlify redirects
/index.html  /  301
/index-ar.html  /ar  301

/*  /index.html  200
/ar/*  /index-ar.html  200
```

## File Structure

```
PIB-Website/
├── index.html              # English homepage
├── index-ar.html           # Arabic homepage
├── .htaccess              # Apache URL rewriting rules
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # Main JavaScript (includes URL routing)
│   └── images/            # All images
├── README.md              # This file
└── [image files]          # Partner logos, etc.
```

## Contact Form Setup

The contact form uses EmailJS. To configure:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Update the following in `assets/js/script.js`:
   - Service ID: `service_igb6t8e`
   - Template ID: `template_y2na7ow`
   - Public Key: `I7e--GDFJqgr-3gqY`

## Social Media Links

- Facebook: https://www.facebook.com/PIBBrokers/
- Instagram: https://www.instagram.com/pib.internationalpartners/
- LinkedIn (Founder): https://www.linkedin.com/in/jihad-beaini-9b565617b/

## WhatsApp Integration

WhatsApp button configured with: +1 (555) 159-1378

To change the number, edit in `assets/js/script.js`:
```javascript
whatsappBtn.setAttribute('href', 'https://wa.me/YOUR_NUMBER?text=Hi');
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Image lazy loading
- CSS/JS compression
- Browser caching (1 year for images, 1 month for CSS/JS)
- Optimized animations
- Security headers enabled

## SSL/HTTPS

To enable HTTPS redirect, uncomment these lines in `.htaccess`:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Support

For issues or questions, contact: info@pib-partners.com

---

© 2025 PIB - Partners International Brokers s.a.l. All rights reserved.
