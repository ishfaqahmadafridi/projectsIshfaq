# 🍕 Food Delivery React Application

A modern, responsive food delivery web application built with React and Vite. This application provides a seamless user experience for browsing food items, managing cart, and placing orders.

## 🌟 Features

- **Browse Food Menu**: Explore a wide variety of food items with images and prices
- **Category Filtering**: Filter food items by categories (Salad, Rolls, Deserts, etc.)
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Login/Register functionality
- **Order Placement**: Complete checkout process with order placement
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean and intuitive user interface

## 🚀 Tech Stack

### Frontend
- **React 19.1.1** - UI Library
- **React Router DOM 7.8.2** - Navigation and routing
- **Vite 7.1.2** - Build tool and dev server
- **CSS3** - Styling

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - Fast Refresh with Babel
- **Hot Module Replacement (HMR)** - Instant updates during development

## 📁 Project Structure

```
frontend/
├── public/                  # Static assets
│   ├── header_img.png
│   └── vite.svg
├── src/
│   ├── assets/             # Images and static files
│   │   ├── admin_assets/   # Admin panel assets
│   │   └── frontend_assets/ # Frontend assets (food images, icons)
│   ├── components/         # Reusable components
│   │   ├── AppDownload/    # App download section
│   │   ├── FoodDisplay/    # Food items grid display
│   │   ├── FoodItem/       # Individual food item card
│   │   ├── Footer/         # Footer component
│   │   ├── Header/         # Hero section
│   │   ├── Login/          # Login/Register modal
│   │   └── Menu/           # Category menu (ExploreMenu)
│   ├── context/            # React Context
│   │   └── StoreContext.jsx # Global state management
│   ├── pages/              # Page components
│   │   ├── Cart/           # Shopping cart page
│   │   ├── Home/           # Home page
│   │   └── Placeorder/     # Order checkout page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ishfaqahmadafridi/projectsIshfaq.git
   cd projectsIshfaq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🗺️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Main landing page with food menu |
| `/cart` | Cart | Shopping cart with order summary |
| `/order` | PlaceOrder | Checkout and order placement |

## 🧩 Key Components

### Components
- **Navbar**: Navigation bar with cart icon and login button
- **Header**: Hero section with search functionality
- **ExploreMenu**: Category menu for filtering food items
- **FoodDisplay**: Grid display of food items
- **FoodItem**: Individual food item card with add/remove buttons
- **AppDownload**: Mobile app download section
- **Footer**: Footer with social links and information
- **Login**: Authentication modal for login/register

### Pages
- **Home**: Complete home page with all components
- **Cart**: Shopping cart management and order summary
- **PlaceOrder**: Delivery information and payment form

### Context
- **StoreContext**: Global state management for cart, food items, and user authentication

## 🎨 Features in Detail

### Shopping Cart
- Add items to cart with quantity control
- Remove items from cart
- Real-time cart total calculation
- Persistent cart data using Context API

### Food Menu
- Browse 32+ food items across 8 categories
- High-quality food images
- Price display
- Category-based filtering

### User Interface
- Clean and modern design
- Responsive layout for all devices
- Smooth animations and transitions
- Interactive UI elements

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### ESLint Configuration
Code quality is maintained using ESLint with React-specific rules. Configuration is in `eslint.config.js`.

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.8.2"
}
```

### Dev Dependencies
```json
{
  "@eslint/js": "^9.33.0",
  "@vitejs/plugin-react": "^5.0.0",
  "eslint": "^9.33.0",
  "vite": "^7.1.2"
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ishfaq Ahmad Afridi**
- GitHub: [@ishfaqahmadafridi](https://github.com/ishfaqahmadafridi)

## 🙏 Acknowledgments

- Food images and assets from various sources
- React and Vite communities for excellent documentation
- All contributors who helped improve this project

---

**Built with ❤️ using React + Vite**
