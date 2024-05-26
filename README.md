# The Watch List

Welcome to **The Watch List**! This sleek, responsive React application is your ultimate companion for curating and managing your movie watchlist. With a modern UI and a host of features, The Watch List ensures a seamless and enjoyable experience for browsing and discovering your next cinematic adventure. Whether you're a die-hard movie buff or a casual viewer, this app has got you covered.

## Features

- **Movie List Page**: Browse through a curated collection of movies, sorted by rating and genre.
- **Favorite Movies**: Add movies to your favorites list with a single click.
- **Favorites Page**: View and manage your favorite movies on a dedicated page.
- **Search Functionality**: Real-time search with suggestions appearing as you type.
- **Toast Notifications**: Get notified when a movie is added to or removed from favorites.
- **Clear Favorites**: Easily remove all favorite movies with a single click.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Dark Mode**: Enjoy a sleek dark mode interface.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 16.0.0)
- npm (>= 7.0.0)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/arfazkhan/thewatchlist.git
   cd thewatchlist
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root of your project and add the following:
   ```env
   REACT_APP_MOVIES_API_URL=https://dummyapi.online/api/movies
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Directory Structure

The project follows a well-organized structure:

```
src/
|-- components/          # Reusable components
|-- pages/               # Page components
|-- redux/               # Redux slices and store
|-- styles/              # CSS and Tailwind styles
|-- App.js               # Main App component
|-- index.js             # Entry point
```

## Usage

- **Browse Movies**: Visit the main page to see a list of movies sorted by rating and genre.
- **Search Movies**: Use the search bar to find movies by title.
- **Add to Favorites**: Click the heart icon on a movie card to add it to your favorites list.
- **View Favorites**: Navigate to the "Favorites" page to see all your favorite movies.
- **Remove from Favorites**: On the "Favorites" page, hover over a movie card and click the cross icon to remove it from your favorites list.
- **Clear Favorites**: Use the "Clear Favorites" button to remove all movies from your favorites list.

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Repository**: Click the "Fork" button at the top of this page to create a copy of this repository under your GitHub account.
2. **Clone the Forked Repository**:
   ```bash
   git clone https://github.com/yourusername/the-watch-list.git
   cd the-watch-list
   ```
3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**: Implement your feature or fix.
5. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Add your message here"
   ```
6. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Go to the original repository on GitHub, select the "Pull requests" tab, and click "New pull request".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using **The Watch List**! We hope you enjoy your cinematic journey. For any questions or feedback, please feel free to open an issue or contact the project maintainers.


