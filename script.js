document.addEventListener('DOMContentLoaded', function() {
    const celestialContainer = document.querySelector('.celestial-container');
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const body = document.body; // Reference to the body element
    const heading = document.querySelector('.hero h1'); // Reference to the h1 element

    // Set a consistent size for the sun and moon
    const sunMoonSize = '400px'; // Size for all times

    function updateCelestialBody() {
        const now = new Date();
        const hour = now.getHours();

        celestialContainer.classList.remove('morning', 'afternoon', 'evening', 'night');
        heading.classList.remove('night-text'); // Remove night class initially

        // Set the size for sun and moon
        sun.style.width = sunMoonSize;
        sun.style.height = sunMoonSize;
        moon.style.width = sunMoonSize;
        moon.style.height = sunMoonSize;

        if (hour >= 5 && hour < 12) { // Morning
            celestialContainer.classList.add('morning');
            sun.style.opacity = 1; // Fully visible
            sun.style.backgroundColor = '#FFB74D'; // Softer morning glow
            sun.style.boxShadow = '0 0 50px #FFB74D'; // Morning glow
            moon.style.opacity = 0; // Invisible
            body.style.backgroundColor = '#87CEEB'; // Light blue for morning
        } else if (hour >= 12 && hour < 17) { // Afternoon
            celestialContainer.classList.add('afternoon');
            sun.style.opacity = 1; // Fully visible
            sun.style.backgroundColor = '#FFA500'; // Bright afternoon glow
            sun.style.boxShadow = '0 0 100px #FFA500, 0 0 150px #FF4500'; // Intense glow
            moon.style.opacity = 0; // Invisible
            body.style.backgroundColor = '#87CEEB'; // Light blue for afternoon
        } else if (hour >= 17 && hour < 20) { // Evening
            celestialContainer.classList.add('evening');
            sun.style.opacity = 0.8; // Slightly transparent
            sun.style.backgroundColor = '#FF4500'; // Warm evening glow
            sun.style.boxShadow = '0 0 50px #FF4500'; // Evening glow
            moon.style.opacity = 0; // Invisible
            body.style.backgroundColor = '#FFDEAD'; // Light peach for evening
        } else { // Night (8 PM - 4:59 AM)
            celestialContainer.classList.add('night');
            sun.style.opacity = 0; // Invisible
            moon.style.opacity = 1; // Fully visible
            body.style.backgroundColor = '#000000'; // Change to a darker background for night
            heading.classList.add('night-text'); // Add night class for orange text
        }
    }

    // Update initially
    updateCelestialBody();

    // Update every minute
    setInterval(updateCelestialBody, 60000);
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const videoGrid = document.getElementById('videoGrid');
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeBtn = document.querySelector('.close');

    // Sample video data
    const videos = [
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 1', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1VIE4uCbyi3SW7f4VoNF-m_6wEHujcLrU/view', title: 'Project 2', thumbnail: '/thumbnails/project2.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 3', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 4', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 5', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 6', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 7', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 8', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 9', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 10', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 11', thumbnail: '/thumbnails/project1.png' },
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/view', title: 'Project 12', thumbnail: '/thumbnails/project1.png' },
    ];

    // Populate video grid
    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <button class="play-button" aria-label="Play ${video.title}">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
            </div>
        `;
        videoGrid.appendChild(videoCard);

        const playButton = videoCard.querySelector('.play-button');
        playButton.addEventListener('click', () => openVideoModal(video.url));
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sticky navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Open video modal
    function openVideoModal(videoUrl) {
        // Extract the file ID from the URL
        const fileId = videoUrl.split('/')[5];
        // Construct the correct embed URL
        const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        videoPlayer.src = embedUrl;
        modal.style.display = 'block';
    }

    // Close video modal
    closeBtn.addEventListener('click', closeVideoModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    function closeVideoModal() {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
});
