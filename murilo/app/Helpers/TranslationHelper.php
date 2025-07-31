<?php

namespace App\Helpers;

class TranslationHelper
{
    private static $currentLanguage = 'pt';
    private static $translations = [];

    public static function init()
    {
        // Verificar se há uma sessão de idioma
        if (session()->has('site_language')) {
            self::$currentLanguage = session('site_language');
        } else {
            // Se não há sessão, definir português como padrão
            self::$currentLanguage = 'pt';
        }

        // Carregar traduções
        self::loadTranslations();
    }

    public static function loadTranslations()
    {
        $lang = self::$currentLanguage;
        $file = resource_path("lang/{$lang}/translations.php");
        
        if (file_exists($file)) {
            self::$translations = require $file;
        } else {
            // Fallback para português
            self::$translations = require resource_path("lang/pt/translations.php");
        }
        

    }

    public static function get($key, $default = null)
    {
        return self::$translations[$key] ?? $default ?? $key;
    }

    public static function getCurrentLanguage()
    {
        return self::$currentLanguage;
    }

    public static function setLanguage($language)
    {
        self::$currentLanguage = $language;
        session(['site_language' => $language]);
        self::loadTranslations();
    }

    public static function getAllTranslations()
    {
        return self::$translations;
    }
} 