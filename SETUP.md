# Setup Guide - Todo Application

This guide will walk you through setting up and running the Todo Application frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.18.0 or higher recommended)
- **npm** (v10.0.0 or higher) or **yarn**
- **Git** (optional, for version control)
- **Backend API** running on `http://localhost:8080/api/todos`

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 19
- Vite 7
- Tailwind CSS 3
- @dnd-kit (drag and drop)
- Axios
- react-datepicker
- lucide-react

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` to configure your backend API URL:

```env
VITE_API_BASE_URL=http://localhost:8080/api/todos
VITE_API_TIMEOUT=10000
```

**Important:** Make sure your backend API is running before starting the frontend!

### 3. Start Development Server

```bash
npm run dev
```

The application will start at **http://localhost:5173/**

## Available Scripts

### Development

```bash
npm run dev
# or
npm start
```
Starts the Vite development server with hot module replacement (HMR).

### Production Build

```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```
Previews the production build locally before deployment.

### Lint Code

```bash
npm run lint
```
Runs ESLint to check code quality.

## Backend API Setup

The frontend expects the following backend endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos (with optional filters) |
| GET | `/api/todos/:id` | Get single todo by ID |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update existing todo |
| DELETE | `/api/todos/:id` | Delete todo |
| PATCH | `/api/todos/:id/status` | Toggle todo status |

### Backend Requirements

1. **CORS enabled** - Frontend runs on port 5173, backend on 8080
2. **JSON responses** in this format:
   ```json
   {
     "success": true,
     "data": { ... }
   }
   ```
3. **Error responses**:
   ```json
   {
     "success": false,
     "message": "Error description",
     "errors": []
   }
   ```

## Project Structure

```
todo-frontend/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── FilterBar.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── hooks/           # Custom React hooks
│   │   └── useTodos.js
│   ├── utils/           # Utility functions
│   │   └── helpers.js
│   ├── App.jsx          # Main app component
│   ├── index.css        # Tailwind CSS
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── .env                 # Environment variables (not in git)
├── .env.example         # Example environment file
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## Configuration Files

### Tailwind CSS (`tailwind.config.js`)

Configured with custom priority colors:
- Low: Green (#22c55e)
- Medium: Orange (#f59e0b)
- High: Red (#ef4444)

### Vite (`vite.config.js`)

Default Vite + React configuration with HMR enabled.

### PostCSS (`postcss.config.js`)

Configured to work with Tailwind CSS and Autoprefixer.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Required: Backend API URL
VITE_API_BASE_URL=http://localhost:8080/api/todos

# Optional: API request timeout (ms)
VITE_API_TIMEOUT=10000
```

**Note:** Vite requires the `VITE_` prefix for environment variables to be exposed to the client.

## Troubleshooting

### Port 5173 Already in Use

```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Backend Connection Issues

1. Ensure backend is running on port 8080
2. Check CORS is enabled on backend
3. Verify API URL in `.env` file
4. Check browser console for errors

### Dependency Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

### Build Errors

```bash
# Clear dist folder
rm -rf dist

# Rebuild
npm run build
```

## Development Workflow

1. **Make changes** - Edit files in `src/`
2. **Hot reload** - Changes appear instantly (HMR)
3. **Test** - Verify in browser at http://localhost:5173
4. **Lint** - Run `npm run lint` before committing
5. **Build** - Run `npm run build` to create production build

## Production Deployment

### Build for Production

```bash
npm run build
```

This creates optimized files in `dist/`:
- Minified JavaScript
- Optimized CSS
- Compressed assets

### Deploy to Hosting

The `dist/` folder can be deployed to:
- **Netlify** - Drag & drop `dist/` folder
- **Vercel** - Connect GitHub repo
- **GitHub Pages** - Use `gh-pages` package
- **AWS S3** - Upload `dist/` contents
- **Any static hosting** - Serve the `dist/` folder

### Environment Variables in Production

Set production environment variables in your hosting platform:
- Netlify: Site Settings → Environment Variables
- Vercel: Project Settings → Environment Variables
- Others: Refer to hosting documentation

## Testing the Application

### Manual Testing Checklist

- [ ] Create a new todo
- [ ] Edit an existing todo
- [ ] Delete a todo (with confirmation)
- [ ] Toggle todo status
- [ ] Drag and drop to reorder
- [ ] Search todos
- [ ] Filter by status
- [ ] Filter by priority
- [ ] Filter by category
- [ ] Filter by tag
- [ ] Check responsive design on mobile
- [ ] Verify overdue warnings appear
- [ ] Test form validation (empty title)
- [ ] Test title character limit (100 chars)

### Backend Testing

Ensure your backend handles:
- Creating todos with all fields
- Updating todos partially
- Deleting non-existent todos (error handling)
- Invalid data (validation errors)
- CORS preflight requests

## Performance Tips

1. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

2. **Analyze bundle size**
   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. **Use production build** for deployment
   - Minified code
   - Tree-shaking
   - Optimized assets

## Getting Help

- Check [README.md](README.md) for feature documentation
- Review [package.json](package.json) for dependencies
- Inspect browser console for errors
- Check Network tab for API issues

## Next Steps

1. ✅ Backend API running
2. ✅ Frontend installed and running
3. 🎯 Start creating todos!
4. 🎨 Customize styles in `tailwind.config.js`
5. 📦 Deploy to production

Happy coding! 🚀
