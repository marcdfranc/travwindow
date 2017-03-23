# travwindow

Bibliteca de Pops baseada em bootstrap.

## Introdução

O "Trav-window" é um componente capaz de Gerenciar caixas de dialogo de variados tipos.

Sua função é agilizar códigos de pop ups e sliders laterais, superiores e inferiores

## Uso

```javascripts
$.travwindow({
	title: 'Título da Pop',
	message: "Texto da mennsagem a ser exibida.",
	unit: '%',
	position: 'center',
	width: 300,
	height: 250
});
```

O código acima produozira uma caixa de dialogo central conforme.

### Opções

Opção  |tipo   |  Descrição
--|---|--
type  |(string) default, primary, success, info, warning, danger. |  Determina o tipo de mensagem.
title   |	string    |	Texto título da caixa de dialogo
url	    |   String  | Quando espscificada esta propriedade define para onde deve ser redirecionada a página ao ser fechada a a caixa de dialogo. Observação: Pode ser usada em conjunto com a opção isBlank.
isBlank | boolean default: false | Se True o link a ser redirecionado resnderizado em nova aba do navegador.
isModal	|boolean default: true | se True a tela será bloquada com um overlay.
unit	|	string default: px	|unidade de medida a ser utilizada nas dialogs.
message	|	string	|	Mensagem a ser apresentada.
simpleMessage	|	boolean default: false	|	Quando true a caixa de dialogo será aberta como um alerta de topo simples.
footer	|	string	|	Configura uma mensagem a ser apresentada no rodapé.
closeOnEsc	|	boolean	default: true	|	Quando true a caixa de dialogo será fechada ao pressionar o botão esc no teclado.
position	|	(string) bottom, right, top, left default: botton	|	Determina o posicionamento da caixa de dialogo.
delay	|	integer default: 0	| Determina tempo de espera para o início da animação de fechamento/abertura da caixa de dialogo. Observação: Valores mais altos resultarão em uma animação mais lenta.
appender	|	string (seletor css)	|	Determina o containder onde será anexada a caixa de dialogo.
btns	|	array	|	Configura botões para caixa de dialogo. Observação: esta funcionalidad não funciona com a opção "simpleMessage" true.
buttonPosition	|	string (left, right) default: right	|	se houver botõe na caixa de dialogo, os mesmos serão posicionados conforme esta propriedade

## O objeto Botão

A propriedade botões usada na configuração da trav window recebe um array de Botão.

O Objeto botão possui suas devidas proppriedades, tal como a Trav window, as quais são apresentradas no quadro abaixo.

Opção  |tipo   |  Descrição
--|---|--
Type	|	(string) btn-default, btn-primary, btn-success, btn-info, btn-warning, btn-danger.	|	Determina o tipo de Botão.
title	|	string	|	Texto de apresentação do botão.
action	|	f(x)	|	Função executada no click do botão.

## Dialogos de HTM

O trav window também é capaz de ser utilizado com htmls presentes na página, desde seguida a devida estrutura.

### Estrutura Html para dialog

Para que a dialog funcione corretamente são necessárias algumas classes que devem ser aplicadas a seus devido conteiners _**trav-modal**_ e _**trav-modal-content**_.

Ao menos uma classe de posicionamento é requerida(_trav-top, trav-right, trav-bottom, trav-left_), observe a estrutura.

```Htmls
<div id="dialog-htm" class="trav-modal no-tg">
	<div class="trav-modal-title alert-danger">
		<span>Titulo dialogo</span>
	</div>
	<div class="trav-modal-content">
		...
	</div>
</div>
```

## Aplicações

Seguem algumas aplicações de caixa de dialogo.

### Uso comum

```javascripts
$.travwindow({
	title: 'Título da Pop',
	message: "Texto da mennsagem a ser exibida.",
	unit: '%',
	position: 'center',
	width: 300,
	height: 250
});
```

### Dialogo Lateral

Esta modalidade controi o dialogo lateralmente, observe que no codigo que neste caso utilizamos o array de botões para que possamos nos famializar com a sintaxe.

```javascripts
$.travwindow({
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
});
```

### Dialogo inferior/superior

Caixas de dialogo laterais tem como parametro requerido a propriedade Height, segue exemplo.

```javascripts
$.travwindow({
	title: 'Título da Pop',
	message: "Texto da mennsagem a ser exibida.",
	type: 'info',
	unit: '%',
	position: 'bottom',
	width: 300,
	height: 250
});
```
### Caixas de alertas

A Trav window também apresenta a fucnionalidade de alertas de contexto, que nada mais são do alertas simples para uso com a aplicação.
Para utilização de alertas de contexto, basta acionar a propriedade _simpleMessage_ conforme exemplo.

```javascripts
$.travWindow({
	appender: '#seltorConteiner',
	simpleMessage: true,
	message: "Hello world",
	type: 'danger',
	delay: -1
});
```
A proriedade de type é ativa em simpleMessages, e há ainda a propriedade apender que identificará onde a caixa de dialogo será adicionada.
