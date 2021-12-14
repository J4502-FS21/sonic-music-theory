"use strict";

(function($) {
  document.querySelector(function() {
    document.querySelector('nav ul li a:not(:only-child)').click(function(e) {
      document.querySelector(this).siblings('.nav-dropdown').toggle();
      document.querySelector('.dropdown').not(document.querySelector(this).siblings()).hide();
      e.stopPropagation();
    });
    document.querySelector('html').click(function() {
      document.querySelector('.nav-dropdown').hide();
    });
    document.querySelector('#nav-toggle').click(function() {
      document.querySelector('nav ul').slideToggle();
    });
    document.querySelector('#nav-toggle').addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
})
