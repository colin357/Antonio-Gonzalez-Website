(function () {
  // Sticky nav shadow
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobile-menu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Scroll reveal
  const targets = document.querySelectorAll(
    '.section-head, .about__aside, .about__body, .loan-card, .process__intro, .step, ' +
    '.realtors__copy, .realtors__quote, .area, .faq__intro, .accordion, .social__copy, ' +
    '.social__tiles, .contact__intro, .form'
  );
  targets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('is-visible'));
  }

  // Contact form: open the visitor's mail client with a pre-filled message.
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const name = `${d.get('first_name')} ${d.get('last_name')}`.trim();
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || 'n/a'}\n` +
      `Interested in: ${d.get('interest')}\n\n${d.get('message') || ''}`
    );
    window.location.href = `mailto:aghomelender@gmail.com?subject=${subject}&body=${body}`;
    const note = form.querySelector('.form__note');
    note.textContent = 'Opening your email app. If nothing happens, just text or call (916) 603-1555.';
    note.classList.add('form__success');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();

// Live Instagram feed (Behold widget). Activates once a feed ID is set on
// #instagram-feed via data-behold-id; otherwise the placeholder tiles stay.
(function () {
  const wrap = document.getElementById('instagram-feed');
  if (!wrap) return;
  const feedId = (wrap.dataset.beholdId || '').trim();
  if (!feedId) return;
  const widget = document.createElement('div');
  widget.setAttribute('data-behold-id', feedId);
  widget.className = 'social__live';
  wrap.replaceChildren(widget);
  const s = document.createElement('script');
  s.src = 'https://w.behold.so/widget.js';
  s.type = 'module';
  s.async = true;
  document.head.appendChild(s);
})();
