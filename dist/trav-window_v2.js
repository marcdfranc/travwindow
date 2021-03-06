/**
 * Fornece apoio para pops automatizadas
 * @TODO remover classes sass da pop em SCSS separado
 * @author Marcelo de Oliveira Francisco
 * @param  {Json} settings
 * @return {DOM}
 */

// !  comentario
jQuery.travwindow = function (settings) {
	/**
	 * template para botão fechar
	 * @type {String}
	 */
	var closer = '<a href="$travLink" $travTarget class="trav-close"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a>';

	/**
	 * Template para titulo da pop
	 * @type {String}
	 */
	var titulo = '<div class="trav-modal-title $travType"><span>$travTitle</span>$travCloser</div>';

	/**
	 * template pra Rodapé
	 * @type {String}
	 */
	var footer = '<div class="trav-modal-footer">$travFooter</div>';

	/**
	 * Template para rodapé com botões
	 * @type {String}
	 */
	var footerOpen = '<div class="trav-modal-footer $travBtn"><div class="modal-footer-content">';

	/**
	 * Template conteiner principal da pop
	 * @type {String}
	 */
	var content = '<div class="trav-modal-content" $travHeight>$travCloser$travContent</div>';

	/**
	 * Variável de auxílio
	 * @type {String}
	 */
	var pop = "";

	/**
	 * template completo da pop
	 * @type {String}
	 */
	var template= '<div class="trav-modal $closeOnEsc $travPosition $noToggle $noGlobal" data-width="$widthPop" data-height="$heightPop">$travContent</div>';

	var topPosition = 0;

	var leftPosition = 0;

	var distance = 0;

	/**
	 * parametros defaults
	 * @type {Json}
	 */
	var defaults = {
		type: 'default', // determina o tipo de mensagem (warning, danger, info, success, default, primary)
		title: undefined, // Texto  titulo da pop
		url: undefined, // link a ser seguido no close
		isModal: true, // modal com overlay ou não
		isBlank: false, // se o link a ser seguido sera blank
		unit: 'px', // unidade de medida a ser utilizada pela pop
		message: '', // Mensagem a ser apresentada.
		simpleMessage: false, // determina se é umo  alerta de topo , mensagem simples
		footer: undefined, // rodapé
		closeOnEsc: true, // determina se a pop é fechada ao esc
		position: 'bottom', // posição da pop, caloere (bottom, right, top, left)
		buttonPosition: 'right', // posicionamento de botões na pop
		delay: 0, // determina o tempo de fechamento da pop
		appender: '#trav-view-content', // determina o ontainder onde será colocada a pop
		btns: [] // botões da pop
	};



	/**
	 * Variável contendo as opcõs de funcinalidade da pop
	 * @type {Json}
	 */
	var options = $.extend(defaults, settings);
	template = template.replace('$widthPop', options.width != '' && options.width != undefined? options.width : '').replace('$heightPop', options.height != '' && options.height != undefined ? options.height : '');

	if (options.position === 'center' && options.appender !== '#trav-view-content') {
		options.appender = '#trav-view-content';
	}

	if (!options.isModal && options.appender === '#trav-view-content' && $.inArray(options.position, ['left', 'right']) !== -1) {
		options.isModal = true;
	}

	if (options.url !== undefined && options.isBlank) {
		closer = closer.replace('$travLink', options.url).replace('$travTarget', 'target="_blank"');
	} else {
		closer = closer.replace('$travLink', '#').replace('$travTarget', '');
	}

	if ($('body').find('#trav-view-port').length === 0) {
		$('body').append('<div id="trav-view-port" class="trav-view-reset"><div id="trav-overlay"></div><div id="trav-view-content" class="trav-view-reset"></div></div>');
	}

	if (window.innerHeight > window.innerWidth) {
		distance = window.innerHeight;
		leftPosition = ((distance - window.innerWidth) / 2) * -1;
	} else {
		distance = window.innerWidth;
		topPosition = (distance - window.innerHeight) / 2;
	}

	if (options.simpleMessage) {
		distance-= 60;
	}

	$('#trav-view-port').css({
		'height': distance,
		'width': distance,
		'margin-left': leftPosition,
		'top': $(window).scrollTop() - topPosition
	}).find('#trav-view-content').css({
		'height': window.innerHeight,
		'width': window.innerWidth,
		'margin-left':  -1 * window.innerWidth  / 2,
		'margin-top':  -1 * window.innerHeight / 2
	});



	var closePopAction = function (element) {
		element.find('.trav-close').click(function (e) {
			e.preventDefault();
			close($(this).closest('.trav-modal'));
		});
	};

	/**
	 * Ação de fechamento da pop
	 * @param  {Object} element elemento DOM da pop
	 */
	var close = function (element) {
		if (options.position === 'top' || options.position === 'bottom') {
			element.animate({height: '0'}, 500, function() {
				if (options.isModal) {
					$('body').removeClass('overlay-active');
				}
				$(this).remove();
				if (options.url !== undefined && !options.isBlank) {
					location.href = options.url;
				}
				$('.trav-view-reset').css('width', 0);
			});
		} else if (options.position === 'center') {
			element.animate({
				'height': 3,
				'margin-top': 0
			}, 250).delay(250).animate({width: 0}, function() {
				if (options.isModal) {
					$('body').removeClass('overlay-active');
				}

				$(this).remove();

				if (options.url !== undefined) {
					location.href = options.url;
				}

				$('.trav-view-reset').css('width', 0);
			});
		} else {
			element.animate({width: 'toggle'}, 500, function() {
				if (options.isModal) {
					$('body').removeClass('overlay-active');
				}
				$(this).remove();
				if (options.url !== undefined && !options.isBlank) {
					location.href = options.url;
				}
				$('.trav-view-reset').css('width', 0);
			});
		}

	};

	/**
	 * Inicia o processo de abertura da pop
	 */
	var show = function() {
		if (options.isModal) {
			$('body').addClass('overlay-active');
			setTimeout(showPop, 530);
		} else {
			showPop();
		}
	};

	/**
	 * Abre a pop
	 */
	var showPop = function () {
		if (options.position === 'top' || options.position === 'bottom') {

			if (options.simpleMessage) {
				if (options.appender == 'body' && 1 != 1) {
					
					$(options.appender).append(template.replace('$travContent', pop).replace('$travCloser', closer)).find('.trav-modal:last').animate({
						height: 'toggle'
					}, 500, function () {
						closePopAction($(this));
						addActionListeners($(this));
						if (options.delay > 0) {
							var temp = $(this);
							setTimeout(function () { close(temp); } , options.delay);
						}
					});
				} else {
					$(options.appender).prepend(template.replace('$travContent', pop).replace('$travCloser', closer)).find('.trav-modal:last').animate({
						height: 200
					}, 500, function () {
						closePopAction($(this));
						addActionListeners($(this));
						if (options.delay > 0) {
							var temp = $(this);
							setTimeout(function () { close(temp); } , options.delay);
						}
					});
				}
			} else {

				if (options.appender == 'body' && 1 != 1) {
					$(options.appender).append(template.replace('$travContent', pop).replace('$travCloser', closer)).find('.trav-modal:last').animate({
						height: (options.position === 'top' && options.simpleMessage)? 'toggle' : options.height + options.unit
					}, 500, function () {
						closePopAction($(this));
						addActionListeners($(this));
						if (options.delay > 0) {
							var temp = $(this);
							setTimeout(function () { close(temp); } , options.delay);
						}
					});
				} else {
					$(options.appender).prepend(template.replace('$travContent', pop).replace('$travCloser', closer)).find('.trav-modal:last').animate({
						height: (options.position === 'top' && options.simpleMessage)? 'toggle' : options.height + options.unit
					}, 500, function () {
						closePopAction($(this));
						addActionListeners($(this));
						if (options.delay > 0) {
							var temp = $(this);
							setTimeout(function () { close(temp); } , options.delay);
						}
					});
				}

			}
		} else if (options.position == 'left' || options.position == 'right') {
			$(options.appender).append(template.replace('$travContent', pop).replace('$travCloser', closer)).find('.trav-modal:last').animate({
				width: options.width + options.unit
			}, 500, function () {
				closePopAction($(this));
				addActionListeners($(this));
				if (options.delay > 0) {
					var temp = $(this);
					setTimeout(function () { close(temp); } , options.delay);
				}
			});
		} else if(options.position == 'center') {
			var finalVertical = parseInt(options.width)/2;
			var finalHorizontal = parseInt (options.height)/2;
			finalVertical *= -1;
			finalHorizontal*= -1;

			$(options.appender).css({
				'overflow-y': options.height > window.innerHeight? 'auto' : 'hidden',
				'margin-left': (window.innerWidth / 2) * -1				
			}).append(template.replace('$travContent', pop).replace('$travCloser', closer)).find('.trav-modal:last').css({
				'width': '3px',
				'height': '0',
				'top':  options.height > window.innerHeight?  '0' : '50%',
				'margin-top' : options.height > window.innerHeight? '0' : finalHorizontal
			}).animate({
				'height':  options.height + options.unit
			}, 500).delay(150).animate({
				'left' : (options.width > window.innerWidth)? '0' : '50%',
				'width': (options.width > window.innerWidth) ? window.innerWidth : options.width,
				'margin-left': (options.width > window.innerWidth) ? '0': finalVertical
			}, 500, function () {
				closePopAction($(this));
				if (options.delay > 0) {
					var temp = $(this);
					setTimeout(function () { close(temp); } , options.delay);
				}
			});
		}
	};

	/**
	 * Monta a estrutura HTM da pop
	 */
	var mountPop = function () {
		if (options.closeOnEsc) {
			template = template.replace("$closeOnEsc", 'trav-open');
		}

		if (options.appender == 'body') {
			template = template.replace('$noGlobal', '');
		} else {
			template = template.replace('$noGlobal', 'intra-window');
		}

		if (!options.simpleMessage) {

			template = template.replace('$travPosition', 'trav-' + options.position).replace('$noToggle', '');


			// monta o título
			if (options.title !== undefined) {
				pop+= titulo.replace('$travTitle', options.title).replace('$travCloser', closer).replace('$travType', 'alert-' + options.type);
				content = content.replace('$travCloser', '');
			}

			// acrescenta a mensagem
			if (options.position === 'bottom' || options.position === 'top') {
				pop+= content.replace('$travContent', '<p>' + options.message + '</p>').replace('$travHeight', 'style="height: ' + options.height + options.unit + ';"');
				if (options.btns.length > 0 || options.footer !== undefined) {
					options.height+= 60;
				}
				if (options.title !== undefined) {
					options.height+= 60;
				}
			} else {
				pop+= content.replace('$travContent', '<p>' + options.message + '</p>').replace('$travHeight', '');
			}

			//monta rodapé
			if (options.footer !== undefined) {
				pop+= footer.replace('$travFooter', options.footer);
			} else if (options.btns.length > 0) {
				pop+= mountBtns();
			}
		} else {
			options.position = 'top';
			options.isModal = false;
			options.unit = 'px';
			options.height = 62;
			if (options.delay === 0) {
				options.delay = 2500;
			}


			template = template.replace('$travPosition', 'trav-top').replace('$noToggle', 'trav-simple-message');

			pop+= titulo.replace('$travTitle', options.message).replace('$travCloser', closer).replace('$travType', 'alert-' + options.type);
		}

		show();
	};

	/**
	 * Monta a estrutura htm para os botões da pop
	 */
	var mountBtns = function () {
		result = footerOpen.replace('$travBtn', 'trav-btn trav-' + options.buttonPosition);

		for (var i = 0; i < options.btns.length; i++) {
			result+= '<a href="#" data-index="$btnIndex" class="btn trav-modal-btn $btnType">$btnTitle</a>';
			result= result.replace('$btnIndex', i).replace('$btnType', options.btns[i].type).replace('$btnTitle', options.btns[i].title);
		}
		result+= '</div></div>';
		return result;
	};

	/**
	 * Adiciona o Listener de botões da pop
	 */
	var addActionListeners = function (element) {
		element.find('.trav-modal-btn').each(function () {
			index = $(this).data('index');
			//console.log(options.btns[index].action);
			$(this).click(options.btns[index].action);
		});
	};

	mountPop();
};

/**
 * Fornece fucnionalidade de pop para elementos de html na página
 * @type {[type]}
 */
(function ($) {

	$.fn.travwindow = function (metod, settings) {

		var closer = '<a href="$travLink" $travTarget class="trav-close"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a>';

		/**
		 * Parametros default da pop
		 * @type {Json}
		 */
		var defaults = {
			type: undefined,
			title: undefined,
			url: undefined,
			isModal: true,
			unit: 'px',
			message: '',
			simpleMessage: false,
			footer: undefined,
			closeOnEsc: true,
			position: 'bottom',
			buttonPosition: 'right',
			remove: false,
			appender: 'body',
			isBlank: false,
			btns: []
		};

		/**
		 * Opções de funcionalidades da pop
		 * @type {Json}
		 */
		var options = $.extend(defaults, settings);



		if (metod !== 'close' && metod !== 'destroy') {
			$(this).addClass('no-rem');

			if ($('body').find('#trav-view-port').length === 0) {
				$('body').append('<div id="trav-view-port" class="trav-view-reset"><div id="trav-overlay"></div><div id="trav-view-content" class="trav-view-reset"></div></div>');
			}

			if ((options.position === 'center' && $(this).parent().attr('id') !== 'trav-view-content') || (options.isModal && $(this).parent().attr('id') !== 'trav-view-content')) {
				$('#trav-view-content').append($(this));
			}

			var topPosition = 0;
			var leftPosition = 0;
			var marginLeft = 0;

			if (window.innerHeight > window.innerWidth) {			
				distance = window.innerHeight;					
				marginLeft = (distance - window.innerWidth) / 2;
				leftPosition = -1 * marginLeft;
			} else {
				distance = window.innerWidth;
				topPosition = (distance - window.innerHeight) / 2;
			}

			if (options.isModal) {
				/*if (options.height > window.innerHeight && (options.position = 'bottom' || options.position == 'top')) {
					$('#trav-view-port').css({
						'height': options.height,
						'width': distance,
						'overflow-y': 'auto',
						'left': leftPosition,						
						'top': $(window).scrollTop() - topPosition
					}).find('#trav-view-content').css({
						'height': options.height,
						'width': window.innerWidth,
						'margin-left': marginLeft,
						'margin-top': ((topPosition / 2) - (window.innerHeight / 2))
					});				
				} else {
					$('#trav-view-port').css({
						'height': distance,
						'width': distance,
						'left': leftPosition,						
						'top': $(window).scrollTop() - topPosition
					}).find('#trav-view-content').css({
						'height': window.innerHeight,
						'width': window.innerWidth,
						'margin-left': marginLeft,
						'margin-top':  -1 * window.innerHeight / 2 
					});
				}*/

				$('#trav-view-port').css({
						'height': distance,
						'width': distance,
						'left': leftPosition,						
						'top': $(window).scrollTop() - topPosition
					});/*.find('#trav-view-content').css({
						'height': window.innerHeight,
						'width': window.innerWidth,
						'margin-left': marginLeft,
						'margin-top':  -1 * window.innerHeight / 2 
					});*/
			}
		}



		/**
		 * inicia o processo de Fechamento de uma pop
		 * @param  {Object} element Objeto Jquery a ser fechado
		 * @param  {bool} destroy indica se a pop vai ser removida ou não
		 */
		var close = function (element, destroy) {
			element = element.closest('.trav-modal').removeClass('trav-open');

			if (element.hasClass('trav-bottom') || element.hasClass('trav-top')) {
				element.animate({height: 0}, 500, function() {
					if ($('body').hasClass('overlay-active')) {
						$('body').removeClass('overlay-active');
					}
					if (options.url !== undefined) {
						location.href = options.url;
					}
					if (destroy && !element.hasClass('no-rem')) {
						$(this).remove();
					}
					$('.trav-view-reset').css('width', 0);
				});
			} else if (element.hasClass("trav-center")) {
				element.animate({
					'height': 3,
					'margin-top': 0
				}, 250).delay(250).animate({width: 0}, function() {
					if ($('body').is(':visible')) {
						$('body').removeClass('overlay-active');
					}

					$(this).css({
						height: 0,
						top: 0
					});

					if (options.url !== undefined) {
						location.href = options.url;
					}
					if (destroy && !element.hasClass('no-rem')) {
						$(this).remove();
					}
					$('.trav-view-reset').css('width', 0);
				});
			} else {
				element.animate({width: '1'}, 500, function() {
					if ($('body').is(':visible')) {
						$('body').removeClass('overlay-active');
					}
					if (options.url !== undefined) {
						location.href = options.url;
					}
					if (destroy && !element.hasClass('no-rem')) {
						$(this).remove();
					}
					$('.trav-view-reset').css('width', 0);
				});
			}


		};

		/**
		 * Fecha uma pop
		 * @param  {Object} element Objeto Jquery a ser fechado
		 */
		var closePopAction = function (element) {
			element.find('.trav-close').click(function (e) {
				e.preventDefault();

				close($(this).closest('.trav-modal'), false);
			});
		};

		var getOptions = function (element) {
			return options;
		};

		var resizePop = function (element) {
			distance = window.innerWidth > window.innerHeight? window.innerWidth : window.innerHeight;
			
			var popOpened = $('#trav-view-port').css({
				'height': distance,
				'width': distance,
				'top': '50%',
				'left': '50%',
				'margin-top': (distance / 2) * -1,
				'margin-left': (distance / 2) * -1
			}).find('.trav-modal');		

			widthNew = $(popOpened).data('width') > window.innerWidth ? window.innerWidth : $(popOpened).data('width');
			heightNew = $(popOpened).data('height') > window.innerHeight ?  window.innerHeight : $(popOpened).data('height');
			
			if ($(element).hasClass('trav-bottom') || $(element).hasClass('trav-top')) {
				options.distance = $(element).height();
				options.position = $(element).hasClass('trav-bottom') ? 'bottom' : 'top';
				options.closeOnEsc = $(element).hasClass('trav-open'); 
				setTimeout(showPop(element), 530);

			} else if ($(element).hasClass('trav-left') || $(element).hasClass('trav-rigt')) {
				$(popOpened).css({
					'width': widthNew,					
					'margin-left': (widthNew / 2) * -1,
					'margin-top': (heightNew / 2) * -1
				});
				console.log(window.innerWidth);
				console.log(window.innerHeight);
				console.log(heightNew);
				console.log(widthNew);
			} else if ($(element).hasClass('trav-center')) {
				
				$(popOpened).css({
					'width': widthNew,
					'height': heightNew,
					'margin-left': (widthNew / 2) * -1,
					'margin-top': (heightNew / 2) * -1
				});
			}
		};

		/**
		 * inicia o processo de abertura de uma pop
		 * @param  {Object} element Objeto Jquery a ser aberto em forma de pop
		 */
		var show = function(element) {
			
			$(element).data('height', options.height != '' && options.height != undefined? options.height : '');
			$(element).data('width', options.width != '' && options.width != undefined? options.width : '');
			
			if (element.find('.trav-close').length === 0 ) {
				if (options.url !== undefined) {
					if (options.isBlank) {
						closer = closer.replace('$travLink', options.url).replace('$travTarget', 'target="_blank"');
					} else {
						closer = closer.replace('$travLink', options.url).replace('$travTarget', '');
					}
				} else {
					closer = closer.replace('$travLink', '#').replace('$travTarget', '');
				}

				element.find('.trav-modal-title').append(closer);
			}

			if (options.isModal) {
				$('body').addClass('overlay-active');
				setTimeout(showPop(element), 530);
			} else {
				showPop(element);
			}
		};

		/**
		 * Abre uma pop na tela
		 * @param  {Object} element Objeto Jquery a ser aberto
		 */
		var showPop = function (element) {

			if (options.position === 'top' || options.position === 'bottom') {

				if (options.remove) {
					element.animate({
						height: options.height
					}, 500, function () {
						closePopAction($(this));
					});
				} else {
					if (options.closeOnEsc && !element.hasClass('trav-open')) {
						element.addClass('trav-open').addClass(function () {
							var heightNew = options.height; 
							closePopAction($(this));
							console.log(topPosition);
							if (heightNew > window.innerHeight) {
								parentEle = $('#trav-view-port').css({
									'overflow-y': 'auto',
									'height': heightNew
								}).find('#trav-view-content');
								if (heightNew > parentEle.height()) {
									parentEle.css({
										'height': heightNew,
										'width': window.innerWidth,
										'margin-left': (window.innerWidth /  2) * -1,
										'margin-top': ((heightNew / 2) - topPosition) * -1
									});									
								}
							} else {
								$('#trav-view-port').css({
									'overflow-y': 'hidden'
								}).find('#trav-view-content').css({
									'margin-top': (window.innerHeight / 2) * -1,
									'height': window.innerHeight,
									'width': window.innerWidth,
									'margin-left': (window.innerWidth / 2) * -1
								});
							}
							return 'no-rem';
						}).animate({height: options.height}, 500);




						console.log(element);
					} else {
						element.addClass('no-rem').animate({
							height: options.height
						}, 500, function () {
							//closePopAction($(this));
							var heightNew = $(this).height(); 
							if (heightNew > window.innerHeight) {
								parentEle = $('#trav-view-port').css({
									'overflow-y': 'auto',
									//'width': window.innerWidth,
									'height': heightNew
								}).find('#trav-view-content');

								//if (heightNew > parentEle.height()) {
									parentEle.animate({	
										'height': heightNew,
										'width': window.innerWidth,	
										'top': 0,	
										'margin-left': (window.innerWidth / 2) * -1,						
										'margin-top': (heightNew - window.innerHeight)
									}, 500);
								//}
							} else {
								$('#trav-view-port').css({
									'overflow-y': 'hidden'
								}).find('#trav-view-content').css({
									'height': options.distance,
									'width': window.innerWidth,
									'top': options.position == 'bottom' ? '100%' : '0',
									'margin-left': (window.innerWidth / 2) * -1,
									'margin-top': options.position == 'bottom'? (options.distance - 1) * -1 : 0
								});
							}
						});
					}
				}

			} else if (options.position == 'left' || options.position == 'right') {
				element.addClass('trav-open').animate({
					width: options.width + options.unit
				 }, 500, function () {
					closePopAction($(this));
				});
			} else if (options.position == 'center') {
				var finalVertical = parseInt(options.width)/2;
				var finalHorizontal = parseInt (options.height)/2;
				finalVertical *= -1;
				finalHorizontal*= -1;

				element.addClass('trav-open').css({
					'width': '3px',
					'top': '50%',
					'height': '0',
					'margin-left': '0',
					'margin-top': finalHorizontal
				}).animate({'height': options.height}, 350).delay(200).animate({
					'width': options.width,
					'margin-left': finalVertical
				}, 500, function () {
					closePopAction($(this));
				});
			}
		};


		if (metod === 'close') {
			options = $.extend(options, settings);
			close(this, false);
		} else if (metod === 'destroy') {
			close(this, true);
		} else if (metod === 'resizePop') {
			resizePop(this);
		} else if (metod === 'getOptions') {
			return getOptions(this);
		} else {
			options = $.extend(options, metod);
			show(this);
		}

		return this;
	};
})(jQuery);

/**
 * Prove um Listener para fechamento de pops pela tecla ESC
 */
$(function () {
	$('body').keyup(function(e) {
		if(e.keyCode == 27){
			$(this).find('.trav-open:last').travwindow('destroy');
		}
	});

	$(window).resize(function () {
		$('body').find('.trav-open').each(function (i) {
			//var opt = $(this).travwindow('getOptions');
			console.log($(this));
			$(this).travwindow('resizePop');
		});
	});
});
