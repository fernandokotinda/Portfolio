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
});
