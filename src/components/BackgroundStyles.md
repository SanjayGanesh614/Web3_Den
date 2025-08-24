# Website Background Styles Analysis

## Overview
The website uses a consistent space-themed background system with multiple layers and effects to create a cohesive Web3 gaming aesthetic.

## Main Background Styles

### 1. Global Body Background
- **Class**: Applied to `<body>` element in `index.css`
- **CSS**: `background: var(--space-gradient);`
- **Definition**: `--space-gradient: linear-gradient(135deg, hsl(240 15% 6%) 0%, hsl(280 30% 15%) 50%, hsl(240 15% 6%) 100%)`
- **Effect**: Dark space gradient from deep purple-black to medium purple and back

### 2. Section Background (`space-background` class)
- **Used in**: Hero, TeamSection, PhotoGallery, Roadmap sections
- **CSS**: 
  ```css
  .space-background {
    background: var(--space-gradient);
    position: relative;
  }
  
  .space-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, hsl(280 100% 70% / 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, hsl(180 100% 70% / 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, hsl(240 100% 50% / 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  ```
- **Effect**: Base gradient + floating particle-like radial gradients for depth

### 3. Glass Morphism Cards
- **Used in**: All card components (TeamSection, Roadmap, PhotoGallery, Modals)
- **CSS**:
  ```css
  .glass-morphism {
    background: hsl(240 15% 8% / 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid hsl(280 100% 70% / 0.2);
  }
  ```
- **Effect**: Semi-transparent dark background with blur effect and neon purple border

### 4. Navigation Background
- **Used in**: Navigation component
- **CSS**: `bg-background/80 backdrop-blur-md border-b border-border/20`
- **Effect**: Semi-transparent header with blur effect and subtle bottom border

### 5. Modal Backgrounds
- **Used in**: CTAModal, Phase1Modal
- **CSS**: `bg-black/80 backdrop-blur-sm`
- **Effect**: Dark overlay with blur effect for modal dialogs

### 6. Special Element Backgrounds
- **Status badges**: Various background colors for different states
- **Feature items**: `bg-primary/20`, `bg-accent/20` for highlighted elements
- **Loading bars**: Gradient backgrounds using primary and accent colors

## How It Works

1. **CSS Variables**: All colors are defined as HSL variables in `:root` for consistency
2. **Layered Approach**: Multiple background layers create depth (base gradient + radial effects)
3. **Transparency**: Extensive use of opacity (`/0.8`, `/0.2`) for modern glass effects
4. **Blur Effects**: `backdrop-filter: blur()` for frosted glass appearance
5. **Gradients**: Both linear and radial gradients for dynamic visual interest

## Color Palette
- **Primary**: Neon Purple (hsl(285 100% 65%))
- **Accent**: Electric Blue (hsl(200 100% 60%))
- **Background**: Deep Space Black (hsl(240 15% 6%))
- **Foreground**: Light Purple-White (hsl(280 20% 95%))

All sections maintain visual consistency while using the same underlying color system and design principles.
