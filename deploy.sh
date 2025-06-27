#!/bin/bash

echo "?? Iniciando deploy do sistema de portfólios..."

# Build do React
echo "?? Fazendo build do React..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "? Erro no build do React"
    exit 1
fi

echo "? Build do React concluído!"

# Configurar Laravel para produção
echo "?? Configurando Laravel..."
cd murilo

# Instalar dependências do Composer
composer install --optimize-autoloader --no-dev

# Limpar cache
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Voltar para a pasta raiz
cd ..

echo "? Laravel configurado!"

echo "?? Deploy concluído!"
echo ""
echo "?? Próximos passos:"
echo "1. Configure o servidor web (Apache/Nginx)"
echo "2. Configure o proxy reverso para /murilo"
echo "3. Inicie o servidor Laravel: cd murilo && php artisan serve"
echo "4. Acesse: http://localhost:5173" 