$(document).ready(function(){


			// _____________SMOOTH SCROLL______________


			$('a[href^="#"]').click(function(){
				var the_id = $(this).attr("href");
				$('html, body').animate({
					scrollTop:$(the_id).offset().top
				}, 1500);
				return false;
			});

			// _____________MENU______________

			$('#menu').click(function(){
				$('#menu-panel').addClass('menu-open');

				setTimeout(function(){
					$('.menu-item').addClass('item-visible');
				},400);
				setTimeout(function(){
					$('#menu-panel p').addClass('item-visible');
				},900);
				setTimeout(function(){
					$('.bar:nth-of-type(1)').addClass('bar-rotation');
					$('.bar:nth-of-type(2)').fadeOut();
					$('.bar:nth-of-type(3)').addClass('bar-rotation2');
					$('#menu').animate({top:'10px'},400);
					$('span.menu').html('Close').animate({left:'16px'},400,function(){
						$('#close-menu').css('display','block');
					});
				},800);
			});


			$('#close-menu,.menu-item').click(function(){
				$('#close-menu').css('display','none');
				$('.menu-item').removeClass('item-visible');
				$('#menu-panel p').removeClass('item-visible');
				setTimeout(function(){
					$('#menu-panel').removeClass('menu-open');
				},200);
				setTimeout(function(){
					$('.bar:nth-of-type(1)').removeClass('bar-rotation');
					$('.bar:nth-of-type(2)').fadeIn();
					$('.bar:nth-of-type(3)').removeClass('bar-rotation2');
					$('#menu').animate({top:'0px'},400,function(){
						$(this).removeClass();
					});
					$('span.menu').html('Menu').animate({left:'20px'},400);
				},300);
			});

			// _____________CUSTOM CTA______________

			$('.go-custom').click(function(){
				$('#custom').addClass('ctm-open');
				setTimeout(function(){
					$('.ctm-wrap h2').addClass('ctm-h2-visible');
					$('.ctm-shoes img').addClass('ctm-shoes-visible');
					$('#ctm-area').fadeIn('slow');
				},400);
			});


			// _____________CUSTOM AREA______________



			$.getJSON( "colors.json", function( data ) {
				// var panelid = $(this).attr('id');
				// var frag = panelid.substr(5);
				for (var i in data.colors.base){
					var thisHex = data.colors.base[i].hex;
					var thisName = data.colors.base[i].name;
					$('.icon-base .wrap-colors').append('<div class="color" style="background-color:'+thisHex+'"><span>'+thisName+'</span></div>');
			    }

  				$('.color').click(function(){
					var fragHexColor = $(this).children('span').html();
					console.log(fragHexColor);
					$('#base').removeClass().addClass(fragHexColor);
				});
			});



			$('.icon').click(function(){
				$('.wrap-colors').empty();

				var panelid = $(this).attr('id');
				var frag = panelid.substr(5);
				console.log(frag);
				$('.'+panelid).show('200', function(){
					setTimeout(function(){
						$('h4,.close').fadeIn('slow');
							$.getJSON( "colors.json", function( data ) {
								for (var i in data.colors.base){
									var thisHex = data.colors.base[i].hex;
									var thisName = data.colors.base[i].name;
									$('.icon-base .wrap-colors').append('<div class="color" style="background-color:'+thisHex+'"><span>'+thisName+'</span></div>');
							  }


							  	for (var i in data.colors.swoosh){
									var thisHex = data.colors.swoosh[i].hex;
									var thisName = data.colors.swoosh[i].name;
									$('.icon-swoosh .wrap-colors').append('<div class="color" style="background-color:'+thisHex+'"><span>'+thisName+'</span></div>');
							  }

				  				$('.color').click(function(){
									var fragHexColor = $(this).children('span').html();
									console.log(fragHexColor);
				  					// var thisColor = fragHex.substr(18);
									$('#'+frag).removeClass().addClass(fragHexColor);
								});
							});
						

					},200);
				});
			
			});

			$('.panel .close').click(function(){
				$(this).parent('.panel').fadeOut('slow');
			});
			$('#close-ctm').click(function(){
				$('#custom h2').removeClass('ctm-h2-visible');
				$('#ctm-area').fadeOut('slow');
				setTimeout(function(){
					$('.ctm-shoes img').removeClass('ctm-shoes-visible');
					$('.ctm-wrap').removeClass('ctm-open');
				},400);
			});



			// _____________TECH______________


			$('.point').click(function(event) {
    			var techId = $(this).parent('.border-point').attr('id');
	    		var number = techId.substr(5);
	    		$('.point-wrap').addClass('fade');
	    		$('#tech-sneaker').addClass('scale');
    			$('#tech'+number).animate({'right':'0'}, 600);
    			$('#img-tech'+number).animate({'marginLeft':'50vw'}, 600);
    			$('.tech-wrap .close').fadeIn('slow');
    			$('.tech-wrap .close').click(function(event) {
    				$(this).parent('.tech-wrap').animate({'right':'-100%'}, 600);
    				$('#img-tech'+number).animate({"marginLeft": "-100vw"}, 600);
	    			$('.point-wrap').removeClass('fade');
	    			$('#tech-sneaker').removeClass('scale');
    			});
    		});



// _____________HOME ANIMATIONS______________

		
	var introSection = $('.home'),
	introSectionHeight = introSection.height(),
	scaleSpeed = 0.4,
	opacitySpeed = 1; 
	
	var MQ = 100;

	triggerAnimation();
	$(window).on('resize', function(){
		triggerAnimation();
	});

	function triggerAnimation(){
		if($(window).width()>= MQ) {
			$(window).on('scroll', function(){
				window.requestAnimationFrame(animateIntro);
			});
		} else {
			$(window).off('scroll');
		}
	}
	function animateIntro () {
		var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
			scaleValue = 1 - scrollPercentage*scaleSpeed*2;
			scaleBigger = 1 + scrollPercentage*scaleSpeed*2;
		if( $(window).scrollTop() < 800) {
			$('.gradient').css({
			   '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
			    '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'transform': 'scale(' + scaleValue + ') translateZ(0)',
			});
			$('.home-sneaker').css({
			   '-moz-transform': 'scale(' + scaleBigger + ') rotate(25deg)',
			    '-webkit-transform': 'scale(' + scaleBigger + ') rotate(25deg)',
				'-ms-transform': 'scale(' + scaleBigger + ') rotate(25deg)',
				'-o-transform': 'scale(' + scaleBigger + ') rotate(25deg)',
				'transform': 'scale(' + scaleBigger+ ') rotate(25deg)',
			});
			$(".background").css({
				'opacity': 0 + scrollPercentage*opacitySpeed*1
			});
			$('#huarache-logo').css('color','#000');
			$('.title').css({'margin-top' : 66 - scrollPercentage*opacitySpeed*500 });
			$('#home .shadow').css({'opacity' : 0.5 - scrollPercentage*opacitySpeed*5});
			$('#counter').css({'opacity' : 1 - scrollPercentage*opacitySpeed*5});
			$('#home .middle').css({'opacity' : 1 - scrollPercentage*opacitySpeed*5});
		}
		else {
			$(".background").css("opacity","1");
			$('#huarache-logo').css('color','#fff');
			$("#home img").css({'opacity': scrollPercentage*opacitySpeed*1});
		}
	}
	// _____________COUNTER______________

	function counter(date) {
	  var theDate = new Date(date);
	  var _second = 1000;
	  var _minute = _second * 60;
	  var _hour = _minute * 60;
	  var _day = _hour * 24;
	  var timer;

	  function count() {
	    var now = new Date();
	    if (theDate > now) {
	      var distance = theDate - now;
	      if (distance < 0) {
	        clearInterval(timer);
	        return;
	      }
	    } else {
	      var distance = now - theDate;
	      if (distance < 0) {
	        clearInterval(timer);
	        return;
	      }
	    }
	    var days = Math.floor(distance / _day);
	    var hours = Math.floor((distance % _day) / _hour);
	    if (hours < 10) {
	      hours = '0' + hours;
	    }
	    var minutes = Math.floor((distance % _hour) / _minute);
	    if (minutes < 10) {
	      minutes = '0' + minutes;
	    }
	    var seconds = Math.floor((distance % _minute) / _second);
	    if (seconds < 10) {
	      seconds = '0' + seconds;
	    }
	    var daytext = '';
	    if (days > 1) {
	      daytext = ' days ';
	    } else {
	      daytext = ' day ';
	    }
	    if (days > 0) {
	      document.getElementById('counter').innerHTML = '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
	      document.getElementById('counter-footer').innerHTML = '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
	    } else {
	      document.getElementById('counter').innerHTML = '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
	      document.getElementById('counter-footer').innerHTML = '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
	    }
	  }
	  timer = setInterval(count, 1000);
	}

	counter('02/01/2015 1:00:00 GMT-0400 (EDT)');



});