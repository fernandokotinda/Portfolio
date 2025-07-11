// Typewriter Animation
class Typewriter {
    constructor(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.cursorVisible = true;

        this.type();
        this.blinkCursor();
    }

    blinkCursor() {
        this.cursorVisible = !this.cursorVisible;
        this.updateDisplay();
        setTimeout(() => this.blinkCursor(), 500);
    }

    updateDisplay() {
        const currentText = this.texts[this.currentTextIndex];
        const displayText = currentText.substring(0, this.currentCharIndex);
        const cursor = this.cursorVisible ? '|' : '\u00A0'; // Usa espaço não-quebrável quando cursor não está visível
        
        // Garante que sempre há algo no elemento para manter a altura
        this.element.textContent = displayText + cursor;
        
        // Se o texto estiver vazio, ainda mantém o cursor/espaço
        if (displayText.length === 0 && !this.cursorVisible) {
            this.element.textContent = '\u00A0'; // Espaço não-quebrável para manter altura
        }
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];

        if (this.isDeleting) {
            // Deletando texto
            this.currentCharIndex--;
        } else {
            // Digitando texto
            this.currentCharIndex++;
        }

        this.updateDisplay();

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            // Terminou de digitar, pausa antes de deletar
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            // Terminou de deletar, vai para próximo texto
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = 500; // Pausa antes de começar próximo texto
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Header Scroll Effect
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    
    if (!header) {
        console.error('Header não encontrado!');
        return;
    }

    let lastScrollTop = 0;

    function onScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona classe header-scrolled para estilo menor
        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        // Controle do indicador de scroll
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            if (currentScroll > 150) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }

        // Efeito de esconder/mostrar header
        if (currentScroll <= 100) {
            // No topo da página
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        } else {
            // Após 100px de scroll
            if (currentScroll > lastScrollTop) {
                // Scrolling down - hide header
                header.classList.add('header-hidden');
                header.classList.remove('header-visible');
            } else {
                // Scrolling up - show header
                header.classList.remove('header-hidden');
                header.classList.add('header-visible');
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    }

    // Event listener com throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Inicialização
    header.classList.add('header-visible');
    console.log('Header scroll effect inicializado com sucesso');
}

// Smooth Scroll Function
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                    duration: 1000
                });
            }
        });
    });
}

// Tilt 3D Effect
function initTiltEffect() {
    const images = document.querySelectorAll('.top-of-site .img-top-of-site img, .img-about img');

    images.forEach(image => {
        // Garantir que a transição seja aplicada
        if (!image.style.transition) {
            image.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }

        image.addEventListener('mouseenter', () => {
            // Remove temporariamente a transição para o efeito 3D ser mais responsivo
            image.style.transition = 'all 0.1s ease';
        });

        image.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * -15; // Reduzido para ser mais suave
            const rotateY = (x - centerX) / centerX * 15; // Reduzido para ser mais suave

            // Adiciona profundidade 3D
            const translateZ = 20;

            // Calcula sombra dinâmica baseada na rotação
            const shadowX = Math.sin(rotateY * Math.PI / 180) * 15;
            const shadowY = Math.sin(rotateX * Math.PI / 180) * 15;

            image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(1.05)`;

            // Aplica sombra diferente para cada tipo de imagem
            if (image.classList.contains('img-about')) {
                // Sombra para a imagem da seção sobre
                image.style.boxShadow = `
                    rgba(122, 44, 191, 0.6) ${shadowX}px ${shadowY}px 20px,
                    rgba(122, 44, 191, 0.4) ${shadowX * 1.5}px ${shadowY * 1.5}px 30px,
                    rgba(122, 44, 191, 0.2) ${shadowX * 2}px ${shadowY * 2}px 40px
                `;
            } else {
                // Sombra para a imagem do perfil
                image.style.boxShadow = `
                    rgba(122, 44, 191, 0.6) ${shadowX}px ${shadowY}px 20px,
                    rgba(122, 44, 191, 0.4) ${shadowX * 1.5}px ${shadowY * 1.5}px 30px,
                    rgba(122, 44, 191, 0.3) ${shadowX * 2}px ${shadowY * 2}px 40px,
                    rgba(122, 44, 191, 0.2) ${shadowX * 2.5}px ${shadowY * 2.5}px 50px,
                    rgba(122, 44, 191, 0.1) ${shadowX * 3}px ${shadowY * 3}px 60px
                `;
            }
        });

        image.addEventListener('mouseleave', () => {
            // Restaura a transição suave para o retorno
            image.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Remove o transform inline para deixar o CSS assumir
            image.style.transform = '';
            image.style.boxShadow = '';

            // Força o estado normal após um pequeno delay
            setTimeout(() => {
                if (!image.matches(':hover')) {
                    image.style.transform = '';
                    image.style.boxShadow = '';
                }
            }, 50);
        });
    });
}

// Scroll Indicator Click
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    console.log('Scroll indicator element:', scrollIndicator); // Debug

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            console.log('Scroll indicator clicked'); // Debug
            const specialtiesSection = document.querySelector('#specialties-menu');
            if (specialtiesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = specialtiesSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    } else {
        console.log('Scroll indicator not found'); // Debug
    }
}

// Mobile Touch Experience for Portfolio
function initMobileTouchExperience() {
    const portfolioItems = document.querySelectorAll('.img-port');
    let activeItem = null;

    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.overlay');
        
        // Touch events for mobile
        item.addEventListener('touchstart', function(e) {
            e.preventDefault();
            
            // Se há um item ativo e não é este, desativa o anterior
            if (activeItem && activeItem !== item) {
                const activeOverlay = activeItem.querySelector('.overlay');
                activeOverlay.style.opacity = '0';
            }
            
            // Ativa o overlay do item tocado
            overlay.style.opacity = '1';
            activeItem = item;
        });

        // Click para desktop e fallback
        item.addEventListener('click', function(e) {
            // Se está em mobile (touch device), previne o comportamento padrão
            if ('ontouchstart' in window) {
                e.preventDefault();
                
                if (overlay.style.opacity === '1') {
                    // Se já está ativo, vai para o link
                    const link = item.closest('a');
                    if (link) {
                        window.open(link.href, '_blank');
                    }
                } else {
                    // Ativa o overlay
                    overlay.style.opacity = '1';
                    activeItem = item;
                }
            }
        });
    });

    // Fechar overlay quando tocar fora
    document.addEventListener('touchstart', function(e) {
        if (!e.target.closest('.img-port') && activeItem) {
            const activeOverlay = activeItem.querySelector('.overlay');
            activeOverlay.style.opacity = '0';
            activeItem = null;
        }
    });
}

// Detectar orientação da tela e ajustar layout
function initOrientationHandling() {
    function handleOrientationChange() {
        const portfolioItems = document.querySelectorAll('.img-port');
        const isLandscape = window.innerWidth > window.innerHeight;
        
        portfolioItems.forEach(item => {
            if (window.innerWidth <= 768) { // Mobile
                if (isLandscape) {
                    item.style.height = '280px';
                } else {
                    item.style.height = '350px';
                }
            }
        });
    }

    // Escuta mudanças de orientação
    window.addEventListener('orientationchange', function() {
        setTimeout(handleOrientationChange, 100);
    });

    // Escuta redimensionamento da janela
    window.addEventListener('resize', handleOrientationChange);
    
    // Executa na inicialização
    handleOrientationChange();
}

// Melhorar performance em dispositivos móveis
function initMobileOptimizations() {
    // Reduzir animações em dispositivos com menos recursos
    const isLowPerformanceDevice = window.devicePixelRatio < 2 || navigator.hardwareConcurrency < 4;
    
    if (isLowPerformanceDevice) {
        // Reduzir animações dos elementos flutuantes
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach(element => {
            element.style.animationDuration = '12s'; // Mais lento
        });
    }

    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });
}

// Melhorar scroll em dispositivos móveis
function initMobileScrollEnhancements() {
    // Suavizar scroll em iOS
    const body = document.body;
    body.style.webkitOverflowScrolling = 'touch';
    
    // Otimizar scroll performance
    let ticking = false;
    
    function updateScrollPosition() {
        // Lógica de scroll otimizada
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }, { passive: true });
}

// Adicionar feedback visual para touch
function initTouchFeedback() {
    const touchableElements = document.querySelectorAll('button, .btn-contact a, .img-port, .specialties-box');
    
    touchableElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        }, { passive: true });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        }, { passive: true });
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .title-reveal');
    
    // Usar Intersection Observer para melhor performance
    const observerOptions = {
        threshold: 0.05, /* Reduzido de 0.1 para 0.05 para ativação mais cedo */
        rootMargin: '0px 0px -20px 0px' /* Reduzido de -50px para -20px */
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Usar requestAnimationFrame para suavizar a animação
                requestAnimationFrame(() => {
                    entry.target.classList.add('reveal-active');
                });
            } else {
                // Remove a classe para re-animar quando sair e voltar na viewport
                requestAnimationFrame(() => {
                    entry.target.classList.remove('reveal-active');
                });
            }
        });
    }, observerOptions);

    scrollElements.forEach(el => {
        // Garantir que elementos tenham will-change apenas quando necessário
        el.style.willChange = 'opacity, transform';
        scrollObserver.observe(el);
        
        // Remover will-change após animação para economizar recursos
        el.addEventListener('transitionend', () => {
            if (el.classList.contains('reveal-active')) {
                el.style.willChange = 'auto';
            }
        });
    });

    // Fallback para navegadores que não suportam Intersection Observer
    if (!window.IntersectionObserver) {
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop > (window.innerHeight || document.documentElement.clientHeight)
            );
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    el.classList.add('reveal-active');
                } else if (elementOutofView(el)) {
                    el.classList.remove('reveal-active');
                }
            });
        };

        // Event listener otimizado com throttling
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScrollAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Executa uma vez no carregamento para elementos já visíveis
        handleScrollAnimation();
    }
}

// Custom Tooltip for Technology Images
function initCustomTooltips() {
    const techImages = document.querySelectorAll('.imgLanguages img');
    const techContainer = document.querySelector('#technologies');
    let currentTooltip = null;
    let hideTimeout = null;
    let isOverContainer = false;

    // Criar elemento tooltip (só criar uma vez)
    function createTooltip() {
        if (currentTooltip) {
            return currentTooltip;
        }
        
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        document.body.appendChild(tooltip);
        return tooltip;
    }

    // Posicionar tooltip usando coordenadas fixas
    function positionTooltip(tooltip, target) {
        const rect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        // Posição horizontal - centralizada em relação à imagem
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        
        // Posição vertical - SEMPRE abaixo da imagem por padrão
        let top = rect.bottom + 10;
        
        // Verificar limites horizontais da viewport
        const margin = 10;
        if (left < margin) {
            left = margin;
        } else if (left + tooltipRect.width > window.innerWidth - margin) {
            left = window.innerWidth - tooltipRect.width - margin;
        }
        
        // Verificar se o tooltip sai da parte inferior da tela
        if (top + tooltipRect.height > window.innerHeight - margin) {
            // Se não cabe embaixo, mostrar em cima
            top = rect.top - tooltipRect.height - 10;
            tooltip.classList.add('tooltip-top');
            tooltip.classList.remove('tooltip-bottom');
        } else {
            // Padrão: embaixo da imagem
            tooltip.classList.add('tooltip-bottom');
            tooltip.classList.remove('tooltip-top');
        }
        
        // Aplicar posição
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    // Mostrar/atualizar tooltip
    function showTooltip(target, text) {
        // Cancelar qualquer timeout de esconder
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        
        // Criar tooltip se não existir
        if (!currentTooltip) {
            currentTooltip = createTooltip();
        }
        
        // Atualizar conteúdo
        currentTooltip.textContent = text;
        
        // Recalcular posição
        requestAnimationFrame(() => {
            positionTooltip(currentTooltip, target);
            
            // Mostrar tooltip se não estiver visível
            if (!currentTooltip.classList.contains('show')) {
                requestAnimationFrame(() => {
                    if (currentTooltip) {
                        currentTooltip.classList.add('show');
                    }
                });
            }
        });
    }

    // Esconder tooltip (com delay para evitar piscar)
    function hideTooltip(immediate = false) {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        
        if (immediate) {
            if (currentTooltip) {
                currentTooltip.classList.remove('show');
                setTimeout(() => {
                    if (currentTooltip && currentTooltip.parentNode) {
                        currentTooltip.parentNode.removeChild(currentTooltip);
                        currentTooltip = null;
                    }
                }, 150);
            }
        } else {
            // Delay para permitir movimento entre imagens
            hideTimeout = setTimeout(() => {
                if (!isOverContainer && currentTooltip) {
                    currentTooltip.classList.remove('show');
                    setTimeout(() => {
                        if (currentTooltip && currentTooltip.parentNode) {
                            currentTooltip.parentNode.removeChild(currentTooltip);
                            currentTooltip = null;
                        }
                    }, 150);
                }
                hideTimeout = null;
            }, 100); // Pequeno delay para evitar piscar
        }
    }

    // Event listeners para o container da seção de tecnologias
    if (techContainer) {
        techContainer.addEventListener('mouseenter', () => {
            isOverContainer = true;
        });
        
        techContainer.addEventListener('mouseleave', () => {
            isOverContainer = false;
            hideTooltip();
        });
    }

    // Adicionar event listeners para cada imagem
    techImages.forEach(img => {
        // Guardar o title original e remover do atributo
        const originalTitle = img.getAttribute('title');
        img.removeAttribute('title');
        
        img.addEventListener('mouseenter', (e) => {
            if (originalTitle) {
                isOverContainer = true;
                showTooltip(e.target, originalTitle);
            }
        });
        
        // Não esconder imediatamente ao sair da imagem
        // O tooltip só deve ser escondido ao sair do container todo
    });

    // Esconder tooltip em scroll ou resize
    window.addEventListener('scroll', () => {
        if (currentTooltip) {
            hideTooltip(true); // Esconder imediatamente no scroll
        }
    }, { passive: true });
    
    window.addEventListener('resize', () => {
        if (currentTooltip) {
            hideTooltip(true); // Esconder imediatamente no resize
        }
    });
}

// Certificates Carousel and Filter System
function initCertificatesSystem() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.certificate-slide');
    const indicators = document.querySelectorAll('.indicator');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slides.length) return;

    // Salvar o HTML original dos slides para restauração posterior
    const originalSlidesHTML = [];
    slides.forEach(slide => {
        originalSlidesHTML.push({
            html: slide.innerHTML,
            category: slide.getAttribute('data-category')
        });
    });

    // Função para mostrar slide específico
    function showSlide(index) {
        // Remove active de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Adiciona active ao slide atual
        if (slides[index]) {
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }
    }

    // Função para reorganizar certificados em slides (para "Todos" ou qualquer categoria)
    function createSlidesView(category = 'all') {
        // Coleta certificados da categoria especificada ou todos se category === 'all'
        const certificates = [];
        originalSlidesHTML.forEach(slideData => {
            if (category === 'all' || slideData.category === category) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = slideData.html;
                const certs = tempDiv.querySelectorAll('.certificate-card');
                certs.forEach(cert => {
                    // Preserva o HTML original completo incluindo os assets do Laravel
                    certificates.push({
                        html: cert.outerHTML,
                        element: cert.cloneNode(true)
                    });
                });
            }
        });

        // Limpa os slides existentes
        slides.forEach(slide => {
            slide.innerHTML = '';
            slide.classList.remove('active');
            slide.style.display = 'none';
        });

        // Define quantos certificados por slide (máximo 4 para manter o layout responsivo)
        const certificatesPerSlide = 4;
        const totalSlides = Math.ceil(certificates.length / certificatesPerSlide);

        // Reorganiza em slides de até 4 certificados cada
        for (let slideIndex = 0; slideIndex < totalSlides && slideIndex < slides.length; slideIndex++) {
            const startIndex = slideIndex * certificatesPerSlide;
            const endIndex = Math.min(startIndex + certificatesPerSlide, certificates.length);
            const slideGroup = certificates.slice(startIndex, endIndex);
            
            if (slides[slideIndex]) {
                // Limpa o slide atual
                slides[slideIndex].innerHTML = '';
                
                // Adiciona os certificados ao slide preservando o HTML original
                slideGroup.forEach(certData => {
                    slides[slideIndex].appendChild(certData.element);
                });
                
                // Garante que o slide mantenha o layout de grid e seja visível
                slides[slideIndex].style.display = 'grid';
                slides[slideIndex].style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
                slides[slideIndex].style.gap = '20px';
                slides[slideIndex].setAttribute('data-category', category);
                
                console.log(`Slide ${slideIndex} criado com ${slideGroup.length} certificados para categoria: ${category}`);
            }
        }

        // Atualiza indicadores para mostrar apenas os slides necessários
        indicators.forEach((indicator, index) => {
            if (index < totalSlides) {
                indicator.style.display = 'block';
                indicator.classList.remove('active');
            } else {
                indicator.style.display = 'none';
                indicator.classList.remove('active');
            }
        });

        // Esconde slides não utilizados
        for (let i = totalSlides; i < slides.length; i++) {
            if (slides[i]) {
                slides[i].style.display = 'none';
                slides[i].classList.remove('active');
            }
        }

        // Mostra o primeiro slide se houver certificados
        if (totalSlides > 0) {
            showSlide(0);
        }
        
        console.log(`Sistema "${category}": Criados ${totalSlides} slides com ${certificates.length} certificados totais`);
        
        // Reagregar os event listeners do modal após recriar os slides
        setTimeout(() => {
            if (typeof addCertificateModalListeners === 'function') {
                addCertificateModalListeners();
            }
        }, 100);
    }

    // Sistema de filtros
    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active de todos os botões
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-category');
                
                // Usa a função unificada para criar slides organizados por categoria
                // Para "all" mostra todos os certificados, para outras categorias mostra apenas da categoria específica
                createSlidesView(category);
                
                // Reagregar os event listeners do modal após filtrar
                setTimeout(() => {
                    if (typeof addCertificateModalListeners === 'function') {
                        addCertificateModalListeners();
                    }
                }, 100);
            });
        });
    }

    // Navegação do carousel
    function initCarouselNavigation() {
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const visibleSlides = Array.from(slides).filter(slide => 
                    slide.style.display !== 'none'
                );
                const visibleIndices = visibleSlides.map(slide => 
                    Array.from(slides).indexOf(slide)
                );
                
                const currentIndex = visibleIndices.indexOf(currentSlide);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : visibleIndices.length - 1;
                showSlide(visibleIndices[prevIndex]);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const visibleSlides = Array.from(slides).filter(slide => 
                    slide.style.display !== 'none'
                );
                const visibleIndices = visibleSlides.map(slide => 
                    Array.from(slides).indexOf(slide)
                );
                
                const currentIndex = visibleIndices.indexOf(currentSlide);
                const nextIndex = currentIndex < visibleIndices.length - 1 ? currentIndex + 1 : 0;
                showSlide(visibleIndices[nextIndex]);
            });
        }

        // Indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (slides[index] && slides[index].style.display !== 'none') {
                    showSlide(index);
                }
            });
        });
    }

    // Auto-play do carousel (opcional)
    function initAutoPlay() {
        setInterval(() => {
            const visibleSlides = Array.from(slides).filter(slide => 
                slide.style.display !== 'none'
            );
            
            if (visibleSlides.length > 1) {
                const visibleIndices = visibleSlides.map(slide => 
                    Array.from(slides).indexOf(slide)
                );
                
                const currentIndex = visibleIndices.indexOf(currentSlide);
                const nextIndex = currentIndex < visibleIndices.length - 1 ? currentIndex + 1 : 0;
                showSlide(visibleIndices[nextIndex]);
            }
        }, 5000); // Muda a cada 5 segundos
    }

    // Inicializar sistema
    initFilters();
    initCarouselNavigation();
    showSlide(0);
    // initAutoPlay(); // Descomente se quiser auto-play

    console.log('Sistema de certificados inicializado');
}

// Contador animado
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 30; // Duração da animação
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Modal para visualizar certificados em tela cheia
let certificateModal = null;

function createCertificateModal() {
    if (certificateModal) return; // Só cria uma vez
    
    // Criar modal
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">
                    <i class="bi bi-x-lg"></i>
                </button>
                <div class="modal-image"></div>
                <div class="modal-info">
                    <h3></h3>
                    <p></p>
                    <span class="modal-date"></span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    certificateModal = modal;

    // Adicionar estilos do modal
    const modalStyles = `
        .certificate-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            z-index: 10000;
            display: none;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .certificate-modal.active {
            display: flex;
            opacity: 1;
        }
        
        .modal-content {
            background: linear-gradient(145deg, rgba(122, 44, 191, 0.1), rgba(0, 0, 0, 0.8));
            border-radius: 20px;
            padding: 30px;
            max-width: 80%;
            max-height: 80%;
            border: 1px solid rgba(122, 44, 191, 0.3);
            position: relative;
            display: flex;
            gap: 30px;
            align-items: center;
        }
        
        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            color: #7a2cbf;
            font-size: 24px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            color: #a159e0;
            transform: scale(1.1);
        }
        
        .modal-image {
            width: 400px;
            height: 500px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 15px;
        }
        
        .modal-info {
            color: #fff;
            flex: 1;
        }
        
        .modal-info h3 {
            font-size: 28px;
            color: #7a2cbf;
            margin-bottom: 15px;
        }
        
        .modal-info p {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .modal-date {
            background: rgba(122, 44, 191, 0.2);
            padding: 8px 16px;
            border-radius: 15px;
            color: #7a2cbf;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .modal-content {
                flex-direction: column;
                max-width: 95%;
                max-height: 95%;
            }
            
            .modal-image {
                width: 100%;
                height: 300px;
            }
        }
    `;
    
    // Adicionar estilos ao head se ainda não existem
    if (!document.querySelector('#certificate-modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'certificate-modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }

    // Fechar modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            closeModal();
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Função para adicionar event listeners aos cards de certificados
function addCertificateModalListeners() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    // Adiciona event listeners para o modal
    certificateCards.forEach(card => {
        // Remove event listener anterior se existir
        const existingHandler = card._modalHandler;
        if (existingHandler) {
            card.removeEventListener('click', existingHandler);
        }
        
        // Cria novo handler
        const modalHandler = () => {
            const image = card.querySelector('.certificate-image');
            const info = card.querySelector('.certificate-info');
            
            if (!image || !info) return; // Verificação de segurança
            
            const title = info.querySelector('h4')?.textContent || 'Certificado';
            const description = info.querySelector('p')?.textContent || 'Descrição não disponível';
            const date = info.querySelector('.certificate-date')?.textContent || '';
            const backgroundImage = image.style.backgroundImage;

            // Preencher modal
            if (certificateModal) {
                certificateModal.querySelector('.modal-image').style.backgroundImage = backgroundImage;
                certificateModal.querySelector('.modal-info h3').textContent = title;
                certificateModal.querySelector('.modal-info p').textContent = description;
                certificateModal.querySelector('.modal-date').textContent = date;

                // Mostrar modal
                certificateModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };
        
        // Adiciona o novo event listener
        card.addEventListener('click', modalHandler);
        
        // Salva referência para remoção futura
        card._modalHandler = modalHandler;
    });
    
    console.log(`Event listeners do modal adicionados a ${certificateCards.length} cards`);
}

function initCertificateModal() {
    createCertificateModal();
    addCertificateModalListeners();
}

// Mobile Menu Functionality
function initMobileMenu() {
    const btnOpenMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnCloseMenu = document.querySelector('.menu-mobile .btn-close');
    const overlayMenu = document.getElementById('overlay-menu');
    const menuLinks = document.querySelectorAll('.menu-mobile nav ul li a');

    if (!btnOpenMenu || !menuMobile || !btnCloseMenu || !overlayMenu) {
        console.warn('Elementos do menu mobile não encontrados');
        return;
    }

    // Abrir menu
    function openMenu() {
        menuMobile.classList.add('open-menu');
        overlayMenu.style.display = 'block';
        setTimeout(() => {
            overlayMenu.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden'; // Previne scroll do body
        console.log('Menu mobile aberto');
    }

    // Fechar menu
    function closeMenu() {
        menuMobile.classList.remove('open-menu');
        overlayMenu.style.opacity = '0';
        setTimeout(() => {
            overlayMenu.style.display = 'none';
        }, 300);
        document.body.style.overflow = ''; // Restaura scroll do body
        console.log('Menu mobile fechado');
    }

    // Event listeners
    btnOpenMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        openMenu();
    });

    btnCloseMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
    });

    overlayMenu.addEventListener('click', closeMenu);

    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Fechar menu com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuMobile.classList.contains('open-menu')) {
            closeMenu();
        }
    });

    // Prevenir propagação de cliques dentro do menu
    menuMobile.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    console.log('Menu mobile inicializado com sucesso');
}

// Desabilitar animações do portfolio em mobile
function disablePortfolioAnimationsOnMobile() {
    const portfolioItems = document.querySelectorAll('section.portfolio .scroll-reveal, section.portfolio .scroll-reveal-scale, section.portfolio [class*="scroll-reveal"]');
    
    function checkScreenSize() {
        const isMobile = window.innerWidth <= 830;
        
        portfolioItems.forEach(item => {
            if (isMobile) {
                // Remover classes de animação em mobile
                item.classList.remove('scroll-reveal', 'scroll-reveal-scale', 'scroll-reveal-delay-1', 'scroll-reveal-delay-2', 'scroll-reveal-delay-3', 'scroll-reveal-delay-4');
                // Garantir visibilidade
                item.style.opacity = '1';
                item.style.transform = 'none';
                item.style.transition = 'none';
            } else {
                // Re-adicionar classes de animação em desktop (se necessário)
                const originalClasses = item.getAttribute('data-original-classes');
                if (originalClasses) {
                    item.className = originalClasses;
                } else {
                    // Fallback: re-adicionar classes básicas baseado no índice
                    const index = Array.from(portfolioItems).indexOf(item);
                    item.classList.add('scroll-reveal-scale');
                    item.classList.add(`scroll-reveal-delay-${(index % 4) + 1}`);
                }
                // Remover estilos inline
                item.style.opacity = '';
                item.style.transform = '';
                item.style.transition = '';
            }
        });
    }
    
    // Salvar classes originais
    portfolioItems.forEach(item => {
        item.setAttribute('data-original-classes', item.className);
    });
    
    // Verificar na inicialização
    checkScreenSize();
    
    // Verificar quando redimensionar a janela
    window.addEventListener('resize', checkScreenSize);
    
    console.log('Sistema de desabilitação de animações do portfolio inicializado');
}

// Inicializar a animação quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado, inicializando componentes...');
    
    // Inicializar sistema de desabilitação de animações do portfolio
    disablePortfolioAnimationsOnMobile();
    
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const texts = [
            'DESENVOLVEDOR BACK-END',
            'DESENVOLVEDOR FRONT-END'
        ];

        new Typewriter(typewriterElement, texts, 100, 50, 2000);
    }

    // Inicializar funcionalidades existentes
    initTiltEffect();
    initSmoothScroll();
    initHeaderScrollEffect();
    initScrollIndicator();
    
    // Inicializar ScrollReveal apenas para desktop
    if (window.innerWidth > 830) {
        initScrollReveal();
        console.log('ScrollReveal inicializado para desktop');
    } else {
        console.log('ScrollReveal desabilitado para mobile');
    }
    
    initCustomTooltips(); // Adicionar tooltips personalizados
    
    // Inicializar funcionalidades móveis
    initMobileTouchExperience();
    initOrientationHandling();
    initMobileOptimizations();
    initMobileScrollEnhancements();
    initTouchFeedback();
    initCustomTooltips();
    
    // Inicializar sistema de certificados
    initCertificatesSystem();
    initCounterAnimation();
    initCertificateModal();
    
    // Inicializar menu mobile
    initMobileMenu();
});

// Importar e inicializar funcionalidades de contato
import './contact.js';
