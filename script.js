/* ==========================================================================
   ALRB Virtual Assistant Portfolio — Interactive Behavior
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Navigation Drawer ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileDrawer.hidden = isExpanded;
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.hidden = true;
      });
    });
  }

  /* ---------- Active Section Scrollspy ---------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  if (navLinks.length && sections.length && 'IntersectionObserver' in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach((section) => spyObserver.observe(section));
  }

  /* ---------- Scroll Reveal Animations ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Portfolio Samples / Astrocade Tabs ---------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      tabBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      tabPanels.forEach((panel) => {
        const show = panel.id === targetId;
        panel.hidden = !show;
        panel.classList.toggle('is-active', show);
        if (show) {
          panel.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
        }
      });
    });
  });

  /* ---------- Interactive Mock Sample Data & Modal ---------- */
  const SAMPLES = {
    catalog: {
      title: 'E-commerce Product Catalog Upload & Audit Sheet',
      summary: [
        'Scope: Mock 5-SKU Storefront Launch Preview',
        'Validation Rule: Price > 0 & Description >= 12 words',
        'QA Focus: Consistent Unit Sizing & Image Readiness'
      ],
      headers: ['SKU Code', 'Product Name', 'Category', 'Unit / Pack', 'Price', 'Photo Ready', 'QA Status'],
      rows: [
        ['GRO-1042', 'Medjool Dates Gift Box', 'Pantry & Dried Fruit', '500 g Box', '$14.50', 'Yes (1000x1000)', { text: 'Approved for Upload', cls: 'status-ok' }],
        ['GRO-1043', 'Frozen Chicken Xiao Long Bao', 'Frozen Dim Sum', '12 pcs / Pack', '$8.25', 'Yes (1000x1000)', { text: 'Approved for Upload', cls: 'status-ok' }],
        ['GRO-1044', 'Cold-Pressed Olive Oil', 'Cooking Oils', '750 ml Bottle', '$11.90', 'Yes (1000x1000)', { text: 'Approved for Upload', cls: 'status-ok' }],
        ['ACC-2018', 'Natural Amethyst Palm Stone', 'Crystals & Gemstones', '1 pc (65-75 g)', '$16.00', 'Pending Crop', { text: 'Hold: Update Photo', cls: 'status-warn' }],
        ['GRO-1045', 'Whole Grain Jasmine Rice', 'Grains & Staples', '5 kg Bag', '$9.80', 'Yes (1000x1000)', { text: 'Approved for Upload', cls: 'status-ok' }]
      ]
    },
    inventory: {
      title: 'Daily Inventory & Physical Stock Reconciliation Log',
      summary: [
        'Audit Cycle: Daily Physical vs. System Count',
        'Formula: Variance = Physical Count - System Qty',
        'Alert Rule: Flag Reorder When Stock <= Reorder Point'
      ],
      headers: ['SKU Code', 'Item Description', 'System Qty', 'Physical Count', 'Variance', 'Reorder Point', 'Action Status'],
      rows: [
        ['DM-011', 'Pork & Shrimp Siomai (Tray)', '48', '48', '0', '20', { text: 'Balanced', cls: 'status-ok' }],
        ['DM-014', 'Steamed Hakaw Dumplings (Pack)', '18', '16', '-2', '20', { text: 'Flagged: Reorder + Variance Check', cls: 'status-warn' }],
        ['DT-205', 'Export Grade Date Paste (1 kg)', '120', '120', '0', '40', { text: 'Balanced', cls: 'status-ok' }],
        ['CR-088', 'Rose Quartz Tumbled Set', '34', '33', '-1', '15', { text: 'Logged: Recount Verified', cls: 'status-warn' }],
        ['BV-310', 'Sparkling Mineral Water (Case)', '65', '65', '0', '25', { text: 'Balanced', cls: 'status-ok' }]
      ]
    },
    orders: {
      title: 'Web & WhatsApp Order Fulfillment Tracker',
      summary: [
        'Channels: Web Storefront + WhatsApp Order Desk',
        'Workflow: Intake -> Picker Assigned -> Driver Dispatch -> Delivered',
        'Issue Handling: Notes Logged for Follow-Up'
      ],
      headers: ['Order ID', 'Channel', 'Items', 'Assigned Prep Staff', 'Driver / Route', 'Delivery Status', 'Resolution Note'],
      rows: [
        ['ORD-4821', 'WhatsApp', '6 items', 'Picker A', 'Driver 02 — North', { text: 'Delivered on Time', cls: 'status-ok' }, 'Confirmed via WhatsApp'],
        ['ORD-4822', 'Web Store', '11 items', 'Picker B', 'Driver 01 — Central', { text: 'Out for Dispatch', cls: 'status-ok' }, 'Cold pack included'],
        ['ORD-4823', 'WhatsApp', '4 items', 'Picker A', 'Driver 03 — East', { text: 'Substituted & Resolved', cls: 'status-warn' }, 'Customer approved brand swap'],
        ['ORD-4824', 'Web Store', '9 items', 'Picker C', 'Driver 02 — North', { text: 'Delivered on Time', cls: 'status-ok' }, 'Receipt archived'],
        ['ORD-4825', 'WhatsApp', '3 items', 'Picker B', 'Pending Pickup', { text: 'Packed & Staged', cls: 'status-ok' }, 'Awaiting 4:00 PM run']
      ]
    }
  };

  const modal = document.getElementById('sample-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDoneBtn = document.getElementById('modal-done-btn');
  const previewBtns = document.querySelectorAll('.sample-preview-btn');
  let lastFocusedEl = null;

  function renderSampleModal(key) {
    const data = SAMPLES[key];
    if (!data || !modal || !modalTitle || !modalBody) return;

    lastFocusedEl = document.activeElement;
    modalTitle.textContent = data.title;

    const summaryHtml = data.summary
      .map((item) => `<div class="summary-chip">${escapeHtml(item)}</div>`)
      .join('');

    const headHtml = data.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('');
    const rowsHtml = data.rows
      .map((row) => {
        const cells = row
          .map((cell) => {
            if (cell && typeof cell === 'object') {
              return `<td><span class="status-tag ${escapeHtml(cell.cls)}">${escapeHtml(cell.text)}</span></td>`;
            }
            return `<td>${escapeHtml(String(cell))}</td>`;
          })
          .join('');
        return `<tr>${cells}</tr>`;
      })
      .join('');

    modalBody.innerHTML = `
      <div class="sample-summary-bar">${summaryHtml}</div>
      <div class="sample-table-wrap">
        <table class="sample-table">
          <thead><tr>${headHtml}</tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    `;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  previewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      renderSampleModal(btn.getAttribute('data-sample'));
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closeModal();
    }
  });

  /* ---------- Copy Email & Toast ---------- */
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2600);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const value = copyBtn.getAttribute('data-copy');
      if (!value) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(value)
          .then(() => showToast('Email copied: ' + value))
          .catch(() => showToast('Copy manually: ' + value));
      } else {
        showToast('Copy manually: ' + value);
      }
    });
  }

  /* ---------- Print / Save as PDF ---------- */
  const printBtn = document.getElementById('print-portfolio-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
})();
