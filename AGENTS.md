# AGENTS.md - Uriel Guard

## Project Overview
- **Type**: React Native mobile app (Expo)
- **Language**: JavaScript (no TypeScript configured)
- **Entry point**: `app/index.js` → `app/App.js`
- **Working directory for commands**: `app/`

## Commands

### Development
```bash
cd app
npm start           # Start Expo dev server
npm run android     # Run on Android emulator/device
npm run ios         # Run on iOS simulator
npm run web         # Run in web browser
```

### Testing
No test framework is currently configured. If adding tests, use Jest (built into Expo):
```bash
npm install --save-dev jest
npx jest            # Run all tests
npx jest <pattern>  # Run a single test file
```

### Linting / Formatting
No linter or formatter is currently configured. If adding, use ESLint + Prettier:
```bash
npx eslint .        # Lint all files
npx prettier --write .  # Format all files
```

## Code Style Guidelines

### Imports
- Use default imports for React Native core components and Expo modules
- Group imports: React/React Native first, then third-party, then local
- Use relative paths for local imports (`./App`, `../components/Foo`)

### Formatting
- 2-space indentation (Expo default)
- Single quotes for strings and JSX attributes
- Semicolons at end of statements
- Trailing commas in multi-line objects/arrays

### Naming Conventions
- **Components**: PascalCase (`App`, `HomeScreen`)
- **Functions/variables**: camelCase (`handlePress`, `userData`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_RETRIES`)
- **Files**: PascalCase for components (`App.js`), camelCase otherwise (`apiClient.js`)

### Components
- Use functional components with `export default function ComponentName()`
- Define styles with `StyleSheet.create()` at the bottom of the file
- Keep components small and focused; extract reusable pieces

### Types
- No TypeScript configured. Use JSDoc comments for type hints when helpful:
  ```js
  /**
   * @param {string} userId
   * @returns {Promise<Object>}
   */
  ```

### Error Handling
- Use `try/catch` for async operations
- Display errors to users via UI (Alert, error banners)
- Log errors to console during development

### State Management
- Use React `useState`/`useEffect` for local state
- Consider Context API or Zustand for shared state as the app grows

## Project Structure
```
app/
  App.js          # Root component
  index.js        # Entry point (registers root component)
  assets/         # Images, fonts, etc.
  node_modules/   # Dependencies
  package.json    # Dependencies and scripts
```

## Notes
- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` exist
- No ESLint, Prettier, or TypeScript config files exist
- This is an early-stage project; conventions should be established as code is added
- Always run `npm install` after modifying `package.json`
