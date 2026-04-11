document.addEventListener('DOMContentLoaded', () => {
            const heroVideo = document.querySelector('.bba-hero__video');
            if (heroVideo) {
                heroVideo.muted = true;
                heroVideo.defaultMuted = true;
                heroVideo.setAttribute('playsinline', '');
                heroVideo.setAttribute('webkit-playsinline', '');

                const startHeroPlayback = () => {
                    const playPromise = heroVideo.play();
                    if (playPromise && typeof playPromise.catch === 'function') {
                        playPromise.catch(() => { });
                    }
                };

                if (heroVideo.readyState >= 2) {
                    startHeroPlayback();
                } else {
                    heroVideo.addEventListener('canplay', startHeroPlayback, { once: true });
                }

                document.addEventListener('visibilitychange', () => {
                    if (document.visibilityState === 'visible' && heroVideo.paused) {
                        startHeroPlayback();
                    }
                });
            }

            const section2Observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

            document.querySelectorAll('.scroll-reveal, .bba-card').forEach(el => section2Observer.observe(el));
        });

(function initBBAOrbit() {
            const ring = document.getElementById('bba-orbit-ring');
            if (!ring) return;

            const pillars = [
                {
                    tone: 'core',
                    kicker: 'Finance',
                    name: 'Core',
                    icon: 'building-2',
                    copy: 'Base financeira, contábil e fiscal robusta.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="21" width="14" height="11" rx="4" fill="#8BB5E4"/>
              <rect x="28" y="14" width="14" height="18" rx="4" fill="#5A8BC7"/>
              <rect x="48" y="9" width="14" height="23" rx="4" fill="#003A70"/>
              <path d="M10 28C21 25 29 19 38 19C47 19 51 24 60 24C69 24 77 12 88 12C97 12 104 15 112 8" stroke="#D4AF37" stroke-width="3" stroke-linecap="round"/>
              <circle cx="112" cy="8" r="3" fill="#D4AF37"/>
            </svg>
          `
                },
                {
                    tone: 'integrity',
                    kicker: 'Risk',
                    name: 'Integridade',
                    icon: 'shield-check',
                    copy: 'Governança, compliance e proteção institucional.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 6L84 14V20C84 27 73 33 60 36C47 33 36 27 36 20V14L60 6Z" fill="#3F4B60"/>
              <path d="M60 12L77 17V20C77 24 69 28 60 31C51 28 43 24 43 20V17L60 12Z" fill="#D4AF37"/>
              <path d="M53 21L58 26L68 16" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="10" y="14" width="16" height="4" rx="2" fill="#A0A7B5"/>
              <rect x="94" y="14" width="16" height="4" rx="2" fill="#A0A7B5"/>
            </svg>
          `
                },
                {
                    tone: 'value',
                    kicker: 'Growth',
                    name: 'Valor',
                    icon: 'trending-up',
                    copy: 'Margem, capital e valuation preparados para escalar.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 29C21 29 25 20 36 20C47 20 50 24 60 24C72 24 79 8 95 8H110" stroke="#0E7F63" stroke-width="3" stroke-linecap="round"/>
              <path d="M101 8H110V17" stroke="#0E7F63" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="36" cy="20" r="3" fill="#7AD8A5"/>
              <circle cx="60" cy="24" r="3" fill="#3DBB88"/>
              <circle cx="95" cy="8" r="3" fill="#0E7F63"/>
              <rect x="12" y="31" width="96" height="2" rx="1" fill="#BCEBD5"/>
            </svg>
          `
                },
                {
                    tone: 'tech',
                    kicker: 'Tech',
                    name: 'Tech & AI',
                    icon: 'cpu',
                    copy: 'Dados e automação para ampliar comando executivo.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="47" y="11" width="26" height="18" rx="6" fill="#4154B8"/>
              <path d="M60 6V11M60 29V34M41 20H47M73 20H79M48 9L44 5M72 9L76 5M48 31L44 35M72 31L76 35" stroke="#8DA3FF" stroke-width="2.4" stroke-linecap="round"/>
              <circle cx="23" cy="20" r="5" fill="#70C0FF"/>
              <circle cx="97" cy="20" r="5" fill="#70C0FF"/>
              <path d="M28 20H41M79 20H92" stroke="#70C0FF" stroke-width="2.4" stroke-linecap="round"/>
            </svg>
          `
                },
                {
                    tone: 'people',
                    kicker: 'People',
                    name: 'Pessoas',
                    icon: 'users',
                    copy: 'Liderança, cultura e performance alinhadas à estratégia.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39" cy="16" r="6" fill="#C68166"/>
              <circle cx="60" cy="12" r="7" fill="#A35A44"/>
              <circle cx="82" cy="16" r="6" fill="#E3B7A2"/>
              <path d="M28 31C28 26 33 23 39 23C45 23 50 26 50 31" fill="#F0D6CA"/>
              <path d="M47 31C47 24 53 20 60 20C67 20 73 24 73 31" fill="#D48B72"/>
              <path d="M71 31C71 26 76 23 82 23C88 23 93 26 93 31" fill="#F0D6CA"/>
            </svg>
          `
                },
                {
                    tone: 'esg',
                    kicker: 'Future',
                    name: 'ESG',
                    icon: 'globe',
                    copy: 'Responsabilidade corporativa conectada à atratividade de capital.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="20" r="13" fill="#4A9A5B"/>
              <path d="M48 20H72M60 8C56 12 54 16 54 20C54 24 56 28 60 32M60 8C64 12 66 16 66 20C66 24 64 28 60 32" stroke="#DDF2DE" stroke-width="2"/>
              <path d="M20 24C28 18 35 15 44 15" stroke="#8ACD90" stroke-width="2.4" stroke-linecap="round"/>
              <path d="M76 25C84 22 92 18 102 12" stroke="#8ACD90" stroke-width="2.4" stroke-linecap="round"/>
              <circle cx="20" cy="24" r="3" fill="#8ACD90"/>
              <circle cx="102" cy="12" r="3" fill="#8ACD90"/>
            </svg>
          `
                },
                {
                    tone: 'institute',
                    kicker: 'Impact',
                    name: 'Instituto',
                    icon: 'heart-handshake',
                    copy: 'Impacto social e reputação institucional conectados à marca.',
                    figure: `
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 24C31 24 27 20 27 15C27 11 30 8 34 8C37 8 40 9 42 12C44 9 47 8 50 8C54 8 57 11 57 15C57 20 53 24 48 24H36Z" fill="#D98AA4"/>
              <path d="M49 20L61 16L71 22L84 17" stroke="#B35B79" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="84" cy="17" r="3" fill="#B35B79"/>
            </svg>
          `
                }
            ];

            const baseStartAngle = -118;
            const angleStep = 360 / pillars.length;
            const angles = pillars.map((_, index) => baseStartAngle + (index * angleStep));

            angles.forEach((angle, i) => {
                const itemPos = document.createElement('div');
                itemPos.className = 'bba-orbit-positioner';
                itemPos.dataset.baseAngle = angle;

                const p = pillars[i];
                const innerHTML = `
            <div class="bba-orbit-item tone-${p.tone}">
              <div class="bba-squicle-inner">
                <div class="bba-squicle-head">
                  <span class="bba-squicle-kicker">${p.kicker}</span>
                </div>
                <span class="bba-squicle-label">${p.name}</span>
                <span class="bba-squicle-copy">${p.copy}</span>
                <div class="bba-squicle-figure">${p.figure}</div>
              </div>
            </div>
          `;
                itemPos.innerHTML = innerHTML;
                ring.appendChild(itemPos);
            });

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            const orbitItems = ring.querySelectorAll('.bba-orbit-positioner');
            const connectors = document.getElementById('bba-eco-connectors');
            const core = document.querySelector('.bba-eco-core');

            function getOrbitMetrics() {
                const frame = ring.getBoundingClientRect();
                const isTablet = window.innerWidth < 821;
                return {
                    centerX: frame.width / 2,
                    centerY: frame.height / 2,
                    radius: isTablet ? 228 : 272
                };
            }

            function updateConnectors() {
                if (!connectors || !core || window.innerWidth < 640) return;

                const frameRect = ring.getBoundingClientRect();
                const coreRect = core.getBoundingClientRect();
                const coreX = coreRect.left - frameRect.left + coreRect.width / 2;
                const coreY = coreRect.top - frameRect.top + coreRect.height / 2;

                const paths = Array.from(orbitItems).map((item) => {
                    const itemRect = item.getBoundingClientRect();
                    const startX = itemRect.left - frameRect.left + itemRect.width / 2;
                    const startY = itemRect.top - frameRect.top + itemRect.height / 2;
                    const controlX = (startX + coreX) / 2;
                    const controlY = (startY + coreY) / 2;
                    return `<path d="M ${startX} ${startY} Q ${controlX} ${controlY} ${coreX} ${coreY}"></path>`;
                }).join('');

                connectors.innerHTML = `
            <defs>
              <marker id="bba-eco-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto">
                <path d="M0 0L7 3.5L0 7" fill="none" stroke="rgba(0, 58, 112, 0.22)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
            </defs>
            ${paths}
          `;
            }

            function updatePositions(progressOffset = 0) {
                const metrics = getOrbitMetrics();
                if (window.innerWidth < 640) return;

                orbitItems.forEach((item, index) => {
                    const angle = ((angles[index] * Math.PI) / 180) + progressOffset;
                    const x = metrics.centerX + Math.cos(angle) * metrics.radius;
                    const y = metrics.centerY + Math.sin(angle) * metrics.radius;
                    item.style.left = `${x}px`;
                    item.style.top = `${y}px`;
                    item.style.transform = `translate(-50%, -50%)`;
                    item.style.zIndex = `${Math.round(20 + y)}`;
                });

                updateConnectors();
            }

            let currentRotation = 0;
            let requestID;
            let lastTimestamp = 0;

            function animateOrbit(timestamp) {
                if (window.innerWidth < 640) return;
                if (!lastTimestamp) lastTimestamp = timestamp;
                const delta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;
                currentRotation += delta * 0.00022;
                updatePositions(currentRotation);
                requestID = requestAnimationFrame(animateOrbit);
            }

            window.addEventListener('resize', () => updatePositions(currentRotation));
            updatePositions();

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!requestID) requestID = requestAnimationFrame(animateOrbit);
                    } else {
                        if (requestID) {
                            cancelAnimationFrame(requestID);
                            requestID = null;
                            lastTimestamp = 0;
                        }
                    }
                });
            }, { threshold: 0 });
            observer.observe(document.getElementById('bba-eco-root'));
        })();

// Initialize Icons
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select all elements that need to animate in
            const animatedElements = document.querySelectorAll('.slide-up-fade');
            animatedElements.forEach(el => observer.observe(el));

            const finaleVideo = document.querySelector('.bba-finale__board-video');
            const finaleAudioToggle = document.querySelector('[data-finale-audio-toggle]');

            if (finaleVideo && finaleAudioToggle) {
                finaleAudioToggle.addEventListener('click', async () => {
                    const activateAudio = finaleVideo.muted || finaleVideo.volume === 0;

                    if (activateAudio) {
                        finaleVideo.muted = false;
                        finaleVideo.volume = 1;
                        try {
                            await finaleVideo.play();
                        } catch (error) {
                            finaleVideo.muted = true;
                        }
                    } else {
                        finaleVideo.muted = true;
                    }

                    const isAudioOn = !finaleVideo.muted && finaleVideo.volume > 0;
                    finaleAudioToggle.setAttribute('aria-pressed', String(isAudioOn));
                    finaleAudioToggle.querySelector('span').textContent = isAudioOn ? 'Silenciar audio' : 'Ativar audio';
                });
            }
        });