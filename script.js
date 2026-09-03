/* =========================================================================
   Dholi Taara 5.0 — interactions
   ========================================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------------- data */

  var TIERS = [
    { name: 'Presented By',  amt: '25 lacs' },
    { name: 'In Association', amt: '15 lacs' },
    { name: 'Powered By',    amt: '10 lacs' },
    { name: 'Co Powered By', amt: '8 lacs' },
    { name: 'Sponsored By',  amt: '5 lacs' },
    { name: 'Co Sponsor',    amt: '3 lacs' },
    { name: 'Partner',       amt: '1 lac' }
  ];

  var Y = 'Y', N = '-';
  var all = [Y, Y, Y, Y, Y, Y, Y];

  var TABLE_A = [
    ['Sponsorship Amount (in INR)', ['25 lacs', '15 lacs', '10 lacs', '8 lacs', '5 lacs', '3 lacs', '1 lac'], 'amt'],
    ['Logo placements on Creatives', ['Top Center', 'Center Middle', 'Middle Left', 'Middle Right', 'Top Bottom Right', 'Top Bottom Left', 'Bottom Centre']],
    ['Logo on Homepage of Website', ['Full Slide', 'Full Slide', 'Half Slide', 'Half Slide', 'Half Slide', 'Shared Slide', 'Shared Slide']],
    ['Video Playback on Stage Screen', ['2 Minutes All Days', '2 Minute All Days', '1 Minute on Final Day', '1 min Final Day', '1 min Final Day', '30 Seconds Final Day', N]],
    ['Lighting The Lamp & Aarti', ['Navmi & Dussehra', 'Ashtami', 'Saptami', 'Chatth', 'Panchami', 'Chaturti', 'Any one Day']],
    ['Video Playback on Side Screens', ['15 Times/Day', '10 Times/Day', '8 Times/Day', '6 Times/day', '4 times/day', '2 Times/Day', '2 Times/Day']],
    ['Prizes', all],
    ['Influencer Shoutouts', [Y, Y, N, N, N, N, N]],
    ['Checkered Box Selfie Point', ['Exclusive * 2', 'Exclusive', 'Shared', 'Shared', 'Shared', 'Shared', 'Shared']],
    ['Display Space', ['400 sqft', '250 sqft', '150 sqft', '100 sqft', '100 sqft', '100 sqft', N]],
    ['Radio Shoutout', [Y, Y, N, N, N, N, N]],
    ['Outdoor Hoarding', all],
    ['Entry Gate Branding', ['Center', 'Pillars Top', 'Pillar', 'Pillar', 'Pillar', 'Pillar', 'Pillar']],
    ['Artist Video Byte', all],
    ['Open Garba Branding', all],
    ['Viewers+Open Garba Passes', ['200+100', '100+50', '60+30', '50+20', '40+15', '30+10', '10+5']],
    ['Dedicated Viewers Zone', [Y, Y, 'Shared', 'Shared', 'Shared', 'Shared', 'Shared']],
    ['AAA ID Card', ['10', '6', '4', '4', '3', '3', '2']],
    ['Space for Dedicated Selfie Points', all],
    ['Brands Individual Reels', ['8', '5', '3', '2', '2', '1', '1']],
    ['Owner Interaction Video', [Y, Y, Y, Y, Y, Y, N]]
  ];

  var TABLE_B = [
    ['Final Prize Ceremony', all],
    ['Stage Backgrounds', all],
    ['Logo on Tickets', [Y, Y, Y, Y, Y, N, N]],
    ['Brand Products as Prizes', [Y, Y, Y, Y, Y, Y, N]],
    ['Inclusion in Event Thank you Speech', all],
    ['Opportunity to speak on Stage', ['Daily 2 Min', 'Any 3 Days 2 min', 'Final Day 2 Min', 'Final Day 2 Min', 'Final Day 2 Min', 'Final Day 2 Min', 'Final Day 2 Min']],
    ['Post Event Sponsor Feedback Recording', all],
    ['Dedicated Engagement Activity', [Y, Y, Y, Y, N, N, N]],
    ['Zone Naming Rights', [Y, Y, Y, N, N, N, N]],
    ['Entry Gate Naming Rights', [Y, Y, Y, N, N, N, N]],
    ['Trophy Branding', [Y, N, N, N, N, N, N]],
    ['Daily Activity Naming Rights', [Y, Y, Y, N, N, N, N]],
    ['Dedicated Sponsor Introduction Post', [Y, Y, Y, Y, N, N, N]],
    ['Sponsor Integration in Final Trailer & Movie', all],
    ['Product Sampling rights', all],
    ['Coupon Distribution Rights', [Y, Y, Y, Y, Y, N, N]],
    ['Lucky Draw Rights', [Y, N, N, N, N, N, N]],
    ['Spin the Wheels by Brands', [Y, N, N, N, N, N, N]],
    ['Photo Contest Sponsored by Brands', [Y, N, N, N, N, N, N]],
    ['Judges Desk Sponsor', [Y, Y, Y, N, N, N, N]],
    ['Product Placement on Stage', [Y, N, N, N, N, N, N]],
    ['Award Category Naming Rights', [Y, Y, Y, N, N, N, N]]
  ];

  var WHY = [
    { img: 'icon-location',    t: 'Central Location',        s: '(High Accessibility)<br>45 Days Continuous Visibility' },
    { img: 'icon-workshops',   t: '30 Days',                 s: 'Engagement Through<br>Workshops' },
    { img: 'icon-footfall',    t: '1,25,000 Footfall',       s: 'Youth + family<br>audience' },
    { img: 'icon-meta',        t: '5M+ Estimated',           s: 'Meta Ads<br>Reach' },
    { img: 'icon-venue',       t: '5-Star Venue Association', s: 'Structured<br>Theme Nights' },
    { img: 'icon-integration', t: '360° brand integration',  s: 'High Energy Festive<br>Experience' },
    { img: 'icon-reach',       t: '10M+ Combined Reach',     s: 'Influencer<br>Network' }
  ];

  var FOUNDERS = [
    { img: 'f1', n: 'Hitesh Chhajed',  r: 'Events by B3, Founder' },
    { img: 'f2', n: 'Dhruvam Sharma',  r: 'Events by B3, Founder' },
    { img: 'f3', n: 'Ashutosh Patel',  r: 'Events by B3, Founder' },
    { img: 'f4', n: 'Sumit Nagda',     r: 'WIC, Founder' },
    { img: 'f5', n: 'Raj Nagda',       r: 'WIC, Founder' }
  ];

  var BOARD = [
    { img: 'b1',  n: 'Vipul Bhawsar',    r: 'Operations Head' },
    { img: 'b2',  n: 'Bhavesh Bhargava', r: 'Tech Head' },
    { img: 'b3',  n: 'Mohit Dangi',      r: 'Security Head' },
    { img: 'b4',  n: 'Parth Chaure',     r: 'Tech Lead' },
    { img: 'b5',  n: 'Yashu Mehta',      r: 'Operations Lead' },
    { img: 'b6',  n: 'Smita Nagda',      r: 'Theme Creative Head' },
    { img: 'b7',  n: 'Rajyavardhan',     r: 'Sales Lead' },
    { img: 'b8',  n: 'Kushal Khandelwal', r: 'Sales Lead' },
    { img: 'b9',  n: 'Awadh Patel',      r: 'Creative Director' },
    { img: 'b10', n: 'Adarsh Nagrale',   r: 'Operations Lead' },
    { img: 'b11', n: 'Himanshu Patil',   r: 'HR Lead' },
    { img: 'b12', n: 'Avni Jain',        r: 'HR lead' },
    { img: 'b13', n: 'Ashi Bihani',      r: 'HR, Lead' },
    { img: 'b14', n: 'Rohan Patel',      r: 'Security Lead' }
  ];

  /* ------------------------------------------------------------- mandala */

  function petals(id, count, r, w, h) {
    var g = document.getElementById(id);
    if (!g) return;
    var ns = 'http://www.w3.org/2000/svg', out = '';
    for (var i = 0; i < count; i++) {
      var a = (360 / count) * i;
      out += '<path d="M300,' + (300 - r) +
        ' C' + (300 + w) + ',' + (300 - r - h * .45) +
        ' ' + (300 + w * .5) + ',' + (300 - r - h) + ' 300,' + (300 - r - h) +
        ' C' + (300 - w * .5) + ',' + (300 - r - h) +
        ' ' + (300 - w) + ',' + (300 - r - h * .45) + ' 300,' + (300 - r) + 'Z"' +
        ' transform="rotate(' + a + ' 300 300)"/>';
      out += '<circle cx="300" cy="' + (300 - r - h - 9) + '" r="2.5" transform="rotate(' + a + ' 300 300)"/>';
    }
    g.innerHTML = out;
    void ns;
  }
  petals('petalsOuter', 32, 232, 14, 34);
  petals('petalsMid', 20, 168, 20, 42);
  petals('petalsInner', 12, 104, 22, 32);

  (function coreMandala() {
    var g = document.getElementById('petalsCore');
    if (!g) return;
    var out = '';
    for (var i = 0; i < 16; i++) {
      var a = (360 / 16) * i;
      out += '<path d="M100,28 C118,44 118,62 100,74 C82,62 82,44 100,28Z" stroke-width="1" transform="rotate(' + a + ' 100 100)"/>';
    }
    g.innerHTML = out;
  })();

  /* -------------------------------------------------------------- sparks */

  (function sparks() {
    var cv = document.getElementById('sparks');
    if (!cv || reduce) return;
    var ctx = cv.getContext('2d'), dots = [], w = 0, h = 0, raf;

    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      var n = Math.round(Math.min(110, (w * h) / 14000));
      for (var i = 0; i < n; i++) {
        dots.push({
          x: Math.random() * w, y: Math.random() * h,
          r: Math.random() * 1.7 + .4,
          vy: -(Math.random() * .22 + .06),
          vx: (Math.random() - .5) * .12,
          p: Math.random() * Math.PI * 2,
          sp: Math.random() * .02 + .008,
          gold: Math.random() > .32
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.y += d.vy; d.x += d.vx; d.p += d.sp;
        if (d.y < -6) { d.y = h + 6; d.x = Math.random() * w; }
        if (d.x < -6) d.x = w + 6;
        if (d.x > w + 6) d.x = -6;
        var a = (Math.sin(d.p) * .5 + .5) * .75 + .1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, 6.2832);
        ctx.fillStyle = d.gold ? 'rgba(246,220,158,' + a + ')' : 'rgba(230,120,190,' + (a * .8) + ')';
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    size();
    frame();
    window.addEventListener('resize', function () { cancelAnimationFrame(raf); size(); frame(); });
  })();

  /* --------------------------------------------------------- garba ring */

  (function garba() {
    var ring = document.getElementById('garbaRing');
    if (!ring) return;
    var n = WHY.length, frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var w = WHY[i];
      var node = document.createElement('div');
      node.className = 'garba__node';
      node.style.setProperty('--a', (360 / n) * i + 'deg');
      node.style.setProperty('--rad', '39%');
      node.innerHTML =
        '<div class="garba__inner">' +
        '<img class="garba__medal" src="assets/' + w.img + '.png" alt="" loading="lazy">' +
        '<h3>' + w.t + '</h3><p>' + w.s + '</p></div>';
      frag.appendChild(node);
    }
    ring.appendChild(frag);
  })();

  /* -------------------------------------------------------------- people */

  function people(target, list) {
    var el = document.getElementById(target);
    if (!el) return;
    el.innerHTML = list.map(function (p, i) {
      return '<article class="person reveal" style="transition-delay:' + (i % 7) * 60 + 'ms">' +
        '<div class="person__pic"><img src="assets/' + p.img + '.jpg" alt="' + p.n + '" loading="lazy"></div>' +
        '<h3>' + p.n + '</h3><p>' + p.r + '</p></article>';
    }).join('');
  }
  people('founders', FOUNDERS);
  people('board', BOARD);

  /* --------------------------------------------------------------- tiers */

  (function tiers() {
    var el = document.getElementById('tiers');
    if (!el) return;
    el.innerHTML = TIERS.map(function (t, i) {
      return '<a class="tier reveal' + (i === 0 ? ' tier--top' : '') + '" href="#packages" ' +
        'style="transition-delay:' + i * 55 + 'ms; text-decoration:none">' +
        '<span class="tier__rank">Tier ' + (i + 1) + '</span>' +
        '<div class="tier__name">' + t.name + '</div>' +
        '<div class="tier__amt">' + t.amt + '</div></a>';
    }).join('');
  })();

  /* -------------------------------------------------------------- tables */

  function cell(v) {
    if (v === 'Y') return '<td class="yes" aria-label="Included">&#10004;</td>';
    if (v === '-') return '<td class="no" aria-label="Not included">&ndash;</td>';
    return '<td>' + v + '</td>';
  }

  function buildTable(id, rows) {
    var t = document.getElementById(id);
    if (!t) return;
    var head = '<thead><tr><th scope="col">Details</th>' +
      TIERS.map(function (x) { return '<th scope="col">' + x.name + '</th>'; }).join('') +
      '</tr></thead>';
    var body = '<tbody>' + rows.map(function (r) {
      var cells = r[1].map(function (v) {
        return r[2] === 'amt' ? '<td class="amt">' + v + '</td>' : cell(v);
      }).join('');
      return '<tr><th scope="row">' + r[0] + '</th>' + cells + '</tr>';
    }).join('') + '</tbody>';
    t.innerHTML = head + body;
  }
  buildTable('gridA', TABLE_A);
  buildTable('gridB', TABLE_B);

  $$('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      $$('.tab').forEach(function (o) { o.classList.remove('is-on'); o.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-on');
      tab.setAttribute('aria-selected', 'true');
      var wanted = tab.dataset.table;
      $('#gridA').classList.toggle('is-hidden', wanted !== 'a');
      $('#gridB').classList.toggle('is-hidden', wanted !== 'b');
      var sc = $('#scroller');
      if (sc) sc.scrollLeft = 0;
    });
  });

  /* -------------------------------------------------------------- reveal */

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { threshold: .16, rootMargin: '0px 0px -8% 0px' });

  $$('.reveal, .card, .quote, .phase, .venue figure, .gallery__item, .partners').forEach(function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });

  /* --------------------------------------------------------------- chart */

  (function chart() {
    var c = document.getElementById('chart');
    if (!c) return;
    var seen = false;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || seen) return;
        seen = true;
        c.classList.add('is-in');
        if (reduce) return;
        $$('b[data-count]', c).forEach(function (b, i) {
          var end = parseInt(b.dataset.count, 10), t0 = null, dur = 1100, delay = 600 + i * 90;
          var fmt = function (v) { return v.toLocaleString('en-US'); };
          b.textContent = '0';
          setTimeout(function () {
            function step(ts) {
              if (!t0) t0 = ts;
              var p = Math.min((ts - t0) / dur, 1);
              var e2 = 1 - Math.pow(1 - p, 3);
              b.textContent = fmt(Math.round(end * e2));
              if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }, delay);
        });
      });
    }, { threshold: .3 });
    obs.observe(c);
  })();

  /* ------------------------------------------------------ nav + progress */

  var bar = document.getElementById('progressBar');
  var topbar = document.getElementById('topbar');

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
    if (topbar) topbar.classList.toggle('is-stuck', doc.scrollTop > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = topbar.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('.topbar__nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        topbar.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------ lightbox */

  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');

  function openLb(src, alt) {
    lbImg.src = src; lbImg.alt = alt || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#lightboxClose').focus();
  }
  function closeLb() {
    lb.hidden = true; lbImg.src = '';
    document.body.style.overflow = '';
  }

  $$('.gallery__item img, .venue figure img').forEach(function (im) {
    im.style.cursor = 'zoom-in';
    im.addEventListener('click', function () { openLb(im.src, im.alt); });
  });
  if (lb) {
    lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
    $('#lightboxClose').addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
  }

  /* ------------------------------------------------- hero parallax drift */

  if (!reduce) {
    var sky = $('.hero__sky');
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (sky && y < window.innerHeight * 1.2) {
        sky.style.transform = 'translateY(' + (y * .18) + 'px) scale(' + (1 + y * .00012) + ')';
      }
    }, { passive: true });
  }
})();
