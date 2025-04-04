document.addEventListener('DOMContentLoaded', () => {
    const modeToggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const typingElement = document.getElementById('typing-effect');
    const visitorCountElement = document.getElementById('visitor-count');
    const musicToggleButton = document.getElementById('music-toggle');
    const backgroundMusic1 = document.getElementById('background-music1');
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-buttons button');
    const langSelect = document.getElementById('language-select'); // Dapatkan elemen dropdown bahasa jika ada
    let isMusicPlaying = false;
    let currentMusic = backgroundMusic1;

    // --- Dark Mode Logic ---
    const applyTheme = (isDark) => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (modeToggleButton) {
            const lightIcon = document.getElementById('light-icon');
            const darkIcon = document.getElementById('dark-icon');
            if (theme === 'dark') {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'inline';
            } else {
                lightIcon.style.display = 'inline';
                darkIcon.style.display = 'none';
            }
        }
    };

    const detectSystemTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme === 'dark');
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDarkMode);
        }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches);
        }
    });

    if (modeToggleButton) {
        modeToggleButton.addEventListener('click', () => {
            const currentIsDark = document.documentElement.getAttribute('data-theme') === 'dark';
            applyTheme(!currentIsDark);
        });
    }

    // --- Visitor Counter Logic ---
    const updateVisitorCount = () => {
        let count = localStorage.getItem('visitorCount');
        count = count ? parseInt(count) + 1 : 1;
        localStorage.setItem('visitorCount', count);
        if (visitorCountElement) {
            visitorCountElement.textContent = count.toLocaleString();
        }
    };

    // --- Typing Effect Logic ---
    const textToType = "WELCOME ( TYPING SCRIPT WITH JS )";
    let charIndex = 0;
    function type() {
        if (typingElement && charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }

    // --- Music Toggle Logic ---
    if (musicToggleButton && backgroundMusic1) {
        musicToggleButton.addEventListener('click', () => {
            if (isMusicPlaying) {
                currentMusic.pause();
                musicToggleButton.textContent = '🔇';
            } else {
                currentMusic.play().then(() => {
                    musicToggleButton.textContent = '🔊';
                }).catch(error => {
                    console.error("Autoplay Gagal:", error);
                    musicToggleButton.textContent = '🔇';
                });
            }
            isMusicPlaying = !isMusicPlaying;
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden && isMusicPlaying) {
                currentMusic.pause();
            }
        });

        if (musicToggleButton) musicToggleButton.textContent = '🔊';
    }

    // --- GitHub Projects Loader ---
    async function loadGitHubProjects() {
        const username = "itzkazuri";
        const repoContainer = document.getElementById("github-projects");

        if (repoContainer) {
            repoContainer.innerHTML = "<p>Loading projects...</p>";
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
                }
                const repos = await response.json();

                // Sembunyikan repo README profile
                const visibleRepos = repos.filter(repo => repo.name !== username);

                if (visibleRepos.length === 0) {
                    repoContainer.innerHTML = "<p>No public projects found.</p>";
                    return;
                }

                repoContainer.innerHTML = "";
                visibleRepos.forEach(repo => {
                    const projectCard = document.createElement("div");
                    projectCard.classList.add("project-card");
                    const language = repo.language ? `<span class="language-tag">${repo.language}</span>` : '';
                    projectCard.innerHTML = `
                        <h3>${repo.name}</h3>
                        ${language}
                        <p>${repo.description || "No description available."}</p>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    `;
                    repoContainer.appendChild(projectCard);
                });
            } catch (error) {
                repoContainer.innerHTML = "<p>Failed to load projects. Check console for details.</p>";
                console.error("Error fetching GitHub repositories:", error);
            }
        }
    }

    // --- IP-Based Language Detection ---
    async function detectUserLocationAndSetLanguage() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) {
                throw new Error('Failed to fetch IP data');
            }
            const data = await response.json();
            const countryCode = data.country_code; // Mendapatkan kode negara pengguna (ID, JP, dll.)

            let lang;
            if (countryCode === 'ID') {
                lang = 'id';
            } else if (countryCode === 'JP') {
                lang = 'ja';
            } else {
                lang = 'en'; // Bahasa default
            }

            // Simpan preferensi bahasa di localStorage (opsional, bisa dihilangkan jika i18n Anda menanganinya)
            localStorage.setItem('language', lang);

            // Terapkan bahasa yang sesuai menggunakan i18n.js
            i18n.changeLanguage(lang);

            // Set nilai dropdown selector bahasa jika ada
            if (langSelect) {
                langSelect.value = lang;
            }
        } catch (error) {
            console.error("Gagal mendeteksi lokasi pengguna:", error);
        }
    }

    // --- Mobile Navigation Logic ---
    mobileNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Initialize Everything ---
    detectSystemTheme();
    updateVisitorCount();
    if (typingElement) setTimeout(type, 500);
    loadGitHubProjects();

    // Jalankan deteksi lokasi pengguna dan atur bahasa
    detectUserLocationAndSetLanguage();
});