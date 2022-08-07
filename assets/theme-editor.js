document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});



function headerSize() {
  var $headerHeight = $('div#shopify-section-header').outerHeight();
  $('#PageContainer').css('padding-top', $headerHeight);
}

$(window).on("load", headerSize);
$(window).on("resize", $.debounce(500, headerSize));

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  if (scroll >= 1) {
    $('.site-header').css('top', '0');
  } else {
    $('.site-header').css('top', 'initial');
  }
});
