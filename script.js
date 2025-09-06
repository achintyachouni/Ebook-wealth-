// Replace this with your Razorpay hosted payment page link
const PAYMENT_PAGE_URL = 'https://your-razorpay-hosted-page.link/replace-me';

document.addEventListener('DOMContentLoaded', function () {

  // Menu toggle (mobile)
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.style.display = (mainNav.style.display === 'flex') ? 'none' : 'flex';
    });
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 920 && !menuBtn.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.style.display = 'none';
      }
    });
  }

  // Modal preview
  const modal = document.getElementById('modal');
  const previewBtn = document.getElementById('previewBtn');
  const closeModal = document.getElementById('closeModal');
  previewBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    modal?.classList.remove('hidden');
    modal?.setAttribute('aria-hidden', 'false');
  });
  closeModal?.addEventListener('click', () => {
    modal?.classList.add('hidden');
    modal?.setAttribute('aria-hidden', 'true');
  });
  modal?.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.add('hidden'); modal.setAttribute('aria-hidden', 'true'); } });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const panel = document.getElementById(id);
      document.querySelectorAll('.faq-a').forEach(x => { if (x !== panel) x.style.maxHeight = '0' });
      if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
        panel.style.maxHeight = '0';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Buy buttons open the hosted payment page in a new tab
  function openHostedPayment() {
    if (!PAYMENT_PAGE_URL || PAYMENT_PAGE_URL.includes('replace-me')) {
      alert('Please set PAYMENT_PAGE_URL in script.js to your Razorpay hosted payment page link.');
      return;
    }
    window.open(PAYMENT_PAGE_URL, '_blank');
  }

  document.getElementById('buyBtn')?.addEventListener('click', openHostedPayment);
  document.getElementById('buyBtnBottom')?.addEventListener('click', openHostedPayment);

});
