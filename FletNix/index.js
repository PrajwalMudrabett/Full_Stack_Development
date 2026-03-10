let defaultval = "marvel";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let watchHistory = JSON.parse(localStorage.getItem('watchHistory')) || [];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
    name: 'Guest User',
    email: 'guest@fletnix.com'
};

// Initialize profile on load
window.addEventListener('DOMContentLoaded', function() {
    updateProfileDisplay();
    loadPopularMovies();
    setupNavigation();
});

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Show different sections
function showSection(section) {
    const heroSection = document.getElementById('heroSection');
    const homeSection = document.getElementById('homeSection');
    const tvshowsSection = document.getElementById('tvshowsSection');
    const moviesSection = document.getElementById('moviesSection');
    const mylistSection = document.getElementById('mylistSection');
    
    // Hide all sections
    homeSection.style.display = 'none';
    tvshowsSection.style.display = 'none';
    moviesSection.style.display = 'none';
    mylistSection.style.display = 'none';
    
    // Show hero only on home
    if (section === 'home') {
        heroSection.style.display = 'flex';
        homeSection.style.display = 'block';
    } else {
        heroSection.style.display = 'none';
        
        if (section === 'tvshows') {
            tvshowsSection.style.display = 'block';
            loadTVShows();
        } else if (section === 'movies') {
            moviesSection.style.display = 'block';
            loadPopularMovies();
        } else if (section === 'mylist') {
            mylistSection.style.display = 'block';
            loadMyList();
        }
    }
}

// Load TV Shows
async function loadTVShows() {
    const container = document.getElementById('tvshowsGrid');
    container.innerHTML = '<p class="initial-message">Loading TV shows...</p>';
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=series&type=series&apikey=f0a1f7fe`);
        const data = await response.json();
        
        if (data.Search) {
            displayMovieGrid(data.Search, 'tvshowsGrid');
        } else {
            container.innerHTML = '<p class="initial-message">No TV shows found</p>';
        }
    } catch (error) {
        console.error('Error loading TV shows:', error);
        container.innerHTML = '<p class="initial-message">Error loading TV shows</p>';
    }
}

// Load Popular Movies
async function loadPopularMovies() {
    const container = document.getElementById('moviesGrid');
    container.innerHTML = '<p class="initial-message">Loading movies...</p>';
    
    const movieSearches = ['batman', 'spider', 'star wars', 'harry potter'];
    const randomSearch = movieSearches[Math.floor(Math.random() * movieSearches.length)];
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${randomSearch}&type=movie&apikey=f0a1f7fe`);
        const data = await response.json();
        
        if (data.Search) {
            displayMovieGrid(data.Search, 'moviesGrid');
        } else {
            container.innerHTML = '<p class="initial-message">No movies found</p>';
        }
    } catch (error) {
        console.error('Error loading movies:', error);
        container.innerHTML = '<p class="initial-message">Error loading movies</p>';
    }
}

// Load My List (Favorites)
function loadMyList() {
    const container = document.getElementById('mylistGrid');
    
    if (favorites.length === 0) {
        container.innerHTML = '<p class="initial-message">Your favorites list is empty. Add movies to see them here!</p>';
        return;
    }
    
    displayMovieGrid(favorites, 'mylistGrid');
}

// Display movie grid helper function
function displayMovieGrid(movies, containerId) {
    const container = document.getElementById(containerId);
    let html = '';
    
    movies.forEach(movie => {
        html += `
            <div class="moviecard" onclick="showMovieDetail('${movie.imdbID}')">
                <div class="movieimg">
                    <img src="${movie.Poster === 'N/A' ? 'https://via.placeholder.com/200x300/1f1f1f/808080?text=No+Image' : movie.Poster}" alt="${movie.Title}">
                </div>
                <div class="movie-info">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Search icon toggle
document.getElementById('searchIcon').addEventListener('click', function() {
    showSection('home');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-section="home"]').classList.add('active');
    document.getElementById('searchhere').focus();
});

// Update profile display
function updateProfileDisplay() {
    document.getElementById('userName').textContent = userProfile.name;
    document.getElementById('userEmail').textContent = userProfile.email;
    document.getElementById('profileName').value = userProfile.name;
    document.getElementById('profileEmail').value = userProfile.email;
}

// Save profile
document.getElementById('saveProfileBtn').addEventListener('click', function() {
    const name = document.getElementById('profileName').value.trim();
    const email = document.getElementById('profileEmail').value.trim();
    
    if (name && email) {
        userProfile = { name, email };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        updateProfileDisplay();
        alert('Profile saved successfully!');
    }
});

// Profile dropdown toggle
document.getElementById('userIcon').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('profileDropdown');
    const userIcon = document.getElementById('userIcon');
    if (!dropdown.contains(e.target) && e.target !== userIcon) {
        dropdown.classList.remove('active');
    }
});

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('profileDropdown').classList.remove('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
}

// Profile modal
document.getElementById('viewProfileBtn').addEventListener('click', function() {
    openModal('profileModal');
    displaySearchHistory();
});

document.getElementById('closeProfileModal').addEventListener('click', function() {
    closeModal('profileModal');
});

// Favorites modal
document.getElementById('viewFavoritesBtn').addEventListener('click', function() {
    openModal('favoritesModal');
    displayFavorites();
});

document.getElementById('closeFavoritesModal').addEventListener('click', function() {
    closeModal('favoritesModal');
});

// History modal
document.getElementById('viewHistoryBtn').addEventListener('click', function() {
    openModal('historyModal');
    displayWatchHistory();
});

document.getElementById('closeHistoryModal').addEventListener('click', function() {
    closeModal('historyModal');
});

// Close movie detail modal
document.getElementById('closeMovieModal').addEventListener('click', function() {
    closeModal('movieDetailModal');
});

// Close video player modal
document.getElementById('closeVideoModal').addEventListener('click', function() {
    closeModal('videoPlayerModal');
    stopVideo();
});

// Stop video playback
function stopVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = '';
    videoPlayer.style.display = 'none';
    document.getElementById('videoPlaceholder').style.display = 'flex';
}

// Fullscreen toggle
document.getElementById('fullscreenBtn').addEventListener('click', function() {
    const videoWrapper = document.querySelector('.video-wrapper');
    if (videoWrapper.requestFullscreen) {
        videoWrapper.requestFullscreen();
    } else if (videoWrapper.webkitRequestFullscreen) {
        videoWrapper.webkitRequestFullscreen();
    } else if (videoWrapper.msRequestFullscreen) {
        videoWrapper.msRequestFullscreen();
    }
});

// Close modals on overlay click
document.getElementById('modalOverlay').addEventListener('click', function() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    this.classList.remove('active');
    stopVideo();
});

// Add to search history
function addToSearchHistory(searchTerm) {
    const timestamp = new Date().toLocaleString();
    searchHistory.unshift({ term: searchTerm, time: timestamp });
    if (searchHistory.length > 20) searchHistory.pop();
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

// Display search history
function displaySearchHistory() {
    const container = document.getElementById('searchHistoryList');
    
    if (searchHistory.length === 0) {
        container.innerHTML = '<p class="empty-message">No search history yet</p>';
        return;
    }
    
    let html = '';
    searchHistory.forEach((item, index) => {
        html += `
            <div class="history-item">
                <span>${item.term}</span>
                <span class="history-time">${item.time}</span>
            </div>
        `;
    });
    
    html += '<button class="clear-history-btn" onclick="clearSearchHistory()">Clear History</button>';
    container.innerHTML = html;
}

// Clear search history
function clearSearchHistory() {
    if (confirm('Are you sure you want to clear your search history?')) {
        searchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }
}

// Add to favorites
function addToFavorites(movie) {
    const exists = favorites.find(fav => fav.imdbID === movie.imdbID);
    if (!exists) {
        favorites.unshift(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${movie.Title} added to favorites!`);
    } else {
        alert('Already in favorites!');
    }
}

// Remove from favorites
function removeFromFavorites(imdbID) {
    favorites = favorites.filter(fav => fav.imdbID !== imdbID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

// Display favorites
function displayFavorites() {
    const container = document.getElementById('favoritesGrid');
    
    if (favorites.length === 0) {
        container.innerHTML = '<p class="empty-message">No favorites added yet</p>';
        return;
    }
    
    let html = '';
    favorites.forEach(movie => {
        html += `
            <div class="favorite-card">
                <img src="${movie.Poster === 'N/A' ? 'https://via.placeholder.com/200x300/1f1f1f/808080?text=No+Image' : movie.Poster}" alt="${movie.Title}">
                <button class="remove-favorite-btn" onclick="removeFromFavorites('${movie.imdbID}')">×</button>
                <div class="favorite-card-info">
                    <h4>${movie.Title}</h4>
                    <p>${movie.Year}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Add to watch history
function addToWatchHistory(movie) {
    const exists = watchHistory.find(item => item.imdbID === movie.imdbID);
    if (exists) {
        watchHistory = watchHistory.filter(item => item.imdbID !== movie.imdbID);
    }
    
    movie.watchedAt = new Date().toLocaleString();
    watchHistory.unshift(movie);
    
    if (watchHistory.length > 50) watchHistory.pop();
    localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
}

// Display watch history
function displayWatchHistory() {
    const container = document.getElementById('historyGrid');
    
    if (watchHistory.length === 0) {
        container.innerHTML = '<p class="empty-message">No watch history yet</p>';
        return;
    }
    
    let html = '';
    watchHistory.forEach(movie => {
        html += `
            <div class="history-card" onclick="showMovieDetail('${movie.imdbID}')">
                <img src="${movie.Poster === 'N/A' ? 'https://via.placeholder.com/200x300/1f1f1f/808080?text=No+Image' : movie.Poster}" alt="${movie.Title}">
                <div class="history-card-info">
                    <h4>${movie.Title}</h4>
                    <p>${movie.Year}</p>
                    <p style="font-size: 11px; margin-top: 5px;">${movie.watchedAt}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Show movie detail
async function showMovieDetail(imdbID) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=f0a1f7fe`);
        const movie = await response.json();
        
        if (movie.Response === "True") {
            const isFavorite = favorites.find(fav => fav.imdbID === movie.imdbID);
            
            const content = `
                <div class="movie-detail-header">
                    <div class="movie-detail-poster">
                        <img src="${movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450/1f1f1f/808080?text=No+Image' : movie.Poster}" alt="${movie.Title}">
                    </div>
                    <div class="movie-detail-info">
                        <h2>${movie.Title}</h2>
                        <div class="movie-detail-meta">
                            <span>${movie.Year}</span>
                            <span>${movie.Rated}</span>
                            <span>${movie.Runtime}</span>
                            <span>⭐ ${movie.imdbRating}</span>
                        </div>
                        <p><strong>Genre:</strong> ${movie.Genre}</p>
                        <p><strong>Director:</strong> ${movie.Director}</p>
                        <p><strong>Cast:</strong> ${movie.Actors}</p>
                        <div class="movie-detail-actions">
                            <button class="action-btn watch-btn" onclick='watchMovie(${JSON.stringify(movie)})'>▶ Watch Now</button>
                            <button class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" onclick='toggleFavorite(${JSON.stringify(movie)})'>
                                ${isFavorite ? '✓ In Favorites' : '+ Add to Favorites'}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="movie-detail-plot">
                    <h3>Plot</h3>
                    <p>${movie.Plot}</p>
                </div>
            `;
            
            document.getElementById('movieDetailContent').innerHTML = content;
            openModal('movieDetailModal');
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

// Watch movie
function watchMovie(movie) {
    addToWatchHistory(movie);
    closeModal('movieDetailModal');
    openVideoPlayer(movie);
}

// Open video player
async function openVideoPlayer(movie) {
    document.getElementById('videoTitle').textContent = `Now Playing: ${movie.Title}`;
    
    // Set video info
    const videoInfo = document.getElementById('videoInfo');
    videoInfo.innerHTML = `
        <div class="watching-message">
            ✓ Added to Watch History
        </div>
        <h3>${movie.Title}</h3>
        <p>${movie.Plot || 'No description available.'}</p>
        <div class="video-meta">
            <div class="video-meta-item">
                <label>Year</label>
                <span>${movie.Year}</span>
            </div>
            <div class="video-meta-item">
                <label>Rating</label>
                <span>⭐ ${movie.imdbRating || 'N/A'}</span>
            </div>
            <div class="video-meta-item">
                <label>Runtime</label>
                <span>${movie.Runtime || 'N/A'}</span>
            </div>
            <div class="video-meta-item">
                <label>Genre</label>
                <span>${movie.Genre || 'N/A'}</span>
            </div>
        </div>
    `;
    
    // Try to load trailer from YouTube
    const trailerQuery = `${movie.Title} ${movie.Year} official trailer`;
    try {
        // Note: In a real app, you'd use YouTube API. This is a simplified version.
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(trailerQuery)}`;
        
        // Setup placeholder with click to search
        const placeholder = document.getElementById('videoPlaceholder');
        placeholder.innerHTML = `
            <div class="play-icon">▶</div>
            <p>Click to watch trailer on YouTube</p>
            <p style="font-size: 14px; color: #808080; margin-top: 10px;">Searching: ${movie.Title}</p>
        `;
        
        placeholder.onclick = function() {
            window.open(searchUrl, '_blank');
        };
        
    } catch (error) {
        console.error('Error loading video:', error);
    }
    
    openModal('videoPlayerModal');
}

// Toggle favorite
function toggleFavorite(movie) {
    const exists = favorites.find(fav => fav.imdbID === movie.imdbID);
    if (exists) {
        removeFromFavorites(movie.imdbID);
        closeModal('movieDetailModal');
        alert(`${movie.Title} removed from favorites!`);
    } else {
        addToFavorites(movie);
        showMovieDetail(movie.imdbID);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Get search value from input
function findMovie() {
    let searchMovie = document.getElementById("searchhere");
    let searchVal = searchMovie.value.trim();
    if (searchVal) {
        defaultval = searchVal;
        addToSearchHistory(searchVal);
    }
    console.log("Searching for:", defaultval);
}

// Fetch movies from OMDB API
async function getMovie() {
    try {
        let movies = await fetch(`https://www.omdbapi.com/?s=${defaultval}&apikey=f0a1f7fe`);
        movies = await movies.json();

        let omdMovie = document.getElementById("showmoviedetails");
        omdMovie.innerHTML = "";

        if (!movies.Search) {
            omdMovie.innerHTML = `<p class="initial-message">No movies found. Try another search.</p>`;
            return;
        }

        movies.Search.forEach((movie) => {
            omdMovie.innerHTML += `
            <div class="moviecard" onclick="showMovieDetail('${movie.imdbID}')">
                <div class="movieimg">
                    <img src="${movie.Poster === "N/A" ? "https://via.placeholder.com/200x300/1f1f1f/808080?text=No+Image" : movie.Poster}" alt="${movie.Title}">
                </div>
                <div class="movie-info">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
        document.getElementById("showmoviedetails").innerHTML = `<p class="initial-message">Something went wrong. Please try again later.</p>`;
    }
}

// Attach event listener to search button
document.getElementById("searchbtn").addEventListener("click", function () {
    findMovie();
    getMovie();
});

// Allow Enter key to trigger search
document.getElementById("searchhere").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        findMovie();
        getMovie();
    }
});