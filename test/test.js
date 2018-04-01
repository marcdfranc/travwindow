$(function() {

	// configuração de scroller
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			var height = target.height() * 2;
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - height
				}, 1000);
				return false;
			}
		}
	});

	// Configuração do JS
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});


	// pop-htm
	$('#pop-htm-comum').click(function(e) {
		e.preventDefault();

		$('#dialog-htm').travwindow('show', {
		  // width: 330,
			height: 402,
			isModal: true
			//position: 'botton'
		});
	});

	// Pop Central
	$('.pop-central').click(function (e) {
		e.preventDefault();
		$.travwindow({
			title: 'Título da Pop',
			message: "Texto da mennsagem a ser exibida.",
			position: 'center',
			//isBlank: true,
			//url: 'www.google.com',
			width: 800,
			height: 500,
		});
	});

	$('#pop-Lateral').click(function (e) {
		e.preventDefault();

		$.travwindow({
			title: 'Título da Pop',
			message: "Texto da mennsagem a ser exibida.",
			unit: 'px',
			position: 'left',
			type: 'danger',
			width: 350,
			isModal: false,
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
	});

	$('#pop-lateral-htm').click(function (e) {
		e.preventDefault();

		$.travwindow({
			title: 'Título da Pop',
			message: "Texto da mennsagem a ser exibida.",
			unit: 'px',
			position: 'right',
			type: 'warning',
			width: 350,
			isModal: false,
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
	});
	

	$('#pop-botton').click(function (e) {
		e.preventDefault();

		$.travwindow({
			title: 'Título da Pop',
			message: "Texto da mennsagem a ser exibida.",
			type: 'info',
			position: 'bottom',
			height: 150
		});
	});


	$('#pop-top').click(function (e) {
		e.preventDefault();

		$.travwindow({
			title: 'Título da Pop',
			message: "Texto da mennsagem a ser exibida.",
			type: 'success',
			position: 'top',
			height: 150
		});
	});

	$('#alert-full').click(function (e) {
		e.preventDefault();

		$.travwindow({
			simpleMessage: true,
			message: "Hello world",
			type: 'danger',
			delay: -1
		});
	});


	/*$('#teste').travwindow('show', {
		height: 66,
		isModal: false,
		simpleMessage: true,
		position: 'top'
	});*/
});
