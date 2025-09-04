# Pokemon Search App

This project is a React application built with Vite. It allows users to search for Pokemon by name and view their details. The app uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data.

## Features

- Search for Pokemon by name.
- View Pokemon details such as name, height, weight, and sprite.
- Display a list of Pokemon with pagination support.
- Query parameters are used to manage state and navigation.

## Technology Stack

- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for fast development and bundling.
- **React Router**: For routing and managing query parameters.
- **PokeAPI**: Public API for Pokemon data.

## Folder Structure

```
src/
├── components/        # Reusable React components
│   ├── PokemonDetails.jsx
│   ├── PokemonList.jsx
│   ├── SearchBar.jsx
├── services/          # API service functions
│   ├── pokemonService.js
├── App.jsx            # Main application component
├── main.jsx           # Entry point for the React app
├── App.css            # Global styles for the app
├── index.css          # Base styles for the app
```

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd react-api-call-query-param-useeffect
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the App**:
   Open your browser and navigate to `http://localhost:5173`.

5. **Build for Production**:
   To create a production build, run:
   ```bash
   npm run build
   ```

6. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
