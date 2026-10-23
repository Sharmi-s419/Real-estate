// ==========================================
// INDIAN REAL ESTATE LOCALIZATION & LEAD STORAGE UTILITIES
// ==========================================
// Centralized helpers for INR currency, Indian number formatting (en-IN),
// Indian phone validation, PIN code validation, date formatting,
// and verified lead storage for TLF BUILDERS.

/**
 * Format a numeric amount into Indian Rupees (INR) using en-IN locale
 * e.g. 100000 -> "₹1,00,000", 2500000 -> "₹25,00,000"
 */
export const formatINR = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format large property prices in user-friendly Indian notation (Lakh / Crore)
 * e.g. 4500000 -> "₹45 Lakh", 12500000 -> "₹1.25 Crore", 52000 (rent) -> "₹52,000 / month"
 */
export const formatIndianPrice = (amount, purpose = 'buy') => {
  if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) return 'Price on Request';

  // For rental properties
  if (purpose === 'rent') {
    if (amount >= 10000000) {
      const cr = amount / 10000000;
      const formatted = cr % 1 === 0 ? cr.toString() : cr.toFixed(2).replace(/\.?0+$/, '');
      return `₹${formatted} Crore / month`;
    }
    if (amount >= 100000) {
      const lakh = amount / 100000;
      const formatted = lakh % 1 === 0 ? lakh.toString() : lakh.toFixed(2).replace(/\.?0+$/, '');
      return `₹${formatted} Lakh / month`;
    }
    return `${formatINR(amount)} / month`;
  }

  // For properties for sale / development plots
  if (amount >= 10000000) {
    const cr = amount / 10000000;
    const formatted = cr % 1 === 0 ? cr.toString() : cr.toFixed(2).replace(/\.?0+$/, '');
    return `₹${formatted} Crore`;
  }
  if (amount >= 100000) {
    const lakh = amount / 100000;
    const formatted = lakh % 1 === 0 ? lakh.toString() : lakh.toFixed(2).replace(/\.?0+$/, '');
    return `₹${formatted} Lakh`;
  }
  return formatINR(amount);
};

/**
 * Format a number using the Indian digit grouping (en-IN)
 * e.g. 3850 -> "3,850", 100000 -> "1,00,000"
 */
export const formatIndianNumber = (num) => {
  if (typeof num !== 'number' || isNaN(num)) return '0';
  return new Intl.NumberFormat('en-IN').format(num);
};

/**
 * Format date in Indian convention (DD/MM/YYYY) in Asia/Kolkata timezone
 */
export const formatIndianDate = (date = new Date()) => {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(d);
};

/**
 * Validate Indian phone numbers (10-digit mobile starting with 6, 7, 8, or 9,
 * with optional +91, 91, or 0 prefix, spaces, and hyphens)
 */
export const validateIndianPhone = (phoneStr) => {
  if (!phoneStr) return false;
  const digits = phoneStr.replace(/\D/g, '');
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return /^[6-9]\d{9}$/.test(digits.slice(1));
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  return false;
};

/**
 * Clean and normalize phone number to international E.164 without plus for WhatsApp links
 */
export const getCleanIndianWhatsAppNumber = (phoneStr) => {
  const digits = (phoneStr || '').replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 11 && digits.startsWith('0')) return `91${digits.slice(1)}`;
  if (digits.length === 12 && digits.startsWith('91')) return digits;
  return digits;
};

/**
 * Validate 6-digit Indian Postal PIN code
 */
export const validateIndianPin = (pinStr) => {
  if (!pinStr) return false;
  const cleaned = pinStr.toString().trim();
  return /^[1-9][0-9]{5}$/.test(cleaned);
};

// ==========================================
// VERIFIED LEAD STORAGE MANAGEMENT (TLF BUILDERS)
// ==========================================
// Guarantees enquiries are genuinely persisted and never silently lost
const ENQUIRIES_STORAGE_KEY = 'tlf_builders_enquiries';

export const saveEnquiry = (leadData) => {
  try {
    const existing = JSON.parse(localStorage.getItem(ENQUIRIES_STORAGE_KEY) || '[]');
    const newLead = {
      id: `TLF-ENQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toISOString(),
      formattedDate: formatIndianDate(new Date()),
      name: leadData.name || '',
      phone: leadData.phone || '',
      email: leadData.email || 'N/A',
      interest: leadData.interest || leadData.service || leadData.propertyTitle || 'General Property Enquiry',
      service: leadData.service || leadData.interest || 'General Enquiry',
      location: leadData.location || 'Kanniyakumari District',
      landStatus: leadData.landStatus || 'Not specified',
      budget: leadData.budget || 'Not specified',
      propertyId: leadData.propertyId || null,
      message: leadData.message || '',
      source: leadData.source || 'Website Contact Form',
      status: 'New Lead'
    };

    existing.unshift(newLead);
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(existing));

    // Dispatch event so any UI listeners can update
    window.dispatchEvent(new CustomEvent('tlf:leadSaved', { detail: newLead }));
    return newLead;
  } catch (err) {
    console.error('Error saving lead to local store:', err);
    return null;
  }
};

export const getEnquiries = () => {
  try {
    return JSON.parse(localStorage.getItem(ENQUIRIES_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

export const deleteEnquiry = (id) => {
  try {
    const existing = getEnquiries().filter(item => item.id !== id);
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(existing));
    window.dispatchEvent(new CustomEvent('tlf:leadsUpdated'));
    return true;
  } catch {
    return false;
  }
};
