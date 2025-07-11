<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem do Portfólio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #7B2CBF, #5A189A);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px;
        }
        
        .info-section {
            background: #f8f9fa;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border-left: 4px solid #7B2CBF;
        }
        
        .info-row {
            display: flex;
            margin-bottom: 15px;
            align-items: center;
        }
        
        .info-row:last-child {
            margin-bottom: 0;
        }
        
        .info-label {
            font-weight: bold;
            color: #7B2CBF;
            min-width: 100px;
            margin-right: 15px;
        }
        
        .info-value {
            flex: 1;
            color: #555;
        }
        
        .message-section {
            background: #fff;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }
        
        .message-label {
            font-weight: bold;
            color: #7B2CBF;
            margin-bottom: 10px;
            display: block;
        }
        
        .message-content {
            color: #555;
            white-space: pre-wrap;
            line-height: 1.6;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            border-left: 3px solid #7B2CBF;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer p {
            color: #6c757d;
            font-size: 14px;
        }
        
        .icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            vertical-align: middle;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 5px;
            }
            
            .content {
                padding: 20px;
            }
            
            .info-row {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .info-label {
                margin-bottom: 5px;
                margin-right: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💼 Nova Mensagem do Portfólio</h1>
            <p>Você recebeu uma nova mensagem através do seu site</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <div class="info-row">
                    <span class="info-label">👤 Nome:</span>
                    <span class="info-value">{{ $contactData['name'] }}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">📧 E-mail:</span>
                    <span class="info-value">
                        <a href="mailto:{{ $contactData['email'] }}" style="color: #7B2CBF; text-decoration: none;">
                            {{ $contactData['email'] }}
                        </a>
                    </span>
                </div>
                
                @if($contactData['phone'])
                <div class="info-row">
                    <span class="info-label">📱 Telefone:</span>
                    <span class="info-value">
                        <a href="tel:{{ $contactData['phone'] }}" style="color: #7B2CBF; text-decoration: none;">
                            {{ $contactData['phone'] }}
                        </a>
                    </span>
                </div>
                @endif
                
                <div class="info-row">
                    <span class="info-label">🕐 Data:</span>
                    <span class="info-value">{{ $contactData['date'] }}</span>
                </div>
            </div>
            
            <div class="message-section">
                <span class="message-label">💬 Mensagem:</span>
                <div class="message-content">{{ $contactData['message'] }}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>Esta mensagem foi enviada através do formulário de contato do seu portfólio.</p>
            <p style="margin-top: 10px;">
                <strong>Responda diretamente para o e-mail:</strong> 
                <a href="mailto:{{ $contactData['email'] }}" style="color: #7B2CBF;">{{ $contactData['email'] }}</a>
            </p>
        </div>
    </div>
</body>
</html>
