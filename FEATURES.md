# Features Documentation

Complete guide to all features in the Todo Application.

## Table of Contents
- [Core Features](#core-features)
- [Advanced Features](#advanced-features)
- [User Interface](#user-interface)
- [Accessibility](#accessibility)
- [Technical Features](#technical-features)

---

## Core Features

### 1. Create Todos
Create new todos with comprehensive information:

**Fields:**
- **Title** (required, max 100 chars) - Main todo description
- **Description** (optional) - Detailed notes
- **Priority** (low/medium/high) - Importance level
- **Status** (pending/completed) - Current state
- **Due Date** (optional) - Deadline with date picker
- **Categories** (multiple) - Organize by category
- **Tags** (multiple) - Additional classification

**Features:**
- Real-time character counter for title
- Validation with inline error messages
- Tag input with Enter key support
- Date picker with future date selection
- Success message on creation

**Usage:**
1. Fill in the form at the top of the page
2. Click "Create Todo"
3. Form clears automatically on success

---

### 2. Read/View Todos
Display all todos with full information:

**Displayed Information:**
- Title (bold, large text)
- Description (truncated if long)
- Priority badge (color-coded)
- Status badge (pending/completed)
- Due date (formatted: "Today", "Tomorrow", or date)
- Categories (purple pills)
- Tags (gray pills)
- Overdue/Due Soon warnings

**Visual Indicators:**
- 🔴 Red border: Overdue todos
- 🟡 Yellow border: Due soon (within 2 days)
- ✅ Green checkmark: Completed
- ⭕ Gray circle: Pending
- Strikethrough: Completed todo titles

---

### 3. Update/Edit Todos
Modify existing todos:

**How to Edit:**
1. Click "Edit" button on any todo
2. Form populates with current data
3. Make changes
4. Click "Update Todo"

**Features:**
- Scroll to top when editing
- Pre-filled form fields
- Cancel button to abort changes
- Success message on update
- Form returns to create mode after update

---

### 4. Delete Todos
Remove todos with confirmation:

**Delete Process:**
1. Click "Delete" button
2. Confirmation buttons appear
3. Click "Confirm" to delete
4. Click "Cancel" to abort

**Features:**
- Two-step confirmation prevents accidents
- Immediate removal from list
- No undo (by design - confirms user intent)

---

### 5. Toggle Status
Quick status switching:

**How It Works:**
- Click checkbox icon to toggle
- Pending → Completed
- Completed → Pending

**Visual Feedback:**
- Icon changes (circle ⭕ ↔ checkmark ✅)
- Badge updates
- Title strikethrough for completed
- Opacity change for completed todos

---

## Advanced Features

### 6. Drag and Drop Reordering

**Technology:** @dnd-kit library

**Features:**
- Mouse and touch support
- Keyboard navigation (arrow keys)
- Visual feedback during drag
- Smooth animations
- Accessible (ARIA labels)

**How to Use:**
1. Click and hold the grip icon (⋮⋮)
2. Drag to desired position
3. Release to drop
4. Order updates instantly

**Visual Feedback:**
- Lifted shadow during drag
- Semi-transparent dragged item
- Drop indicator
- Smooth position transitions

---

### 7. Search Functionality

**Features:**
- Search by title or description
- Case-insensitive matching
- Debounced input (500ms delay)
- Real-time results
- Clear search button

**How It Works:**
1. Type in search box
2. Results filter automatically
3. Shows matching todos only
4. Clear with X button or filter reset

**Performance:**
- Debounced to reduce re-renders
- Client-side filtering (fast)

---

### 8. Filtering System

**Filter Options:**

**Status Filter:**
- All
- Pending only
- Completed only

**Priority Filter:**
- All
- Low priority
- Medium priority
- High priority

**Category Filter:**
- All categories
- Specific category (dynamically populated)

**Tag Filter:**
- All tags
- Specific tag (dynamically populated)

**Features:**
- Multiple filters work together (AND logic)
- Active filters shown as removable pills
- "Clear All" button resets all filters
- Filters persist until cleared

---

### 9. Statistics Dashboard

**Metrics Displayed:**
- Total tasks count
- Pending tasks count
- Completed tasks count
- Completion percentage
- Visual progress bar

**Features:**
- Real-time updates
- Gradient progress bar
- Icon indicators
- Hover effects on stat cards

---

### 10. Due Date System

**Date Features:**
- Date picker for selection
- Future dates only
- Clear date option
- Format: "MMM dd, yyyy"

**Smart Labels:**
- "Today" for current day
- "Tomorrow" for next day
- "Yesterday" for previous day
- Full date for others

**Warnings:**
- 🔴 OVERDUE: Past due date
- 🟡 DUE SOON: Within 2 days
- Visual border colors match severity

---

## User Interface

### Design System

**Colors:**
```
Priority Colors:
- High: Red (#ef4444)
- Medium: Orange (#f59e0b)
- Low: Green (#22c55e)

Theme Colors:
- Primary: Blue/Indigo gradient
- Background: Light gray (#f9fafb)
- Cards: White with shadows
- Text: Gray scale
```

**Typography:**
- Font: System fonts (native feel)
- Headers: Bold, larger size
- Body: Regular weight
- Small text: 12-14px

**Spacing:**
- Consistent padding/margins
- Tailwind spacing scale
- Responsive gutters

---

### Responsive Design

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Mobile Optimizations:**
- Single column layout
- Stacked filters
- Touch-friendly buttons (44px min)
- Simplified navigation
- Larger tap targets

**Tablet:**
- 2-column todo grid
- Side-by-side filters (2 columns)

**Desktop:**
- 3-column todo grid (optional)
- 4-column filters
- Maximum width container

---

### Loading States

**Spinner:**
- Animated loading icon
- Centered on screen
- "Loading todos..." text

**Empty States:**
- Inbox icon
- "No todos found" message
- Helpful call-to-action

---

### Error Handling

**Error Display:**
- Red banner at top
- Error icon
- User-friendly message
- Dismissible (X button)

**Error Types:**
- Network errors
- Server errors
- Validation errors
- Not found errors

---

## Accessibility

### Keyboard Navigation
- Tab through all interactive elements
- Enter to submit forms
- Space to toggle checkboxes
- Arrow keys for drag-drop
- Escape to cancel modals

### Screen Readers
- ARIA labels on buttons
- Semantic HTML (header, main, footer)
- Alt text on icons
- Role attributes
- Live regions for updates

### Visual Accessibility
- High contrast mode support
- Focus visible indicators (blue ring)
- Color not sole indicator
- Text alternatives for icons
- Readable font sizes (16px+)

### Motor Accessibility
- Large click targets (44px minimum)
- Drag-drop alternative (keyboard)
- No time-limited actions
- Forgiving click areas

---

## Technical Features

### Performance
- React 19 optimizations
- Vite HMR (hot module replacement)
- Debounced search
- Optimized re-renders
- Code splitting potential

### State Management
- Custom `useTodos` hook
- Centralized logic
- Memoized callbacks
- Local state for UI
- Predictable updates

### API Integration
- Axios HTTP client
- Error handling
- Timeout support (10s default)
- Request/response interceptors
- Environment-based URLs

### Code Quality
- ESLint configured
- Consistent formatting
- JSDoc comments
- Clear naming conventions
- Modular structure

### Developer Experience
- Fast HMR
- Clear error messages
- Console logging (dev mode)
- Source maps
- TypeScript-ready structure

---

## Feature Comparison

| Feature | Implemented | Notes |
|---------|-------------|-------|
| CRUD Operations | ✅ | Full support |
| Drag & Drop | ✅ | Touch + mouse |
| Search | ✅ | Debounced |
| Filters | ✅ | Multi-criteria |
| Statistics | ✅ | Real-time |
| Due Dates | ✅ | Smart warnings |
| Validation | ✅ | Client-side |
| Responsive | ✅ | Mobile-first |
| Accessible | ✅ | WCAG compliant |
| Dark Mode | ❌ | Future feature |
| Bulk Actions | ❌ | Future feature |
| Export/Import | ❌ | Future feature |
| Notifications | ❌ | Future feature |
| Offline Mode | ❌ | Future feature |

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ❌ Internet Explorer (not supported)

---

## Known Limitations

1. **Drag order not persisted** - Backend doesn't support order field
2. **No pagination** - All todos loaded at once
3. **Client-side filtering** - Search/filter done in browser
4. **No real-time sync** - Manual refresh needed for multi-user
5. **No offline support** - Requires internet connection

---

For setup instructions, see [SETUP.md](SETUP.md)
For general information, see [README.md](README.md)
