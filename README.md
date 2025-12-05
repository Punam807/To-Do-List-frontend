# Todo Application Frontend

A modern, feature-rich Todo Application built with React.js, Tailwind CSS, and drag-and-drop functionality.

![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

### Core Features
- ✅ **CRUD Operations**: Create, Read, Update, and Delete todos
- ✅ **Drag & Drop**: Reorder todos using intuitive drag-and-drop
- ✅ **Status Toggle**: Quick toggle between pending and completed
- ✅ **Priority Levels**: Low, Medium, and High priority with color coding
- ✅ **Categories & Tags**: Organize todos with multiple categories and tags
- ✅ **Due Dates**: Set and track due dates with visual warnings
- ✅ **Form Validation**: Client-side validation with helpful error messages
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Advanced Features
- 🔍 **Search**: Search todos by title or description (debounced)
- 🎯 **Filters**: Filter by status, priority, category, and tags
- 📊 **Statistics**: Real-time stats showing total, pending, and completed todos
- 📈 **Progress Bar**: Visual progress indicator
- ⚠️ **Due Date Warnings**: Highlights overdue and due-soon todos
- 🎨 **Modern UI**: Clean design with smooth animations and transitions
- ⌨️ **Keyboard Support**: Full keyboard navigation support
- 🖱️ **Touch Support**: Touch-friendly on mobile devices

## Technology Stack

- **React 18.3** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **@dnd-kit** - Drag and drop library (accessible & performant)
- **Axios** - HTTP client for API calls
- **react-datepicker** - Date picker component
- **lucide-react** - Modern icon library

## Prerequisites

- Node.js (v20.19+ or v22.12+ recommended)
- npm or yarn
- Backend API running on `http://localhost:8080/api/todos`

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## Backend API Configuration

The application expects a backend API at `http://localhost:8080/api/todos`.

To change the API URL, edit `src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:8080/api/todos';
```

### Backend API Endpoints

The frontend connects to these backend endpoints:

- `GET /api/todos` - Get all todos (supports query params: status, priority, category, tag)
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo
- `PATCH /api/todos/:id/status` - Toggle status

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header with statistics
│   ├── TodoForm.jsx         # Form for creating/editing todos
│   ├── TodoItem.jsx         # Individual todo card with drag support
│   ├── TodoList.jsx         # List container with DnD context
│   └── FilterBar.jsx        # Filters and search controls
├── services/
│   └── api.js               # API service layer (Axios)
├── hooks/
│   └── useTodos.js          # Custom hook for todo state management
├── utils/
│   └── helpers.js           # Utility functions
├── App.jsx                  # Main app component
├── index.css                # Tailwind imports & global styles
└── main.jsx                 # Entry point
```

## Usage Guide

### Creating a Todo

1. Fill in the form at the top of the page
2. **Title** is required (max 100 characters)
3. Add optional description, categories, tags, priority, due date
4. Click "Create Todo"

### Editing a Todo

1. Click the "Edit" button on any todo card
2. The form will populate with the todo's data
3. Make your changes
4. Click "Update Todo" or "Cancel"

### Deleting a Todo

1. Click the "Delete" button on any todo card
2. Confirm by clicking "Confirm" in the confirmation prompt

### Toggling Status

- Click the checkbox/circle icon to toggle between pending and completed

### Drag and Drop Reordering

1. Click and hold the grip icon (6 vertical dots) on any todo
2. Drag to desired position
3. Release to drop

### Filtering Todos

Use the filter bar to:
- Filter by status (All/Pending/Completed)
- Filter by priority (All/Low/Medium/High)
- Filter by category or tag
- Search by title or description
- Clear all filters with one click

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### Application won't start
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### API connection errors
- Ensure backend is running on port 8080
- Check CORS is enabled on backend
- Verify API URL in `src/services/api.js`

## License

MIT License - feel free to use this project for learning or production.

---

**Enjoy using the Todo Application!**
