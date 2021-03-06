<html lang="pt-br">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta charset="utf-8">

	<link rel="icon" href="favicon.ico">


	<title>trav-window | teste</title>
	<script src="../external/highlightjs/highlight.pack.min.js"></script>
	<script src="../external/jquery/dist/jquery.min.js"></script>
	<script src="../dist/trav-window_v2.js?v=<?php echo rand(0, 1000) ?>"></script>

	<link rel="stylesheet" href="../external/highlightjs/styles/agate.css">
	<link rel="stylesheet" href="../external/bootstrap/dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/test.css"/>
	<link rel="stylesheet" href="../src/css/trav-window.css?v=<?php echo rand(0, 1000) ?>"/>
</head>
<body >
	<div id="view-port">
		<nav class="navbar navbar-default main-nav-bar">
			<div class="container-fluid">

				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a id="pop-htm-comum" class="navbar-brand" href="#">Dialogo Html</a>
				</div>

				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active"><a id="pop-lateral-htm" href="#">Pop Lateral <span class="sr-only">(current)</span></a></li>
						<li><a href="#">Pop Inferior</a></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pops Dinâmicas <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a class="pop-central" href="#">Dialogo Central</a></li>
								<li><a id="pop-Lateral" href="#">Dialogo Lateral</a></li>
								<li><a id="pop-botton" href="#">Dialogo inferior</a></li>
								<li><a id="pop-top" href="#">Dialogo Superior</a></li>
								<li role="separator" class="divider"></li>
								<li><a id="alert-full" href="#">Alerta topo full</a></li>
								<li role="separator" class="divider"></li>
								<li><a id="alerta-conteiner" href="#">Alerta de conteiner</a></li>
							</ul>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#">Link</a></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="#">Separated link</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="container">

			<div id="titulo-master" class="blog-header">
				<h1 class="blog-title">Trav Window JS</h1>
				<p class="lead blog-description">webtravessa gerador de dialogs.</p>
			</div>

			<div class="blog-sidebar">

				<div class="row">
					<div class="col-sm-9"></div>
					<div class="col-sm-3">
						<div class="sidebar-module sidebar-module-inset">
							<h4>Sobre a Webtravessa </h4>
							<p>Somos uma start-up com foco no desenvolviment web das mais variáveis maneiras disponíveis no mercado.</p>
							<p>Atuamos no desenvolvimento de aplicações para facebok, apps de celular, sites e sistemas baseados na plataforma web.</p>
						</div>
						<div class="sidebar-module">
							<h4>Índice</h4>
							<ul class="list-unstyled">
								<li><a href="#doc-intro">Introdução</a></li>
								<li><a href="#doc-uso">Uso</a></li>
								<li><a href="#doc-opcoes">Opções</a></li>
								<li><a href="#doc-botoes">O objeto Botão</a></li>
								<li>
									<a href="#doc-pop-htm">Dialogos de Htms</a>
									<ul>
										<li><a href="#doc-htm-struttura">Estrutura Html para dialog</a></li>
									</ul>
								</li>

								<li class="list-unstyled">
									<a href="#doc-aply">Aplicações</a>
									<ul>
										<li><a href="#doc-uso-comum">Uso Comum</a></li>
										<li><a href="#doc-dialogo-lateral">Dialogo Lateral</a></li>
										<li><a href="#doc-"></a></li>
									</ul>
								</li>
								<li><a href="#doc-posicoes">posições</a></li>
								<li><a href="#doc-cores">Cores conforme Bootstrap</a></li>
								<li><a href="#doc-alertas">Alertas</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div id="dialog-htm" class="trav-modal trav-bottom no-tg">
					<div class="trav-modal-title alert-warning"><span>Titulo dialogo</span></div>
					<div class="trav-modal-content">
						<form>
							<fieldset>
								<legend>Legend</legend>
								<div class="form-group col-sm-">
									<label for="inputEmail" class="control-label">Email</label><br />
									<input type="text" class="form-control" id="inputEmail" placeholder="Email">
								</div>

								<div class="form-group">
									<label for="textArea" class="control-label">Textarea</label>
									<textarea class="form-control" rows="3" id="textArea"></textarea>
									<span class="help-block">Exemplo.</span>
								</div>
							</fieldset>
							<div class="form-group">
								<button type="reset" class="btn btn-default">Cancel</button>
								<button type="submit" class="btn btn-primary">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-8 blog-main">

					<div class="blog-post">
						<h2 id="doc-intro" class="blog-post-title">Introdução</h2>
						<p class="blog-post-meta">Março 08, 2017 Por <a href="#">Marcelo Francisco</a></p>

						<p>O "Trav-window" é um componente capaz de Gerenciar caixas de dialogo de variados tipos.</p>
						<hr>
						<p>Sua função é agilizar códigos de pop ups e sliders laterais, superiores e inferiores</p>

						<h2 id="doc-uso">Uso</h2>
						<pre>
							<code class="javascript">$.travwindow({
								title: 'Título da Pop',
								message: "Texto da mennsagem a ser exibida.",
								unit: '%',
								position: 'center',
								width: 300,
								height: 250
							});</code>
						</pre>
						<p>O código acima produozira uma caixa de dialogo central conforme, seu efeito pode ser visto no menu "Pops Dinâmicas/Pop Central" ou clicando <a class="pop-central" href="#">aqui</a>.</p>

						<h3 id="doc-opcoes">Opções</h3>
						<p>A Trav Window pode ser configurada com as opções que seguem.</p>
						<table class="table">
							<thead>
								<th style="width: 15%">Opção</th>
								<th style="width: 30%">Tipo</th>
								<th>Descrição</th>
							</thead>
							<tbody>
								<tr>
									<td>type</td>
									<td>(string) <span class="label label-default">default</span>, <span class="label label-primary">primary</span>, <span class="label label-success">success</span>, <span class="label label-info">info</span>, <span class="label label-warning">warning</span>, <span class="label label-danger">danger</span>.</td>
									<td><p>Determina o tipo de mensagem.</p></td>
								</tr>
								<tr>
									<td>title</td>
									<td>string</td>
									<td>Texto título da caixa de dialogo</td>
								</tr>
								<tr>
									<td>url</td>
									<td>String</td>
									<td>
										<p>Quando espscificada esta propriedade define para onde deve ser redirecionada a página ao ser fechada a a caixa de dialogo.</p>
										<p><strong>Observação:</strong> Pode ser usada em conjunto com a opção isBlank.</p>
									</td>
								</tr>
								<tr>
									<td>isBlank</td>
									<td>
										<p>boolean</p>
										<p>default: <strong>false</strong></p>
									</td>
									<td>Se True o link a ser redirecionado resnderizado em nova aba do navegador.</td>
								</tr>
								<tr>
									<td>isModal</td>
									<td>
										<p>boolean</p>
										<p>default: <strong>true</strong></p>
									</td>
									<td>se True a tela será bloquada com um overlay.</td>
								</tr>
								<tr>
									<td>unit</td>
									<td>
										<p>string</p>
										<p>default: <strong>px</strong></p>
									</td>
									<td>unidade de medida a ser utilizada nas dialogs.</td>
								</tr>
								<tr>
									<td>message</td>
									<td>string</td>
									<td>Mensagem a ser apresentada.</td>
								</tr>
								<tr>
									<td>simpleMessage</td>
									<td>
										<p>boolean</p>
										<p>default: <strong>false</strong></p>
									</td>
									<td>Quando true a caixa de dialogo será aberta como um  alerta de topo simples.</td>
								</tr>
								<tr>
									<td>footer</td>
									<td>string</td>
									<td>Configura uma mensagem a ser apresentada no rodapé.</td>
								</tr>
								<tr>
									<td>closeOnEsc</td>
									<td>
										<p>boolean</p>
										<p>default: <strong>true</strong></p>
									</td>
									<td>Quando true a caixa de dialogo será fechada ao pressionar o botão esc no teclado.</td>
								</tr>
								<tr>
									<td>position</td>
									<td>
										<p>(string) bottom, right, top, left</p>
										<p>default: <strong>botton</strong></p>
									</td>
									<td>Determina o posicionamento da caixa de dialogo.</td>
								</tr>
								<tr>
									<td>delay</td>
									<td>
										<p>integer</p>
										<p>default: <strong>0</strong></p>
									</td>
									<td>
										<p>Determina tempo de espera para o início da animação de fechamento/abertura da caixa de dialogo.</p>
										<p><strong>Observação:</strong> Valores mais altos resultarão em uma animação mais lenta.</p>
									</td>
								</tr>
								<tr>
									<td>appender</td>
									<td>string (seletor css)</td>
									<td>Determina o containder onde será anexada a caixa de dialogo.</td>
								</tr>
								<tr>
									<td>btns</td>
									<td>array</td>
									<td>
										<p>Configura botões para caixa de dialogo</p>
										<p><strong>Observação:</strong> esta funcionalidad não funciona com a opção "<i>simpleMessage</i>" true.</p>
									</td>
								</tr>
								<tr>
									<td>buttonPosition</td>
									<td>
										<p>string (left, right)</p>
										<p>default: <strong>right</strong></p>
									</td>
									<td>se houver botõe na caixa de dialogo, os mesmos serão posicionados conforme esta propriedade</td>
								</tr>
							</tbody>
						</table>

						<h2 id="doc-botoes">O objeto Botão</h2>

						<p>A propriedade botões usada na configuração da trav window recebe um array de Botão.</p>

						<p>O Objeto botão possui suas devidas proppriedades, tal como a Trav window, as quais são apresentradas no quadro abaixo.</p>

						<table class="table">
							<thead>
								<th style="width: 15%">Opção</th>
								<th style="width: 30%">Tipo</th>
								<th>Descrição</th>
							</thead>

							<tbody>
								<tr>
									<td>type</td>
									<td>(string) <span class="label label-default">btn-default</span>, <span class="label label-primary">btn-primary</span>, <span class="label label-success">btn-success</span>, <span class="label label-info">btn-info</span>, <span class="label label-warning">btn-warning</span>, <span class="label label-danger">btn-danger</span>.</td>
									<td><p>Determina o tipo de Botão.</p></td>
								</tr>
								<tr>
									<td>title</td>
									<td>string</td>
									<td>Texto de apresentação do botão.</td>
								</tr>
								<tr>
									<td>action</td>
									<td>f(x)</td>
									<td>Função executada no click do botão.</td>
								</tr>
							</tbody>
						</table>

						<h2 id="doc-pop-htm">Dialogos de HTM</h2>

						<p>O trav window também é capaz de ser utilizado com htmls presentes na página, desde seguida a devida estrutura.</p>

						<h3 id="doc-htm-struttura">Estrutura Html para dialog</h3>

						<p>Para que a dialog funcione corretamente são necessárias algumas classes  que devem ser aplicadas a seus devido conteiners</p>

						<h4><b>trav-modal e trav-modal-content</b></h4>

						<p>Classes base para fucnionamento.</p>

						<h4><b>Posicionamento</b></h4>

						<p>Uma classe de posicionamento requeridas é requerida(trav-top, trav-right, trav-bottom, trav-left), observe a estrutura.</p>

<pre><code class="html">&lt;div id=&quot;dialog-htm&quot; class=&quot;trav-modal no-tg&quot;&gt;
	&lt;div class=&quot;trav-modal-title alert-danger&quot;&gt;
		&lt;span&gt;Titulo dialogo&lt;/span&gt;
	&lt;/div&gt;
	&lt;div class=&quot;trav-modal-content&quot;&gt;
		...
	&lt;/div&gt;
&lt;/div&gt;
</code></pre>
						<p>A chamada é semelhante a chamada dinâmica, o efeito pode ser observado clicando no menu "Dialogo Html".</p>

<pre><code class="javascripts">$('#dialog-htm').travwindow('show', {
	width: 330,
	height: 500,
	isModal: false,
	position: 'right'
});</code></pre>

						<h2 id="doc-aply">Aplicações</h2>

						<p>Seguem algumas aplicações de caixa de dialogo.</p>
						<p>o Menu Superior contem os links de cada aplicação.</p>

						<h3 id="doc-uso-comum">Uso Comum</h3>
						<p>Uso básico da caixa de dialogo.</p>

						<h4>Menu</h4>
						<ol class="breadcrumb">
							<li>Dialogos Dinâmicos</li>
							<li class="active">Dialogo Central</li>
						</ol>

<pre>
	<code class="javascript">$.travwindow({
		title: 'Título da Pop',
		message: "Texto da mennsagem a ser exibida.",
		unit: '%',
		position: 'center',
		width: 300,
		height: 250
	});</code>
</pre>

						<h3 id="doc-dialogo-lateral">Dialogo Lateral</h3>

						<p>Esta modalidade controi o dialogo lateralmente, observe que no codigo que neste caso utilizamos o array de botões para que possamos nos famializar com a sintaxe.</p>



						<h4>Menu</h4>
						<ol class="breadcrumb">
							<li>Dialogos Dinâmicos</li>
							<li class="active">Dialogo Lateral</li>
						</ol>

<pre>
	<code>$.travwindow({
		title: 'Título da Pop',
		message: "Texto da mennsagem a ser exibida.",
		unit: 'px',
		position: 'left',
		type: 'danger',
		isModal: false,
		width: 350,
		buttonPosition: 'left',
		btns: [
		{
			title: 'Botão Verde',
			type: 'btn-success',
			action: function() {
				$(this).travwindow('destroy');
			}
		},
		{
			title: 'Botão Vermelho',
			type: 'btn-danger',
			action: function() {
				$(this).travwindow('close');
			}
		}
		]
	});</code>
</pre>
						<h3 id="doc-dialogo-bottom">Dialogo inferior/superior</h3>

						<p>Caixas de dialogo laterais tem como parametro requerido a propriedade <i>Height</i>, seguem alguns exemplos.</p>

<pre>
	<code class="javascript">$.travwindow({
		title: 'Título da Pop',
		message: "Texto da mennsagem a ser exibida.",
		type: 'info',
		unit: '%',
		position: 'bottom',
		width: 300,
		height: 250
	});</code>
</pre>

					</div>
				</div>
			</div>
		</div>

		<div id="fim" class="container"></div>

		<script src="../external/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
		<script src="test.js?v=<?php echo rand(0, 1000) ?>"></script>
	</div>
</body>
</html>
