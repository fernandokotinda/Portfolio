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
        const cursor = this.cursorVisible ? '|' : '';
        this.element.textContent = displayText + cursor;
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
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona classe para header menor quando rola
        if (scrollTop > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Efeito de esconder/mostrar header baseado na direção do scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Rolando para baixo - esconde header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Rolando para cima - mostra header
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Smooth Scroll Function
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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
        image.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -25;
            const rotateY = (x - centerX) / centerX * 25;
            
            // Adiciona profundidade 3D
            const translateZ = 20;
            
            // Calcula sombra dinâmica baseada na rotação
            const shadowX = Math.sin(rotateY * Math.PI / 180) * 20;
            const shadowY = Math.sin(rotateX * Math.PI / 180) * 20;
            
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
                // Sombra para a imagem do perfil (mantém a original)
                image.style.boxShadow = `
                    rgba(122, 44, 191, 0.4) ${shadowX}px ${shadowY}px 15px,
                    rgba(122, 44, 191, 0.3) ${shadowX * 1.5}px ${shadowY * 1.5}px 25px,
                    rgba(122, 44, 191, 0.2) ${shadowX * 2}px ${shadowY * 2}px 35px,
                    rgba(122, 44, 191, 0.1) ${shadowX * 2.5}px ${shadowY * 2.5}px 45px,
                    rgba(122, 44, 191, 0.05) ${shadowX * 3}px ${shadowY * 3}px 55px
                `;
            }
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'translateZ(0) scale(1)';
            
            // Restaura a sombra original de cada imagem
            if (image.classList.contains('img-about')) {
                image.style.boxShadow = '0 0 20px #7a2cbf';
            } else {
                image.style.boxShadow = 'rgba(122, 44, 191, 0.4) 0px 5px,rgba(122, 44, 191, 0.3) 0px 10px,rgba(122, 44, 191, 0.2) 0px 15px,rgba(122, 44, 191, 0.1) 0px 20px,rgba(122, 44, 191, 0.05) 0px 25px';
            }
        });
    });
}

// Inicializar a animação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const texts = [
            'DESENVOLVEDOR BACK-END',
            'DESENVOLVEDOR FRONT-END'
        ];
        
        new Typewriter(typewriterElement, texts, 100, 50, 2000);
    }
    
    // Inicializar o efeito de tilt
    initTiltEffect();
    
    // Inicializar rolagem suave
    initSmoothScroll();
    
    // Inicializar efeito do header
    initHeaderScrollEffect();
});
