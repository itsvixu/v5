/* ============================================================
   VIXU v3 — main.js. No libraries, no build step.
   1. Lens      ?lens=craft (default) or ?lens=lead reorders the site
   2. Review    ?review=1 marks every claim still to confirm (?review=0 off)
   3. Analytics GoatCounter with ?ref=<application>, ?notrack=1 to exclude yourself
   4. Case pages: section index, contact handover
   The lens and review attributes are set by the small inline script
   at the top of each page so nothing flashes. This file does the rest.
   ============================================================ */
(function () {
  'use strict';

  var GOATCOUNTER_CODE = 'vixu'; // EDIT HERE: your GoatCounter site code

  var body = document.body;
  var lens = body.getAttribute('data-lens') || 'craft';

  function safeStorage(kind) {
    try { var s = window[kind]; s.setItem('__vixu', '1'); s.removeItem('__vixu'); return s; }
    catch (err) { return null; }
  }
  function readParam(name) {
    try { return new URLSearchParams(window.location.search).get(name); }
    catch (err) { return null; }
  }

  /* ---------- 1. Lens: put the work list in the order this reader needs ---------- */
  function orderWork() {
    var list = document.querySelector('[data-orderable]');
    if (!list) return;
    var attr = lens === 'lead' ? 'data-lead' : 'data-craft';
    var items = Array.prototype.slice.call(list.children);
    items.sort(function (a, b) { return Number(a.getAttribute(attr)) - Number(b.getAttribute(attr)); });
    items.forEach(function (li, i) {
      li.classList.toggle('lead-row', i === 0);
      list.appendChild(li);
    });
  }

  /* ---------- 2. Review mode ---------- */
  function initReview() {
    if (!body.hasAttribute('data-review')) return;
    var bar = document.querySelector('.review-bar');
    if (!bar) return;
    var n = document.querySelectorAll('.cf').length;
    var slots = document.querySelectorAll('.slot .hole').length;
    bar.textContent = 'Review mode. On this page: ' + n + ' claim' + (n === 1 ? '' : 's') +
      ' to confirm, ' + slots + ' image' + (slots === 1 ? '' : 's') + ' to add. ';
    var off = document.createElement('a');
    off.href = window.location.pathname + '?review=0';
    off.textContent = 'Turn off';
    bar.appendChild(off);
  }

  /* ---------- 3. Analytics (same scheme as v2) ----------
     Events:  app/<ref>  case/<slug>  cta/full-case/<slug>  cta/email
     With a ref, each event is also logged as app/<ref>/<event>.     */
  var analyticsEnabled = false, analyticsReady = false, analyticsQueue = [], appRef = null;

  function cleanRef(raw) {
    if (!raw) return null;
    var v = String(raw).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
    return v || null;
  }
  function trackingOptedOut() {
    var local = safeStorage('localStorage');
    if (!local) return false;
    var flag = readParam('notrack');
    try {
      if (flag === '1') local.setItem('vixu-notrack', '1');
      if (flag === '0') local.removeItem('vixu-notrack');
      return local.getItem('vixu-notrack') === '1';
    } catch (err) { return false; }
  }
  function isLocal() {
    var h = window.location.hostname;
    return window.location.protocol === 'file:' || h === 'localhost' || h === '127.0.0.1' || h === '';
  }
  function sendCount(vars) {
    if (analyticsReady && window.goatcounter && typeof window.goatcounter.count === 'function') {
      try { window.goatcounter.count(vars); } catch (err) { /* never break the page */ }
    } else { analyticsQueue.push(vars); }
  }
  function trackEvent(name, label) {
    if (!analyticsEnabled) return;
    sendCount({ path: name, title: label, event: true });
    if (appRef) sendCount({ path: 'app/' + appRef + '/' + name, title: label + ' (' + appRef + ')', event: true });
  }
  function initAnalytics() {
    if (!GOATCOUNTER_CODE || isLocal() || trackingOptedOut()) return;
    analyticsEnabled = true;
    var session = safeStorage('sessionStorage');
    var urlRef = cleanRef(readParam('ref'));
    var firstOpen = false;
    try {
      if (urlRef) {
        firstOpen = !session || session.getItem('vixu-ref') !== urlRef;
        if (session) session.setItem('vixu-ref', urlRef);
        appRef = urlRef;
      } else if (session) { appRef = cleanRef(session.getItem('vixu-ref')); }
    } catch (err) { appRef = urlRef; }

    window.goatcounter = window.goatcounter || {};
    window.goatcounter.no_onload = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
    script.onload = function () {
      analyticsReady = true;
      var pending = analyticsQueue; analyticsQueue = [];
      pending.forEach(sendCount);
    };
    document.head.appendChild(script);

    sendCount({
      path: window.location.pathname || '/',
      title: document.title,
      referrer: appRef ? 'application: ' + appRef : null
    });
    if (urlRef && firstOpen) {
      sendCount({ path: 'app/' + urlRef, title: 'Application link opened (' + urlRef + ')', event: true });
    }
    sendCount({ path: 'lens/' + lens, title: 'Lens: ' + lens, event: true });

    var slug = body.getAttribute('data-case');
    if (slug) trackEvent('case/' + slug, 'Case study opened: ' + slug);

    document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
      a.addEventListener('click', function () { trackEvent('cta/email', 'Email link clicked'); });
    });
    document.querySelectorAll('a[data-full-case]').forEach(function (a) {
      a.addEventListener('click', function () {
        trackEvent('cta/full-case/' + a.getAttribute('data-full-case'), 'Full case study requested');
      });
    });
  }

  /* ---------- 4a. Section index on case pages ---------- */
  function initToc() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
    if (!links.length || !('IntersectionObserver' in window)) return;
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = byId[entry.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  /* ---------- 4b. Contact page: say what the visitor came for ---------- */
  function contextualiseContact() {
    var caseTitle = readParam('case');
    if (!caseTitle) return;
    caseTitle = caseTitle.replace(/\s+/g, ' ').trim().slice(0, 120);
    var list = document.querySelector('.contact-list');
    var mail = document.querySelector('.contact-list a[href^="mailto:"]');
    if (!caseTitle || !list || !mail) return;
    var address = mail.getAttribute('href').split('?')[0];
    mail.setAttribute('href', address + '?subject=' + encodeURIComponent('Full case study request: ' + caseTitle));
    var p = document.createElement('p');
    p.className = 'contact-context';
    p.appendChild(document.createTextNode('Asking for the full '));
    var strong = document.createElement('strong');
    strong.textContent = caseTitle;
    p.appendChild(strong);
    p.appendChild(document.createTextNode(' case study? Email is quickest. The subject line is filled in for you.'));
    list.parentNode.insertBefore(p, list);
  }

  /* ---------- 5. Motion (all of it off under prefers-reduced-motion) ---------- */
  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function initProgress() {
    var bar = document.querySelector('.progress');
    if (!bar || reduce) return;
    var ticking = false;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  function countUp(el) {
    var txt = el.getAttribute('data-final') || el.textContent, m = txt.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!m || reduce) return;
    var pre = m[1], end = parseFloat(m[2]), suf = m[3], dec = (m[2].split('.')[1] || '').length;
    el.setAttribute('aria-label', txt);
    var t0 = null, dur = 1500;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (end * e).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step); else el.textContent = txt;
    }
    requestAnimationFrame(step);
  }

  function initReveal() {
    var sel = '.case-main > section, .case-main > figure, .case-main .decision, .case-main .miss, .case-main .slot, .case-main table, .snapshot';
    Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) { el.classList.add('reveal'); });
    Array.prototype.forEach.call(document.querySelectorAll('.work li'), function (li, i) { li.classList.add('reveal'); li.style.setProperty('--i', String(i % 3)); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-stagger]'), function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) { c.style.setProperty('--i', String(i % 5)); });
    });
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || reduce) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });

    /* count the figures up when the figure itself is properly on screen (not when its card first peeks in) */
    var figs = document.querySelectorAll('.fig .n');
    Array.prototype.forEach.call(figs, function (n) {
      var m = n.textContent.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      n.setAttribute('aria-label', n.textContent); n.setAttribute('data-final', n.textContent);
      n.textContent = m[1] + (0).toFixed((m[2].split('.')[1] || '').length) + m[3];
    });
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        fio.unobserve(en.target);
        countUp(en.target);
      });
    }, { threshold: 1, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(figs, function (n) { fio.observe(n); });
  }

  function initParallax() {
    var p = document.querySelector('.portrait');
    if (!p || reduce) return;
    var ticking = false;
    function update() {
      var y = Math.min(window.scrollY, 700);
      p.style.transform = 'translateY(' + (y * -0.06).toFixed(1) + 'px)';
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  }

  function initQuotes() {
    var list = document.querySelector('.quotes');
    if (!list) return;
    Array.prototype.forEach.call(document.querySelectorAll('.arrow'), function (b) {
      b.addEventListener('click', function () {
        var step = list.querySelector('.quote').getBoundingClientRect().width + 18;
        list.scrollBy({ left: Number(b.getAttribute('data-dir')) * step, behavior: reduce ? 'auto' : 'smooth' });
      });
    });
  }

  orderWork();
  initReview();
  initReveal();
  initProgress();
  initParallax();
  initQuotes();
  initToc();
  contextualiseContact();
  initAnalytics();
})();
