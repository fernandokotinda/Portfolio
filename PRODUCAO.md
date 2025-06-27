# Configura��o de Produ��o

Este documento explica como configurar o sistema de portf�lios para produ��o.

## Estrutura de URLs

- `www.portfolio.com.br/` - P�gina inicial (React)
- `www.portfolio.com.br/murilo` - Portfolio do Murilo (Laravel)
- `www.portfolio.com.br/fernando` - Portfolio do Fernando (React)

## Op��o 1: Apache (Recomendado)

### 1. Configura��o do .htaccess

O arquivo `.htaccess` na pasta `public/` j� est� configurado para redirecionar as rotas `/murilo` para o servidor Laravel.

### 2. Configura��o do Virtual Host

```apache
<VirtualHost *:80>
    ServerName www.portfolio.com.br
    ServerAlias portfolio.com.br
    
    DocumentRoot /var/www/portfolio/public
    
    <Directory /var/www/portfolio/public>
        AllowOverride All
        Require all granted
    </Directory>
    
    # Proxy para o Laravel
    ProxyPreserveHost On
    ProxyPass /murilo http://localhost:8000/
    ProxyPassReverse /murilo http://localhost:8000/
    
    ErrorLog ${APACHE_LOG_DIR}/portfolio_error.log
    CustomLog ${APACHE_LOG_DIR}/portfolio_access.log combined
</VirtualHost>
```

## Op��o 2: Nginx

Use o arquivo `nginx.conf.example` como base para sua configura��o.

### 1. Configura��o do Nginx

```nginx
server {
    listen 80;
    server_name www.portfolio.com.br portfolio.com.br;
    root /var/www/portfolio/public;
    index index.html;

    # Rota para o portfolio do Murilo (Laravel)
    location /murilo {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Rota para o portfolio do Fernando (React)
    location /fernando {
        try_files $uri $uri/ /index.html;
    }

    # P�gina inicial e outras rotas (React)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Arquivos est�ticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Processo de Deploy

### 1. Build do Projeto

```bash
# Build do React
npm run build

# Configurar Laravel
cd murilo
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
cd ..
```

### 2. Upload dos Arquivos

1. Fa�a upload da pasta `public/` (build do React) para o servidor
2. Fa�a upload da pasta `murilo/` (Laravel) para o servidor
3. Configure as permiss�es:
   ```bash
   chmod -R 755 /var/www/portfolio/public
   chmod -R 755 /var/www/portfolio/murilo/storage
   chmod -R 755 /var/www/portfolio/murilo/bootstrap/cache
   ```

### 3. Configura��o do Laravel

1. Configure o arquivo `.env` do Laravel:
   ```env
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=http://www.portfolio.com.br
   ```

2. Gere a chave da aplica��o:
   ```bash
   cd murilo
   php artisan key:generate
   ```

### 4. Iniciar o Servidor Laravel

```bash
cd murilo
php artisan serve --host=0.0.0.0 --port=8000
```

Ou configure um supervisor/systemd para manter o servidor rodando.

## Verifica��o

Ap�s a configura��o, teste as seguintes URLs:

- ? `http://www.portfolio.com.br/` - P�gina inicial
- ? `http://www.portfolio.com.br/murilo` - Portfolio do Murilo
- ? `http://www.portfolio.com.br/fernando` - Portfolio do Fernando

## Troubleshooting

### Problema: Rota /murilo n�o funciona
- Verifique se o servidor Laravel est� rodando na porta 8000
- Verifique se o proxy est� configurado corretamente
- Verifique os logs do servidor web

### Problema: P�gina inicial n�o carrega
- Verifique se o build do React foi feito corretamente
- Verifique se os arquivos est�o na pasta `public/`
- Verifique as permiss�es dos arquivos

### Problema: Assets n�o carregam
- Verifique se o caminho dos assets est� correto
- Verifique se o .htaccess est� configurado para servir arquivos est�ticos 