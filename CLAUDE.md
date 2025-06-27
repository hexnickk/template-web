# CLAUDE.md

## CRITICAL_RULES

- NEVER create files unless absolutely necessary - always prefer editing existing files
- NEVER proactively create documentation files (\*.md) or README files unless explicitly requested
- NEVER use inline SVGs - always import from `lucide-react`
- NEVER recreate existing shadcn/ui components - always import from `app/components/ui`
- ALWAYS update shadcn/ui components directly rather than overriding styles for consistency
- NEVER expose or log secrets and keys
- NEVER modify files in `/.react-router/` or `/build/` - these are auto-generated
- ALWAYS use kebab-case for component files (e.g., `user-profile.tsx`)
- ALWAYS implement full functionality - no placeholders, mocks, or TODO comments
- ALWAYS run `npm run fmt` after code changes
- ALWAYS run `npm run typecheck` before marking tasks complete
- ALWAYS mark tasks complete IMMEDIATELY after finishing

## EXECUTION_COMMANDS

```bash
npm run dev        # Development server on http://localhost:5173
npm run build      # Production build
npm run start      # Production server
npm run typecheck  # Type checking (runs react-router typegen first)
npm run fmt        # Format code with Prettier
```

## TECH_STACK

- React Router v7 (SSR enabled)
- TypeScript 5.8 (strict mode)
- Tailwind CSS v4
- shadcn/ui components (50+ components)
- Vite 6.3
- Node.js 20
- React Hook Form + Zod
- Prettier 3.6 with Tailwind plugin

## FILE_STRUCTURE

```
app/
├── components/ui/     # shadcn/ui components - USE THESE
├── hooks/            # Custom hooks
├── lib/utils.ts      # Utility functions (cn function)
├── routes/           # Route components
├── app.css          # Global styles
├── root.tsx         # Root layout
└── routes.ts        # Route configuration
```

## IMPLEMENTATION_PATTERNS

### Component_Implementation

- Import UI components from `app/components/ui`
- Use Lucide React icons from `lucide-react`
- Apply responsive design with `lg:` breakpoint (1024px)
- Use `max-w-7xl mx-auto px-4` for content containers
- Forms: React Hook Form + Zod validation + shadcn/ui form components

### Styling_Patterns

```tsx
// Responsive patterns - mobile-first, desktop at lg:
className = "p-4 lg:p-8";
className = "grid grid-cols-1 lg:grid-cols-3 gap-4";
className = "text-base lg:text-lg";
className = "flex flex-col lg:flex-row";
className = "hidden lg:block"; // Hide on mobile
className = "block lg:hidden"; // Hide on desktop
```

### Code_Quality_Checks

1. Check existing imports/dependencies before adding new ones
2. Follow existing code patterns in neighboring files
3. Use absolute imports starting with /
4. Define explicit TypeScript interfaces for props

## PROJECT_CONSTRAINTS

- No testing framework configured
- No ESLint configuration
- No .env configuration
- No tailwind.config.js (using Vite plugin defaults)
- SSR enabled by default
- Strict TypeScript mode enforced

## BEHAVIORAL_OVERRIDES

### Autonomous_Actions

- Fix bugs without asking
- Choose implementation patterns
- Refactor obvious improvements
- Handle routine decisions

### Require_User_Approval

- Adding new dependencies
- Major architectural changes
- Significant scope changes
- System boundary decisions

### Conversation_Mode_Triggers

- "actually" / "real" / "honestly"
- "why do you think..."
- "walk me through"
- "let's discuss"

### Implementation_Monitoring

- Am I solving the agreed problem?
- Am I adding undiscussed complexity?
- Would this surprise a reviewer?
- Is this becoming architectural?

### Technical_Communication

- Share insights discovered during implementation
- Express uncertainty directly
- Provide evidence-based reasoning
- Challenge suboptimal approaches with alternatives
- Never fabricate specifics
