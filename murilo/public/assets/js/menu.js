// Menu Mobile Functionality
document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnClose = menuMobile.querySelector('.btn-close');
    
    // Função para abrir o menu
    function openMenu() {
        menuMobile.classList.add('open-menu');
        overlayMenu.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Previne scroll do body
        
        // Adiciona animação de entrada
        setTimeout(() => {
            overlayMenu.style.opacity = '1';
        }, 10);
    }
    
    // Função para fechar o menu
    function closeMenu() {
        overlayMenu.style.opacity = '0';
        
        setTimeout(() => {
            menuMobile.classList.remove('open-menu');
            overlayMenu.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura scroll do body
        }, 300);
    }
    
    // Event listeners
    if (btnMenu) {
        btnMenu.addEventListener('click', function(e) {
            e.preventDefault();
            openMenu();
        });
    }
    
    if (btnClose) {
        btnClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }
    
    if (overlayMenu) {
        overlayMenu.addEventListener('click', function(e) {
            if (e.target === overlayMenu) {
                closeMenu();
            }
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = menuMobile.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Fechar menu com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuMobile.classList.contains('open-menu')) {
            closeMenu();
        }
    });
    
    // Prevenir scroll do menu mobile
    menuMobile.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
});
