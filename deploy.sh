#!/bin/bash

echo "?? Iniciando deploy do sistema de portf�lios..."

# Build do React
echo "?? Fazendo build do React..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "? Erro no build do React"
    exit 1
fi

echo "? Build do React conclu�do!"

# Configurar Laravel para produ��o
echo "?? Configurando Laravel..."
cd murilo

# Instalar depend�ncias do Composer
composer install --optimize-autoloader --no-dev

# Limpar cache
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Voltar para a pasta raiz
cd ..

echo "? Laravel configurado!"

echo "?? Deploy conclu�do!"
echo ""
echo "?? Pr�ximos passos:"
echo "1. Configure o servidor web (Apache/Nginx)"
echo "2. Configure o proxy reverso para /murilo"
echo "3. Inicie o servidor Laravel: cd murilo && php artisan serve"
echo "4. Acesse: http://localhost:5173" 