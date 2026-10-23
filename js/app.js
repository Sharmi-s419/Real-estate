// ==========================================
// APPLICATION LOGIC (ES MODULE) - TLF BUILDERS
// ==========================================
import { siteConfig } from './config.js';
import { properties } from './data.js';
import {
  formatIndianPrice,
  formatIndianDate,
  validateIndianPhone,
  validateIndianPin,
  saveEnquiry,
  getEnquiries,
  deleteEnquiry
} from './utils.js';

// Application State
const state = {
  activeProperty: null
};

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
  initBrandSettings();
  setupNavigation();
  setupSellForm();
  setupGeneralForms();
  setupModals();
  setupHashRouting();
  setupStickyHeader();
  setupYear();
  setupLeadsViewer();
  updateLeadsBadge();
});

// ==========================================
// 1. BRAND IDENTITY & CONTACT INITIALIZATION
// ==========================================
function initBrandSettings() {
  document.querySelectorAll('.dynamic-brand-name').forEach(el => {
    el.textContent = siteConfig.brandName;
  });

  // Update contact links
  const contactPhone = document.getElementById('contact-phone-link');
  if (contactPhone) {
    contactPhone.href = `tel:${siteConfig.contact.phoneRaw}`;
    contactPhone.textContent = siteConfig.contact.phoneDisplay;
  }

  const topPhone = document.getElementById('top-phone-link');
  if (topPhone) {
    topPhone.href = `tel:${siteConfig.contact.phoneRaw}`;
  }

  const contactEmail = document.getElementById('contact-email-link');
  if (contactEmail) {
    contactEmail.href = `mailto:${siteConfig.contact.email}`;
    contactEmail.textContent = siteConfig.contact.email;
  }

  // Contact WhatsApp Button
  const contactWhatsApp = document.getElementById('contact-whatsapp-btn');
  if (contactWhatsApp) {
    contactWhatsApp.addEventListener('click', () => {
      const msg = `Hello ${siteConfig.brandName}, I would like to enquire about your real estate properties in Kanyakumari district.`;
      window.open(siteConfig.generateWhatsAppUrl(msg), '_blank');
    });
  }

  // Sticky Bar Buttons
  const stickyCall = document.getElementById('sticky-call-btn');
  if (stickyCall) {
    stickyCall.href = `tel:${siteConfig.contact.phoneRaw}`;
  }

  const stickyWhatsApp = document.getElementById('sticky-whatsapp-btn');
  if (stickyWhatsApp) {
    stickyWhatsApp.href = siteConfig.generateWhatsAppUrl("Hello TLF BUILDERS, I am interested in your properties in Kanyakumari district.");
  }
}


// ==========================================
// 3. NAVIGATION & RESPONSIVE DRAWER
// ==========================================
function setupNavigation() {
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Close mobile drawer upon link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

function setupStickyHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}


// ==========================================
// 5. PROPERTY DETAILS MODAL
// ==========================================
function openPropertyModalById(propertyId) {
  const prop = properties.find(p => p.id === propertyId);
  if (!prop) return;

  state.activeProperty = prop;
  window.location.hash = prop.id;

  const modal = document.getElementById('property-modal-backdrop');
  if (!modal) return;

  // Populate Title & Ref
  document.getElementById('modal-property-title').textContent = prop.title;
  document.getElementById('detail-ref-code').textContent = prop.refCode;
  
  const purposePill = document.getElementById('detail-purpose-pill');
  purposePill.textContent = prop.propertyType;

  const priceDisplay = (prop.priceNumeric && prop.priceNumeric > 0)
    ? (prop.price || formatIndianPrice(prop.priceNumeric, 'buy'))
    : 'Price on Request';
  document.getElementById('detail-price-val').innerHTML = prop.priceNote && prop.priceNumeric > 0
    ? `${priceDisplay} <span style="font-size:0.85rem; font-weight:400; color:var(--text-muted);">(${prop.priceNote})</span>`
    : priceDisplay;
  
  const statusBadge = document.getElementById('detail-status-badge');
  statusBadge.textContent = prop.status;

  // Active Main Image
  const activeImg = document.getElementById('detail-active-img');
  activeImg.src = prop.heroImage;
  activeImg.alt = prop.title;

  // Gallery Thumbnails
  const thumbsContainer = document.getElementById('detail-thumbs-container');
  thumbsContainer.innerHTML = (prop.gallery || [prop.heroImage]).map((url, idx) => `
    <img 
      src="${url}" 
      alt="Gallery photo ${idx + 1}" 
      class="gallery-thumb ${idx === 0 ? 'active' : ''}" 
      data-img-src="${url}"
    >
  `).join('');

  thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      activeImg.src = thumb.getAttribute('data-img-src');
    });
  });

  // Full Description
  document.getElementById('detail-full-description').textContent = prop.fullDescription;

  // Specifications Table
  const specsTable = document.getElementById('detail-specs-table');
  specsTable.innerHTML = prop.specifications.map(spec => `
    <tr>
      <td>${spec.label}</td>
      <td>${spec.value}</td>
    </tr>
  `).join('');

  // Amenities Grid
  const amenitiesContainer = document.getElementById('detail-amenities-container');
  amenitiesContainer.innerHTML = prop.amenities.map(item => `
    <div class="amenity-tag">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${item}</span>
    </div>
  `).join('');

  // Neighborhood Info
  document.getElementById('detail-map-neighborhood-name').textContent = prop.location;
  document.getElementById('detail-neighborhood-text').textContent = prop.neighborhoodInfo;

  // Modal Pre-filled Enquiry Hidden Inputs
  document.getElementById('modal-hidden-prop-id').value = prop.id;
  document.getElementById('modal-hidden-prop-title').value = prop.title;

  // WhatsApp Button in Modal
  const modalWhatsAppBtn = document.getElementById('detail-whatsapp-btn');
  if (modalWhatsAppBtn) {
    modalWhatsAppBtn.onclick = () => {
      const formattedPrice = formatIndianPrice(prop.priceNumeric, prop.purpose);
      const msg = `Hello ${siteConfig.brandName}, I would like to arrange a site visit or enquire about "${prop.title}" (${prop.refCode}) in ${prop.location} listed for ${formattedPrice}.`;
      window.open(siteConfig.generateWhatsAppUrl(msg), '_blank');
    };
  }

  // Update mobile sticky bar with property info
  const stickyTitle = document.getElementById('sticky-bar-title');
  if (stickyTitle) stickyTitle.textContent = prop.title;

  openModal(modal);
}

function closePropertyModal() {
  const modal = document.getElementById('property-modal-backdrop');
  if (modal) {
    closeModal(modal);
    state.activeProperty = null;
    if (window.location.hash.startsWith('#tlf-')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }
}

// ==========================================
// 6. SELL OR PROMOTE PROPERTY FORM
// ==========================================
function setupSellForm() {
  const form = document.getElementById('sell-property-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const ownerName = form.owner_name ? form.owner_name.value.trim() : '';
    const ownerPhone = form.owner_phone ? form.owner_phone.value.trim() : '';
    const propLocation = form.property_location ? form.property_location.value.trim() : '';
    const propType = form.property_type ? form.property_type.value : '';
    const expectedPrice = form.expected_price ? form.expected_price.value.trim() : '';
    const propDesc = form.property_description ? form.property_description.value.trim() : '';
    const pinVal = form.property_pincode ? form.property_pincode.value.trim() : '';
    const listingPurpose = form.listing_purpose ? form.listing_purpose.value : 'Sell Property';
    const dpdpConsent = form.dpdp_consent ? form.dpdp_consent.checked : false;

    // Validation
    if (!ownerName || !ownerPhone || !propLocation || !propType || !expectedPrice || !propDesc) {
      showToast('Please complete all required fields (*).', 'error');
      return;
    }

    if (!validateIndianPhone(ownerPhone)) {
      showToast('Please enter a valid 10-digit Indian mobile number (e.g. +91 95782 99953).', 'error');
      return;
    }

    if (pinVal && !validateIndianPin(pinVal)) {
      showToast('Please enter a valid 6-digit Indian PIN code (e.g. 600001).', 'error');
      return;
    }

    if (!dpdpConsent) {
      showToast('Please consent under the DPDP Act, 2023 to proceed.', 'error');
      return;
    }

    // Persist verified lead to localStorage
    const savedLead = saveEnquiry({
      name: ownerName,
      phone: ownerPhone,
      interest: `${listingPurpose}: ${propType} at ${propLocation} (Budget: ${expectedPrice})`,
      message: propDesc,
      source: 'Promote/Sell Property Form'
    });

    if (savedLead) {
      showToast(`Thank you, ${ownerName}! Your property submission (${savedLead.id}) has been recorded. Our team will contact you within 24 business hours.`, 'success');
      updateLeadsBadge();
      form.reset();
    }
  });
}

// ==========================================
// 7. GENERAL FORMS (CONTACT & PROPERTY MODAL)
// ==========================================
function setupGeneralForms() {
  // Contact section general enquiry form
  const contactForm = document.getElementById('contact-general-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name ? contactForm.name.value.trim() : '';
      const phone = contactForm.phone ? contactForm.phone.value.trim() : '';
      const email = contactForm.email ? contactForm.email.value.trim() : 'N/A';
      const interest = contactForm.interest ? contactForm.interest.value : 'General Enquiry';
      const message = contactForm.message ? contactForm.message.value.trim() : '';
      const dpdpConsent = contactForm.dpdp_consent ? contactForm.dpdp_consent.checked : true;

      if (!name || !phone || !message) {
        showToast('Please provide your name, mobile number, and requirements.', 'error');
        return;
      }

      if (!validateIndianPhone(phone)) {
        showToast('Please enter a valid 10-digit Indian mobile number (e.g. +91 95782 99953).', 'error');
        return;
      }

      if (!dpdpConsent) {
        showToast('Please consent to communication under the DPDP Act, 2023.', 'error');
        return;
      }

      // Persist lead
      const savedLead = saveEnquiry({
        name,
        phone,
        email,
        interest,
        message,
        source: 'Contact Us Section Enquiry Form'
      });

      if (savedLead) {
        showToast(`Thank you, ${name}! Your enquiry (${savedLead.id}) has been recorded. Our advisory team will reach out at ${phone} promptly.`, 'success');
        updateLeadsBadge();

        // Prompt user to immediately transmit via WhatsApp if they prefer
        const shouldWhatsApp = confirm(`Enquiry logged with Ref #${savedLead.id}!\nWould you like to send this enquiry to TLF BUILDERS on WhatsApp (+91 95782 99953) now?`);
        if (shouldWhatsApp) {
          const waMsg = `Hello TLF BUILDERS, my name is ${name}. I am enquiring about "${interest}" (Ref: ${savedLead.id}). Message: ${message}`;
          window.open(siteConfig.generateWhatsAppUrl(waMsg), '_blank');
        }

        contactForm.reset();
      }
    });
  }

  // Modal property enquiry form
  const modalForm = document.getElementById('modal-property-enquiry-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = modalForm.name ? modalForm.name.value.trim() : '';
      const phone = modalForm.phone ? modalForm.phone.value.trim() : '';
      const email = modalForm.email ? modalForm.email.value.trim() : 'N/A';
      const propTitle = modalForm.prop_title ? modalForm.prop_title.value : 'Property';
      const propId = modalForm.prop_id ? modalForm.prop_id.value : null;
      const message = modalForm.message ? modalForm.message.value.trim() : 'Requesting site visit & availability';

      if (!name || !phone) {
        showToast('Please provide your name and mobile number to arrange a site visit.', 'error');
        return;
      }

      if (!validateIndianPhone(phone)) {
        showToast('Please enter a valid 10-digit Indian mobile number (e.g. +91 95782 99953).', 'error');
        return;
      }

      // Persist lead
      const savedLead = saveEnquiry({
        name,
        phone,
        email,
        interest: propTitle,
        propertyId: propId,
        message,
        source: 'Property Details Modal Form'
      });

      if (savedLead) {
        showToast(`Site visit request (${savedLead.id}) for "${propTitle}" received! Our team will contact you at ${phone}.`, 'success');
        updateLeadsBadge();
        modalForm.reset();
        closePropertyModal();
      }
    });
  }

  // Header general enquiry modal form
  const popupGeneralForm = document.getElementById('popup-general-form');
  if (popupGeneralForm) {
    popupGeneralForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = popupGeneralForm.name ? popupGeneralForm.name.value.trim() : '';
      const phone = popupGeneralForm.phone ? popupGeneralForm.phone.value.trim() : '';
      const email = popupGeneralForm.email ? popupGeneralForm.email.value.trim() : 'N/A';
      const message = popupGeneralForm.message ? popupGeneralForm.message.value.trim() : '';

      if (!name || !phone || !message) {
        showToast('Please complete your name, mobile number, and message.', 'error');
        return;
      }

      if (!validateIndianPhone(phone)) {
        showToast('Please enter a valid 10-digit Indian mobile number.', 'error');
        return;
      }

      // Persist lead
      const savedLead = saveEnquiry({
        name,
        phone,
        email,
        interest: 'Direct Client Consultation',
        message,
        source: 'Header Enquire Now Modal'
      });

      if (savedLead) {
        showToast(`Thank you, ${name}. Enquiry (${savedLead.id}) received. We will call you promptly at ${phone}.`, 'success');
        updateLeadsBadge();
        popupGeneralForm.reset();
        closeModal(document.getElementById('general-enquiry-modal'));
      }
    });
  }
}

// ==========================================
// 8. SAVED LEADS & ENQUIRIES VIEWER
// ==========================================
function setupLeadsViewer() {
  const openLeadsBtn = document.getElementById('open-leads-viewer-btn');
  const leadsModal = document.getElementById('leads-viewer-modal');
  const closeLeadsBtn = document.getElementById('close-leads-modal');

  if (openLeadsBtn && leadsModal) {
    openLeadsBtn.addEventListener('click', () => {
      renderLeadsList();
      openModal(leadsModal);
    });
  }

  if (closeLeadsBtn && leadsModal) {
    closeLeadsBtn.addEventListener('click', () => closeModal(leadsModal));
  }

  window.addEventListener('tlf:leadSaved', () => {
    updateLeadsBadge();
  });
}

function updateLeadsBadge() {
  const badge = document.getElementById('leads-count-badge');
  if (badge) {
    const list = getEnquiries();
    badge.textContent = list.length;
  }
}

function renderLeadsList() {
  const container = document.getElementById('leads-items-container');
  if (!container) return;

  const leads = getEnquiries();
  if (leads.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <p style="font-size: 1rem; margin-bottom: 6px;">No enquiries submitted yet.</p>
        <span style="font-size: 0.82rem; color: var(--text-light);">Submit an enquiry through any contact or project form to see it saved here.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
      <span style="font-weight: 700; font-size: 0.9rem; color: var(--color-navy);">Total Saved: ${leads.length} Records</span>
      <button type="button" class="btn btn-secondary btn-sm" id="export-leads-csv-btn">Export Leads (CSV)</button>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${leads.map(lead => `
        <div class="lead-item-card" id="lead-${lead.id}">
          <div class="lead-item-header">
            <span class="lead-item-title">${lead.name} • ${lead.phone}</span>
            <span class="lead-item-time">${lead.formattedDate}</span>
          </div>
          <div class="lead-item-meta">
            <strong>Interest:</strong> ${lead.interest} | <strong>Ref:</strong> ${lead.id}
          </div>
          <div class="lead-item-msg">
            ${lead.message || 'No additional message.'}
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 10px;">
            <a href="https://wa.me/919578299953?text=${encodeURIComponent(`Regarding enquiry ${lead.id} by ${lead.name} (${lead.phone}) for ${lead.interest}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              WhatsApp Reply
            </a>
            <button type="button" class="btn btn-secondary btn-sm delete-lead-btn" data-id="${lead.id}">
              Delete
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Delete lead handlers
  container.querySelectorAll('.delete-lead-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (confirm(`Remove enquiry record ${id}?`)) {
        deleteEnquiry(id);
        renderLeadsList();
        updateLeadsBadge();
      }
    });
  });

  // Export CSV
  const exportBtn = document.getElementById('export-leads-csv-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const csvRows = [
        ['ID', 'Date', 'Customer Name', 'Phone', 'Email', 'Interest', 'Source', 'Message']
      ];
      leads.forEach(l => {
        csvRows.push([
          `"${l.id}"`,
          `"${l.formattedDate}"`,
          `"${l.name.replace(/"/g, '""')}"`,
          `"${l.phone}"`,
          `"${l.email}"`,
          `"${(l.interest || '').replace(/"/g, '""')}"`,
          `"${l.source || ''}"`,
          `"${(l.message || '').replace(/"/g, '""')}"`
        ]);
      });
      const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(',')).join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `TLF_BUILDERS_Leads_${Date.now()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// ==========================================
// 9. MODALS & ACCESSIBILITY
// ==========================================
function setupModals() {
  // Property details modal close triggers
  const closePropBtn = document.getElementById('close-property-modal');
  const propModal = document.getElementById('property-modal-backdrop');
  if (closePropBtn) {
    closePropBtn.addEventListener('click', closePropertyModal);
  }
  if (propModal) {
    propModal.addEventListener('click', (e) => {
      if (e.target === propModal) closePropertyModal();
    });
  }

  // General enquiry modal triggers
  const generalModal = document.getElementById('general-enquiry-modal');
  const closeGeneralBtn = document.getElementById('close-general-modal');
  const headerEnquireBtn = document.getElementById('header-enquire-btn');
  const mobEnquireBtn = document.getElementById('mob-enquire-btn');

  const openGeneral = () => openModal(generalModal);

  if (headerEnquireBtn) headerEnquireBtn.addEventListener('click', openGeneral);
  if (mobEnquireBtn) mobEnquireBtn.addEventListener('click', openGeneral);

  if (closeGeneralBtn) {
    closeGeneralBtn.addEventListener('click', () => closeModal(generalModal));
  }
  if (generalModal) {
    generalModal.addEventListener('click', (e) => {
      if (e.target === generalModal) closeModal(generalModal);
    });
  }

  // Escape key closes any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
        closeModal(modal);
      });
      if (state.activeProperty) closePropertyModal();
    }
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('open');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ==========================================
// 10. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;

  const iconSvg = type === 'success'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #4ade80;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #f87171;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ==========================================
// 11. ROUTING & ACCESSIBILITY HELPERS
// ==========================================
function setupHashRouting() {
  const handleHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('tlf-')) {
      openPropertyModalById(hash);
    }
  };

  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) handleHash();
}

function setupYear() {
  const el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
}
