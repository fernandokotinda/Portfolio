<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class TestEmail extends Command
{
    protected $signature = 'test:email';
    protected $description = 'Teste o envio de email';

    public function handle()
    {
        $this->info('Testando envio de email...');

        try {
            $contactData = [
                'name' => 'Teste Sistema',
                'email' => 'teste@teste.com',
                'phone' => '(11) 99999-9999',
                'message' => 'Esta é uma mensagem de teste do sistema.',
                'date' => now()->format('d/m/Y H:i:s')
            ];

            Mail::to('muriloluiz654@gmail.com')->send(new ContactMail($contactData));
            
            $this->info('✅ Email enviado com sucesso!');
        } catch (\Exception $e) {
            $this->error('❌ Erro ao enviar email: ' . $e->getMessage());
            $this->error('Detalhes: ' . $e->getTraceAsString());
        }
    }
}
