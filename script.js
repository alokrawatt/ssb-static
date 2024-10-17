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
        { url: 'https://drive.google.com/file/d/1Ut0mcx4Or6akitvCUiS76leFQs2pki1b/preview', title: 'Project 1', thumbnail: '/thumbnails/project1.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/preview', title: 'Project 2', thumbnail: '/thumbnails/project2.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/preview', title: 'Project 3', thumbnail: '/thumbnails/project3.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/preview', title: 'Project 4', thumbnail: '/thumbnails/project4.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/preview', title: 'Project 5', thumbnail: '/thumbnails/project5.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_6/preview', title: 'Project 6', thumbnail: '/thumbnails/project6.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_7/preview', title: 'Project 7', thumbnail: '/thumbnails/project7.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_8/preview', title: 'Project 8', thumbnail: '/thumbnails/project8.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_9/preview', title: 'Project 9', thumbnail: '/thumbnails/project9.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_10/preview', title: 'Project 10', thumbnail: '/thumbnails/project10.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_11/preview', title: 'Project 11', thumbnail: '/thumbnails/project11.jpg' },
        { url: 'https://drive.google.com/file/d/YOUR_FILE_ID_12/preview', title: 'Project 12', thumbnail: '/thumbnails/project12.jpg' },
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
    function  openVideoModal(videoUrl) {
        videoPlayer.src = videoUrl.replace('/preview', '/embed?autoplay=1');
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