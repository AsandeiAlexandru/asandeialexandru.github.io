// Main JavaScript logic for Alexandru Asandei Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initProjectDeck();
  initMobileMenu();
  initScrollSpy();
  initEmailCopy();
  initCurrentYear();
});

// Stacked Project Card Deck Carousel Logic
function initProjectDeck() {
  const deck = document.getElementById('project-deck');
  if (!deck) return;

  const cards = Array.from(deck.querySelectorAll('.deck-card'));
  const total = cards.length;
  if (total === 0) return;

  let activeIndex = 0;
  let isAnimating = false;

  function updateDeck() {
    cards.forEach((card, i) => {
      // Calculate depth from activeIndex (0 to total - 1)
      const depth = (i - activeIndex + total) % total;
      card.setAttribute('data-depth', depth);
      card.setAttribute('aria-hidden', depth !== 0);
    });

    // Update Counter (e.g. 1 / 4)
    const counter = document.getElementById('deck-counter');
    if (counter) {
      counter.textContent = `${activeIndex + 1} / ${total}`;
    }

    // Update Dots
    const dots = document.querySelectorAll('.deck-dot');
    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('bg-white', 'w-6');
        dot.classList.remove('bg-slate-700', 'w-2');
      } else {
        dot.classList.remove('bg-white', 'w-6');
        dot.classList.add('bg-slate-700', 'w-2');
      }
    });
  }

  function nextCard() {
    if (isAnimating) return;
    isAnimating = true;

    const currentCard = cards[activeIndex];
    currentCard.classList.add('cycling-out');

    setTimeout(() => {
      currentCard.classList.remove('cycling-out');
      activeIndex = (activeIndex + 1) % total;
      updateDeck();
      isAnimating = false;
    }, 200);
  }

  function prevCard() {
    if (isAnimating) return;
    activeIndex = (activeIndex - 1 + total) % total;
    updateDeck();
  }

  // Prevent link and button clicks inside cards from cycling the deck
  cards.forEach((card, index) => {
    card.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    // Clicking the front card cycles next; clicking a peeking card jumps to it!
    card.addEventListener('click', () => {
      const depth = parseInt(card.getAttribute('data-depth'), 10);
      if (depth === 0) {
        nextCard();
      } else {
        activeIndex = index;
        updateDeck();
      }
    });
  });

  // Next and Previous Header Buttons
  const nextBtn = document.getElementById('deck-next');
  const prevBtn = document.getElementById('deck-prev');
  if (nextBtn) nextBtn.addEventListener('click', nextCard);
  if (prevBtn) prevBtn.addEventListener('click', prevCard);

  // Dots direct navigation
  const dots = document.querySelectorAll('.deck-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx) && idx !== activeIndex) {
        activeIndex = idx;
        updateDeck();
      }
    });
  });

  // Mobile Touch Swipe Handling
  let touchStartX = 0;
  let touchStartY = 0;

  deck.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  deck.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].screenX - touchStartX;
    const diffY = e.changedTouches[0].screenY - touchStartY;
    // Horizontal or vertical swipe
    if (Math.abs(diffX) > 40 || Math.abs(diffY) > 40) {
      if (diffX < -40 || diffY < -40) {
        nextCard();
      } else if (diffX > 40 || diffY > 40) {
        prevCard();
      }
    }
  }, { passive: true });

  updateDeck();
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ScrollSpy Active Link Tracking
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Copy Email to Clipboard with Toast Notification
function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');
  const emailToCopy = 'asandeialexandru@gmail.com';

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        // Fallback for older browsers
        window.location.href = `mailto:${emailToCopy}`;
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('toast-enter');

  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('toast-enter');
  }, 2800);
}

// Automatically Update Current Year
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
