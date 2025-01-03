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
        { url: 'https://drive.google.com/file/d/1ndYT2Yb7HAgmNXtHmgNY85E8CCfMuCvY/view', title: 'Project 1', thumbnail: '/thumbnails/projectone.png' },
        { url: 'https://drive.google.com/file/d/1VIE4uCbyi3SW7f4VoNF-m_6wEHujcLrU/view', title: 'Project 2', thumbnail: '/thumbnails/project2.png' },
        { url: 'https://drive.google.com/file/d/1V2epZujQsBRa7334c2G8kZymZvamsUll/view', title: 'Project 3', thumbnail: '/thumbnails/project3.png' },
        { url: 'https://drive.google.com/file/d/1UWcgvIqVCqRKKbohRm5nzK9CJDPqMuTP/view', title: 'Project 4', thumbnail: '/thumbnails/project4.png' },
        { url: 'https://drive.google.com/file/d/1VSe97E3-8M6Pm1Whfa6LjDBK1-sl9tYv/view', title: 'Project 5', thumbnail: '/thumbnails/project5.png' },
        { url: 'https://drive.google.com/file/d/1VsOISFEAtJzHbLKI-6RreE7qoA8dXN-z/view', title: 'Project 6', thumbnail: '/thumbnails/project7.png' },
        { url: 'https://drive.google.com/file/d/1VrCgOtePotJl3FPFbA571wJ_NN82Z2uc/view', title: 'Project 7', thumbnail: '/thumbnails/project8.png' },
        { url: 'https://drive.google.com/file/d/1V-PVR9ESMRZuqyrYjHhAq3MsV-r_qQU8/view', title: 'Project 8', thumbnail: '/thumbnails/project9.png' },
        { url: 'https://drive.google.com/file/d/1V8sirf91C87XUGbrxIz3_R0Hz6Nw_CHo/view', title: 'Project 9', thumbnail: '/thumbnails/project10.png' },
        { url: 'https://drive.google.com/file/d/1Vu3ElV3F0EO_NU3n2z4kC7_S4a3EHhsL/view', title: 'Project 10', thumbnail: '/thumbnails/project11.png' },
        { url: 'https://drive.google.com/file/d/168hjwAOcYNb9Pvt-F2659azGTvSsQLoO/view', title: 'Project 11', thumbnail: '/thumbnails/project13.png' },
        { url: 'https://drive.google.com/file/d/1Seh66kw59ejNiwB3gqiBoguWMZ5_3cTk/view', title: 'Project 14', thumbnail: '/thumbnails/project14.png' },
        { url: 'https://drive.google.com/file/d/1SkPbYuovEANbxMBSNu3Z5m245V5OKt8d/view', title: 'Project 15', thumbnail: '/thumbnails/project15.png' },
        { url: 'https://drive.google.com/file/d/1nhh8dTAoA2wCKpBxaul01mghygi7KFFE/view', title: 'Project 16', thumbnail: '/thumbnails/project15.png' },
        { url: 'https://drive.google.com/file/d/1noKgrsDo1xNz1ZO0OPnKIR8LBsXOQFMf/view', title: 'Project 17', thumbnail: '/thumbnails/project15.png' },
    ];

    let currentVideoIndex = 0; // Track the current video index

    // Function to open video modal
    function openVideoModal(videoUrl) {
        const fileId = videoUrl.split('/')[5];
        const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        videoPlayer.src = embedUrl;
        modal.style.display = 'flex'; // Show modal
    }

    // Function to load the current video
    function loadCurrentVideo() {
        const videoUrl = videos[currentVideoIndex].url;
        openVideoModal(videoUrl);
    }

    // Previous button functionality
    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentVideoIndex > 0) {
            currentVideoIndex--;
            loadCurrentVideo();
        }
    });

    // Next button functionality
    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentVideoIndex < videos.length - 1) {
            currentVideoIndex++;
            loadCurrentVideo();
        }
    });

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

    // Add debouncing for scroll events
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, arguments), wait);
        };
    }

    // Replace scroll event listener with debounced version
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }));

    // Close video modal
    closeBtn.addEventListener('click', closeVideoModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    function closeVideoModal() {
        modal.style.display = 'none'; // Hide the modal
        videoPlayer.src = ''; // Reset the video source
    }

    // Sample motion graphics data
    const motionGraphics = [
        { 
            url: 'https://drive.google.com/file/d/1VIE4uCbyi3SW7f4VoNF-m_6wEHujcLrU/view', 
            title: 'Logo Animation', 
            thumbnail: '/thumbnails/project2.png' 
        },
        { 
            url: 'https://drive.google.com/file/d/1UWcgvIqVCqRKKbohRm5nzK9CJDPqMuTP/view', 
            title: 'Kinetic Typography', 
            thumbnail: '/thumbnails/project4.png' 
        },
        { 
            url: 'https://drive.google.com/file/d/1VSe97E3-8M6Pm1Whfa6LjDBK1-sl9tYv/view', 
            title: 'Animated Infographic', 
            thumbnail: '/thumbnails/project5.png' 
        }
    ];

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Populate motion graphics grid
    const motionGrid = document.getElementById('motionGrid');
    motionGraphics.forEach((motion, index) => {
        const motionCard = document.createElement('div');
        motionCard.className = 'video-card';
        motionCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${motion.thumbnail}" alt="${motion.title}">
                <button class="play-button" aria-label="Play ${motion.title}">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="video-info">
                <h3>${motion.title}</h3>
            </div>
        `;
        motionGrid.appendChild(motionCard);

        const playButton = motionCard.querySelector('.play-button');
        playButton.addEventListener('click', () => openVideoModal(motion.url));
    });

    // Add this to your existing DOMContentLoaded event listener
    document.querySelectorAll('.portfolio h2 span').forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });
});

function updateTheme() {
    const now = new Date();
    const hour = now.getHours();
    const body = document.body;

    // Remove all time-based classes first
    body.classList.remove('morning', 'afternoon', 'evening', 'night');

    // Add appropriate class based on time
    if (hour >= 5 && hour < 12) {
        body.classList.add('morning');
    } else if (hour >= 12 && hour < 17) {
        body.classList.add('afternoon');
    } else if (hour >= 17 && hour < 20) {
        body.classList.add('evening');
    } else {
        body.classList.add('night');
    }
}

// Update theme initially
updateTheme();

// Update theme every minute
setInterval(updateTheme, 60000);