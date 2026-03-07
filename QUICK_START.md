# Quick Start Guide - NAGP Shopping Frontend

This guide will help you get the frontend application running on your local machine.

## Step 1: Verify Prerequisites

Check that you have the required software installed:

```bash
# Check Node.js version (should be 18 or higher)
node --version

# Check npm version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## Step 2: Navigate to Frontend Directory

```bash
cd /Users/naresh/Documents/Others/NAGP/EcommerceAssignment/Microservice/Frontend
```

## Step 3: Install Dependencies

This command will install all the required packages:

```bash
npm install
```

This will install:
- React & React DOM
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling
- TypeScript for type safety
- And many more...

## Step 4: Configure Environment

The `.env.development` file is already created with:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

**Note:** This points to the backend API. Make sure your backend is running on port 3000, or update this URL accordingly.

## Step 5: Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v7.3.1  ready in 389 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 6: Open in Browser

Open your web browser and go to:
```
http://localhost:5173
```

You should see the NAGP Shopping homepage!

## Available Pages

Once the app is running, you can navigate to:

- **Home:** `http://localhost:5173/`
- **Products:** `http://localhost:5173/products`
- **Login:** `http://localhost:5173/login`
- **Register:** `http://localhost:5173/register`
- **Cart:** `http://localhost:5173/cart` (requires login)

## Troubleshooting

### Port 5173 is already in use

If you see an error about the port being in use, Vite will automatically try the next available port (5174, 5175, etc.)

### Module not found errors

If you see "Module not found" errors, try:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Tailwind CSS not working

Make sure `tailwind.config.js` and `postcss.config.js` exist in the root directory.

## Development Tips

### Hot Module Replacement (HMR)

Vite supports HMR, which means:
- When you save a file, changes appear instantly in the browser
- No need to manually refresh the page
- State is preserved when possible

### Browser DevTools

1. Open browser DevTools (F12 or Cmd+Option+I on Mac)
2. Check the Console tab for any errors
3. Use the Network tab to monitor API calls
4. Use React DevTools extension for component inspection

## Building for Production

When you're ready to build for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure Overview

```
Frontend/
├── src/
│   ├── api/              ← API calls to backend
│   ├── components/       ← UI components
│   ├── context/          ← Global state (Auth, Cart)
│   ├── pages/            ← Page components
│   ├── types/            ← TypeScript types
│   ├── utils/            ← Helper functions
│   ├── App.tsx           ← Main app with routing
│   └── main.tsx          ← Entry point
├── public/               ← Static assets
├── .env.development      ← Environment variables
├── package.json          ← Dependencies
└── vite.config.ts        ← Vite configuration
```

## Next Steps

### For Backend Integration:

1. **Start your backend server** on port 3000 (or update VITE_API_BASE_URL)
2. **Test API endpoints** using the browser's Network tab
3. **Update mock data** in components with real API calls

### For Learning:

1. **Read DEVELOPMENT_GUIDE.md** - Comprehensive development documentation
2. **Explore components** - Start with simple components in `src/components/common/`
3. **Check types** - Review TypeScript types in `src/types/`
4. **Study state management** - Look at Context providers in `src/context/`

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Install new package
npm install <package-name>

# Update dependencies
npm update
```

## Understanding the Flow

### 1. User Registration Flow
```
User fills Register form → 
Submit → 
authApi.register() → 
Backend API → 
Token saved to localStorage → 
User redirected to home
```

### 2. Adding to Cart Flow
```
User clicks "Add to Cart" → 
addToCart() from useCart hook → 
cartApi.addItem() → 
Backend API → 
Cart state updated → 
Cart icon shows new count
```

### 3. Checkout Flow
```
User goes to Cart → 
Clicks "Checkout" → 
Checkout page → 
Enter shipping info → 
Submit order → 
orderApi.create() → 
Backend API → 
Order confirmation
```

## Important Notes

### Authentication
- Login credentials are stored in localStorage
- Token is automatically attached to API requests
- User is redirected to login if token is invalid

### Cart Management
- Cart is stored on the backend (not localStorage)
- Cart is fetched when user logs in
- Real-time updates when items are added/removed

### Type Safety
- All API responses are typed
- TypeScript will catch errors at compile time
- Use the defined types in `src/types/`

## Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Read the error message carefully
3. Check if the backend is running
4. Review DEVELOPMENT_GUIDE.md for detailed explanations
5. Check Network tab to see if API calls are failing

## Development Best Practices

1. **Always check for TypeScript errors** before committing
2. **Test in multiple browsers** (Chrome, Firefox, Safari)
3. **Use meaningful commit messages**
4. **Keep components small and focused**
5. **Follow the existing code structure**

---

**Congratulations!** You now have a fully functional e-commerce frontend running locally. Start exploring and building! 🎉
