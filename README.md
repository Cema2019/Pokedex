# Pokedex

A React-based Pokedex application that lets users explore and search for Pokémon by name or ID. Deployed using GitHub Pages: [Live Demo](https://cema2019.github.io/Pokedex/).

## Features

- **Pokemon List**: View a list of all Pokémon with their names and images.
- **Search Functionality**: Search for Pokémon by name or ID and view their details, including:
  - Front and back sprite images.
  - Height and weight.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Dark Mode Support**: Automatically adapts to the system's color scheme.

## Tech Stack

- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **Vite**: For fast development and production builds.
- **PokeAPI**: For fetching Pokémon data.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Cema2019/Pokedex.git
   cd Pokedex

2. Install dependencies:
    ```bash
    npm install

3. Start the development server:

    ```bash
    npm run dev
Open your browser at http://localhost:5173.

4. Build and deploy: 
    
    To deploy updates to GitHub Pages:

    ```bash
    npm run build
    npm run deploy

## Usage
### Home Page
- View all Pokémon with their names and sprite images.
- Click on the Search link in the navigation bar to search for a specific Pokémon.

### Search Page
- Enter a Pokémon's name or ID in the search bar.
- Press Enter or click the Search button to view the Pokémon's details.