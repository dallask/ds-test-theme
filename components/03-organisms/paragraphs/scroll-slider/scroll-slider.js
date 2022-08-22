(function ($, Drupal) {
  Drupal.behaviors.scrollSlider = {
    attach: function (context) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);
      $('.scroll--slider--slide', context).
        once('scrollSlider').
        each((i, slide) => {
          let $slide = $(slide);
          this.initSectionAnimation($slide);
          ScrollTrigger.create({
            trigger: $slide,
            start: 'top bottom',
            onEnter: () => this.goToSection(slide),
          });
        });
    },
    goToSection: function (el) {
      let topOffset = parseInt($('body').css('padding-top')) || 0;
      gsap.to(window, {
        scrollTo: {
          y: $(el).offset().top - topOffset,
          autoKill: false,
          ease: 'Power3.easeInOut',
        },
        duration: 1,
      });
    },

    initSectionAnimation: function ($section) {
      let effects = $section.data('scroll-slider-slide-effects');
      if ($('.scroll--slider--effect', $section).length
        || typeof effects !== 'undefined') {
        let settings = {};
        let slideSettings = $section.data('scroll-slider-slide-settings');
        if (typeof slideSettings !== 'undefined') {
          settings = $section.data('scroll-slider-slide-settings');
        }

        let sAn = gsap.timeline();
        this.initItemAnimation(sAn, $section);
        let dSettings = {
          animation: sAn,
          trigger: $section,
          pin: true,
          scrub: true,
          start: 'top top',
          toggleAction: 'restart pause reverse none',
        };
        ScrollTrigger.create({ ...dSettings, ...settings });
      }
    },

    initItemAnimation: function (sAn, $section) {
      let sEffects = [];
      let attrEffects = $section.data('scroll-slider-slide-effects');
      if (typeof attrEffects !== 'undefined') {
        let iEffects = $section.data('scroll-slider-slide-effects');
        for (let effect of iEffects) {
          $(effect.item, $section).each(function () {
            effect['item'] = this;
            sEffects.push(effect);
          });
        }
      }
      $('.scroll-slider-item-effects', $section).each((i, el) => {
        if (typeof $(el).data('scroll-slider-item-effects') == 'undefined') {
          return;
        }
        let iEffects = $(el).data('scroll-slider-item-effects');
        for (let effect of iEffects) {
          effect['item'] = el;
          sEffects.push(effect);
        }
      });
      sEffects.sort((a, b) => (a.order > b.order) ? 1 : -1);
      let tween = {};
      for (let effect of sEffects) {
        if (typeof tween[effect.order] == 'undefined') {
          tween[effect.order] = [];
        }
        tween[effect.order].push(effect);
      }

      for (const index in tween) {
        if (tween[index].length > 1) {
          let tAn = gsap.timeline();
          for (let effect of tween[index]) {
            this.addEffect(tAn, effect);
          }
          sAn.add(tAn);
        }
        else {
          let tAn = gsap.timeline();
          this.addEffect(tAn, tween[index][0]);
          sAn.add(tAn);
        }
      }
    },

    addEffect: function (tl, effect) {
      switch (effect.action) {
        case 'to':
          tl.to(effect.item, effect.to, '<');
          break;

        case 'from':
          tl.from(effect.item, effect.from, '<');
          break;

        case 'fromTo':
          tl.fromTo(effect.item, effect.from, effect.to, '<');
          break;
      }
    },
  };
})(jQuery, Drupal);
