/* JavaScript Document */
jQuery(window).on('load', function() {
    'use strict';
	
	
	function changeItemBoxed() {
		if(jQuery("body").hasClass("boxed")) {
			return 3;
		} else {
			return 4;
		}
	}
	
	
	
	// testimonial-swiper
	if(jQuery('.testimonial-swiper').length > 0){
		var swiper = new Swiper('.testimonial-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 2,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1191: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// testimonial-swiper
	if(jQuery('.testimonial-swiper-2').length > 0){
		var swiper = new Swiper('.testimonial-swiper-2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}
	
	// testimonial-swiper
	if(jQuery('.testimonial-swiper-4').length > 0){
		var swiper = new Swiper('.testimonial-swiper-4', {
			speed: 1500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
				
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.team-swiper').length > 0){
		var swiper = new Swiper('.team-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next-team',
				prevEl: '.swiper-button-prev-team',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.team-swiper-3').length > 0){
		var swiper = new Swiper('.team-swiper-3', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next-team',
				prevEl: '.swiper-button-prev-team',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.team-swiper-4').length > 0){
		var swiper = new Swiper('.team-swiper-4', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
				el: '.team-pagination',
				clickable: true,
				
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.blog-slider').length > 0){
		var swiper = new Swiper('.blog-slider', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next-team',
				prevEl: '.swiper-button-prev-team',
			},
			breakpoints: {
				1191: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Portfoilo Swiper
	if(jQuery('.portfoilo-slider').length > 0){
		var swiper = new Swiper('.portfoilo-slider', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},
			breakpoints: {
				1201: {
					slidesPerView: 3,
				},
				800: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	
	// Clients Swiper
	if(jQuery('.clients-swiper').length > 0){
		var swiper5 = new Swiper('.clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	// Clients Swiper
	if(jQuery('.clients-swiper-2').length > 0){
		var swiper5 = new Swiper('.clients-swiper-2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 6,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 6,
				},
				992: {
					slidesPerView: 6,
				},
				768: {
					slidesPerView: 4,
				},
				591: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	// Clients Swiper
	if(jQuery('.clients-swiper-3').length > 0){
		var swiper5 = new Swiper('.clients-swiper-3', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	
	// related-item-swiper
	if(jQuery('.related-item-swiper').length > 0){
		var swiper5 = new Swiper('.related-item-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:false,
			navigation: {
				nextEl: '.swiper-button-next-related',
				prevEl: '.swiper-button-prev-related',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				500: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	
	// post-swiper
	if(jQuery('.post-swiper').length > 0){
		var swiper = new Swiper('.post-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.next-post-swiper-btn',
				prevEl: '.prev-post-swiper-btn',
			}
		});
	}
	
	
	// service-swiper
	if(jQuery('.service-swiper').length > 0){
		var swiper = new Swiper('.service-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.next-service-swiper-btn',
				prevEl: '.prev-service-swiper-btn',
			}
		});
	}
	
	
	var swiper = new Swiper(".sync2", {
		spaceBetween: 15,
		slidesPerView: "auto",
		watchSlidesVisibility: true,
		direction: "vertical",
		watchSlidesProgress: true,
		navigation: {
		  nextEl: ".swiper-button-next-thumb",
		  prevEl: ".swiper-button-prev-thumb",
		},
		breakpoints: {
			576: {
				spaceBetween: 15
			},
			320: {
				spaceBetween: 15
			}
		}
	});
	var swiper2 = new Swiper(".sync1", {
		spaceBetween: 10,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		thumbs: {
		  swiper: swiper,
		},
	});
	
	
	
	var testimonialSwiperThumb = new Swiper(".testimonial-swiper-thumb", {
		spaceBetween: 10,
		slidesPerView: 'auto',
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var testimonialSwiper = new Swiper(".testimonial-swiper-3", {
		spaceBetween: 10,
		navigation: {
		  nextEl: ".swiper-button-next-test",
		  prevEl: ".swiper-button-prev-test",
		},
		thumbs: {
		  swiper: testimonialSwiperThumb,
		},
	});
	
	var mainSwiperThumb = new Swiper(".main-slider-one-thumb", {
		spaceBetween: 10,
		slidesPerView: 'auto',
		speed: 1500,
		autoplay: {
		   delay: 3000,
		},
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var mainSwiper = new Swiper(".main-slider-one", {
		spaceBetween: 10,
		speed: 1500,
		pagination: {
			el: '.banner-pagination',
			clickable: true,
			
		},
		autoplay: {
		   delay: 3000,
		},
		navigation: {
		  nextEl: ".swiper-button-next-test",
		  prevEl: ".swiper-button-prev-test",
		},
		thumbs: {
		  swiper: mainSwiperThumb,
		},
	});
	
	
	
});
/* Document .ready END */