<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validação dos dados do formulário
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:2000',
        ], [
            'name.required' => 'O campo nome é obrigatório.',
            'name.string' => 'O nome deve ser um texto válido.',
            'name.max' => 'O nome não pode ter mais de 255 caracteres.',
            'email.required' => 'O campo e-mail é obrigatório.',
            'email.email' => 'Por favor, insira um e-mail válido.',
            'email.max' => 'O e-mail não pode ter mais de 255 caracteres.',
            'phone.string' => 'O telefone deve ser um texto válido.',
            'phone.max' => 'O telefone não pode ter mais de 20 caracteres.',
            'message.required' => 'O campo mensagem é obrigatório.',
            'message.string' => 'A mensagem deve ser um texto válido.',
            'message.max' => 'A mensagem não pode ter mais de 2000 caracteres.',
        ]);

        // Determinar a URL de redirecionamento baseada na rota atual
        $redirectUrl = $this->getRedirectUrl($request);

        if ($validator->fails()) {
            if ($request->ajax() || $request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }
            
            return redirect($redirectUrl)
                ->withErrors($validator)
                ->withInput();
        }

        try {
            // Dados para o email
            $contactData = [
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'message' => $request->message,
                'date' => now()->format('d/m/Y H:i:s')
            ];

            // Enviar email
            Mail::to('muriloluiz654@gmail.com')->send(new ContactMail($contactData));

            if ($request->ajax() || $request->expectsJson()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
                ]);
            }
            
            return redirect($redirectUrl)
                ->with('success', 'Mensagem enviada com sucesso! Entrarei em contato em breve.');

        } catch (\Exception $e) {
            // Log do erro para debug
            \Log::error('Erro ao enviar email de contato: ' . $e->getMessage());
            \Log::error('Stack trace: ' . $e->getTraceAsString());
            
            if ($request->ajax() || $request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Erro interno do servidor. Tente novamente em alguns minutos.',
                    'debug' => config('app.debug') ? $e->getMessage() : null
                ], 500);
            }
            
            return redirect($redirectUrl)
                ->with('error', 'Erro ao enviar mensagem. Tente novamente mais tarde.')
                ->withInput();
        }
    }

    private function getRedirectUrl(Request $request)
    {
        // Verificar se a requisição veio de uma rota com prefixo /murilo
        $referer = $request->header('referer');
        if ($referer && str_contains($referer, '/murilo')) {
            return '/murilo#form-menu';
        }
        
        // Verificar se a rota atual tem o prefixo murilo
        if ($request->route() && str_contains($request->route()->getName(), 'murilo.')) {
            return '/murilo#form-menu';
        }
        
        // Fallback para a rota raiz
        return '/#form-menu';
    }
}
