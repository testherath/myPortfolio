# Quick SCSS Reference

## 🚀 Quick Start

### 1. Create a Component SCSS File
```scss
// src/components/MyComponent.scss
@import '../styles/mixins';
@import '../styles/variables';

.my-component {
  padding: 2rem;
  background: $card-bg;
  
  @include breakpoint(md) {
    padding: 1rem;
  }
}
```

### 2. Import in Your Component
```jsx
// src/components/MyComponent.jsx
import './MyComponent.scss';
```

## 📱 Breakpoint Cheat Sheet

```scss
// Extra Extra Large (1600px+)
@include breakpoint(xxl) { }

// Extra Large (1200px - 1599px)
@include breakpoint(xl) { }

// Large (1151px - 1199px)
@include breakpoint(lg) { }

// Large-Medium (992px - 1150px)
@include breakpoint(lmd) { }

// Medium/Tablet (768px - 991px)
@include breakpoint(md) { }

// Small/Mobile (0 - 767px)
@include breakpoint(sm) { }

// Extra Small (0 - 375px)
@include breakpoint(xs) { }

// Extra Extra Small (320px - 374px)
@include breakpoint(xxs) { }

// iPhone 5 Portrait
@include breakpoint(iphone-p-5) { }

// iPhone 6+ Portrait
@include breakpoint(iphone-p-6-plus) { }
```

## 🎨 Color Variables

```scss
$primary         // #7dd3fc (Sky Blue)
$primary-dark    // #0ea5e9 (Darker Sky Blue)
$secondary       // #f472b6 (Pink)
$dark            // #0f172a (Dark Blue)
$darker          // #0d1224 (Darker Blue)
$light           // #f8fafc (Light Gray)
$muted           // #94a3b8 (Muted Gray)
$card-bg         // rgba(30, 41, 59, 0.4)
$glass           // rgba(255, 255, 255, 0.05)
$gradient        // linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

## 💡 Common Patterns

### Responsive Container
```scss
.container {
  max-width: 1200px;
  padding: 4rem 2rem;
  
  @include breakpoint(md) {
    padding: 2rem 1rem;
  }
  
  @include breakpoint(sm) {
    padding: 1rem;
  }
}
```

### Responsive Grid
```scss
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @include breakpoint(md) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @include breakpoint(sm) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

### Responsive Typography
```scss
.heading {
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

### Nested Selectors with Hover
```scss
.button {
  background: $primary;
  padding: 1rem 2rem;
  
  &:hover {
    background: $primary-dark;
    transform: translateY(-2px);
  }
  
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @include breakpoint(sm) {
    padding: 0.75rem 1.5rem;
  }
}
```

### Responsive Flexbox
```scss
.flex-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  
  @include breakpoint(md) {
    flex-direction: column;
    gap: 1rem;
  }
}
```

## 📝 Best Practices

1. **Always import mixins and variables first**
   ```scss
   @import '../styles/mixins';
   @import '../styles/variables';
   ```

2. **Use nested selectors for related styles**
   ```scss
   .card {
     background: $card-bg;
     
     &:hover {
       background: $primary;
     }
     
     .card-title {
       font-size: 1.5rem;
     }
   }
   ```

3. **Mobile-first or Desktop-first?**
   - This setup uses **max-width** for `sm`, `xs`, `xxs` (mobile-first)
   - Use **min-width** for larger breakpoints (desktop-first)

4. **Avoid deep nesting** (max 3-4 levels)
   ```scss
   // ❌ Too deep
   .parent {
     .child {
       .grandchild {
         .great-grandchild {
           // Too nested!
         }
       }
     }
   }
   
   // ✅ Better
   .parent {
     .child {
       // Styles
     }
   }
   
   .grandchild {
     // Separate rule
   }
   ```

## 🔄 Migration from CSS to SCSS

### Before (CSS)
```css
.component {
  padding: 2rem;
}

.component:hover {
  background: #7dd3fc;
}

@media (max-width: 768px) {
  .component {
    padding: 1rem;
  }
}
```

### After (SCSS)
```scss
.component {
  padding: 2rem;
  
  &:hover {
    background: $primary;
  }
  
  @include breakpoint(md) {
    padding: 1rem;
  }
}
```

## 🎯 Example: Complete Component

```scss
@import '../styles/mixins';
@import '../styles/variables';

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background: $darker;
  
  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    
    .hero-title {
      font-size: 4rem;
      font-weight: 800;
      background: $gradient;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 2rem;
      
      @include breakpoint(lg) {
        font-size: 3rem;
      }
      
      @include breakpoint(md) {
        font-size: 2.5rem;
      }
      
      @include breakpoint(sm) {
        font-size: 2rem;
      }
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      color: $muted;
      margin-bottom: 3rem;
      
      @include breakpoint(md) {
        font-size: 1.25rem;
      }
      
      @include breakpoint(sm) {
        font-size: 1rem;
      }
    }
    
    .hero-cta {
      display: inline-flex;
      gap: 1rem;
      
      .btn {
        padding: 1rem 2rem;
        background: $primary;
        color: $dark;
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:hover {
          background: $primary-dark;
          transform: translateY(-2px);
        }
        
        @include breakpoint(sm) {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
  
  @include breakpoint(md) {
    padding: 3rem 1rem;
  }
  
  @include breakpoint(sm) {
    padding: 2rem 1rem;
  }
}
```

## 🚨 Common Mistakes to Avoid

1. **Forgetting to import mixins/variables**
   ```scss
   // ❌ Won't work
   .component {
     @include breakpoint(md) { } // Error: mixin not found
   }
   
   // ✅ Correct
   @import '../styles/mixins';
   .component {
     @include breakpoint(md) { }
   }
   ```

2. **Using wrong path for imports**
   ```scss
   // ❌ Wrong
   @import './mixins'; // Won't find the file
   
   // ✅ Correct
   @import '../styles/mixins';
   ```

3. **Overusing !important**
   ```scss
   // ❌ Avoid
   .component {
     margin: 0 !important;
   }
   
   // ✅ Better - use specificity
   .component {
     margin: 0;
   }
   ```

## 📚 Resources

- [Sass Documentation](https://sass-lang.com/documentation)
- [SCSS Guide](https://sass-lang.com/guide)
- [Vite SCSS Support](https://vitejs.dev/guide/features.html#css-pre-processors)
