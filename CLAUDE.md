# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React Router v7 application template with Server-Side Rendering (SSR) capabilities, built with TypeScript and styled using Tailwind CSS v4. The project includes a comprehensive UI component library based on shadcn/ui components.

## Technology Stack

- **Framework**: React Router v7 (with SSR support)
- **Runtime**: Node.js 20
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS v4 (with CSS-in-JS configuration)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Build Tools**: Vite 6.3
- **Form Management**: React Hook Form + Zod validation
- **Code Formatting**: Prettier 3.6 with Tailwind CSS plugin
- **Package Manager**: npm

## Common Development Commands

### Core Commands

```bash
# Install dependencies
npm install

# Start development server (with HMR)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run typecheck

# Format code with Prettier
npm run fmt
```

### Development Workflow

1. **Development**: Run `npm run dev` to start the development server on `http://localhost:5173`
2. **Type Generation**: The `typecheck` command runs `react-router typegen` before TypeScript checking
3. **Code Formatting**: Run `npm run fmt` to format all files with Prettier (includes Tailwind CSS class sorting)
4. **Production Build**: `npm run build` creates optimized client and server bundles
5. **Production Server**: `npm run start` serves the built application

## Architecture and Structure

### Directory Structure

```
template-web/
├── app/                      # Application source code
│   ├── components/          # React components
│   │   └── ui/             # shadcn/ui components (50+ components)
│   ├── hooks/              # Custom React hooks
│   │   └── use-mobile.ts   # Mobile detection hook
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Common utilities (cn function, etc.)
│   ├── routes/             # Route components
│   │   └── home.tsx        # Home page route
│   ├── welcome/            # Welcome page assets
│   ├── app.css            # Global styles with Tailwind
│   ├── root.tsx           # Root layout component
│   └── routes.ts          # Route configuration
├── public/                 # Static assets
├── build/                  # Production build output (generated)
│   ├── client/            # Client-side assets
│   └── server/            # Server-side code
├── components.json         # shadcn/ui configuration
├── react-router.config.ts  # React Router configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── Dockerfile             # Multi-stage Docker build
└── package.json           # Project dependencies and scripts
```

### Key Architectural Patterns

#### 1. **React Router v7 Architecture**

- File-based routing with explicit route configuration in `routes.ts`
- SSR enabled by default (configurable in `react-router.config.ts`)
- Type-safe routing with generated types in `.react-router/types/`
- Built-in data loading and meta tags support

#### 2. **Component Organization**

- **UI Components**: Pre-built, accessible components from shadcn/ui
- **Route Components**: Page-level components in `app/routes/`
- **Shared Components**: Reusable components in `app/components/`
- **Layout System**: Root layout in `root.tsx` with error boundaries

#### 3. **Styling Architecture**

- Tailwind CSS v4 with modern CSS features
- CSS custom properties for theming
- Component-specific styles using utility classes
- Animation support via tw-animate-css

#### 4. **Build Pipeline**

- Vite for fast development and optimized production builds
- Separate client and server builds for SSR
- Automatic type generation for routes

#### 5. **Deployment Architecture**

- Multi-stage Docker build for optimal image size
- Separate development and production dependency installation
- Production-ready Node.js server
- Support for various cloud platforms (AWS, GCP, Azure, etc.)

### Configuration Files

#### `react-router.config.ts`

- Controls SSR behavior (enabled by default)
- Can be extended with additional React Router configuration

#### `vite.config.ts`

- Integrates React Router plugin
- Configures Tailwind CSS
- Sets up TypeScript path resolution

#### `tsconfig.json`

- Strict TypeScript configuration
- Module resolution for bundlers
- Path mapping for cleaner imports
- Includes React Router generated types

#### `components.json`

- shadcn/ui configuration
- Style preset: "new-york"
- Component aliases configuration
- Tailwind integration settings

### Development Features

1. **Hot Module Replacement (HMR)**: Instant updates during development
2. **Type Safety**: Full TypeScript support with strict mode
3. **Component Library**: 50+ pre-built, accessible UI components
4. **Form Handling**: Integrated React Hook Form with Zod validation
5. **Responsive Design**: Simplified mobile/tablet and desktop breakpoints
6. **Performance**: Optimized builds with code splitting and tree shaking

### Production Considerations

1. **SSR by Default**: Better SEO and initial load performance
2. **Docker Support**: Production-ready containerization
3. **Optimized Builds**: Separate client/server bundles
4. **Security**: No dev dependencies in production image
5. **Scalability**: Stateless server design for horizontal scaling

### Best Practices

1. **Routing**: Define routes in `routes.ts` for centralized management
2. **Components**: Use shadcn/ui components for consistency
3. **Styling**: Leverage Tailwind utilities and CSS custom properties
4. **Types**: Utilize generated route types for type safety
5. **Forms**: Use React Hook Form with Zod for validation
6. **Errors**: Implement error boundaries for graceful error handling

## UI Development Guidelines

### Component Creation Best Practices

1. **Always Use shadcn/ui Components**: Import from `app/components/ui` - never recreate existing components
2. **File Naming**: Use kebab-case for all component files (e.g., `user-profile.tsx`, `dashboard-layout.tsx`)
3. **Production-Ready Code**: Always implement full functionality - no placeholders, mocks, or TODO comments
4. **Icons**: Use Lucide React icons exclusively from `lucide-react` package

### Styling Guidelines

1. **Color Palette**: Avoid indigo/blue unless specifically requested - use neutral grays and custom brand colors
2. **Responsive Design**: ALWAYS create responsive layouts using Tailwind's responsive prefixes
3. **Background Colors**: When full-page backgrounds are needed, use wrapper elements with Tailwind classes
4. **Animations**: Use `tw-animate-css` for smooth transitions and micro-interactions

### Responsive Design Patterns

1. **Simplified Breakpoints**: Use only `lg:` breakpoint (1024px) to separate mobile/tablet from desktop
2. **Common Patterns**:
   ```tsx
   // Responsive padding
   className="p-4 lg:p-8"
   
   // Responsive grid (mobile/tablet vs desktop)
   className="grid grid-cols-1 lg:grid-cols-3 gap-4"
   
   // Responsive text
   className="text-base lg:text-lg"
   
   // Responsive flex direction
   className="flex flex-col lg:flex-row"
   ```
3. **Container Usage**: Use `max-w-7xl mx-auto px-4` for content centering on large screens
4. **Hidden/Show Elements**: Use `hidden lg:block` or `block lg:hidden` for responsive visibility

### Images and Media

1. **Icons**: Never use inline SVGs - always import from `lucide-react`
2. **Image Optimization**: Set appropriate width/height attributes for performance

### Form Implementation

1. **Structure**: Use React Hook Form with Zod validation for all forms
2. **Components**: Utilize shadcn/ui form components (Input, Select, Checkbox, etc.)
3. **Error Handling**: Display validation errors using the form's error state
4. **Loading States**: Show pending states during form submission

### Accessibility Standards

1. **Semantic HTML**: Use appropriate elements (`main`, `nav`, `header`, `footer`)
2. **ARIA Labels**: Include proper ARIA attributes for interactive elements
3. **Screen Readers**: Use `sr-only` class for screen-reader-only text
4. **Alt Text**: Provide descriptive alt text for all informational images

### Code Organization

1. **Component Structure**: Keep components focused and single-purpose
2. **Utility Functions**: Place shared utilities in `app/lib/utils.ts`
3. **Custom Hooks**: Create reusable hooks in `app/hooks/`
4. **Type Definitions**: Define component props interfaces explicitly

### Common UI Patterns

1. **Layout Components**:
   - Use consistent spacing with Tailwind's spacing scale
   - Apply `max-w-7xl mx-auto` for content centering on large screens
   - Use CSS Grid or Flexbox for complex layouts

2. **Card Components**:
   - Always use shadcn/ui Card components
   - Include proper padding with `p-4` or `p-6`
   - Add subtle shadows with `shadow-sm` or `shadow-md`

3. **Navigation**:
   - Use shadcn/ui NavigationMenu for complex navigation
   - Implement mobile menus with Sheet component
   - Add active states using React Router's NavLink

4. **Data Display**:
   - Use shadcn/ui Table for tabular data
   - Implement loading states with Skeleton components
   - Add empty states with clear messaging

### Performance Optimization

1. **Code Splitting**: Leverage React Router's lazy loading for routes
2. **Image Loading**: Use lazy loading for below-the-fold images
3. **Bundle Size**: Import only needed components from libraries
4. **CSS**: Tailwind's JIT compiler ensures minimal CSS output

### Important Notes

1. **Generated Directories**: Don't modify files in `/.react-router/` or `/build/` - these are auto-generated
2. **Testing**: No testing framework is currently configured in this template
3. **Code Formatting**: Prettier is configured with Tailwind CSS plugin for automatic class sorting
4. **Linting**: No ESLint configuration is present
5. **Environment Variables**: No .env configuration - add as needed for your application
6. **Tailwind Config**: Using default configuration via Vite plugin (no tailwind.config.js file)
