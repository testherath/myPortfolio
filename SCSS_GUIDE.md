# SCSS Setup Guide

## Overview
This project now uses **Sass/SCSS** for styling with a powerful responsive mixin system.

## File Structure
```
src/
├── styles/
│   ├── _variables.scss    # Color variables and theme tokens
│   ├── _mixins.scss        # Responsive breakpoint mixins
│   └── _example-component.scss  # Example usage
├── index.scss              # Main stylesheet (converted from CSS)
└── main.jsx                # Imports index.scss
```

## How to Use Mixins in Your Components

### 1. Create a Component SCSS File
Create a new `.scss` file for your component styles:

```scss
// src/components/MyComponent.scss
@import '../styles/mixins';
@import '../styles/variables';

.my-component {
  margin-left: 50px;
  padding: 2rem;
  
  // Apply responsive styles using the mixin
  @include breakpoint(md) {
    margin-left: 0px !important;
    padding: 1.5rem;
  }
  
  @include breakpoint(sm) {
    margin-left: 0px !important;
    padding: 1rem;
  }
}
```

### 2. Import the SCSS File in Your Component
```jsx
// src/components/MyComponent.jsx
import './MyComponent.scss';

function MyComponent() {
  return (
    <div className="my-component">
      {/* Your component content */}
    </div>
  );
}

export default MyComponent;
```

## Available Breakpoints

The `breakpoint` mixin supports the following device sizes:

| Breakpoint | Media Query |
|------------|-------------|
| `xxl` | `min-width: 1600px` |
| `xl` | `min-width: 1200px` and `max-width: 1599px` |
| `lg` | `min-width: 1151px` and `max-width: 1199px` |
| `lmd` | `min-width: 992px` and `max-width: 1150px` |
| `md` | `min-width: 768px` and `max-width: 991px` |
| `sm` | `max-width: 767px` |
| `xs` | `max-width: 375px` |
| `xxs` | `min-width: 320px` and `max-width: 374px` |
| `iphone-p-5` | iPhone 5, 5S, 5C, 5SE Portrait |
| `iphone-p-6-plus` | iPhone 6+, 7+, 8+ Portrait |

## Usage Examples

### Example 1: Basic Responsive Padding
```scss
.hero-section {
  padding: 4rem;
  
  @include breakpoint(md) {
    padding: 2rem;
  }
  
  @include breakpoint(sm) {
    padding: 1rem;
  }
}
```

### Example 2: Responsive Layout
```scss
.container {
  display: flex;
  gap: 2rem;
  
  @include breakpoint(md) {
    flex-direction: column;
    gap: 1rem;
  }
}
```

### Example 3: Typography Scaling
```scss
.title {
  font-size: 3rem;
  
  @include breakpoint(lg) {
    font-size: 2.5rem;
  }
  
  @include breakpoint(md) {
    font-size: 2rem;
  }
  
  @include breakpoint(sm) {
    font-size: 1.5rem;
  }
}
```

### Example 4: Using Variables
```scss
@import '../styles/variables';

.card {
  background: $card-bg;
  color: $light;
  border: 1px solid $primary;
  
  &:hover {
    background: $primary;
    color: $dark;
  }
}
```

## Available Variables

### Colors
- `$primary`: #7dd3fc (Sky Blue)
- `$primary-dark`: #0ea5e9 (Darker Sky Blue)
- `$secondary`: #f472b6 (Pink)
- `$dark`: #0f172a (Dark Blue)
- `$darker`: #0d1224 (Darker Blue)
- `$light`: #f8fafc (Light Gray)
- `$muted`: #94a3b8 (Muted Gray)
- `$card-bg`: rgba(30, 41, 59, 0.4) (Card Background)
- `$glass`: rgba(255, 255, 255, 0.05) (Glass Effect)
- `$gradient`: linear-gradient(135deg, #667eea 0%, #764ba2 100%)

## Benefits of SCSS

1. **Nested Selectors**: Write cleaner, more organized CSS
2. **Variables**: Reuse colors, sizes, and other values
3. **Mixins**: Create reusable responsive patterns
4. **Modularity**: Split styles into multiple files
5. **Better Maintainability**: Easier to update and scale

## Development

The dev server automatically compiles SCSS to CSS. No additional configuration needed!

```bash
npm run dev
```

Vite handles SCSS compilation automatically when you import `.scss` files.

## Migration Notes

- The original `index.css` has been converted to `index.scss`
- All existing styles are preserved
- Responsive media queries now use the mixin system
- You can gradually migrate component styles to use SCSS features

## Tips

1. Always import mixins and variables at the top of your SCSS files
2. Use the `&` symbol for nested selectors (e.g., `&:hover`, `&.active`)
3. Leverage SCSS nesting for cleaner code structure
4. Use variables for consistent theming
5. Create component-specific SCSS files for better organization
