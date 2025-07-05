<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta name="theme-color" content="#7B2CBF">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- GOOGLE FONTS FINAL -->

    <!-- Bootstrap ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <!-- Bootstrap icons final -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="shortcut icon" href="imgs/favicon-32x32.png" type="image/x-icon">
    <title>Murilo's | Portfolio</title>
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
                    <li><a href="/murilo">Inicio</a></li>
                    <li><a href="#specialties-menu">Habilidades</a></li>
                    <li><a href="#about-menu">Sobre</a></li>
                    <li><a href="#portfolio-menu">Projetos</a></li>
                    <li><a href="#certificates">Certificados</a></li>
                    <li><a href="#technologies">Tecnologias</a></li>
                </ul>
            </nav>
            <div class="btn-contact">
                <a href="#form-menu"><button>CONTATO</button></a>
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
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="#specialties-menu">Habilidades</a></li>
                        <li><a href="#about-menu">Sobre</a></li>
                        <li><a href="#portfolio-menu">Projetos</a></li>
                        <li><a href="#certificates">Certificados</a></li>
                        <li><a href="#technologies">Tecnologias</a></li>
                        <li><a href="#form-menu">Contato</a></li>
                    </ul>
                </nav>
            </div><!--menu-mobile-->
            <div class="overlay-menu" id="overlay-menu">

            </div>
        </div> <!--Interface-->
    </header>

    <main>
        <section class="top-of-site">
            <div class="interface">
                <div class="flex">
                    <div class="txt-top-of-site scroll-reveal-left">
                        <h1>OLÁ! MEU NOME É MURILO<span>.</span></h1>
                        <h2 class="typewriter">DESENVOLVEDOR BACK-END</h2>
                        <p>Estou sempre aberto a novos desafios e oportunidades de colaboração! Se você tem um projeto
                            em mente ou precisa de um desenvolvedor dedicado para transformar suas ideias em realidade
                            digital, vamos conversar.</p>

                        <p>Minha jornada na tecnologia evoluiu para o desenvolvimento web, onde me especializo em criar
                            websites responsivos, landing pages impactantes e sistemas de controle eficientes. Tenho
                            experiência com HTML5, CSS3, JavaScript, Bootstrap, ReactJS e outras tecnologias modernas.
                        </p>

                        <p>Além da programação, possuo formação em Design Gráfico, Administração Financeira e Marketing
                            Digital, o que me permite oferecer soluções completas e inovadoras. Vamos trabalhar juntos
                            para criar algo incrível!</p>

                        <div class="btn-contact">
                            <a href="#form-menu">
                                <button>CONTATO</button>
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
                <h2 class="title title-reveal">MINHAS <span>ESPECIALIDADES.</span></h2>
                <div class="flex">
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-1">
                        <i class="bi bi-layout-text-window-reverse"></i>
                        <h3>Criação de sites responsivos</h3>
                        <p>Desenvolvimento de websites modernos e responsivos que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência de usuário excepcional.</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-2">
                        <i class="bi bi-gear-wide-connected"></i>
                        <h3>Desenvolvimento de sistemas sob medida</h3>
                        <p>Criação de sistemas personalizados e soluções digitais específicas para atender às necessidades únicas do seu negócio.</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-3">
                        <i class="bi bi-tools"></i>
                        <h3>Manutenção e otimização de sistemas existentes</h3>
                        <p>Aprimoramento, correção e otimização de sistemas já em funcionamento para melhor performance e segurança.</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box scroll-reveal scroll-reveal-delay-4">
                        <i class="bi bi-code-square"></i>
                        <h3>Refatoração e Otimização de Código</h3>
                        <p>Melhoria de códigos existentes para garantir melhor desempenho, legibilidade, manutenibilidade e escalabilidade.</p>
                    </div><!--specialties-box -->
                </div>
            </div>
        </section> <!--Specialties -->

        <section id="portfolio-menu" class="portfolio">
            <div class="interface">
                <h2 class="title title-reveal">MEU <span>PORTFÓLIO.</span></h2>
                <div class="flex">
                    <a target="_blank" href="https://github.com/fernandokotinda/Sistema-Controle-de-Estoque" class="scroll-reveal-scale scroll-reveal-delay-1">
                        <div class="img-port"
                            style="background-image: url('{{ asset('images/portfolio/controle_de_estoque.png') }}');">
                            <div class="overlay">
                                <div class="project-info">
                                    <h3>Controle de Estoque</h3>
                                    <p class="project-description">Sistema completo para gerenciamento de estoque com controle de entrada e saída de produtos.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">HTML5</span>
                                        <span class="tech-tag">CSS3</span>
                                        <span class="tech-tag">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Calculator" class="scroll-reveal-scale scroll-reveal-delay-2">
                        <div class="img-port"
                            style="background-image: url('{{ asset('images/portfolio/Calculadora.png') }}');">
                            <div class="overlay">
                                <div class="project-info">
                                    <h3>Calculadora</h3>
                                    <p class="project-description">Calculadora funcional com interface moderna e operações matemáticas básicas e avançadas.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">HTML5</span>
                                        <span class="tech-tag">CSS3</span>
                                        <span class="tech-tag">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Game-of-Memory" class="scroll-reveal-scale scroll-reveal-delay-3">
                        <div class="img-port"
                            style="background-image: url('{{ asset('images/portfolio/memoryGame.png') }}');">
                            <div class="overlay">
                                <div class="project-info">
                                    <h3>Memory Game</h3>
                                    <p class="project-description">Jogo da memória interativo com diferentes níveis de dificuldade e sistema de pontuação.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">HTML5</span>
                                        <span class="tech-tag">CSS3</span>
                                        <span class="tech-tag">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Tic-Tac-Toe" class="scroll-reveal-scale scroll-reveal-delay-4">
                        <div class="img-port"
                            style="background-image: url('{{ asset('images/portfolio/jogoDaVelha.png') }}');">
                            <div class="overlay">
                                <div class="project-info">
                                    <h3>Tic Tac Toe</h3>
                                    <p class="project-description">Jogo da velha clássico com interface responsiva e modo para dois jogadores.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">HTML5</span>
                                        <span class="tech-tag">CSS3</span>
                                        <span class="tech-tag">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a href="/murilo/privado" class="scroll-reveal-scale scroll-reveal-delay-1">
                        <div class="img-port"
                            style="background-image: url('{{ asset('images/portfolio/Echo.png') }}');">
                            <div class="overlay">
                                <div class="project-info">
                                    <h3>Echo</h3>
                                    <p class="project-description">Empresa de auroidade de Murilo Luiz Jaboinski focada no desenvolvimento web de pequenos comércios.</p>
                                    <div class="project-tech">
                                        <span class="tech-tag">HTML5</span>
                                        <span class="tech-tag">CSS3</span>
                                        <span class="tech-tag">JavaScript</span>
                                        <span class="tech-tag">Laravel</span>
                                        <span class="tech-tag">Blade</span>
                                    </div>
                                </div>
                            </div>
                        </div><!--img-port-->
                    </a>
                </div><!--flex-->
            </div><!--interface-->
        </section><!--portfolio-->
        <section class="certificates" id="certificates">
            <div class="interface">
                <h2 class="title title-reveal">CERTIFICADOS<span>.</span></h2>
                <div class="flex flexCertif">
                    <div class="row scroll-reveal scroll-reveal-delay-1">
                        <div class="img-general" title="HTML5"
                            style="background-image: url('{{ asset('images/certificados/CertificadoHTML5.jpg') }}');">
                        </div>
                        <div class="img-general" title="CSS3"
                            style="background-image: url('{{ asset('images/certificados/CertificadoCSS3.jpg') }}');">
                        </div>
                        <div class="img-general" title="HTML5/CSS3"
                            style="background-image: url('{{ asset('images/certificados/CertificadoHTML5Curso.jpg') }}');">
                        </div>
                    </div>
                    <div class="row scroll-reveal scroll-reveal-delay-2">
                        <div class="img-general" title="Ciência da Computação"
                            style="background-image: url('{{ asset('images/certificados/CertificadoCC50.jpg') }}');">
                        </div>
                        <div class="img-general" title="Certificado Inglês II"
                            style="background-image: url('{{ asset('images/certificados/Ceriticado Inglês II.jpg') }}');">
                        </div>
                        <div class="img-general" title="Auxiliar Admnistrativo"
                            style="background-image: url('{{ asset('images/certificados/Certificado Auxiliar Administrativo.jpg') }}');">
                        </div>
                    </div>
                    <div class="row scroll-reveal scroll-reveal-delay-3">
                        <div class="img-general" title="Python - Básico"
                            style="background-image: url('{{ asset('images/certificados/Escola Virtual - Fundação Bradesco-1.png') }}');">
                        </div>
                        <div class="img-general" title="ReactJS"
                            style="background-image: url('{{ asset('images/certificados/ReactJS.png') }}');"></div>
                    </div>
                </div>
            </div>
        </section><!--certificates-->

        <section class="certificates" id="technologies">
            <div class="interface">
                <h2 class="title title-reveal">LINGUAGENS E <span>TECNOLOGIAS.</span></h2>
                
                <!-- Front-end Technologies -->
                <div class="tech-category">
                    <h3 class="tech-title scroll-reveal">FRONT-END</h3>
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
                    <h3 class="tech-title scroll-reveal">BACK-END</h3>
                    <div class="imgLanguages">
                        <img src="{{ asset('images/linguagens/php.png') }}" alt="PHP" class="scroll-reveal scroll-reveal-delay-1" title="PHP">
                        <img src="{{ asset('images/linguagens/laravel-original.svg') }}" alt="Laravel" class="scroll-reveal scroll-reveal-delay-2" title="Laravel">
                        <img src="{{ asset('images/linguagens/symfony-original.svg') }}" alt="Symfony" class="scroll-reveal scroll-reveal-delay-3" title="Symfony">
                    </div>
                </div>

                <!-- Database Technologies -->
                <div class="tech-category">
                    <h3 class="tech-title scroll-reveal">BANCO DE DADOS</h3>
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
                <h2 class="title title-reveal">FALE <span>COMIGO.</span></h2>
                <form id="contact-form" action="assets/php/process_form.php" method="post">
                    <input type="text" name="name" id="name" placeholder="Seu nome:" required>
                    <input type="email" name="email" id="email" placeholder="Seu e-mail:" required>
                    <input type="tel" name="phone" id="telefone" placeholder="Seu celular:" maxlength="15">
                    <textarea name="message" id="message" placeholder="Sua mensagem" required></textarea>
                    <div class="btn-submit">
                        <input type="submit" value="ENVIAR">
                    </div>
                    <div id="form-messages"></div> <!-- Para exibir mensagens de sucesso/erro -->
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