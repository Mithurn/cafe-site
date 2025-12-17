# Cozy Corner Cafe Website ☕

A beautiful, multi-page React website for a local cafe featuring a home page, menu with filtering, and about us section.

## 🎯 Project Overview

This is a simple yet elegant cafe website built with React that showcases:
- **Home Page**: Welcome section with features and opening hours
- **Menu Page**: Interactive menu with category filtering
- **About Us Page**: Cafe story, mission, and values

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router DOM** - For multi-page navigation
- **CSS3** - For styling and animations
- **HTML5** - For markup

## 📁 Project Structure

```
cafe-website/
├── public/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── Navbar.css
│   │   ├── MenuItem.js     # Individual menu item card
│   │   └── MenuItem.css
│   ├── pages/              # Page components
│   │   ├── Home.js         # Landing page
│   │   ├── Home.css
│   │   ├── Menu.js         # Menu page with filtering
│   │   ├── Menu.css
│   │   ├── About.js        # About us page
│   │   └── About.css
│   ├── App.js              # Main app with routing
│   ├── App.css
│   └── index.js            # Entry point
└── package.json
```

## 🚀 How to Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 💡 Key Features Explained

### State Management
- **Menu.js** uses `useState` to track the selected category
- Filtering logic updates the displayed items based on user selection

### Props Usage
- **MenuItem** component receives `name`, `description`, `price`, and `image` as props
- Parent component (Menu) passes data down to child components

### Multi-Page Navigation
- React Router creates separate routes for each page
- Navbar uses `Link` components for seamless navigation
- Each page is a separate component with its own styling

## 🎨 Design Highlights

- **Color Scheme**: 
  - Brown tones (#2c1810) for a cozy cafe feel
  - Cream (#f4e4c1) for warmth
  - Gold accents (#d4a574) for elegance
  
- **Interactive Elements**:
  - Hover effects on buttons and cards
  - Smooth transitions
  - Category filtering in menu

- **Responsive Design**: Grid layouts that adapt to different screen sizes

## 📝 Code Explanation for Video

### Most Interesting Part: Menu Filtering Logic

The Menu component demonstrates:
1. **State Management**: Tracks which category is selected
2. **Array Filtering**: Shows only items matching the selected category
3. **Props**: Passes data to child components
4. **Dynamic Rendering**: Maps through filtered items to create cards

```javascript
// State tracks current category
const [selectedCategory, setSelectedCategory] = useState('All');

// Filter items based on selection
const filteredItems = selectedCategory === 'All'
  ? menuItems
  : menuItems.filter(item => item.category === selectedCategory);

// Render filtered items
{filteredItems.map(item => (
  <MenuItem key={item.id} {...item} />
))}
```

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect React and deploy

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `build` folder to [netlify.com](https://netlify.com)
3. Your site is live!

### Deploy to GitHub Pages
1. Install gh-pages: `npm install gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/cafe-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## 📊 Flowchart Description

Your flowchart should show:
1. **User Flow**: Home → Menu → About (navigation)
2. **Menu Data Flow**: 
   - menuItems array → filter function → MenuItem components
   - User clicks category → updates state → re-renders filtered items

## 🎬 Video Script Outline

1. **Introduction** (30 sec)
   - "Hi, this is my Cozy Corner Cafe website built with React"
   - Quick overview of all three pages

2. **Demonstration** (1 min)
   - Navigate through Home, Menu, About
   - Show menu filtering in action
   - Highlight responsive design

3. **Code Explanation** (1 min)
   - Show Menu.js component
   - Explain state management for categories
   - Show how props are passed to MenuItem
   - Explain the filtering logic

4. **Conclusion** (30 sec)
   - Why you chose this design
   - What you learned

## 📦 Creating the Zip File

```bash
# Make sure you're in the cafe-website directory
zip -r cafe-website.zip . -x "node_modules/*" -x ".git/*"
```

## ✅ Submission Checklist

- [ ] .zip file of source code (without node_modules)
- [ ] YouTube video (2-3 minutes, unlisted)
- [ ] Flowchart (digital or hand-drawn photo)
- [ ] Live deployment URL (Vercel/Netlify/GitHub Pages)

## 🤝 Credits

Built with ❤️ for the E-Cell Web Development Task

---

Good luck with your submission! 🚀

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
