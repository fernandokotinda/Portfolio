# Configuração do Gmail para Envio de Emails

## Passos para configurar o Gmail:

### 1. Ativar a Verificação em Duas Etapas
- Acesse sua conta Google: https://myaccount.google.com/
- Vá em "Segurança" > "Verificação em duas etapas"
- Ative a verificação em duas etapas

### 2. Gerar uma Senha de App
- Ainda na seção "Segurança", procure por "Senhas de app"
- Clique em "Senhas de app"
- Selecione "Aplicativo" > "Outro (nome personalizado)"
- Digite: "Portfolio Laravel"
- Clique em "Gerar"
- **IMPORTANTE**: Copie a senha gerada (16 caracteres) - ela será exibida apenas uma vez

### 3. Configurar o arquivo .env
- Abra o arquivo `.env` na raiz do projeto
- Substitua `sua_senha_de_app_do_gmail` pela senha de 16 caracteres gerada no passo anterior
- **NÃO use a senha normal da sua conta Gmail**

### 4. Exemplo de configuração no .env:
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=muriloluiz654@gmail.com
MAIL_PASSWORD=abcd efgh ijkl mnop
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="muriloluiz654@gmail.com"
MAIL_FROM_NAME="Murilo's Portfolio"
```

### 5. Testar o envio
- Após configurar, teste o formulário de contato no site
- Verifique a caixa de entrada do email configurado

## Resolução de Problemas Comuns:

### Erro: "Invalid login"
- Verifique se está usando a senha de app (16 caracteres), não a senha normal
- Confirme se a verificação em duas etapas está ativada

### Erro: "Connection failed"
- Verifique se as configurações SMTP estão corretas
- Teste sua conexão com a internet

### Emails não chegam
- Verifique a pasta de spam
- Confirme se o email de destino está correto

## Segurança:
- **NUNCA** commite o arquivo `.env` com senhas reais no Git
- Use variáveis de ambiente na produção
- Mantenha a senha de app segura
