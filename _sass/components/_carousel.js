document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#results-carousel');
    const dragBar = document.querySelector('.drag-bar');
    const dragHandle = document.querySelector('.drag-handle');
    const previewImages = document.querySelectorAll('.preview-image');
    const items = carousel.querySelectorAll('.item');
    const videos = carousel.querySelectorAll('video');
    let isDragging = false;
    let startX, startLeft;
    let currentIndex = 0;
    let autoPlayInterval;
    let videoLoadQueue = [];

    // Preload next video in the background
    function preloadNextVideo(index) {
        const nextIndex = (index + 1) % videos.length;
        const nextVideo = videos[nextIndex];
        
        if (nextVideo.readyState < 2) {
            nextVideo.load();
            nextVideo.preload = 'metadata';
        }
    }

    function showItem(index) {
        // Ensure index is within bounds
        index = Math.max(0, Math.min(index, items.length - 1));
        
        // Update carousel position with smooth transition
        carousel.style.transform = `translateX(-${index * 100}%)`;
        
        // Update videos with optimized loading strategy
        videos.forEach((video, i) => {
            if (i === index) {
                // Current video
                if (video.readyState < 2) {
                    video.load();
                }
                video.play().catch(e => console.log('Autoplay prevented:', e));
                video.setAttribute('data-loaded', 'true');
            } else if (i === (index + 1) % videos.length) {
                // Next video - preload
                preloadNextVideo(index);
            } else {
                // Other videos - pause and reset
                video.pause();
                video.currentTime = 0;
                video.removeAttribute('data-loaded');
            }
        });
        
        // Update preview images
        previewImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        
        // Update drag handle position
        dragHandle.style.left = `${index * (100 / items.length)}%`;
        
        currentIndex = index;
    }

    // Handle drag interactions with debouncing
    let dragTimeout;
    dragHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - dragHandle.offsetLeft;
        startLeft = dragHandle.offsetLeft;
        document.body.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        clearTimeout(dragTimeout);
        dragTimeout = setTimeout(() => {
            const dragBarWidth = dragBar.offsetWidth;
            const newLeft = Math.max(0, Math.min(e.clientX - startX, dragBarWidth - dragHandle.offsetWidth));
            const newIndex = Math.round((newLeft / dragBarWidth) * items.length);
            
            if (newIndex !== currentIndex) {
                showItem(newIndex);
            }
        }, 16); // ~60fps
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            document.body.style.cursor = '';
            clearTimeout(dragTimeout);
        }
    });

    // Handle preview image clicks
    previewImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showItem(index);
            resetAutoPlay();
        });
    });

    // Auto-play functionality with visibility check
    function startAutoPlay() {
        if (document.hidden) return;
        
        autoPlayInterval = setInterval(() => {
            if (!document.hidden) {
                const nextIndex = (currentIndex + 1) % items.length;
                showItem(nextIndex);
            }
        }, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoPlayInterval);
            videos.forEach(video => video.pause());
        } else {
            startAutoPlay();
            if (videos[currentIndex]) {
                videos[currentIndex].play().catch(e => console.log('Autoplay prevented:', e));
            }
        }
    });

    // Touch support for mobile devices with improved performance
    let touchStartX = 0;
    let touchEndX = 0;
    let touchTimeout;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearTimeout(touchTimeout);
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                showItem(currentIndex + 1);
            } else {
                showItem(currentIndex - 1);
            }
            resetAutoPlay();
        }
    }

    // Initialize with preloading
    showItem(0);
    preloadNextVideo(0);
    startAutoPlay();

    // Pause autoplay when hovering over carousel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}); 