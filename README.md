# SimpleFin — Fintech Feature Demo

This project is a test assignment for a mobile fintech app that helps users track spending and budget. Built with Expo (React Native) and TypeScript.

## Features

- Fetches and displays a list of recent transactions from a mocked API
- Allows the user to set a monthly spending limit
- Visually indicates whether the user is above or below their budget
- Uses functional components and React hooks (useState, useEffect, etc.)
- TypeScript-first codebase
- Basic unit tests with Jest

## Platform Support

- **iOS** (simulator & device)
- **Android** (emulator & device)
- **Web** (via Expo web)

## How to Run

1. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
2. Start the app:
   ```bash
   yarn start
   # or
   npx expo start
   ```
3. Run tests:
   ```bash
   yarn test
   # or
   npm test
   ```

## How to Run on Each Platform

- **iOS:**
  ```bash
  yarn ios
  # or
  npx expo start --ios
  ```
- **Android:**
  ```bash
  yarn android
  # or
  npx expo start --android
  ```
- **Web:**
  ```bash
  yarn web
  # or
  npx expo start --web
  ```

## Project Structure

- `app/` — App entry and navigation
- `src/entities/` — Business logic (transactions, settings)
- `src/features/` — UI features (header, spending, transactions)
- `src/shared/` — Shared utilities, API, UI components

## Theming & Design

- **Dynamic color scheme support:**  
  The app automatically adapts to the system's light or dark mode using a custom ThemeProvider and hooks. All main UI components (e.g., ThemedView, ThemedText) use theme-aware colors and styles for a consistent look and feel.

- **Custom typography system:**  
  Consistent, scalable text styles across the app, with responsive font sizes and line heights.

- **Adaptive layout:**  
  Uses scaling utilities for responsive sizing on different devices, ensuring the UI looks great on any screen.

- **Reusable themed components:**  
  ThemedView, ThemedText, and others make it easy to build UI that always respects the current theme.

## What Makes This Project Stand Out

- Clean, modular architecture (entities/features/shared separation)
- TypeScript everywhere
- Unit-tested core utilities
- Easily extendable for new features, themes, or platforms

## What is Done

- All core requirements from the assignment are implemented
- Mocked API for transactions
- Monthly spending limit logic
- Budget status indicator (above/below)
- TypeScript everywhere
- Unit tests for key utilities (date, number formatting)

## What Can Be Improved

- Add offline support and error handling for API fetches
- Add persistent storage (e.g., AsyncStorage) for transactions and spending limit
- Expand test coverage (UI, business logic, edge cases)
- Add E2E/integration tests
- Improve UI/UX with a design system or UI library
- Add user authentication and real API integration

## Assignment Prompt

> Build a small React Native app (Expo or Bare) that:
>
> - Fetches and displays a list of recent transactions from a mocked API
> - Lets the user set a monthly spending limit
> - Visually indicates whether they're above/below budget
> - Uses functional components and modern hooks
> - Uses TypeScript
> - Includes basic unit tests (e.g. using Jest)

## Requirements

- Node.js >= 18
- Yarn or npm
- Expo CLI (install globally with `npm install -g expo-cli` if needed)
- For iOS: Xcode (for simulator)
- For Android: Android Studio (for emulator)

---
