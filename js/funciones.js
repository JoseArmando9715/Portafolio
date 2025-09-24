 
        // Año dinámico en footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Menú móvil accesible
        const menuBtn = document.getElementById('menuBtn');
        const menu = document.getElementById('menu');
        if (menuBtn && menu) {
            menuBtn.addEventListener('click', () => {
                const wasHidden = menu.classList.toggle('hidden');
                menuBtn.setAttribute('aria-expanded', String(!wasHidden));
            });
        }

        // Custom Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        document.addEventListener('mousemove', (e) => {
            if (!cursorDot || !cursorOutline) return;
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            cursorOutline.style.left = (e.clientX - 20) + 'px';
            cursorOutline.style.top = (e.clientY - 20) + 'px';
        });

        // Scroll Animation (IntersectionObserver)
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, observerOptions);
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        // Smooth Scrolling para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Parallax simple para elementos flotantes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.animate-float').forEach(el => {
                const speed = 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Efecto hover consistente
        document.querySelectorAll('.hover-lift').forEach(el => {
            el.addEventListener('mouseenter', function () { this.style.transform = 'translateY(-8px) scale(1.02)'; });
            el.addEventListener('mouseleave', function () { this.style.transform = 'translateY(0) scale(1)'; });
        });

        // --- Render dinámico de proyectos desde GitHub ---
        (function () {
            const USER = 'JoseArmando9715';
            const grid = document.getElementById('gh-grid');
            if (!grid) return;
            fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=8`)
                .then(r => r.json())
                .then(repos => {
                    if (!Array.isArray(repos)) return;
                    const filtered = repos.filter(r => !r.fork && !r.archived);
                    if (filtered.length === 0) { grid.innerHTML = '<p class="text-text-secondary">Aún no hay repos públicos para mostrar.</p>'; return; }
                    grid.innerHTML = filtered.map(r => {
                        const topics = (r.topics || []).slice(0, 4).map(t => `<span class=\"glass-effect px-3 py-1 rounded-full text-xs font-mono text-accent\">${t}</span>`).join(' ');
                        return `
              <article class=\"glass-effect p-6 rounded-2xl hover-lift project-card\">
                <h3 class=\"text-2xl font-semibold mb-2\">${r.name.replace(/-/g, ' ')}</h3>
                <p class=\"text-text-secondary mb-4\">${r.description || 'Proyecto en GitHub'}</p>
                <div class=\"flex flex-wrap gap-2 mb-4\">${topics}</div>
                <div class=\"flex items-center justify-between text-sm text-text-secondary\">
                  <span>★ ${r.stargazers_count}</span>
                  <span>${r.language || ''}</span>
                  <a class=\"text-accent hover:text-accent-hover\" href=\"${r.html_url}\" target=\"_blank\" rel=\"noopener\">Ver repositorio →</a>
                </div>
              </article>`;
                    }).join('');
                })
                .catch(() => { grid.innerHTML = '<p class="text-text-secondary">No se pudieron cargar los repositorios.</p>'; });
        })();
    