# NAGP Online Shopping - Frontend

A modern, microservice-based e-commerce frontend built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **User Authentication** - Register, login, and profile management
- **Product Catalog** - Browse products with filters and search
- **Shopping Cart** - Add, update, and remove items
- **Order Management** - Place and track orders
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Type Safety** - Full TypeScript support
- **Modern UI** - Built with Tailwind CSS

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+

## 🛠️ Installation

1. Clone the repository:
```bash
cd /path/to/project/Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.development .env
```

4. Update `.env` with your API endpoint:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The app will run at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── api/              # API service layer
├── components/       # Reusable UI components
│   ├── common/       # Generic components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── context/          # React Context providers
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── types/            # TypeScript definitions
├── utils/            # Utility functions
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 🔑 Key Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Query** - Server state management

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
Configuration in `tailwind.config.js`

### TypeScript
Configuration in `tsconfig.json`

### Vite
Configuration in `vite.config.ts`

## 📖 Documentation

See [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for detailed development documentation.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

MIT License

---

**Need Help?** Check the [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for detailed explanations.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
