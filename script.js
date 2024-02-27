// function locomotiveAnimation() {
//     gsap.registerPlugin(ScrollTrigger);
  
//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true,
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
  
//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector("#main").style.transform
//         ? "transform"
//         : "fixed",
//     });
  
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
//   }
//   locomotiveAnimation();
  
//   function navbarAnimation() {
//     gsap.to("#nav-part1 img", {
//       transform: "translateY(-100%)",
//       scrollTrigger: {
//         trigger: "#page1",
//         scroller: "#main",
//         start: "top 0",
//         end: "top -5%",
//         scrub: true,
//       },
//     });
//     gsap.to("#nav-part2 #links", {
//       transform: "translateY(-100%)",
//       opacity: 0,
//       scrollTrigger: {
//         trigger: "#page1",
//         scroller: "#main",
//         start: "top 0",
//         end: "top -5%",
//         scrub: true,
//       },
//     });
//   }
//   navbarAnimation()

//   // function toggleAnimation() {
//   //   const toggleBtn = document.querySelector('.togglebtn')
//   //   const toggleBtnIcon = document.querySelector('.togglebtn i')
//   //   const dropDownMenu = document.querySelector('.dropdownmenu')

//   //   toggleBtn.onclick = function () {
//   //     dropDownMenu.classList.toggle("open")
//   //   }
//   // }
//   // toggleAnimation()

//   // function sliderAnimation() {
//   //   const btns=document.querySelectorAll(".nav-btn");
//   //       const slides=document.querySelectorAll(".video-slide");
//   //       const contents=document.querySelectorAll(".content");


//   //       var sliderNav =function(manual){
//   //         btns.forEach((btn)=> {
//   //         btn.classList.remove("active");
//   //       });

//   //       slides.forEach((slide)=> {
//   //         slide.classList.remove("active");
//   //       });
//   //       contents.forEach((content)=> {
//   //         content.classList.remove("active");
//   //       });

//   //       btns[manual].classList.add("active");
//   //       slides[manual].classList.add("active");
//   //       contents[manual].classList.add("active");
//   //     }

//   //       btns.forEach((btn,i)=>{
//   //         btn.addEventListener("click",()=> {
//   //           sliderNav(i);
//   //         });
//   //       });
//   // }
//   // sliderAnimation()
  
//   // function page2Animation() {
//   //   let nextButton = document.getElementById('next');
//   //   let prevButton = document.getElementById('prev');
//   //   let carousel = document.querySelector('.carousel');
//   //   let listHTML = document.querySelector('.carousel .list');
//   //   let seeMoreButtons = document.querySelectorAll('.seeMore');
//   //   let backButton = document.getElementById('back');

//   //   nextButton.onclick = function(){
//   //       showSlider('next');
//   //   }
//   //   prevButton.onclick = function(){
//   //       showSlider('prev');
//   //   }
//   //   let unAcceppClick;
//   //   const showSlider = (type) => {
//   //       nextButton.style.pointerEvents = 'none';
//   //       prevButton.style.pointerEvents = 'none';
    
//   //       carousel.classList.remove('next', 'prev');
//   //       let items = document.querySelectorAll('.carousel .list .item');
//   //       if(type === 'next'){
//   //           listHTML.appendChild(items[0]);
//   //           carousel.classList.add('next');
//   //       }else{
//   //           listHTML.prepend(items[items.length - 1]);
//   //           carousel.classList.add('prev');
//   //       }
//   //       clearTimeout(unAcceppClick);
//   //       unAcceppClick = setTimeout(()=>{
//   //           nextButton.style.pointerEvents = 'auto';
//   //           prevButton.style.pointerEvents = 'auto';
//   //       }, 2000)
//   //   }
//   //   seeMoreButtons.forEach((button) => {
//   //       button.onclick = function(){
//   //           carousel.classList.remove('next', 'prev');
//   //           carousel.classList.add('showDetail');
//   //       }
//   //   });
//   //   backButton.onclick = function(){
//   //       carousel.classList.remove('showDetail');
//   //   }    
//   // }
//   // page2Animation()

//   // --------------------------------------------------part7---------------------------------------------------
  
//   (function($) {

//     /**
//      * Generate an indented list of links from a nav. Meant for use with panel().
//      * @return {jQuery} jQuery object.
//      */
//     $.fn.navList = function() {
  
//       var	$this = $(this);
//         $a = $this.find('a'),
//         b = [];
  
//       $a.each(function() {
  
//         var	$this = $(this),
//           indent = Math.max(0, $this.parents('li').length - 1),
//           href = $this.attr('href'),
//           target = $this.attr('target');
  
//         b.push(
//           '<a ' +
//             'class="link depth-' + indent + '"' +
//             ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
//             ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
//           '>' +
//             '<span class="indent-' + indent + '"></span>' +
//             $this.text() +
//           '</a>'
//         );
  
//       });
  
//       return b.join('');
  
//     };
  
//     /**
//      * Panel-ify an element.
//      * @param {object} userConfig User config.
//      * @return {jQuery} jQuery object.
//      */
//     $.fn.panel = function(userConfig) {
  
//       // No elements?
//         if (this.length == 0)
//           return $this;
  
//       // Multiple elements?
//         if (this.length > 1) {
  
//           for (var i=0; i < this.length; i++)
//             $(this[i]).panel(userConfig);
  
//           return $this;
  
//         }
  
//       // Vars.
//         var	$this = $(this),
//           $body = $('body'),
//           $window = $(window),
//           id = $this.attr('id'),
//           config;
  
//       // Config.
//         config = $.extend({
  
//           // Delay.
//             delay: 0,
  
//           // Hide panel on link click.
//             hideOnClick: false,
  
//           // Hide panel on escape keypress.
//             hideOnEscape: false,
  
//           // Hide panel on swipe.
//             hideOnSwipe: false,
  
//           // Reset scroll position on hide.
//             resetScroll: false,
  
//           // Reset forms on hide.
//             resetForms: false,
  
//           // Side of viewport the panel will appear.
//             side: null,
  
//           // Target element for "class".
//             target: $this,
  
//           // Class to toggle.
//             visibleClass: 'visible'
  
//         }, userConfig);
  
//         // Expand "target" if it's not a jQuery object already.
//           if (typeof config.target != 'jQuery')
//             config.target = $(config.target);
  
//       // Panel.
  
//         // Methods.
//           $this._hide = function(event) {
  
//             // Already hidden? Bail.
//               if (!config.target.hasClass(config.visibleClass))
//                 return;
  
//             // If an event was provided, cancel it.
//               if (event) {
  
//                 event.preventDefault();
//                 event.stopPropagation();
  
//               }
  
//             // Hide.
//               config.target.removeClass(config.visibleClass);
  
//             // Post-hide stuff.
//               window.setTimeout(function() {
  
//                 // Reset scroll position.
//                   if (config.resetScroll)
//                     $this.scrollTop(0);
  
//                 // Reset forms.
//                   if (config.resetForms)
//                     $this.find('form').each(function() {
//                       this.reset();
//                     });
  
//               }, config.delay);
  
//           };
  
//         // Vendor fixes.
//           $this
//             .css('-ms-overflow-style', '-ms-autohiding-scrollbar')
//             .css('-webkit-overflow-scrolling', 'touch');
  
//         // Hide on click.
//           if (config.hideOnClick) {
  
//             $this.find('a')
//               .css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  
//             $this
//               .on('click', 'a', function(event) {
  
//                 var $a = $(this),
//                   href = $a.attr('href'),
//                   target = $a.attr('target');
  
//                 if (!href || href == '#' || href == '' || href == '#' + id)
//                   return;
  
//                 // Cancel original event.
//                   event.preventDefault();
//                   event.stopPropagation();
  
//                 // Hide panel.
//                   $this._hide();
  
//                 // Redirect to href.
//                   window.setTimeout(function() {
  
//                     if (target == '_blank')
//                       window.open(href);
//                     else
//                       window.location.href = href;
  
//                   }, config.delay + 10);
  
//               });
  
//           }
  
//         // Event: Touch stuff.
//           $this.on('touchstart', function(event) {
  
//             $this.touchPosX = event.originalEvent.touches[0].pageX;
//             $this.touchPosY = event.originalEvent.touches[0].pageY;
  
//           })
  
//           $this.on('touchmove', function(event) {
  
//             if ($this.touchPosX === null
//             ||	$this.touchPosY === null)
//               return;
  
//             var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
//               diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
//               th = $this.outerHeight(),
//               ts = ($this.get(0).scrollHeight - $this.scrollTop());
  
//             // Hide on swipe?
//               if (config.hideOnSwipe) {
  
//                 var result = false,
//                   boundary = 20,
//                   delta = 50;
  
//                 switch (config.side) {
  
//                   case 'left':
//                     result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
//                     break;
  
//                   case 'right':
//                     result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
//                     break;
  
//                   case 'top':
//                     result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
//                     break;
  
//                   case 'bottom':
//                     result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
//                     break;
  
//                   default:
//                     break;
  
//                 }
  
//                 if (result) {
  
//                   $this.touchPosX = null;
//                   $this.touchPosY = null;
//                   $this._hide();
  
//                   return false;
  
//                 }
  
//               }
  
//             // Prevent vertical scrolling past the top or bottom.
//               if (($this.scrollTop() < 0 && diffY < 0)
//               || (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {
  
//                 event.preventDefault();
//                 event.stopPropagation();
  
//               }
  
//           });
  
//         // Event: Prevent certain events inside the panel from bubbling.
//           $this.on('click touchend touchstart touchmove', function(event) {
//             event.stopPropagation();
//           });
  
//         // Event: Hide panel if a child anchor tag pointing to its ID is clicked.
//           $this.on('click', 'a[href="#' + id + '"]', function(event) {
  
//             event.preventDefault();
//             event.stopPropagation();
  
//             config.target.removeClass(config.visibleClass);
  
//           });
  
//       // Body.
  
//         // Event: Hide panel on body click/tap.
//           $body.on('click touchend', function(event) {
//             $this._hide(event);
//           });
  
//         // Event: Toggle.
//           $body.on('click', 'a[href="#' + id + '"]', function(event) {
  
//             event.preventDefault();
//             event.stopPropagation();
  
//             config.target.toggleClass(config.visibleClass);
  
//           });
  
//       // Window.
  
//         // Event: Hide on ESC.
//           if (config.hideOnEscape)
//             $window.on('keydown', function(event) {
  
//               if (event.keyCode == 27)
//                 $this._hide(event);
  
//             });
  
//       return $this;
  
//     };
  
//     /**
//      * Apply "placeholder" attribute polyfill to one or more forms.
//      * @return {jQuery} jQuery object.
//      */
//     $.fn.placeholder = function() {
  
//       // Browser natively supports placeholders? Bail.
//         if (typeof (document.createElement('input')).placeholder != 'undefined')
//           return $(this);
  
//       // No elements?
//         if (this.length == 0)
//           return $this;
  
//       // Multiple elements?
//         if (this.length > 1) {
  
//           for (var i=0; i < this.length; i++)
//             $(this[i]).placeholder();
  
//           return $this;
  
//         }
  
//       // Vars.
//         var $this = $(this);
  
//       // Text, TextArea.
//         $this.find('input[type=text],textarea')
//           .each(function() {
  
//             var i = $(this);
  
//             if (i.val() == ''
//             ||  i.val() == i.attr('placeholder'))
//               i
//                 .addClass('polyfill-placeholder')
//                 .val(i.attr('placeholder'));
  
//           })
//           .on('blur', function() {
  
//             var i = $(this);
  
//             if (i.attr('name').match(/-polyfill-field$/))
//               return;
  
//             if (i.val() == '')
//               i
//                 .addClass('polyfill-placeholder')
//                 .val(i.attr('placeholder'));
  
//           })
//           .on('focus', function() {
  
//             var i = $(this);
  
//             if (i.attr('name').match(/-polyfill-field$/))
//               return;
  
//             if (i.val() == i.attr('placeholder'))
//               i
//                 .removeClass('polyfill-placeholder')
//                 .val('');
  
//           });
  
//       // Password.
//         $this.find('input[type=password]')
//           .each(function() {
  
//             var i = $(this);
//             var x = $(
//                   $('<div>')
//                     .append(i.clone())
//                     .remove()
//                     .html()
//                     .replace(/type="password"/i, 'type="text"')
//                     .replace(/type=password/i, 'type=text')
//             );
  
//             if (i.attr('id') != '')
//               x.attr('id', i.attr('id') + '-polyfill-field');
  
//             if (i.attr('name') != '')
//               x.attr('name', i.attr('name') + '-polyfill-field');
  
//             x.addClass('polyfill-placeholder')
//               .val(x.attr('placeholder')).insertAfter(i);
  
//             if (i.val() == '')
//               i.hide();
//             else
//               x.hide();
  
//             i
//               .on('blur', function(event) {
  
//                 event.preventDefault();
  
//                 var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
  
//                 if (i.val() == '') {
  
//                   i.hide();
//                   x.show();
  
//                 }
  
//               });
  
//             x
//               .on('focus', function(event) {
  
//                 event.preventDefault();
  
//                 var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');
  
//                 x.hide();
  
//                 i
//                   .show()
//                   .focus();
  
//               })
//               .on('keypress', function(event) {
  
//                 event.preventDefault();
//                 x.val('');
  
//               });
  
//           });
  
//       // Events.
//         $this
//           .on('submit', function() {
  
//             $this.find('input[type=text],input[type=password],textarea')
//               .each(function(event) {
  
//                 var i = $(this);
  
//                 if (i.attr('name').match(/-polyfill-field$/))
//                   i.attr('name', '');
  
//                 if (i.val() == i.attr('placeholder')) {
  
//                   i.removeClass('polyfill-placeholder');
//                   i.val('');
  
//                 }
  
//               });
  
//           })
//           .on('reset', function(event) {
  
//             event.preventDefault();
  
//             $this.find('select')
//               .val($('option:first').val());
  
//             $this.find('input,textarea')
//               .each(function() {
  
//                 var i = $(this),
//                   x;
  
//                 i.removeClass('polyfill-placeholder');
  
//                 switch (this.type) {
  
//                   case 'submit':
//                   case 'reset':
//                     break;
  
//                   case 'password':
//                     i.val(i.attr('defaultValue'));
  
//                     x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
  
//                     if (i.val() == '') {
//                       i.hide();
//                       x.show();
//                     }
//                     else {
//                       i.show();
//                       x.hide();
//                     }
  
//                     break;
  
//                   case 'checkbox':
//                   case 'radio':
//                     i.attr('checked', i.attr('defaultValue'));
//                     break;
  
//                   case 'text':
//                   case 'textarea':
//                     i.val(i.attr('defaultValue'));
  
//                     if (i.val() == '') {
//                       i.addClass('polyfill-placeholder');
//                       i.val(i.attr('placeholder'));
//                     }
  
//                     break;
  
//                   default:
//                     i.val(i.attr('defaultValue'));
//                     break;
  
//                 }
//               });
  
//           });
  
//       return $this;
  
//     };
  
//     /**
//      * Moves elements to/from the first positions of their respective parents.
//      * @param {jQuery} $elements Elements (or selector) to move.
//      * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
//      */
//     $.prioritize = function($elements, condition) {
  
//       var key = '__prioritize';
  
//       // Expand $elements if it's not already a jQuery object.
//         if (typeof $elements != 'jQuery')
//           $elements = $($elements);
  
//       // Step through elements.
//         $elements.each(function() {
  
//           var	$e = $(this), $p,
//             $parent = $e.parent();
  
//           // No parent? Bail.
//             if ($parent.length == 0)
//               return;
  
//           // Not moved? Move it.
//             if (!$e.data(key)) {
  
//               // Condition is false? Bail.
//                 if (!condition)
//                   return;
  
//               // Get placeholder (which will serve as our point of reference for when this element needs to move back).
//                 $p = $e.prev();
  
//                 // Couldn't find anything? Means this element's already at the top, so bail.
//                   if ($p.length == 0)
//                     return;
  
//               // Move element to top of parent.
//                 $e.prependTo($parent);
  
//               // Mark element as moved.
//                 $e.data(key, $p);
  
//             }
  
//           // Moved already?
//             else {
  
//               // Condition is true? Bail.
//                 if (condition)
//                   return;
  
//               $p = $e.data(key);
  
//               // Move element back to its original location (using our placeholder).
//                 $e.insertAfter($p);
  
//               // Unmark element as moved.
//                 $e.removeData(key);
  
//             }
  
//         });
  
//     };
  
//   })(jQuery);

//   // --------------------------------------------------part 8--------------------------------------------------

//   /*
// 	Hyperspace by HTML5 UP
// 	html5up.net | @ajlkn
// 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
// */

// (function($) {

// 	var	$window = $(window),
// 		$body = $('body'),
// 		$sidebar = $('#sidebar');

// 	// Breakpoints.
// 		breakpoints({
// 			xlarge:   [ '1281px',  '1680px' ],
// 			large:    [ '981px',   '1280px' ],
// 			medium:   [ '737px',   '980px'  ],
// 			small:    [ '481px',   '736px'  ],
// 			xsmall:   [ null,      '480px'  ]
// 		});

// 	// Hack: Enable IE flexbox workarounds.
// 		if (browser.name == 'ie')
// 			$body.addClass('is-ie');

// 	// Play initial animations on page load.
// 		$window.on('load', function() {
// 			window.setTimeout(function() {
// 				$body.removeClass('is-preload');
// 			}, 100);
// 		});

// 	// Forms.

// 		// Hack: Activate non-input submits.
// 			$('form').on('click', '.submit', function(event) {

// 				// Stop propagation, default.
// 					event.stopPropagation();
// 					event.preventDefault();

// 				// Submit form.
// 					$(this).parents('form').submit();

// 			});

// 	// Sidebar.
// 		if ($sidebar.length > 0) {

// 			var $sidebar_a = $sidebar.find('a');

// 			$sidebar_a
// 				.addClass('scrolly')
// 				.on('click', function() {

// 					var $this = $(this);

// 					// External link? Bail.
// 						if ($this.attr('href').charAt(0) != '#')
// 							return;

// 					// Deactivate all links.
// 						$sidebar_a.removeClass('active');

// 					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
// 						$this
// 							.addClass('active')
// 							.addClass('active-locked');

// 				})
// 				.each(function() {

// 					var	$this = $(this),
// 						id = $this.attr('href'),
// 						$section = $(id);

// 					// No section for this link? Bail.
// 						if ($section.length < 1)
// 							return;

// 					// Scrollex.
// 						$section.scrollex({
// 							mode: 'middle',
// 							top: '-20vh',
// 							bottom: '-20vh',
// 							initialize: function() {

// 								// Deactivate section.
// 									$section.addClass('inactive');

// 							},
// 							enter: function() {

// 								// Activate section.
// 									$section.removeClass('inactive');

// 								// No locked links? Deactivate all links and activate this section's one.
// 									if ($sidebar_a.filter('.active-locked').length == 0) {

// 										$sidebar_a.removeClass('active');
// 										$this.addClass('active');

// 									}

// 								// Otherwise, if this section's link is the one that's locked, unlock it.
// 									else if ($this.hasClass('active-locked'))
// 										$this.removeClass('active-locked');

// 							}
// 						});

// 				});

// 		}

// 	// Scrolly.
// 		$('.scrolly').scrolly({
// 			speed: 1000,
// 			offset: function() {

// 				// If <=large, >small, and sidebar is present, use its height as the offset.
// 					if (breakpoints.active('<=large')
// 					&&	!breakpoints.active('<=small')
// 					&&	$sidebar.length > 0)
// 						return $sidebar.height();

// 				return 0;

// 			}
// 		});

// 	// Spotlights.
// 		$('.spotlights > section')
// 			.scrollex({
// 				mode: 'middle',
// 				top: '-10vh',
// 				bottom: '-10vh',
// 				initialize: function() {

// 					// Deactivate section.
// 						$(this).addClass('inactive');

// 				},
// 				enter: function() {

// 					// Activate section.
// 						$(this).removeClass('inactive');

// 				}
// 			})
// 			.each(function() {

// 				var	$this = $(this),
// 					$image = $this.find('.image'),
// 					$img = $image.find('img'),
// 					x;

// 				// Assign image.
// 					$image.css('background-image', 'url(' + $img.attr('src') + ')');

// 				// Set background position.
// 					if (x = $img.data('position'))
// 						$image.css('background-position', x);

// 				// Hide <img>.
// 					$img.hide();

// 			});

// 	// Features.
// 		$('.features')
// 			.scrollex({
// 				mode: 'middle',
// 				top: '-20vh',
// 				bottom: '-20vh',
// 				initialize: function() {

// 					// Deactivate section.
// 						$(this).addClass('inactive');

// 				},
// 				enter: function() {

// 					// Activate section.
// 						$(this).removeClass('inactive');

// 				}
// 			});

// })(jQuery);

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  // function navbarAnimation() {
  //   gsap.to("#nav-part1 img", {
  //     transform: "translateY(-100%)",
  //     scrollTrigger: {
  //       trigger: "#page1",
  //       scroller: "#main",
  //       start: "top 0",
  //       end: "top -5%",
  //       scrub: true,
  //     },
  //   });
  //   gsap.to("#nav-part2 #links", {
  //     transform: "translateY(-100%)",
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: "#page1",
  //       scroller: "#main",
  //       start: "top 0",
  //       end: "top -5%",
  //       scrub: true,
  //     },
  //   });
  // }
  // navbarAnimation()

  function toggleAnimation() {
    const toggleBtn = document.querySelector('.togglebtn')
    const toggleBtnIcon = document.querySelector('.togglebtn i')
    const dropDownMenu = document.querySelector('.dropdownmenu')

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle("open")
    }
  }
  toggleAnimation()

  function sliderAnimation() {
    const btns=document.querySelectorAll(".nav-btn");
        const slides=document.querySelectorAll(".video-slide");
        const contents=document.querySelectorAll(".content");


        var sliderNav =function(manual){
          btns.forEach((btn)=> {
          btn.classList.remove("active");
        });

        slides.forEach((slide)=> {
          slide.classList.remove("active");
        });
        contents.forEach((content)=> {
          content.classList.remove("active");
        });

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
      }

        btns.forEach((btn,i)=>{
          btn.addEventListener("click",()=> {
            sliderNav(i);
          });
        });
  }
  sliderAnimation()
  
  function page2Animation() {
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let carousel = document.querySelector('.carousel');
    let listHTML = document.querySelector('.carousel .list');
    let seeMoreButtons = document.querySelectorAll('.seeMore');
    let backButton = document.getElementById('back');

    nextButton.onclick = function(){
        showSlider('next');
    }
    prevButton.onclick = function(){
        showSlider('prev');
    }
    let unAcceppClick;
    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';
    
        carousel.classList.remove('next', 'prev');
        let items = document.querySelectorAll('.carousel .list .item');
        if(type === 'next'){
            listHTML.appendChild(items[0]);
            carousel.classList.add('next');
        }else{
            listHTML.prepend(items[items.length - 1]);
            carousel.classList.add('prev');
        }
        clearTimeout(unAcceppClick);
        unAcceppClick = setTimeout(()=>{
            nextButton.style.pointerEvents = 'auto';
            prevButton.style.pointerEvents = 'auto';
        }, 2000)
    }
    seeMoreButtons.forEach((button) => {
        button.onclick = function(){
            carousel.classList.remove('next', 'prev');
            carousel.classList.add('showDetail');
        }
    });
    backButton.onclick = function(){
        carousel.classList.remove('showDetail');
    }    
  }
  page2Animation()

  // --------------------------------------------------part7---------------------------------------------------
  
  (function($) {

    /**
     * Generate an indented list of links from a nav. Meant for use with panel().
     * @return {jQuery} jQuery object.
     */
    $.fn.navList = function() {
  
      var	$this = $(this);
        $a = $this.find('a'),
        b = [];
  
      $a.each(function() {
  
        var	$this = $(this),
          indent = Math.max(0, $this.parents('li').length - 1),
          href = $this.attr('href'),
          target = $this.attr('target');
  
        b.push(
          '<a ' +
            'class="link depth-' + indent + '"' +
            ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
            ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
          '>' +
            '<span class="indent-' + indent + '"></span>' +
            $this.text() +
          '</a>'
        );
  
      });
  
      return b.join('');
  
    };
  
    /**
     * Panel-ify an element.
     * @param {object} userConfig User config.
     * @return {jQuery} jQuery object.
     */
    $.fn.panel = function(userConfig) {
  
      // No elements?
        if (this.length == 0)
          return $this;
  
      // Multiple elements?
        if (this.length > 1) {
  
          for (var i=0; i < this.length; i++)
            $(this[i]).panel(userConfig);
  
          return $this;
  
        }
  
      // Vars.
        var	$this = $(this),
          $body = $('body'),
          $window = $(window),
          id = $this.attr('id'),
          config;
  
      // Config.
        config = $.extend({
  
          // Delay.
            delay: 0,
  
          // Hide panel on link click.
            hideOnClick: false,
  
          // Hide panel on escape keypress.
            hideOnEscape: false,
  
          // Hide panel on swipe.
            hideOnSwipe: false,
  
          // Reset scroll position on hide.
            resetScroll: false,
  
          // Reset forms on hide.
            resetForms: false,
  
          // Side of viewport the panel will appear.
            side: null,
  
          // Target element for "class".
            target: $this,
  
          // Class to toggle.
            visibleClass: 'visible'
  
        }, userConfig);
  
        // Expand "target" if it's not a jQuery object already.
          if (typeof config.target != 'jQuery')
            config.target = $(config.target);
  
      // Panel.
  
        // Methods.
          $this._hide = function(event) {
  
            // Already hidden? Bail.
              if (!config.target.hasClass(config.visibleClass))
                return;
  
            // If an event was provided, cancel it.
              if (event) {
  
                event.preventDefault();
                event.stopPropagation();
  
              }
  
            // Hide.
              config.target.removeClass(config.visibleClass);
  
            // Post-hide stuff.
              window.setTimeout(function() {
  
                // Reset scroll position.
                  if (config.resetScroll)
                    $this.scrollTop(0);
  
                // Reset forms.
                  if (config.resetForms)
                    $this.find('form').each(function() {
                      this.reset();
                    });
  
              }, config.delay);
  
          };
  
        // Vendor fixes.
          $this
            .css('-ms-overflow-style', '-ms-autohiding-scrollbar')
            .css('-webkit-overflow-scrolling', 'touch');
  
        // Hide on click.
          if (config.hideOnClick) {
  
            $this.find('a')
              .css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  
            $this
              .on('click', 'a', function(event) {
  
                var $a = $(this),
                  href = $a.attr('href'),
                  target = $a.attr('target');
  
                if (!href || href == '#' || href == '' || href == '#' + id)
                  return;
  
                // Cancel original event.
                  event.preventDefault();
                  event.stopPropagation();
  
                // Hide panel.
                  $this._hide();
  
                // Redirect to href.
                  window.setTimeout(function() {
  
                    if (target == '_blank')
                      window.open(href);
                    else
                      window.location.href = href;
  
                  }, config.delay + 10);
  
              });
  
          }
  
        // Event: Touch stuff.
          $this.on('touchstart', function(event) {
  
            $this.touchPosX = event.originalEvent.touches[0].pageX;
            $this.touchPosY = event.originalEvent.touches[0].pageY;
  
          })
  
          $this.on('touchmove', function(event) {
  
            if ($this.touchPosX === null
            ||	$this.touchPosY === null)
              return;
  
            var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
              diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
              th = $this.outerHeight(),
              ts = ($this.get(0).scrollHeight - $this.scrollTop());
  
            // Hide on swipe?
              if (config.hideOnSwipe) {
  
                var result = false,
                  boundary = 20,
                  delta = 50;
  
                switch (config.side) {
  
                  case 'left':
                    result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
                    break;
  
                  case 'right':
                    result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
                    break;
  
                  case 'top':
                    result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
                    break;
  
                  case 'bottom':
                    result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
                    break;
  
                  default:
                    break;
  
                }
  
                if (result) {
  
                  $this.touchPosX = null;
                  $this.touchPosY = null;
                  $this._hide();
  
                  return false;
  
                }
  
              }
  
            // Prevent vertical scrolling past the top or bottom.
              if (($this.scrollTop() < 0 && diffY < 0)
              || (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {
  
                event.preventDefault();
                event.stopPropagation();
  
              }
  
          });
  
        // Event: Prevent certain events inside the panel from bubbling.
          $this.on('click touchend touchstart touchmove', function(event) {
            event.stopPropagation();
          });
  
        // Event: Hide panel if a child anchor tag pointing to its ID is clicked.
          $this.on('click', 'a[href="#' + id + '"]', function(event) {
  
            event.preventDefault();
            event.stopPropagation();
  
            config.target.removeClass(config.visibleClass);
  
          });
  
      // Body.
  
        // Event: Hide panel on body click/tap.
          $body.on('click touchend', function(event) {
            $this._hide(event);
          });
  
        // Event: Toggle.
          $body.on('click', 'a[href="#' + id + '"]', function(event) {
  
            event.preventDefault();
            event.stopPropagation();
  
            config.target.toggleClass(config.visibleClass);
  
          });
  
      // Window.
  
        // Event: Hide on ESC.
          if (config.hideOnEscape)
            $window.on('keydown', function(event) {
  
              if (event.keyCode == 27)
                $this._hide(event);
  
            });
  
      return $this;
  
    };
  
    /**
     * Apply "placeholder" attribute polyfill to one or more forms.
     * @return {jQuery} jQuery object.
     */
    $.fn.placeholder = function() {
  
      // Browser natively supports placeholders? Bail.
        if (typeof (document.createElement('input')).placeholder != 'undefined')
          return $(this);
  
      // No elements?
        if (this.length == 0)
          return $this;
  
      // Multiple elements?
        if (this.length > 1) {
  
          for (var i=0; i < this.length; i++)
            $(this[i]).placeholder();
  
          return $this;
  
        }
  
      // Vars.
        var $this = $(this);
  
      // Text, TextArea.
        $this.find('input[type=text],textarea')
          .each(function() {
  
            var i = $(this);
  
            if (i.val() == ''
            ||  i.val() == i.attr('placeholder'))
              i
                .addClass('polyfill-placeholder')
                .val(i.attr('placeholder'));
  
          })
          .on('blur', function() {
  
            var i = $(this);
  
            if (i.attr('name').match(/-polyfill-field$/))
              return;
  
            if (i.val() == '')
              i
                .addClass('polyfill-placeholder')
                .val(i.attr('placeholder'));
  
          })
          .on('focus', function() {
  
            var i = $(this);
  
            if (i.attr('name').match(/-polyfill-field$/))
              return;
  
            if (i.val() == i.attr('placeholder'))
              i
                .removeClass('polyfill-placeholder')
                .val('');
  
          });
  
      // Password.
        $this.find('input[type=password]')
          .each(function() {
  
            var i = $(this);
            var x = $(
                  $('<div>')
                    .append(i.clone())
                    .remove()
                    .html()
                    .replace(/type="password"/i, 'type="text"')
                    .replace(/type=password/i, 'type=text')
            );
  
            if (i.attr('id') != '')
              x.attr('id', i.attr('id') + '-polyfill-field');
  
            if (i.attr('name') != '')
              x.attr('name', i.attr('name') + '-polyfill-field');
  
            x.addClass('polyfill-placeholder')
              .val(x.attr('placeholder')).insertAfter(i);
  
            if (i.val() == '')
              i.hide();
            else
              x.hide();
  
            i
              .on('blur', function(event) {
  
                event.preventDefault();
  
                var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
  
                if (i.val() == '') {
  
                  i.hide();
                  x.show();
  
                }
  
              });
  
            x
              .on('focus', function(event) {
  
                event.preventDefault();
  
                var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');
  
                x.hide();
  
                i
                  .show()
                  .focus();
  
              })
              .on('keypress', function(event) {
  
                event.preventDefault();
                x.val('');
  
              });
  
          });
  
      // Events.
        $this
          .on('submit', function() {
  
            $this.find('input[type=text],input[type=password],textarea')
              .each(function(event) {
  
                var i = $(this);
  
                if (i.attr('name').match(/-polyfill-field$/))
                  i.attr('name', '');
  
                if (i.val() == i.attr('placeholder')) {
  
                  i.removeClass('polyfill-placeholder');
                  i.val('');
  
                }
  
              });
  
          })
          .on('reset', function(event) {
  
            event.preventDefault();
  
            $this.find('select')
              .val($('option:first').val());
  
            $this.find('input,textarea')
              .each(function() {
  
                var i = $(this),
                  x;
  
                i.removeClass('polyfill-placeholder');
  
                switch (this.type) {
  
                  case 'submit':
                  case 'reset':
                    break;
  
                  case 'password':
                    i.val(i.attr('defaultValue'));
  
                    x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');
  
                    if (i.val() == '') {
                      i.hide();
                      x.show();
                    }
                    else {
                      i.show();
                      x.hide();
                    }
  
                    break;
  
                  case 'checkbox':
                  case 'radio':
                    i.attr('checked', i.attr('defaultValue'));
                    break;
  
                  case 'text':
                  case 'textarea':
                    i.val(i.attr('defaultValue'));
  
                    if (i.val() == '') {
                      i.addClass('polyfill-placeholder');
                      i.val(i.attr('placeholder'));
                    }
  
                    break;
  
                  default:
                    i.val(i.attr('defaultValue'));
                    break;
  
                }
              });
  
          });
  
      return $this;
  
    };
  
    /**
     * Moves elements to/from the first positions of their respective parents.
     * @param {jQuery} $elements Elements (or selector) to move.
     * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
     */
    $.prioritize = function($elements, condition) {
  
      var key = '__prioritize';
  
      // Expand $elements if it's not already a jQuery object.
        if (typeof $elements != 'jQuery')
          $elements = $($elements);
  
      // Step through elements.
        $elements.each(function() {
  
          var	$e = $(this), $p,
            $parent = $e.parent();
  
          // No parent? Bail.
            if ($parent.length == 0)
              return;
  
          // Not moved? Move it.
            if (!$e.data(key)) {
  
              // Condition is false? Bail.
                if (!condition)
                  return;
  
              // Get placeholder (which will serve as our point of reference for when this element needs to move back).
                $p = $e.prev();
  
                // Couldn't find anything? Means this element's already at the top, so bail.
                  if ($p.length == 0)
                    return;
  
              // Move element to top of parent.
                $e.prependTo($parent);
  
              // Mark element as moved.
                $e.data(key, $p);
  
            }
  
          // Moved already?
            else {
  
              // Condition is true? Bail.
                if (condition)
                  return;
  
              $p = $e.data(key);
  
              // Move element back to its original location (using our placeholder).
                $e.insertAfter($p);
  
              // Unmark element as moved.
                $e.removeData(key);
  
            }
  
        });
  
    };
  
  })(jQuery);

  // --------------------------------------------------part 8--------------------------------------------------

  /*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

})(jQuery);