<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- GOOGLE FONTS FINAL -->
    <!-- Bootstrap ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <!-- Bootstrap icons final -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="assets/js/menu.js" defer></script>
    <script src="assets/js/fone.js" defer></script>
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
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="#specialties-menu">Habilidades</a></li>
                    <li><a href="#about-menu">Sobre</a></li>
                    <li><a href="#portfolio-menu">Projetos</a></li>
                    <li><a href="#certificates">Certificados</a></li>
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
                        <li><a href="#">Contato</a></li>
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
                    <div class="txt-top-of-site">
                        <h1>OLÁ! MEU NOME É MURILO<span>.</span></h1>
                        <h2 class="typewriter">DESENVOLVEDOR BACK-END</h2>
                        <p>Estou sempre aberto a novos desafios e oportunidades de colaboração! Se você tem um projeto em mente ou precisa de um desenvolvedor dedicado para transformar suas ideias em realidade digital, vamos conversar.</p>
                        
                        <p>Minha jornada na tecnologia evoluiu para o desenvolvimento web, onde me especializo em criar websites responsivos, landing pages impactantes e sistemas de controle eficientes. Tenho experiência com HTML5, CSS3, JavaScript, Bootstrap, ReactJS e outras tecnologias modernas.</p>
                        
                        <p>Além da programação, possuo formação em Design Gráfico, Administração Financeira e Marketing Digital, o que me permite oferecer soluções completas e inovadoras. Vamos trabalhar juntos para criar algo incrível!</p>
                        
                        <div class="btn-contact">
                            <a href="#form-menu">
                                <button>CONTATO</button>
                            </a>
                        </div>
                    </div>
                    <div class="img-top-of-site">
                        <img src="{{ asset('images/muriloImages/ft 1 linkedin.png') }}" alt="Foto Murilo">
                    </div>
                </div>
            </div><!--Interface-->
        </section><!--top-of-site-->

        <section id="specialties-menu" class="specialties">
            <div class="interface">
                <h2 class="title">MINHAS <span>ESPECIALIDADES.</span></h2>
                <div class="flex">
                    <div class="specialties-box">
                        <i class="bi bi-code"></i>
                        <h3>WebSite (Landing Page)</h3>
                        <p>Eu me especializo na criação e desenvolvimento de websites personalizados e páginas de destino eficazes para fins de publicidade profissional. Ao longo da minha carreira, acumulei uma experiência significativa na construção de plataformas digitais que se destacam e cativam o público-alvo, impulsionando a visibilidade e o reconhecimento de marcas, lojas e diversas iniciativas.
                        </p>
                    </div><!--specialties-box -->
                    <div class="specialties-box">
                        <i class="bi bi-basket3"></i></i>
                        <h3>Lojas Online (E-commerce)</h3>
                        <p>Reconhecendo a crescente importância das vendas online para impulsionar a produtividade e o alcance das lojas físicas, trago uma sólida experiência na criação de websites focados em facilitar transações comerciais pela internet. Compreendo as necessidades específicas das empresas em expandir suas operações para o ambiente digital e sou capaz de desenvolver soluções que integram e aprimoram as vendas online para estabelecimentos presenciais.</p>
                    </div><!--specialties-box -->
                    <div class="specialties-box">
                        <i class="bi bi-substack"></i>
                        <h3>Sistema de Controle</h3>
                        <p>Eu compreendo a importância vital do controle eficiente de despesas, estoque e outros itens para o sucesso e eficiência de um negócio. Tenho uma sólida experiência no desenvolvimento de sistemas e ferramentas dedicadas ao controle detalhado de inventário e gerenciamento de produtos.</p>
                    </div><!--specialties-box -->
                </div>
            </div>
        </section> <!--Specialties -->

        <section id="about-menu" class="about">
            <div class="interface">
                <div class="flex">
                    <div class="img-about">
                        <img src="{{ asset('images/muriloImages/murilo-sobre.jpeg') }}" alt="Sobre Murilo">
                    </div> <!--img- about-->
                    <div class="txt-about">
                        <h2>Prazer em conhecer você, <span>Eu sou Murilo Luiz</span></h2>
                        <p>Atualmente, estou matriculado no terceiro semestre do curso de Análise e Desenvolvimento de Sistemas. Ao longo da minha jornada acadêmica e profissional, tenho buscado ampliar meus conhecimentos por meio de uma variedade de cursos, tanto dentro quanto fora do campo da programação de front-end. Entre esses cursos, destaco Design Gráfico, Manutenção e Configuração de Computadores, Administração Financeira, Plataforma Web II, Desenvolvimento de Jogos, Ambiente Web, Produção de Documentos, Mídias Sociais, Marketing Pessoal e Profissional, Desenvolvimento de Websites e Photoshop.</p>
                        <p>Além disso, busquei aprimoramento em áreas relacionadas, como Treinamento e Desenvolvimento na Área Administrativa, adquirindo habilidades em atividades como Assistente Administrativo, Comunicação, Expressão Corporal, Redação de Currículos, Técnicas de Entrevista de Emprego, Telemarketing, Atendimento ao Cliente, Finanças Pessoais, Liderança, Trabalho em Equipe e Resolução de Conflitos no Ambiente de Trabalho.
                        </p>
                        <p>No campo da programação, tenho experiência em linguagens como HTML5, CSS3, JavaScript, Bootstrap, jQuery, Ajax e ReactJS, juntamente com conhecimentos básicos em PHP. Atualmente, estou aprimorando minhas habilidades por meio de estudos intensivos em Bootstrap, Sass, React e outros frameworks e linguagens relevantes.</p>
                        <div class="btn-social">
                            <a  target="_blank" href="https://www.instagram.com/izmurilo_cwb/"><button><i class="bi bi-instagram"></i></button></a>
                            <a target="_blank" href="https://www.linkedin.com/in/murilo-luiz-jaboinski-246096229/"><button><i class="bi bi-linkedin"></i></button></a>
                            <a target="_blank" href="https://github.com/muriloLuix"><button><i class="bi bi-github"></i></button></a>
                        </div>
                    </div><!--txt - about -->
                </div><!--flex-->
            </div><!--interface-->
        </section><!--about-->

        <section id="portfolio-menu" class="portfolio">
            <div class="interface">
                <h2 class="title">MEU <span>PORTFÓLIO.</span></h2>
                <div class="flex">
                    <a target="_blank" href="https://github.com/fernandokotinda/Sistema-Controle-de-Estoque">
                        <div class="img-port" style="background-image: url('{{ asset('images/portfolio/controle_de_estoque.png') }}');">
                            <div class="overlay">
                                Controle de Estoque
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Calculator">
                        <div class="img-port" style="background-image: url('{{ asset('images/portfolio/Calculadora.png') }}');">
                            <div class="overlay">
                                Calculadora
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Game-of-Memory">
                        <div class="img-port" style="background-image: url('{{ asset('images/portfolio/memoryGame.png') }}');">
                            <div class="overlay">
                                Memory Game
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Tic-Tac-Toe">
                        <div class="img-port" style="background-image: url('{{ asset('images/portfolio/jogoDaVelha.png') }}');">
                            <div class="overlay">
                                Tic Tac Toe
                            </div>
                        </div><!--img-port-->
                    </a>
                    <a target="_blank" href="https://github.com/muriloLuix/Echo">
                        <div class="img-port" style="background-image: url('{{ asset('images/portfolio/Echo.png') }}');">
                            <div class="overlay">
                                Echo
                            </div>
                        </div><!--img-port-->
                    </a>
                </div><!--flex-->
            </div><!--interface-->
        </section><!--portfolio-->
        <section class="certificates" id="certificates">
            <div class="interface">
                <h2 class="title">CERTIFICADOS<span>.</span></h2>
                <div class="flex flexCertif">
                    <div class="row">
                        <div class="img-general" title="HTML5" style="background-image: url('{{ asset('images/certificados/CertificadoHTML5.jpg') }}');"></div>
                        <div class="img-general" title="CSS3" style="background-image: url('{{ asset('images/certificados/CertificadoCSS3.jpg') }}');"></div>
                        <div class="img-general" title="HTML5/CSS3" style="background-image: url('{{ asset('images/certificados/CertificadoHTML5Curso.jpg') }}');"></div>
                    </div>
                    <div class="row">
                        <div class="img-general" title="Ciência da Computação" style="background-image: url('{{ asset('images/certificados/CertificadoCC50.jpg') }}');"></div>
                        <div class="img-general" title="Certificado Inglês II" style="background-image: url('{{ asset('images/certificados/Ceriticado Inglês II.jpg') }}');"></div>
                        <div class="img-general" title="Auxiliar Admnistrativo" style="background-image: url('{{ asset('images/certificados/Certificado Auxiliar Administrativo.jpg') }}');"></div>
                    </div>
                    <div class="row">
                        <div class="img-general" title="Python - Básico" style="background-image: url('{{ asset('images/certificados/Escola Virtual - Fundação Bradesco-1.png') }}');"></div>
                        <div class="img-general" title="ReactJS" style="background-image: url('{{ asset('images/certificados/ReactJS.png') }}');"></div>
                    </div>
                </div>
            </div>
        </section><!--certificates-->

        <section class="certificates" id="certificates">
            <div class="interface">
                <h2 class="title">LINGUAGENS<span>.</span></h2>
                <div class="imgLanguages">
                    <img src="{{ asset('images/linguagens/html5.png') }}" alt="HTML5">
                    <img src="{{ asset('images/linguagens/css3.png') }}" alt="CSS3">
                    <img src="{{ asset('images/linguagens/js.png') }}" alt="JavaScript">
                    <img src="{{ asset('images/linguagens/bootstrap.png') }}" alt="Bootstrap">
                    <img src="{{ asset('images/linguagens/react.png') }}" alt="React">
                </div>
            </div>
        </section><!--certificates-->
    
        <section class="form" id="form-menu">
            <div class="interface">
                <h2 class="title">FALE <span>COMIGO.</span></h2>
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
                        <a  target="_blank" href="https://www.instagram.com/izmurilo_cwb/"><button><i class="bi bi-instagram"></i></button></a>
                        <a target="_blank" href="https://www.linkedin.com/in/murilo-luiz-jaboinski-246096229/"><button><i class="bi bi-linkedin"></i></button></a>
                        <a target="_blank" href="https://github.com/muriloLuix"><button><i class="bi bi-github"></i></button></a>
                    </div><!--btn-social-->
                </div><!--flex-->
            </div><!--line-footer-->
            <div class="line-footer borda">
                <p><i class="bi bi-envelope-fill"><a target="_blank" href="mailto:muriloluiz654@gmail.com">muriloluiz654@gmail.com</a></i></p>
            </div><!--line-footer-->
        </div><!--interface-->
    </footer>
</body>
</html>