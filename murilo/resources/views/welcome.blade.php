<!DOCTYPE html>
<html lang="{{ App\Helpers\TranslationHelper::getCurrentLanguage() === 'en' ? 'en' : 'pt-BR' }}">

<head>
    @php
        $isMuriloRoute = request()->is('murilo*');
        $baseUrl = $isMuriloRoute ? '/murilo' : '';
    @endphp
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta name="theme-color" content="#7B2CBF">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- GOOGLE FONTS FINAL -->

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <!-- Bootstrap ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <!-- Bootstrap icons final -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="shortcut icon" href="imgs/favicon-32x32.png" type="image/x-icon">
    <title>Murilo's | Portfolio</title>
    
    <script>
        // Inicializar helper de tradução
        @php
            App\Helpers\TranslationHelper::init();
        @endphp
        window.currentLanguage = '{{ App\Helpers\TranslationHelper::getCurrentLanguage() }}';
        window.translations = @json(App\Helpers\TranslationHelper::getAllTranslations());
        console.log('Idioma atual:', window.currentLanguage);
        console.log('Traduções carregadas:', Object.keys(window.translations).length);
        console.log('Sessão atual:', '{{ session('site_language', 'pt') }}');
        console.log('Exemplo de tradução (home):', '{{ App\Helpers\TranslationHelper::get("home") }}');
        console.log('Exemplo de tradução (contact):', '{{ App\Helpers\TranslationHelper::get("contact") }}');
    </script>
</head>

<body>
    <!-- Elementos decorativos flutuantes -->
    <div class="floating-elements">
        <div class="floating-element element-1">
            <i class="bi bi-code-slash"></i>
        </div>
        <div class="floating-element element-2">
            <i class="bi bi-braces"></i>
        </div>
        <div class="floating-element element-3">
            <i class="bi bi-gear"></i>
        </div>
        <div class="floating-element element-4">
            <i class="bi bi-cpu"></i>
        </div>
        <div class="floating-element element-5">
            <i class="bi bi-database"></i>
        </div>
        <div class="floating-element element-6">
            <i class="bi bi-layers"></i>
        </div>
        <div class="floating-element element-7">
            <i class="bi bi-terminal"></i>
        </div>
        <div class="floating-element element-8">
            <i class="bi bi-github"></i>
        </div>
        <div class="floating-element element-9">
            <i class="bi bi-phone"></i>
        </div>
        <div class="floating-element element-10">
            <i class="bi bi-laptop"></i>
        </div>
        <div class="floating-element element-11">
            <i class="bi bi-server"></i>
        </div>
        <div class="floating-element element-12">
            <i class="bi bi-cloud"></i>
        </div>
        <div class="floating-element element-13">
            <i class="bi bi-wifi"></i>
        </div>
        <div class="floating-element element-14">
            <i class="bi bi-shield-check"></i>
        </div>
        <div class="floating-element element-15">
            <i class="bi bi-graph-up"></i>
        </div>
        <div class="floating-element element-16">
            <i class="bi bi-palette"></i>
        </div>
    </div>

    <header>
        <div class="interface">
            <nav class="desktop-menu">
                <ul>
                    <li><a href="{{ $baseUrl ?: '/' }}" data-translate="home">{{ App\Helpers\TranslationHelper::get('home') }}</a></li>
                    <li><a href="{{ $baseUrl }}#specialties-menu" data-translate="skills">{{ App\Helpers\TranslationHelper::get('skills') }}</a></li>
                    <li><a href="{{ $baseUrl }}#top-of-site" data-translate="about">{{ App\Helpers\TranslationHelper::get('about') }}</a></li>
                    <li><a href="{{ $baseUrl }}#experience-menu" data-translate="experience">{{ App\Helpers\TranslationHelper::get('experience') }}</a></li>
                    <li><a href="{{ $baseUrl }}#portfolio-menu" data-translate="projects">{{ App\Helpers\TranslationHelper::get('projects') }}</a></li>
                    <li><a href="{{ $baseUrl }}#certificates" data-translate="certificates">{{ App\Helpers\TranslationHelper::get('certificates') }}</a></li>
                    <li><a href="{{ $baseUrl }}#technologies" data-translate="technologies">{{ App\Helpers\TranslationHelper::get('technologies') }}</a></li>
                </ul>
            </nav>
            
            <!-- Botão de alternância de idioma -->
            <div class="language-switch">
                <button id="language-toggle" class="language-btn" title="{{ App\Helpers\TranslationHelper::get('language_switch_tooltip') }}">
                    <span class="language-text">{{ App\Helpers\TranslationHelper::get('language_switch') }}</span>
                    <i class="bi bi-translate"></i>
                </button>
            </div>
            <div class="btn-contact">
                <a href="{{ $baseUrl }}#form-menu"><button data-translate="contact">{{ App\Helpers\TranslationHelper::get('contact') }}</button></a>
            </div><!--btn-contact-->

            <div class="btn-open-menu" id="btn-menu">
                <i class="bi bi-list"></i>
            </div><!--btn-open-menu-->

            <div class="menu-mobile" id="menu-mobile">
                <div class="btn-close">
                    <i class="bi bi-x-lg"></i>
                </div><!--btn-close-->

                <nav>
                    <ul>
                        <li><a href="{{ $baseUrl ?: '/' }}" data-translate="home">{{ App\Helpers\TranslationHelper::get('home') }}</a></li>
                        <li><a href="{{ $baseUrl }}#specialties-menu" data-translate="skills">{{ App\Helpers\TranslationHelper::get('skills') }}</a></li>
                        <li><a href="{{ $baseUrl }}#top-of-site" data-translate="about">{{ App\Helpers\TranslationHelper::get('about') }}</a></li>
                        <li><a href="{{ $baseUrl }}#experience-menu" data-translate="experience">{{ App\Helpers\TranslationHelper::get('experience') }}</a></li>
                        <li><a href="{{ $baseUrl }}#portfolio-menu" data-translate="projects">{{ App\Helpers\TranslationHelper::get('projects') }}</a></li>
                        <li><a href="{{ $baseUrl }}#certificates" data-translate="certificates">{{ App\Helpers\TranslationHelper::get('certificates') }}</a></li>
                        <li><a href="{{ $baseUrl }}#technologies" data-translate="technologies">{{ App\Helpers\TranslationHelper::get('technologies') }}</a></li>
                        <li><a href="{{ $baseUrl }}#form-menu" data-translate="contact">{{ App\Helpers\TranslationHelper::get('contact') }}</a></li>
                    </ul>
                </nav>
            </div><!--menu-mobile-->
            <div class="overlay-menu" id="overlay-menu">

            </div>
        </div> <!--Interface-->
    </header>

    <main>
        <section class="top-of-site" id="top-of-site">
            <div class="interface">
                <div class="flex">
                    <div class="txt-top-of-site scroll-reveal-left">
                        <h1 data-translate="hero_greeting">{{ App\Helpers\TranslationHelper::get('hero_greeting') }}<span>.</span></h1>
                        <h2 class="typewriter" data-translate="hero_title">{{ App\Helpers\TranslationHelper::get('hero_title') }}</h2>
                        <p data-translate="hero_description_1">{{ App\Helpers\TranslationHelper::get('hero_description_1') }}</p>

                        <p data-translate="hero_description_2">{{ App\Helpers\TranslationHelper::get('hero_description_2') }}</p>

                        <p data-translate="hero_description_3">{{ App\Helpers\TranslationHelper::get('hero_description_3') }}</p>

                        <div class="btn-contact">
                            <a href="{{ $baseUrl }}#form-menu">
                                <button data-translate="contact">{{ App\Helpers\TranslationHelper::get('contact') }}</button>
                            </a>
                        </div>
                    </div>
                    <div class="img-top-of-site scroll-reveal-right">
                        <img src="{{ asset('images/muriloImages/ft 1 linkedin.png') }}" alt="Foto Murilo">
                    </div>
                </div>
                <!-- Seta de scroll -->
                <div class="scroll-indicator">
                    <div class="scroll-arrow">
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div><!--Interface-->
        </section><!--top-of-site-->

        <section id="specialties-menu" class="specialties">
            <div class="interface">
                <h2 class="title" data-translate="specialties_title">{{ App\Helpers\TranslationHelper::get('specialties_title') }}</h2>
                <div class="flex">
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-1">
                        <i class="bi bi-layout-text-window-reverse"></i>
                        <h3 data-translate="specialty_1_title">{{ App\Helpers\TranslationHelper::get('specialty_1_title') }}</h3>
                        <p data-translate="specialty_1_desc">{{ App\Helpers\TranslationHelper::get('specialty_1_desc') }}</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-2">
                        <i class="bi bi-gear-wide-connected"></i>
                        <h3 data-translate="specialty_2_title">{{ App\Helpers\TranslationHelper::get('specialty_2_title') }}</h3>
                        <p data-translate="specialty_2_desc">{{ App\Helpers\TranslationHelper::get('specialty_2_desc') }}</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-3">
                        <i class="bi bi-tools"></i>
                        <h3 data-translate="specialty_3_title">{{ App\Helpers\TranslationHelper::get('specialty_3_title') }}</h3>
                        <p data-translate="specialty_3_desc">{{ App\Helpers\TranslationHelper::get('specialty_3_desc') }}</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-4">
                        <i class="bi bi-code-square"></i>
                        <h3 data-translate="specialty_4_title">{{ App\Helpers\TranslationHelper::get('specialty_4_title') }}</h3>
                        <p data-translate="specialty_4_desc">{{ App\Helpers\TranslationHelper::get('specialty_4_desc') }}</p>
                    </div><!--specialties-box -->
                </div>
            </div>
        </section> <!--Specialties -->

        <section id="experience-menu" class="experience">
            <div class="interface">
                <h2 class="title" data-translate="experience_title">{{ App\Helpers\TranslationHelper::get('experience_title') }}</h2>
                <div class="timeline-container">
                    <div class="timeline">
                        <!-- Experiência 1 -->
                        <div class="timeline-item scroll-reveal">
                            <div class="timeline-dot">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <h3 data-translate="job_1_title">{{ App\Helpers\TranslationHelper::get('job_1_title') }}</h3>
                                    <span class="company" data-translate="job_1_company">{{ App\Helpers\TranslationHelper::get('job_1_company') }}</span>
                                    <span class="period" data-translate="job_1_period">{{ App\Helpers\TranslationHelper::get('job_1_period') }}</span>
                                </div>
                                <div class="timeline-body">
                                    <p data-translate="job_1_desc">{{ App\Helpers\TranslationHelper::get('job_1_desc') }}</p>
                                    <div class="timeline-tech">
                                        <span class="tech-tag">Laravel</span>
                                        <span class="tech-tag">Symfony</span>
                                        <span class="tech-tag">PHP</span>
                                        <span class="tech-tag">PostgreSQL</span>
                                        <span class="tech-tag">JavaScript</span>
                                        <span class="tech-tag">AJAX</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Experiência 2 -->
                        <div class="timeline-item scroll-reveal">
                            <div class="timeline-dot">
                                <i class="bi bi-code-slash"></i>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <h3 data-translate="job_2_title">{{ App\Helpers\TranslationHelper::get('job_2_title') }}</h3>
                                    <span class="company" data-translate="job_2_company">{{ App\Helpers\TranslationHelper::get('job_2_company') }}</span>
                                    <span class="period" data-translate="job_2_period">{{ App\Helpers\TranslationHelper::get('job_2_period') }}</span>
                                </div>
                                <div class="timeline-body">
                                    <p data-translate="job_2_desc">{{ App\Helpers\TranslationHelper::get('job_2_desc') }}</p>
                                    <div class="timeline-tech">
                                        <span class="tech-tag">APIs</span>
                                        <span class="tech-tag">PHP</span>
                                        <span class="tech-tag">Sistemas</span>
                                        <span class="tech-tag">Desenvolvimento</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Experiência 3 -->
                        <div class="timeline-item scroll-reveal">
                            <div class="timeline-dot">
                                <i class="bi bi-headset"></i>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <h3 data-translate="job_3_title">{{ App\Helpers\TranslationHelper::get('job_3_title') }}</h3>
                                    <span class="company" data-translate="job_3_company">{{ App\Helpers\TranslationHelper::get('job_3_company') }}</span>
                                    <span class="period" data-translate="job_3_period">{{ App\Helpers\TranslationHelper::get('job_3_period') }}</span>
                                </div>
                                <div class="timeline-body">
                                    <p data-translate="job_3_desc">{{ App\Helpers\TranslationHelper::get('job_3_desc') }}</p>
                                    <div class="timeline-tech">
                                        <span class="tech-tag">Suporte Técnico</span>
                                        <span class="tech-tag">Atendimento</span>
                                        <span class="tech-tag">Tecnologia</span>
                                        <span class="tech-tag">Resolução</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Experiência 4 -->
                        <div class="timeline-item scroll-reveal">
                            <div class="timeline-dot">
                                <i class="bi bi-tools"></i>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-header">
                                    <h3 data-translate="job_4_title">{{ App\Helpers\TranslationHelper::get('job_4_title') }}</h3>
                                    <span class="company" data-translate="job_4_company">{{ App\Helpers\TranslationHelper::get('job_4_company') }}</span>
                                    <span class="period" data-translate="job_4_period">{{ App\Helpers\TranslationHelper::get('job_4_period') }}</span>
                                </div>
                                <div class="timeline-body">
                                    <p data-translate="job_4_desc">{{ App\Helpers\TranslationHelper::get('job_4_desc') }}</p>
                                    <div class="timeline-tech">
                                        <span class="tech-tag">HelpDesk</span>
                                        <span class="tech-tag">Manutenção</span>
                                        <span class="tech-tag">SQL</span>
                                        <span class="tech-tag">Suporte</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--experience-->

        <section id="portfolio-menu" class="portfolio">
            <div class="interface">
                <h2 class="title" data-translate="portfolio_title">{{ App\Helpers\TranslationHelper::get('portfolio_title') }}</h2>
                <div class="portfolio-grid">
                    <div class="portfolio-item">
                        <a target="_blank" href="https://fernandokotinda.github.io/Sistema-Controle-de-Estoque/controle-estoque.html" class="portfolio-link">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/controle_de_estoque.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_1_title">{{ App\Helpers\TranslationHelper::get('project_1_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">HTML5 • CSS3 • JS</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_1_title">{{ App\Helpers\TranslationHelper::get('project_1_title') }}</h3>
                                        <p data-translate="project_1_desc">{{ App\Helpers\TranslationHelper::get('project_1_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="portfolio-item">
                        <a target="_blank" href="https://muriloluix.github.io/Calculator/" class="portfolio-link">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/Calculadora.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_2_title">{{ App\Helpers\TranslationHelper::get('project_2_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">HTML5 • CSS3 • JS</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_2_title">{{ App\Helpers\TranslationHelper::get('project_2_title') }}</h3>
                                        <p data-translate="project_2_desc">{{ App\Helpers\TranslationHelper::get('project_2_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="portfolio-item">
                        <a target="_blank" href="https://muriloluix.github.io/Game-of-Memory/" class="portfolio-link">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/memoryGame.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_3_title">{{ App\Helpers\TranslationHelper::get('project_3_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">HTML5 • CSS3 • JS</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_3_title">{{ App\Helpers\TranslationHelper::get('project_3_title') }}</h3>
                                        <p data-translate="project_3_desc">{{ App\Helpers\TranslationHelper::get('project_3_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="portfolio-item">
                        <a target="_blank" href="https://muriloluix.github.io/Tic-Tac-Toe/" class="portfolio-link">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/jogoDaVelha.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_4_title">{{ App\Helpers\TranslationHelper::get('project_4_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">HTML5 • CSS3 • JS</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_4_title">{{ App\Helpers\TranslationHelper::get('project_4_title') }}</h3>
                                        <p data-translate="project_4_desc">{{ App\Helpers\TranslationHelper::get('project_4_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="portfolio-item">
                        <a href="{{ $baseUrl }}/murilo/privado" class="portfolio-link">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/Echo.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_5_title">{{ App\Helpers\TranslationHelper::get('project_5_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">Laravel • PHP • Blade</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_5_title">{{ App\Helpers\TranslationHelper::get('project_5_title') }}</h3>
                                        <p data-translate="project_5_desc">{{ App\Helpers\TranslationHelper::get('project_5_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                            <span class="tag">Laravel</span>
                                            <span class="tag">Blade</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="portfolio-item">
                        <a href="{{ $baseUrl }}/murilo/privado" class="portfolio-link">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/csvFormatter.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_6_title">{{ App\Helpers\TranslationHelper::get('project_6_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">Laravel • PHP • Excel</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_6_title">{{ App\Helpers\TranslationHelper::get('project_6_title') }}</h3>
                                        <p data-translate="project_6_desc">{{ App\Helpers\TranslationHelper::get('project_6_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                            <span class="tag">Laravel</span>
                                            <span class="tag">Blade</span>
                                            <span class="tag">PHPSpreadsheet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="portfolio-item">
                        <a href="https://github.com/muriloLuix/BioVerde" class="portfolio-link" target="_blank">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/BioVerde.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_7_title">{{ App\Helpers\TranslationHelper::get('project_7_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">React • PHP • MySQL</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_7_title">{{ App\Helpers\TranslationHelper::get('project_7_title') }}</h3>
                                        <p data-translate="project_7_desc">{{ App\Helpers\TranslationHelper::get('project_7_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">TailwindCSS</span>
                                            <span class="tag">JavaScript</span>
                                            <span class="tag">React</span>
                                            <span class="tag">PHP</span>
                                            <span class="tag">MySQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="portfolio-item">
                        <a href="https://muriloluix.github.io/Quiz-Angular/" class="portfolio-link" target="_blank">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/QuizAngular.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_8_title">{{ App\Helpers\TranslationHelper::get('project_8_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">HTML5 • CSS3 • JS • Angular</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_8_title">{{ App\Helpers\TranslationHelper::get('project_8_title') }}</h3>
                                        <p data-translate="project_8_desc">{{ App\Helpers\TranslationHelper::get('project_8_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                            <span class="tag">Angular</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="portfolio-item">
                        <a href="https://github.com/muriloLuix/sorteadorDePersonagens" class="portfolio-link" target="_blank">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/sorteadorDePersonagens.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_9_title">{{ App\Helpers\TranslationHelper::get('project_9_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">HTML5 • CSS3 • JS • PHP</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_9_title">{{ App\Helpers\TranslationHelper::get('project_9_title') }}</h3>
                                        <p data-translate="project_9_desc">{{ App\Helpers\TranslationHelper::get('project_9_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">HTML5</span>
                                            <span class="tag">CSS3</span>
                                            <span class="tag">JavaScript</span>
                                            <span class="tag">Angular</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="portfolio-item">
                        <a href="https://github.com/muriloLuix/gerador-de-senha" class="portfolio-link" target="_blank">
                            <div class="portfolio-image" style="background-image: url('{{ asset('images/portfolio/geradorDeSenhas.png') }}');">
                                <div class="portfolio-title-overlay">
                                    <h4 data-translate="project_10_title">{{ App\Helpers\TranslationHelper::get('project_10_title') }}</h4>
                                </div>
                                <div class="portfolio-tech-badge">Expo • React Native • JS</div>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-content">
                                        <h3 data-translate="project_10_title">{{ App\Helpers\TranslationHelper::get('project_10_title') }}</h3>
                                        <p data-translate="project_10_desc">{{ App\Helpers\TranslationHelper::get('project_10_desc') }}</p>
                                        <div class="portfolio-tags">
                                            <span class="tag">Expo</span>
                                            <span class="tag">React Native</span>
                                            <span class="tag">JS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section><!--portfolio-->
        <section class="certificates" id="certificates">
            <div class="interface">
                <h2 class="title" data-translate="certificates_title">{{ App\Helpers\TranslationHelper::get('certificates_title') }}</h2>
                
                <!-- Filtros de Categoria -->
                <div class="certificate-filters scroll-reveal">
                    <button class="filter-btn active" data-category="all" data-translate="filter_all">{{ App\Helpers\TranslationHelper::get('filter_all') }}</button>
                    <button class="filter-btn" data-category="web-dev" data-translate="filter_web_dev">{{ App\Helpers\TranslationHelper::get('filter_web_dev') }}</button>
                    <button class="filter-btn" data-category="programming" data-translate="filter_programming">{{ App\Helpers\TranslationHelper::get('filter_programming') }}</button>
                    <button class="filter-btn" data-category="languages" data-translate="filter_languages">{{ App\Helpers\TranslationHelper::get('filter_languages') }}</button>
                    <button class="filter-btn" data-category="admin" data-translate="filter_admin">{{ App\Helpers\TranslationHelper::get('filter_admin') }}</button>
                </div>

                <!-- Container do Carousel -->
                <div class="certificates-carousel-container scroll-reveal scroll-reveal-delay-1">
                    <div class="certificates-carousel">
                        <!-- Slide 1 - Desenvolvimento Web -->
                        <div class="certificate-slide active" data-category="web-dev">
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/CertificadoHTML5.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_html5_title">{{ App\Helpers\TranslationHelper::get('cert_html5_title') }}</h4>
                                    <p data-translate="cert_html5_desc">{{ App\Helpers\TranslationHelper::get('cert_html5_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/CertificadoCSS3.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_css3_title">{{ App\Helpers\TranslationHelper::get('cert_css3_title') }}</h4>
                                    <p data-translate="cert_css3_desc">{{ App\Helpers\TranslationHelper::get('cert_css3_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/CertificadoHTML5Curso.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_html5css3_title">{{ App\Helpers\TranslationHelper::get('cert_html5css3_title') }}</h4>
                                    <p data-translate="cert_html5css3_desc">{{ App\Helpers\TranslationHelper::get('cert_html5css3_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/ReactJS.png') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_react_title">{{ App\Helpers\TranslationHelper::get('cert_react_title') }}</h4>
                                    <p data-translate="cert_react_desc">{{ App\Helpers\TranslationHelper::get('cert_react_desc') }}</p>
                                    <span class="certificate-date">2024</span>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 2 - Programação -->
                        <div class="certificate-slide" data-category="programming">
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/CertificadoCC50.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_cs50_title">{{ App\Helpers\TranslationHelper::get('cert_cs50_title') }}</h4>
                                    <p data-translate="cert_cs50_desc">{{ App\Helpers\TranslationHelper::get('cert_cs50_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/pythonBasico.png') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_python_title">{{ App\Helpers\TranslationHelper::get('cert_python_title') }}</h4>
                                    <p data-translate="cert_python_desc">{{ App\Helpers\TranslationHelper::get('cert_python_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/informaticaBasica.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_basic_it_title">{{ App\Helpers\TranslationHelper::get('cert_basic_it_title') }}</h4>
                                    <p data-translate="cert_basic_it_desc">{{ App\Helpers\TranslationHelper::get('cert_basic_it_desc') }}</p>
                                    <span class="certificate-date">2022</span>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 3 - Idiomas -->
                        <div class="certificate-slide" data-category="languages">
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/inglesII.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_english2_title">{{ App\Helpers\TranslationHelper::get('cert_english2_title') }}</h4>
                                    <p data-translate="cert_english2_desc">{{ App\Helpers\TranslationHelper::get('cert_english2_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certitificado Dialogue I.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_dialogue1_title">{{ App\Helpers\TranslationHelper::get('cert_dialogue1_title') }}</h4>
                                    <p data-translate="cert_dialogue1_desc">{{ App\Helpers\TranslationHelper::get('cert_dialogue1_desc') }}</p>
                                    <span class="certificate-date">2022</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certificado Dialogue II.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_dialogue2_title">{{ App\Helpers\TranslationHelper::get('cert_dialogue2_title') }}</h4>
                                    <p data-translate="cert_dialogue2_desc">{{ App\Helpers\TranslationHelper::get('cert_dialogue2_desc') }}</p>
                                    <span class="certificate-date">2022</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certificado Dialogue III.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_dialogue3_title">{{ App\Helpers\TranslationHelper::get('cert_dialogue3_title') }}</h4>
                                    <p data-translate="cert_dialogue3_desc">{{ App\Helpers\TranslationHelper::get('cert_dialogue3_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 4 - Idiomas Parte 2 -->
                        <div class="certificate-slide" data-category="languages">
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certificado Dialogue IV.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_dialogue4_title">{{ App\Helpers\TranslationHelper::get('cert_dialogue4_title') }}</h4>
                                    <p data-translate="cert_dialogue4_desc">{{ App\Helpers\TranslationHelper::get('cert_dialogue4_desc') }}</p>
                                    <span class="certificate-date">2023</span>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 5 - Administração -->
                        <div class="certificate-slide" data-category="admin">
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certificado Auxiliar Administrativo.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_admin_title">{{ App\Helpers\TranslationHelper::get('cert_admin_title') }}</h4>
                                    <p data-translate="cert_admin_desc">{{ App\Helpers\TranslationHelper::get('cert_admin_desc') }}</p>
                                    <span class="certificate-date">2022</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certificado Treinamento e Desenvolvimento.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_training_title">{{ App\Helpers\TranslationHelper::get('cert_training_title') }}</h4>
                                    <p data-translate="cert_training_desc">{{ App\Helpers\TranslationHelper::get('cert_training_desc') }}</p>
                                    <span class="certificate-date">2022</span>
                                </div>
                            </div>
                            <div class="certificate-card">
                                <div class="certificate-image" style="background-image: url('{{ asset('images/certificados/Certificado Cedaspy.jpg') }}');"></div>
                                <div class="certificate-info">
                                    <h4 data-translate="cert_cedaspy_title">{{ App\Helpers\TranslationHelper::get('cert_cedaspy_title') }}</h4>
                                    <p data-translate="cert_cedaspy_desc">{{ App\Helpers\TranslationHelper::get('cert_cedaspy_desc') }}</p>
                                    <span class="certificate-date">2022</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Navegação do Carousel -->
                    <div class="carousel-navigation">
                        <button class="carousel-btn prev-btn">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button class="carousel-btn next-btn">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>

                    <!-- Indicadores -->
                    <div class="carousel-indicators">
                        <span class="indicator active" data-slide="0"></span>
                        <span class="indicator" data-slide="1"></span>
                        <span class="indicator" data-slide="2"></span>
                        <span class="indicator" data-slide="3"></span>
                        <span class="indicator" data-slide="4"></span>
                    </div>
                </div>

                <!-- Contador de Certificados -->
                <div class="certificates-counter scroll-reveal scroll-reveal-delay-2">
                    <div class="counter-item">
                        <span class="counter-number" data-count="15">0</span>
                        <span class="counter-label" data-translate="certificate_count">{{ App\Helpers\TranslationHelper::get('certificate_count') }}</span>
                    </div>
                    <div class="counter-item">
                        <span class="counter-number" data-count="4">0</span>
                        <span class="counter-label" data-translate="category_count">{{ App\Helpers\TranslationHelper::get('category_count') }}</span>
                    </div>
                </div>
            </div>
        </section><!--certificates-->

        <section class="certificates" id="technologies">
            <div class="interface">
                <h2 class="title" data-translate="technologies_title">{{ App\Helpers\TranslationHelper::get('technologies_title') }}</h2>
                
                <!-- Front-end Technologies -->
                <div class="tech-category">
                    <h3 class="tech-title scroll-reveal" data-translate="frontend_title">{{ App\Helpers\TranslationHelper::get('frontend_title') }}</h3>
                    <div class="imgLanguages">
                        <img src="{{ asset('images/linguagens/html5.png') }}" alt="HTML5" class="scroll-reveal scroll-reveal-delay-1" title="HTML5">
                        <img src="{{ asset('images/linguagens/css3.png') }}" alt="CSS3" class="scroll-reveal scroll-reveal-delay-2" title="CSS3">
                        <img src="{{ asset('images/linguagens/js.png') }}" alt="JavaScript" class="scroll-reveal scroll-reveal-delay-3" title="JavaScript">
                        <img src="{{ asset('images/linguagens/ajax.png') }}" alt="AJAX" class="scroll-reveal scroll-reveal-delay-4" title="AJAX">
                        <img src="{{ asset('images/linguagens/react.png') }}" alt="React" class="scroll-reveal scroll-reveal-delay-1" title="React">
                        <img src="{{ asset('images/linguagens/bootstrap.png') }}" alt="Bootstrap" class="scroll-reveal scroll-reveal-delay-2" title="Bootstrap">
                        <img src="{{ asset('images/linguagens/materializecss-original.svg') }}" alt="Materialize CSS" class="scroll-reveal scroll-reveal-delay-3" title="Materialize CSS">
                    </div>
                </div>

                <!-- Back-end Technologies -->
                <div class="tech-category">
                    <h3 class="tech-title scroll-reveal" data-translate="backend_title">{{ App\Helpers\TranslationHelper::get('backend_title') }}</h3>
                    <div class="imgLanguages">
                        <img src="{{ asset('images/linguagens/php.png') }}" alt="PHP" class="scroll-reveal scroll-reveal-delay-1" title="PHP">
                        <img src="{{ asset('images/linguagens/laravel-original.svg') }}" alt="Laravel" class="scroll-reveal scroll-reveal-delay-2" title="Laravel">
                        <img src="{{ asset('images/linguagens/symfony-original.svg') }}" alt="Symfony" class="scroll-reveal scroll-reveal-delay-3" title="Symfony">
                    </div>
                </div>

                <!-- Database Technologies -->
                <div class="tech-category">
                    <h3 class="tech-title scroll-reveal" data-translate="database_title">{{ App\Helpers\TranslationHelper::get('database_title') }}</h3>
                    <div class="imgLanguages">
                        <img src="{{ asset('images/linguagens/mysql-original-wordmark.svg') }}" alt="MySQL" class="scroll-reveal scroll-reveal-delay-1" title="MySQL">
                        <img src="{{ asset('images/linguagens/postgresql-plain-wordmark.svg') }}" alt="PostgreSQL" class="scroll-reveal scroll-reveal-delay-2" title="PostgreSQL">
                        <img src="{{ asset('images/linguagens/sql-server.png') }}" alt="SQL Server" class="scroll-reveal scroll-reveal-delay-3" title="SQL Server">
                    </div>
                </div>
            </div>
        </section><!--technologies-->

        <section class="form" id="form-menu">
            <div class="interface">
                <h2 class="title" data-translate="contact_title">{{ App\Helpers\TranslationHelper::get('contact_title') }}</h2>
                <form id="contact-form" action="{{ request()->is('murilo*') ? route('murilo.contact.send') : route('contact.send') }}" method="post">
                    @csrf
                    <input type="text" name="name" id="name" placeholder="{{ App\Helpers\TranslationHelper::get('name_placeholder') }}" required>
                    <input type="email" name="email" id="email" placeholder="{{ App\Helpers\TranslationHelper::get('email_placeholder') }}" required>
                    <input type="tel" name="phone" id="telefone" placeholder="{{ App\Helpers\TranslationHelper::get('phone_placeholder') }}" maxlength="15">
                    <textarea name="message" id="message" placeholder="{{ App\Helpers\TranslationHelper::get('message_placeholder') }}" required></textarea>
                    <div class="btn-submit">
                        <input type="submit" value="{{ App\Helpers\TranslationHelper::get('send_button') }}" data-translate="send_button">
                    </div>
                    <div id="form-messages">
                        @if(session('success'))
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
                                <span>{{ session('success') }}</span>
                            </div>
                        @endif

                        @if(session('error'))
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
                                <span>{{ session('error') }}</span>
                            </div>
                        @endif

                        @if($errors->any())
                            <div style="
                                background: #f8d7da;
                                color: #721c24;
                                padding: 15px;
                                border-radius: 5px;
                                border: 1px solid #f5c6cb;
                                margin-top: 20px;
                            ">
                                <ul style="margin: 0; padding-left: 20px;">
                                    @foreach($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                    </div> <!-- Para exibir mensagens de sucesso/erro -->
                </form>
            </div><!--interface-->
        </section><!--form-->

    </main>

    <footer>
        <div class="interface">
            <div class="line-footer">
                <div class="flex">
                    <div class="btn-social">
                        <a target="_blank" href="https://www.instagram.com/izmurilo_cwb/"><button><i
                                    class="bi bi-instagram"></i></button></a>
                        <a target="_blank"
                            href="https://www.linkedin.com/in/murilo-luiz-jaboinski-246096229/"><button><i
                                    class="bi bi-linkedin"></i></button></a>
                        <a target="_blank" href="https://github.com/muriloLuix"><button><i
                                    class="bi bi-github"></i></button></a>
                    </div><!--btn-social-->
                </div><!--flex-->
            </div><!--line-footer-->
            <div class="line-footer borda">
                <p><i class="bi bi-envelope-fill"><a target="_blank"
                            href="mailto:muriloluiz654@gmail.com">muriloluiz654@gmail.com</a></i></p>
            </div><!--line-footer-->
        </div><!--interface-->
    </footer>
</body>

</html>