// ==========================================
// TLF BUILDERS - BUSINESS CONFIGURATION
// ==========================================
// Official business configuration for TLF BUILDERS
// Location: Kanyakumari District, Tamil Nadu, India
// Contact: +91 95782 99953
// Tagline: Natural Spaces, Brighter Tomorrows

export const siteConfig = {
  brandName: "TLF BUILDERS",
  brandTagline: "Natural Spaces, Brighter Tomorrows",
  tagline: "Natural Spaces, Brighter Tomorrows",
  headline: "Find Your Perfect Property in Kanyakumari.",
  shortDescription: "Explore residential and commercial properties with TLF BUILDERS across Kanyakumari district, Tamil Nadu.",
  location: "Kanyakumari District, Tamil Nadu, India",
  logoPath: "assets/images/tlf-builders-logo.jpg",
  
  // Official Business Contact Details
  contact: {
    phone: "+91 95782 99953",
    phoneDisplay: "+91 95782 99953",
    phoneRaw: "+919578299953",
    whatsappNumber: "919578299953", // International format without + or spaces for WhatsApp API
    whatsappDisplay: "+91 95782 99953",
    email: "contact@tlfbuilders.com",
    address: "TLF BUILDERS, Corporate Office & Property Advisory, Kanyakumari District, Tamil Nadu, India",
    workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM IST (Sunday by appointment)",
  },

  // WhatsApp click-to-chat generator
  generateWhatsAppUrl: (message = "") => {
    const defaultMsg = "Hello TLF BUILDERS, I am interested in your residential and commercial properties in Kanyakumari district. Please share details and availability.";
    const textToEncode = message || defaultMsg;
    return `https://wa.me/919578299953?text=${encodeURIComponent(textToEncode)}`;
  },

  // Color tokens matching the official TLF BUILDERS emblem:
  // Dark Forest Green, Metallic Gold, and Leaf Emerald Accents
  colors: {
    forestDeep: "#051810",
    forestDark: "#071F16",
    forestPrimary: "#0B291D",
    forestSoft: "#14422E",
    goldAccent: "#D4AF37",
    goldLight: "#DFBE7E",
    goldMuted: "#9E7D3B",
    emeraldLeaf: "#10B981",
    emeraldBright: "#2ECC71",
    warmCream: "#FAF8F5",
    sandLight: "#F3EFE6",
    charcoal: "#0F172A",
    white: "#FFFFFF"
  }
};

