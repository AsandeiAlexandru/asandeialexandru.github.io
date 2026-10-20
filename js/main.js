// Main JavaScript logic for Alexandru Asandei Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  initMobileMenu();
  initScrollSpy();
  initEmailCopy();
  initCurrentYear();
});

// Project Filtering Logic
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter');

      // Update button styles
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');
        btn.classList.add('bg-slate-800/80', 'text-slate-400', 'hover:text-white', 'hover:bg-slate-700/80');
      });

      button.classList.remove('bg-slate-800/80', 'text-slate-400', 'hover:text-white', 'hover:bg-slate-700/80');
      button.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/25');

      // Filter project cards
      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-categories') || '';
        if (category === 'all' || cardCategories.includes(category)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
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
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-400', 'border-b-2', 'border-blue-500');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.remove('text-slate-300');
        link.classList.add('text-blue-400', 'border-b-2', 'border-blue-500');
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
