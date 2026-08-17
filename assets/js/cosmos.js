(function () {
  'use strict';

  document.documentElement.classList.add('js');

  function activateTab(group, tab) {
    var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(group.querySelectorAll('[role="tabpanel"]'));
    var panelId = tab.getAttribute('aria-controls');

    tabs.forEach(function (item) {
      var active = item === tab;
      item.setAttribute('aria-selected', active ? 'true' : 'false');
      item.setAttribute('tabindex', active ? '0' : '-1');
    });

    panels.forEach(function (panel) {
      var active = panel.id === panelId;
      panel.hidden = !active;
      if (active) {
        var frame = panel.querySelector('iframe[data-src]');
        if (frame && !frame.getAttribute('src')) {
          frame.setAttribute('src', frame.getAttribute('data-src'));
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-tabs]'), function (group) {
      var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'));

      tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
          activateTab(group, tab);
        });

        tab.addEventListener('keydown', function (event) {
          var nextIndex = null;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
          if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
          if (event.key === 'Home') nextIndex = 0;
          if (event.key === 'End') nextIndex = tabs.length - 1;
          if (nextIndex !== null) {
            event.preventDefault();
            tabs[nextIndex].focus();
            activateTab(group, tabs[nextIndex]);
          }
        });
      });

      Array.prototype.forEach.call(group.querySelectorAll('[data-open-tab]'), function (trigger) {
        trigger.addEventListener('click', function () {
          var target = document.getElementById(trigger.getAttribute('data-open-tab'));
          if (target) {
            activateTab(group, target);
            target.focus();
            group.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-print-cv]'), function (button) {
      button.addEventListener('click', function () { window.print(); });
    });

    var revealItems = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      Array.prototype.forEach.call(revealItems, function (item) { observer.observe(item); });
    } else {
      Array.prototype.forEach.call(revealItems, function (item) { item.classList.add('is-visible'); });
    }
  });
}());
