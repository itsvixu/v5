/* v5 proof of concept: three scroll-driven moments. Plain JS, no libraries. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* 1. Hero: icons orbit the head, driven by scroll */
  (function () {
    var o = document.querySelector('.orbit');
    if (!o) return;
    var icons = Array.prototype.slice.call(o.querySelectorAll('.oi'));
    var n = icons.length, small = window.matchMedia('(max-width: 899px)').matches, k = small ? 0.6 : 0.3;
    var cur = window.scrollY * k, running = false, start = performance.now(), INTRO = 3200;
    /* phones: keep every icon inside the headshot column, so wide icons orbit on a tighter ring */
    var rad = [];
    function measure() {
      var cw = o.clientWidth || 1;
      icons.forEach(function (el, i) {
        rad[i] = window.matchMedia('(max-width: 899px)').matches ? Math.max(50 - (el.offsetWidth / 2 * 1.05) / cw * 100, 6) : 50;
      });
    }
    measure();
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    function place(spin) {
      icons.forEach(function (el, i) {
        var a = (i * 360 / n - 90 + spin) * Math.PI / 180, s = Math.sin(a), c = Math.cos(a), d = (s + 1) / 2;
        el.style.left = (50 + rad[i] * c) + '%';
        el.style.top = (15 + 10 * s) + '%';
        el.style.transform = 'translate(-50%,-50%) scale(' + (0.8 + 0.25 * d).toFixed(3) + ')';
        el.style.zIndex = s > 0 ? 3 : 0;
        el.style.opacity = (0.7 + 0.3 * d).toFixed(2);
        el.style.filter = s < 0 ? 'blur(' + (-s * 2).toFixed(1) + 'px)' : 'none';
      });
    }
    if (reduce) { place(0); return; }
    function frame(now) {
      /* one full lap on load (ease in-out), then scroll takes over */
      var t = clamp((now - start) / INTRO, 0, 1), e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      var tgt = window.scrollY * k;
      cur += (tgt - cur) * 0.12;
      place(cur - (1 - e) * 400);
      if (t < 1 || Math.abs(tgt - cur) > 0.05) requestAnimationFrame(frame); else running = false;
    }
    function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    kick();
  })();

  /* 2. Tools: each card fades up into place as it scrolls into view */
  (function () {
    var ul = document.querySelector('.tools');
    if (!ul || reduce || !('IntersectionObserver' in window)) return;
    var tiles = Array.prototype.slice.call(ul.children);
    tiles.forEach(function (t) { t.classList.add('pre'); });
    var io = new IntersectionObserver(function (entries) {
      var k = 0;
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var t = en.target; io.unobserve(t);
        t.style.transitionDelay = (k++ * 70) + 'ms';
        t.classList.add('go'); t.classList.remove('pre');
        setTimeout(function () { t.classList.remove('go'); t.style.transitionDelay = ''; }, 1000 + k * 70);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
    tiles.forEach(function (t) { io.observe(t); });
  })();

  /* 3. Quotes: the first four build from grey to black as you scroll, then the page moves on */
  (function () {
    var sec = document.getElementById('said'), list = sec && sec.querySelector('.quotes');
    if (!list) return;
    var items = Array.prototype.slice.call(list.children), N = 4;
    if (items.length < N) return;
    var pinned = items.slice(0, N), rest = items.slice(N);

    /* the wall: clamp long quotes and let people expand them (runs with or without motion) */
    function buildWall(ul) {
      Array.prototype.forEach.call(ul.querySelectorAll('.quote'), function (li) {
        var p = li.querySelector('blockquote p'); if (!p) return;
        li.classList.add('clamp');
        var btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'more-btn'; btn.textContent = 'Read more'; btn.setAttribute('aria-expanded', 'false'); btn.hidden = true;
        li.appendChild(btn);
        btn.addEventListener('click', function () {
          var open = li.classList.toggle('open');
          btn.textContent = open ? 'Show less' : 'Read more'; btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        function check() { if (li.classList.contains('open')) return; btn.hidden = !(p.scrollHeight > p.clientHeight + 2); }
        check(); window.addEventListener('resize', check); window.addEventListener('load', check);
      });
    }

    if (reduce) { return; }

    var stage = document.createElement('div'), pin = document.createElement('div');
    stage.className = 'qstage'; pin.className = 'qpin';
    list.parentNode.insertBefore(stage, list); stage.appendChild(pin); pin.appendChild(list);
    var bar = document.createElement('div'); bar.className = 'qbarrow';
    bar.innerHTML = '<p class="qcount" aria-hidden="true"><span class="qn">1 of ' + N + '</span><span class="qbar"><i></i></span></p><a class="qskip" href="#all-recs">Skip to more recommendations</a>';
    pin.appendChild(bar);
    var more = document.createElement('ul'); more.className = 'quotes-more'; more.id = 'more-quotes'; more.tabIndex = -1;
    rest.forEach(function (li) { more.appendChild(li); });
    stage.parentNode.insertBefore(more, stage.nextSibling);
    sec.classList.add('qs-on');
    buildWall(more);

    var data = pinned.map(function (li) {
      var p = li.querySelector('blockquote p'), words = p.textContent.trim().split(/\s+/);
      p.textContent = '';
      var spans = words.map(function (w, i) { var s = document.createElement('span'); s.className = 'w'; s.textContent = w + (i < words.length - 1 ? ' ' : ''); p.appendChild(s); return s; });
      return { li: li, spans: spans, seg: clamp(0.42 + words.length * 0.007, 0.55, 0.8) };
    });
    var sum = data.reduce(function (a, d) { return a + d.seg; }, 0), cum = [], run = 0;
    data.forEach(function (d) { run += d.seg; cum.push(run / sum); });
    var pinEl = stage.querySelector('.qpin');
    function size() { var ph = pinEl ? pinEl.offsetHeight : window.innerHeight; stage.style.height = (sum * window.innerHeight + ph) + 'px'; }
    size();
    var qn = bar.querySelector('.qn'), fillEl = bar.querySelector('i'), ticking = false;
    function mix(v) { return 'rgb(' + Math.round(138 - 118 * v) + ',' + Math.round(150 - 114 * v) + ',' + Math.round(144 - 114 * v) + ')'; }
    function update() {
      ticking = false;
      var r = stage.getBoundingClientRect(), total = stage.offsetHeight - (pinEl ? pinEl.offsetHeight : window.innerHeight);
      var s = clamp(((pinEl ? parseFloat(getComputedStyle(pinEl).top) || 62 : 62) - r.top) / total, 0, 1), qi = 0;
      while (qi < N - 1 && s >= cum[qi]) qi++;
      var lo = qi ? cum[qi - 1] : 0, t = clamp((s - lo) / (cum[qi] - lo), 0, 1), fill = clamp(t / 0.8, 0, 1);
      data.forEach(function (d, i) {
        var on = i === qi; d.li.classList.toggle('on', on);
        if (on) { var m = d.spans.length; d.spans.forEach(function (sp, k) { sp.style.color = mix(clamp(fill * m - k, 0, 1)); }); }
      });
      qn.textContent = (qi + 1) + ' of ' + N; fillEl.style.width = (fill * 100).toFixed(0) + '%';
    }
    function kick() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', function () { size(); kick(); });
    update();
  })();
})();
