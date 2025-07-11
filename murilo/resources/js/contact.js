// Função para formatar telefone
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    
    input.value = value;
}

// Aplicar formatação ao campo telefone
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('telefone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhone(this);
        });
    }

    // Gerenciar envio do formulário
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    const submitButton = contactForm.querySelector('input[type="submit"]');

    contactForm.addEventListener('submit', function(e) {
        // Verificar se estamos em desenvolvimento (Vite) 
        const isDevelopment = window.location.port === '5173';
        
        if (isDevelopment) {
            // Em desenvolvimento, usar submit normal
            return; // Permite o submit normal do formulário
        }

        // Em produção, usar AJAX
        e.preventDefault();

        // Desabilitar botão e mostrar loading
        const originalValue = submitButton.value;
        submitButton.value = 'ENVIANDO...';
        submitButton.disabled = true;

        // Limpar mensagens anteriores
        formMessages.innerHTML = '';

        // Coletar dados do formulário
        const formData = new FormData(contactForm);
        
        // Obter token CSRF
        const csrfToken = document.querySelector('meta[name="csrf-token"]');
        if (csrfToken) {
            formData.append('_token', csrfToken.getAttribute('content'));
        }
        
        // Obter a URL base do Laravel
        const actionUrl = contactForm.action || '/enviar-contato';

        // Enviar via fetch
        fetch(actionUrl, {
            method: 'POST',
            body: formData,
            credentials: 'include',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 419) {
                throw new Error('Sessão expirada. Recarregue a página e tente novamente.');
            }
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Resposta inválida do servidor');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // Sucesso
                formMessages.innerHTML = `
                    <div style="
                        background: #d4edda;
                        color: #155724;
                        padding: 15px;
                        border-radius: 5px;
                        border: 1px solid #c3e6cb;
                        margin-top: 20px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    ">
                        <i class="bi bi-check-circle-fill" style="font-size: 20px;"></i>
                        <span>${data.message}</span>
                    </div>
                `;
                
                // Limpar formulário
                contactForm.reset();
                
                // Scroll para a mensagem
                formMessages.scrollIntoView({ behavior: 'smooth' });
                
            } else {
                // Erro de validação
                let errorMessage = '<div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; border: 1px solid #f5c6cb; margin-top: 20px;"><ul style="margin: 0; padding-left: 20px;">';
                
                if (data.errors) {
                    Object.values(data.errors).forEach(errorArray => {
                        errorArray.forEach(error => {
                            errorMessage += `<li>${error}</li>`;
                        });
                    });
                } else {
                    errorMessage += `<li>${data.message || 'Erro ao enviar mensagem.'}</li>`;
                }
                
                errorMessage += '</ul></div>';
                formMessages.innerHTML = errorMessage;
                
                // Scroll para a mensagem
                formMessages.scrollIntoView({ behavior: 'smooth' });
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            
            let errorMessage = 'Erro ao enviar mensagem.';
            
            if (error.message.includes('Sessão expirada')) {
                errorMessage = error.message;
            } else if (error.message.includes('Failed to fetch')) {
                errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
            } else {
                errorMessage = 'Erro inesperado. Tente novamente mais tarde.';
            }
            
            formMessages.innerHTML = `
                <div style="
                    background: #f8d7da;
                    color: #721c24;
                    padding: 15px;
                    border-radius: 5px;
                    border: 1px solid #f5c6cb;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    <i class="bi bi-exclamation-triangle-fill" style="font-size: 20px;"></i>
                    <span>${errorMessage}</span>
                </div>
            `;
            
            // Scroll para a mensagem
            formMessages.scrollIntoView({ behavior: 'smooth' });
        })
        .finally(() => {
            // Reabilitar botão
            submitButton.value = originalValue;
            submitButton.disabled = false;
        });
    });
});
