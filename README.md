# Parenting Bliss - Parenting Blog Website

A modern, responsive parenting blog website built with HTML, CSS, JavaScript, and TailwindCSS. Features unique designs, custom fonts, and a comprehensive admin dashboard.

## 🎨 Design Features

- **Modern UI/UX**: Clean, beautiful, and user-friendly interface
- **Responsive Design**: Fully responsive across all devices
- **Custom Fonts**: Playfair Display (headings), Inter (body), Poppins (accent)
- **Gradient Themes**: Pink and purple gradient color scheme
- **Smooth Animations**: Fade-in effects and hover transitions
- **Unique Page Designs**: Each page has its own distinct style

## 📁 Project Structure

```
Parenting Blog Website/
│
├── index.html              # Home Page 1 - Modern Blog Landing
├── home-magazine.html      # Home Page 2 - Magazine/Minimal Layout
├── about.html              # About Us Page
├── categories.html         # Categories Page
├── blog.html               # Blog Listing Page
├── blog-detail.html        # Blog Details Page
├── contact.html            # Contact Us Page
├── admin-dashboard.html    # Admin Dashboard
├── users.html              # Users Management Page
│
├── css/
│   └── styles.css          # Custom CSS styles and font imports
│
├── js/
│   └── main.js             # Main JavaScript functionality
│
└── README.md               # Project documentation
```

## 🎯 Pages Overview

### 1. Home Page 1 (index.html)
- Hero banner with gradient background
- Featured posts section
- Parenting stage categories
- Newsletter subscription
- Modern, vibrant design

### 2. Home Page 2 (home-magazine.html)
- Magazine-style layout
- Large featured article
- Side articles list
- Minimal, elegant design
- Article grid layout

### 3. About Us (about.html)
- Story section
- Mission and values
- Team members/Authors
- Community section
- Gradient cards and icons

### 4. Categories (categories.html)
- Organized by parenting stages:
  - Newborn (0-12 months)
  - Toddler (1-3 years)
  - Preschool (3-5 years)
  - School Age (5+ years)
- Category cards with icons
- Smooth scrolling navigation

### 5. Blog (blog.html)
- Grid/List view toggle
- Category filtering
- Article cards with images
- Pagination
- Reading time indicators

### 6. Blog Details (blog-detail.html)
- Full article content
- Reading progress bar
- Sidebar with:
  - Author information
  - Popular posts
  - Newsletter subscription
  - Tags
- Share functionality ready

### 7. Contact Us (contact.html)
- Contact form
- Contact information cards
- Office hours
- Map placeholder section
- Social media links

### 8. Admin Dashboard (admin-dashboard.html)
- Statistics overview
- Blog posts management table
- Comments moderation
- Categories management
- Quick actions sidebar

### 9. Users Management (users.html)
- Users table with roles
- Role management (Admin, Author, Subscriber)
- User status indicators
- Search and filter functionality
- User statistics

## 🎨 Color Palette

- **Primary**: #FF6B9D (Pink)
- **Secondary**: #C77DFF (Purple)
- **Accent**: #FFB347 (Orange/Yellow)
- **Dark**: #2C3E50
- **Light**: #F8F9FA

## 🔤 Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Poppins (sans-serif)

## 🚀 Features

### Frontend Features
- ✅ Responsive navigation with mobile menu
- ✅ Hero sections with gradient backgrounds
- ✅ Card-based layouts with hover effects
- ✅ Filter and search functionality
- ✅ Grid/List view toggle
- ✅ Newsletter subscription forms
- ✅ Contact forms
- ✅ Reading progress bar
- ✅ Smooth scrolling

### Admin Features
- ✅ Dashboard with statistics
- ✅ Blog post management
- ✅ User management with roles
- ✅ Comments moderation
- ✅ Categories management
- ✅ Search and filter tools

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles and animations
- **JavaScript**: Interactive functionality
- **TailwindCSS**: Utility-first CSS framework (CDN)
- **Google Fonts**: Playfair Display, Inter, Poppins

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Usage

1. Open `index.html` in your web browser to view the home page
2. Navigate through different pages using the navigation menu
3. All pages are interconnected and functional
4. Admin pages (admin-dashboard.html, users.html) can be accessed from the navigation

## 🔧 Customization

### Changing Colors
Edit the color values in `tailwind.config` section of each HTML file:
```javascript
colors: {
    'primary': '#FF6B9D',
    'secondary': '#C77DFF',
    'accent': '#FFB347',
}
```

### Custom Fonts
Update font imports in `css/styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Adding Content
- Replace placeholder text with your content
- Update images (currently using gradient backgrounds)
- Customize the navigation links
- Add your own blog posts

## 📝 Notes

- All images are currently placeholder gradients
- Forms use client-side JavaScript (no backend integration)
- Map section in contact page is a placeholder
- Newsletter subscription shows alert (ready for backend integration)
- Admin features are frontend-only (no authentication)

## 📄 License

This project is created for educational and portfolio purposes.

---

**Created with ❤️ for Parenting Bliss**





