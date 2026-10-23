// ==========================================
// TLF BUILDERS - PROPERTY & PROJECT PORTFOLIO
// ==========================================
// Curated property listings and development projects representing TLF BUILDERS:
// Location: Kanyakumari District, Tamil Nadu, India
// Contact Number: +91 95782 99953
// Tagline: Natural Spaces, Brighter Tomorrows
// Categories:
//   - Residential Properties (Plots, Houses, Villas, Apartments, New Developments)
//   - Commercial Properties (Commercial Plots, Shops/Retail, Office Spaces, Commercial Buildings, Investment Land)

import { formatIndianPrice } from './utils.js';

export const properties = [
  // ----------------------------------------------------
  // RESIDENTIAL PROPERTIES
  // ----------------------------------------------------
  {
    id: "tlf-res-1",
    refCode: "TLF-RES-101",
    title: "TLF Green Valley Residential Plots",
    subtitle: "Clear title residential plots in prime residential zone",
    category: "residential",
    propertyType: "Residential Plot",
    bhk: "Plot / Land",
    price: formatIndianPrice(4400000, "buy"), // ₹44 Lakh
    priceNumeric: 4400000,
    priceNote: "Starting Guide Price",
    location: "Nagercoil, Kanyakumari Dist.",
    city: "Nagercoil",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629001",
    address: "TLF Green Valley Enclave, Near Collectorate Link Road, Nagercoil, Kanyakumari District",
    status: "Available",
    badge: "Ready for Construction",
    bedrooms: 0,
    bathrooms: 0,
    areaSqFt: 2400,
    carpetAreaSqFt: 2400,
    plotSize: "5.5 Cents (2,400 sq. ft.)",
    yearBuilt: 2024,
    parking: "Dedicated plot boundary & 30-ft internal road access",
    maintenance: "₹1,000 / month (Layout upkeep)",
    securityDeposit: "N/A (Freehold Plot)",
    reraStatus: "Sanctioned Residential Layout (100% Clear Title)",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Approved residential plots in Nagercoil developed by TLF BUILDERS, featuring wide blacktop roads, street illumination, clear Patta documentation, and sweet groundwater.",
    fullDescription: "Located within the fast-growing belt of Nagercoil in Kanyakumari district, TLF Green Valley offers prime residential plots ready for immediate individual house construction. Fully demarcated with individual boundary stones, 30-foot wide internal blacktop roads, underground water pipelines, and complete legal documentation with hassle-free Patta transfer.",
    specifications: [
      { label: "Developer", value: "TLF BUILDERS" },
      { label: "Category", value: "Residential Properties" },
      { label: "Property Type", value: "Residential Plot / Land" },
      { label: "Land Extent", value: "5.5 Cents (2,400 sq. ft.)" },
      { label: "Location", value: "Nagercoil, Kanyakumari District, Tamil Nadu" },
      { label: "Documentation", value: "100% Clear Title, Parent Deeds Verified, Patta Transfer Ready" },
      { label: "Road Access", value: "30-Feet Wide Tar Road Frontage" },
      { label: "Water & Power", value: "Copious Sweet Groundwater Belt, 3-Phase EB Line" }
    ],
    amenities: [
      "Demarcated Individual Plot Boundaries",
      "30-ft Wide Blacktop Tar Roads",
      "Dedicated Street Lighting",
      "Clear Freehold Patta Land",
      "Abundant Potable Water Table",
      "Quick Access to Nagercoil Town & Transit Hubs",
      "100% Vaastu Compliant Orientations",
      "Bank Loan Assistance Available"
    ],
    neighborhoodInfo: "Minutes away from Nagercoil Central, Collectorate Office, top schools, multi-specialty hospitals, and railway terminal."
  },
  {
    id: "tlf-res-2",
    refCode: "TLF-RES-102",
    title: "TLF Heritage 3 BHK Independent House",
    subtitle: "Turnkey standalone individual home on freehold land",
    category: "residential",
    propertyType: "Individual House",
    bhk: "3 BHK",
    price: formatIndianPrice(7800000, "buy"), // ₹78 Lakh
    priceNumeric: 7800000,
    priceNote: "Direct Builder Price",
    location: "Marthandam, Kanyakumari Dist.",
    city: "Marthandam",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629165",
    address: "TLF Royal Enclave, Near Market Junction, Marthandam, Kanyakumari District",
    status: "Ready to Move",
    badge: "Clear Patta Title",
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 2100,
    carpetAreaSqFt: 1750,
    plotSize: "4.8 Cents (2,090 sq. ft.)",
    yearBuilt: 2024,
    parking: "1 Covered Car Bay + 2-Wheeler Parking",
    maintenance: "Individual Maintenance",
    securityDeposit: "N/A (Freehold Home)",
    reraStatus: "Approved Building Plan with Clear Patta Title",
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Turnkey 3 BHK independent house constructed with premium structural materials by TLF BUILDERS in Marthandam on individual freehold land.",
    fullDescription: "Constructed with solid foundation and high-grade materials, this 3 BHK standalone home in Marthandam provides complete privacy and land ownership. Featuring spacious living and dining areas, premium vitrified tiles, modular kitchen fittings, dedicated borewell, separate underground sump, open terrace with expansion capacity, and compound wall with iron gate.",
    specifications: [
      { label: "Builder", value: "TLF BUILDERS" },
      { label: "Category", value: "Residential Properties" },
      { label: "Property Type", value: "Individual House" },
      { label: "Configuration", value: "3 BHK (3 Bedrooms, 3 Baths, Living, Dining, Kitchen)" },
      { label: "Land Area", value: "4.8 Cents (2,090 sq. ft.)" },
      { label: "Built-up Area", value: "2,100 sq. ft. (Ground + First Floor)" },
      { label: "Structure", value: "RCC Framed Structure with G+2 Load Potential" },
      { label: "Location", value: "Marthandam, Kanyakumari District, Tamil Nadu" }
    ],
    amenities: [
      "Private Covered Portico Car Parking",
      "Standalone Open Rooftop Terrace",
      "Individual Deep Borewell & Sump (8,000 Ltrs)",
      "Teak Wood Main Entrance Door",
      "East-Facing Vaastu Design",
      "High Compound Wall with Security Gate",
      "Proximity to Marthandam Bus Stand & Railway Station"
    ],
    neighborhoodInfo: "Prime residential location in Marthandam near English-medium schools, banks, supermarkets, and clinics."
  },
  {
    id: "tlf-res-3",
    refCode: "TLF-RES-103",
    title: "TLF Cape Palms Luxury Villa",
    subtitle: "Custom-crafted 4 BHK contemporary coastal villa",
    category: "residential",
    propertyType: "Villa",
    bhk: "4 BHK",
    price: formatIndianPrice(14500000, "buy"), // ₹1.45 Crore
    priceNumeric: 14500000,
    priceNote: "Direct Developer Price",
    location: "Kanyakumari Coast, Kanyakumari Dist.",
    city: "Kanyakumari",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629702",
    address: "Villa 07, TLF Cape Palms Avenue, Beach Road, Kanyakumari District",
    status: "Available",
    badge: "Premium Signature Villa",
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 3200,
    carpetAreaSqFt: 2650,
    plotSize: "6.5 Cents (2,831 sq. ft.)",
    yearBuilt: 2024,
    parking: "2 Covered Car Parking Bays",
    maintenance: "₹3,500 / month",
    securityDeposit: "N/A (Freehold Luxury Villa)",
    reraStatus: "Registered Real Estate Development Project",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "An architect-designed 4 BHK luxury villa engineered by TLF BUILDERS in Kanyakumari with coastal elegance, private lawn, and double-height living areas.",
    fullDescription: "Constructed with uncompromising structural precision by TLF BUILDERS, this 4 BHK luxury villa blends natural coastal ambience with state-of-the-art comforts. Featuring earthquake-resistant RCC construction, Italian glazed vitrified tiling, teakwood stairways, private sit-out terrace overlooking serene greenery, modular kitchen provisions, and solar water heating.",
    specifications: [
      { label: "Builder & Developer", value: "TLF BUILDERS" },
      { label: "Category", value: "Residential Properties" },
      { label: "Property Type", value: "Luxury Villa" },
      { label: "Configuration", value: "4 BHK Luxury Duplex Villa" },
      { label: "Carpet Area", value: "2,650 sq. ft." },
      { label: "Super Built-up Area", value: "3,200 sq. ft." },
      { label: "Land Extent", value: "6.5 Cents (2,831 sq. ft.)" },
      { label: "Location", value: "Kanyakumari Coast, Kanyakumari District, Tamil Nadu" }
    ],
    amenities: [
      "Private Landscaped Lawn & Sit-out Patio",
      "2 Covered Car Parking Bays",
      "24/7 Gated Security with CCTV",
      "Solar Water Heating System",
      "Vaastu Compliant Architecture",
      "Private Open Rooftop Deck with Coastal Breeze",
      "Individual Sump & Borewell"
    ],
    neighborhoodInfo: "Located along peaceful residential avenues near Kanyakumari town, scenic coastal points, and landmark cultural destinations."
  },
  {
    id: "tlf-res-4",
    refCode: "TLF-RES-104",
    title: "TLF Hillview Heights 2 & 3 BHK Flats",
    subtitle: "Modern urban residences with scenic views and elevator access",
    category: "residential",
    propertyType: "Apartment",
    bhk: "3 BHK",
    price: formatIndianPrice(6200000, "buy"), // ₹62 Lakh
    priceNumeric: 6200000,
    priceNote: "All Inclusive Guide Price",
    location: "Asaripallam, Nagercoil, Kanyakumari Dist.",
    city: "Nagercoil",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629201",
    address: "Tower A, TLF Hillview Heights, Asaripallam Main Road, Nagercoil, Kanyakumari District",
    status: "Available",
    badge: "Immediate Handover",
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 1520,
    carpetAreaSqFt: 1220,
    plotSize: "UDS Land Share: 480 sq. ft.",
    yearBuilt: 2024,
    parking: "1 Reserved Covered Stilt Car Parking",
    maintenance: "₹2,500 / month",
    securityDeposit: "N/A (For Direct Sale)",
    reraStatus: "Approved Residential Apartment Project",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Contemporary 3 BHK flats in Nagercoil built by TLF BUILDERS featuring high natural cross-ventilation, automatic elevators, and power backup.",
    fullDescription: "Designed for comfortable, secure family living in Nagercoil, TLF Hillview Heights combines modern architectural finishes with efficient layout planning. Each apartment boasts excellent day illumination, spacious private balconies, branded sanitary fittings, high-speed passenger elevators, and covered parking.",
    specifications: [
      { label: "Developer", value: "TLF BUILDERS" },
      { label: "Category", value: "Residential Properties" },
      { label: "Property Type", value: "Apartment / Flat" },
      { label: "Configuration", value: "3 Bedrooms, 3 Bathrooms, Living, Dining & Balcony" },
      { label: "Super Built-up Area", value: "1,520 sq. ft." },
      { label: "Carpet Area", value: "1,220 sq. ft." },
      { label: "UDS Land Share", value: "480 sq. ft. Undivided Land Share" },
      { label: "Location", value: "Asaripallam, Nagercoil, Kanyakumari District" }
    ],
    amenities: [
      "Covered Stilt Car Parking",
      "Automatic High-Speed Passenger Elevators",
      "24/7 Security Personnel & CCTV Monitoring",
      "Dedicated Generator Power Backup for Common Areas",
      "Rainwater Harvesting System",
      "Overhead Tank with Potable Water Supply"
    ],
    neighborhoodInfo: "Immediate proximity to Government Medical College, Asaripallam hospitals, schools, and quick connection to central Nagercoil."
  },
  {
    id: "tlf-res-5",
    refCode: "TLF-RES-105",
    title: "TLF Palm Orchard Gated Township",
    subtitle: "New master-planned residential layout with landscaped avenues",
    category: "residential",
    propertyType: "New Residential Development",
    bhk: "Plot / Development",
    price: formatIndianPrice(3500000, "buy"), // ₹35 Lakh
    priceNumeric: 3500000,
    priceNote: "Pre-launch Offer Price",
    location: "Thuckalay, Kanyakumari Dist.",
    city: "Thuckalay",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629175",
    address: "Phase 1, TLF Palm Orchard, Near Padmanabhapuram Link, Thuckalay, Kanyakumari District",
    status: "New Launch",
    badge: "Sanctioned Gated Layout",
    bedrooms: 0,
    bathrooms: 0,
    areaSqFt: 1960,
    carpetAreaSqFt: 1960,
    plotSize: "4.5 Cents (1,960 sq. ft.)",
    yearBuilt: 2025,
    parking: "Demarcated internal avenue parking",
    maintenance: "₹800 / month",
    securityDeposit: "N/A (Freehold Plot)",
    reraStatus: "Statutory Sanctioned Layout with Instant Registration",
    heroImage: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "New gated plotted development by TLF BUILDERS in Thuckalay, offering tranquil greenery, wide tar roads, and immediate villa construction readiness.",
    fullDescription: "TLF Palm Orchard is an eco-conscious residential development in the scenic vicinity of Thuckalay / Padmanabhapuram in Kanyakumari district. Designed in alignment with our motto 'Natural Spaces, Brighter Tomorrows', this plotted layout features paved walking avenues, green plantation, solar street lamps, and legally verified clear titles.",
    specifications: [
      { label: "Developer", value: "TLF BUILDERS" },
      { label: "Category", value: "Residential Properties" },
      { label: "Property Type", value: "New Residential Development" },
      { label: "Plot Area", value: "4.5 Cents (1,960 sq. ft.)" },
      { label: "Zoning", value: "Approved Residential Layout" },
      { label: "Location", value: "Thuckalay, Kanyakumari District, Tamil Nadu" },
      { label: "Legal Status", value: "Clear Title with Instant Patta Transfer" }
    ],
    amenities: [
      "Grand Gated Arch Entry",
      "33-ft Main Tar Roads with Curbs",
      "Solar Powered Street Lighting",
      "Avenue Trees & Children's Play Zone",
      "High Appreciation Corridor",
      "Sweet Drinking Water Table"
    ],
    neighborhoodInfo: "Close to Padmanabhapuram Palace, Thuckalay bus terminus, national highway connectivity, and leading educational institutions."
  },

  // ----------------------------------------------------
  // COMMERCIAL PROPERTIES
  // ----------------------------------------------------
  {
    id: "tlf-com-1",
    refCode: "TLF-COM-201",
    title: "TLF Highway Commercial Development Land",
    subtitle: "High-visibility commercial corner plot with direct highway frontage",
    category: "commercial",
    propertyType: "Commercial Plot",
    bhk: "Commercial Land",
    price: formatIndianPrice(19000000, "buy"), // ₹1.90 Crore
    priceNumeric: 19000000,
    priceNote: "Prime Commercial Asset",
    location: "Nagercoil NH 66 Corridor, Kanyakumari Dist.",
    city: "Nagercoil",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629002",
    address: "Corner Plot, TLF Commercial Frontage, NH 66 Bypass Corridor, Nagercoil, Kanyakumari District",
    status: "Available",
    badge: "Direct Highway Frontage",
    bedrooms: 0,
    bathrooms: 0,
    areaSqFt: 4356,
    carpetAreaSqFt: 4356,
    plotSize: "10 Cents (4,356 sq. ft.)",
    yearBuilt: 2024,
    parking: "Dedicated front commercial customer parking buffer",
    maintenance: "Direct Maintenance",
    securityDeposit: "N/A (Freehold Land)",
    reraStatus: "Commercial Zone Approved with Highway Access NOC",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Strategic commercial land in Nagercoil along NH 66 developed by TLF BUILDERS with 60-ft road frontage, ideal for showrooms, clinics, or commercial complexes.",
    fullDescription: "Occupying an enviable corner along the active NH 66 highway corridor in Nagercoil, this 10-cent commercial land parcel delivers maximum brand visibility and high vehicular footfall. Complete with commercial zoning approvals, clear documentation, and direct highway entry. TLF BUILDERS also offers turnkey design and commercial construction services.",
    specifications: [
      { label: "Promoter", value: "TLF BUILDERS" },
      { label: "Category", value: "Commercial Properties" },
      { label: "Property Type", value: "Commercial Plot / Land" },
      { label: "Land Area", value: "10 Cents (4,356 sq. ft.)" },
      { label: "Frontage", value: "65 Feet Direct Highway Road Frontage" },
      { label: "Zoning", value: "Approved Commercial / Mixed Use" },
      { label: "Location", value: "Nagercoil NH 66 Corridor, Kanyakumari District" }
    ],
    amenities: [
      "Direct Entry from 80-ft Highway Corridor",
      "Dedicated Front Parking Buffer",
      "Commercial 3-Phase EB Line Provision",
      "High Vehicle & Footfall Visibility",
      "Turnkey Commercial Construction Services by TLF BUILDERS",
      "Clear Freehold Patta Documentation"
    ],
    neighborhoodInfo: "Surrounded by automobile showrooms, retail outlets, transit terminals, and established Nagercoil commercial catchments."
  },
  {
    id: "tlf-com-2",
    refCode: "TLF-COM-202",
    title: "TLF Central Market Retail Showroom Space",
    subtitle: "High-footfall ground floor retail shop space in trading centre",
    category: "commercial",
    propertyType: "Shop & Retail Space",
    bhk: "Retail Space",
    price: formatIndianPrice(8500000, "buy"), // ₹85 Lakh
    priceNumeric: 8500000,
    priceNote: "Direct Sale Price",
    location: "Marthandam Junction, Kanyakumari Dist.",
    city: "Marthandam",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629165",
    address: "Unit G-04, TLF Commercial Plaza, Main Market Junction, Marthandam, Kanyakumari District",
    status: "Available",
    badge: "High Footfall Hub",
    bedrooms: 0,
    bathrooms: 1,
    areaSqFt: 1250,
    carpetAreaSqFt: 1050,
    plotSize: "Ground Floor Retail (1,250 sq. ft.)",
    yearBuilt: 2024,
    parking: "Customer parking area in front",
    maintenance: "₹3,000 / month",
    securityDeposit: "N/A (Freehold Commercial Unit)",
    reraStatus: "Approved Commercial Plaza Complex",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Prime ground floor retail showroom space by TLF BUILDERS in the heart of Marthandam market, ideal for jewelry, electronics, textiles, or banking.",
    fullDescription: "Located in the bustling commercial epicenter of Marthandam in Kanyakumari district, this ground-floor retail shop unit provides excellent display frontage, heavy everyday shopper footfall, full glass frontage provision, dedicated washroom, and three-phase power.",
    specifications: [
      { label: "Developer", value: "TLF BUILDERS" },
      { label: "Category", value: "Commercial Properties" },
      { label: "Property Type", value: "Shop & Retail Space" },
      { label: "Built-up Area", value: "1,250 sq. ft." },
      { label: "Floor Level", value: "Ground Floor with Direct Street Frontage" },
      { label: "Location", value: "Marthandam Junction, Kanyakumari District, Tamil Nadu" }
    ],
    amenities: [
      "Wide Glass Frontage & Signage Display Area",
      "Heavy Pedestrian & Vehicular Footfall Zone",
      "Separate Commercial EB Meter (3-Phase)",
      "Attached Private Restroom",
      "Dedicated Loading & Unloading Bay",
      "24/7 Security & CCTV Coverage"
    ],
    neighborhoodInfo: "Situated inside Marthandam's primary commercial market district, surrounded by wholesale stores, banks, and transport hubs."
  },
  {
    id: "tlf-com-3",
    refCode: "TLF-COM-203",
    title: "TLF Corporate Suites & Professional Offices",
    subtitle: "Modern ready-to-occupy corporate office space with amenities",
    category: "commercial",
    propertyType: "Office Space",
    bhk: "Office Floor",
    price: formatIndianPrice(11500000, "buy"), // ₹1.15 Crore
    priceNumeric: 11500000,
    priceNote: "Finished Office Space",
    location: "Collectorate Road, Nagercoil, Kanyakumari Dist.",
    city: "Nagercoil",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629001",
    address: "Level 2, TLF Prime Tower, Collectorate Main Road, Nagercoil, Kanyakumari District",
    status: "Available",
    badge: "Prime Business Corridor",
    bedrooms: 0,
    bathrooms: 2,
    areaSqFt: 2400,
    carpetAreaSqFt: 1980,
    plotSize: "2nd Floor Complete Office Suite (2,400 sq. ft.)",
    yearBuilt: 2024,
    parking: "3 Reserved Basement Parking Slots",
    maintenance: "₹5,000 / month",
    securityDeposit: "N/A (Freehold Office Property)",
    reraStatus: "Approved Commercial Office Building",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Corporate office space in Nagercoil built by TLF BUILDERS, suited for IT companies, consultancies, financial institutions, or diagnostic labs.",
    fullDescription: "Located on prestigious Collectorate Road in Nagercoil, this 2,400 sq. ft. office space offers open floor-plate flexibility, high-speed elevator access, 100% generator power backup, executive restrooms, reception foyer, and dedicated basement parking slots.",
    specifications: [
      { label: "Builder", value: "TLF BUILDERS" },
      { label: "Category", value: "Commercial Properties" },
      { label: "Property Type", value: "Office Space" },
      { label: "Built-up Area", value: "2,400 sq. ft." },
      { label: "Floor", value: "Second Floor (Served by Passenger Lift)" },
      { label: "Location", value: "Collectorate Road, Nagercoil, Kanyakumari District" }
    ],
    amenities: [
      "High-Speed Automatic Passenger Lift",
      "100% Full Power Generator Backup",
      "3 Dedicated Basement Car Parking Slots",
      "Concealed Fiber-Optic Networking Conduits",
      "Executive Restrooms & Pantry Provision",
      "24/7 Security and Intercom Facilities"
    ],
    neighborhoodInfo: "Near District Court, Collectorate Complex, major nationalised banks, audit firms, and administrative centres."
  },
  {
    id: "tlf-com-4",
    refCode: "TLF-COM-204",
    title: "TLF Landmark Multi-Storey Commercial Complex",
    subtitle: "Complete G+3 standalone commercial building for corporate lease / sale",
    category: "commercial",
    propertyType: "Commercial Building",
    bhk: "G+3 Building",
    price: formatIndianPrice(32000000, "buy"), // ₹3.20 Crore
    priceNumeric: 32000000,
    priceNote: "Complete Freehold Asset",
    location: "Colachel Harbour Road, Kanyakumari Dist.",
    city: "Colachel",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629251",
    address: "TLF Landmark Plaza, Main Harbour Arterial Road, Colachel, Kanyakumari District",
    status: "Available",
    badge: "Ready Commercial Complex",
    bedrooms: 0,
    bathrooms: 6,
    areaSqFt: 5800,
    carpetAreaSqFt: 4900,
    plotSize: "12 Cents (5,227 sq. ft.) Land, G+3 Floors",
    yearBuilt: 2024,
    parking: "Spacious Front Courtyard for 10+ Vehicles",
    maintenance: "Direct Commercial Management",
    securityDeposit: "N/A (Standalone Commercial Building)",
    reraStatus: "Approved Commercial Building Plan & Structural Clearance",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A turnkey G+3 commercial building constructed by TLF BUILDERS in Colachel, ideal for hospitals, educational academies, corporate headquarters, or banks.",
    fullDescription: "Built with reinforced industrial-grade RCC framing by TLF BUILDERS, this modern G+3 commercial building in Colachel spans 5,800 sq. ft. of built-up space across 12 cents of prime road-facing freehold land. Features ground-floor showroom spaces, upper office plates, high ceiling clearance, heavy-duty electrical lines, and extensive customer parking.",
    specifications: [
      { label: "Builder & Developer", value: "TLF BUILDERS" },
      { label: "Category", value: "Commercial Properties" },
      { label: "Property Type", value: "Commercial Building" },
      { label: "Land Extent", value: "12 Cents (5,227 sq. ft.)" },
      { label: "Total Built-up Area", value: "5,800 sq. ft. across G+3 Floors" },
      { label: "Structure", value: "Commercial RCC Heavy Load Bearing Structure" },
      { label: "Location", value: "Colachel Harbour Road, Kanyakumari District" }
    ],
    amenities: [
      "Complete Freehold Standalone Building & Land",
      "Spacious Front Courtyard for 10+ Vehicles",
      "High Capacity Commercial 3-Phase Power Substation",
      "Ground Floor High-Ceiling Retail Showrooms",
      "Restrooms on Every Floor Level",
      "Fire Safety Clearance & Double Emergency Staircases"
    ],
    neighborhoodInfo: "Prominently positioned on Colachel's main coastal arterial road with direct transit to Karungal, Thingalnagar, and Nagercoil."
  },
  {
    id: "tlf-com-5",
    refCode: "TLF-COM-205",
    title: "TLF High-Yield Commercial Land Asset",
    subtitle: "High-potential 20-cent commercial investment parcel along bypass",
    category: "commercial",
    propertyType: "Investment Property",
    bhk: "Investment Land",
    price: "Price on Request", // Verified: unpriced, only when supplied
    priceNumeric: 0,
    priceNote: "Price on Direct Consultation",
    location: "Suchindram Bypass, Kanyakumari Dist.",
    city: "Suchindram",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pinCode: "629704",
    address: "TLF Investment Corridor, Main Suchindram Bypass Road, Kanyakumari District",
    status: "Under Enquiry",
    badge: "Strategic Investment",
    bedrooms: 0,
    bathrooms: 0,
    areaSqFt: 8712,
    carpetAreaSqFt: 8712,
    plotSize: "20 Cents (8,712 sq. ft.)",
    yearBuilt: 2024,
    parking: "Unrestricted heavy vehicle approach & parking expanse",
    maintenance: "Direct Holding",
    securityDeposit: "N/A (Freehold Land Parcel)",
    reraStatus: "Clear Patta Land with Commercial Conversion NOC",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A premier 20-cent commercial investment land parcel in Suchindram promoted by TLF BUILDERS, featuring high appreciation potential and direct highway access.",
    fullDescription: "Positioned along the Suchindram bypass connecting Nagercoil and Kanyakumari, this 20-cent property represents a high-yield real estate asset. Suitable for warehousing, luxury hotels/resorts, commercial convention centres, or fuel outlets. Backed by comprehensive legal due diligence from TLF BUILDERS.",
    specifications: [
      { label: "Promoter", value: "TLF BUILDERS" },
      { label: "Category", value: "Commercial Properties" },
      { label: "Property Type", value: "Investment Property" },
      { label: "Total Land Extent", value: "20 Cents (8,712 sq. ft.)" },
      { label: "Frontage", value: "90+ Feet Wide Direct Road Frontage" },
      { label: "Zoning", value: "Commercial / Investment Grade" },
      { label: "Location", value: "Suchindram Bypass, Kanyakumari District, Tamil Nadu" }
    ],
    amenities: [
      "Direct Strategic Bypass Connectivity",
      "90+ Feet Wide Commercial Road Frontage",
      "High Appreciation Capital Growth Corridor",
      "100% Clear Legal Title with Verified Link Documents",
      "Turnkey Project Consulting by TLF BUILDERS"
    ],
    neighborhoodInfo: "Located on the arterial bypass between Nagercoil and Kanyakumari town, near Suchindram Temple junction and trade corridors."
  }
];

// List of all active property categories
export const propertyCategories = [
  { id: "all", name: "All Properties", count: properties.length },
  { id: "residential", name: "Residential Properties", count: properties.filter(p => p.category === 'residential').length },
  { id: "commercial", name: "Commercial Properties", count: properties.filter(p => p.category === 'commercial').length }
];

// Residential specific property types
export const residentialTypesList = [
  "All Residential",
  "Residential Plot",
  "Individual House",
  "Villa",
  "Apartment",
  "New Residential Development"
];

// Commercial specific property types
export const commercialTypesList = [
  "All Commercial",
  "Commercial Plot",
  "Shop & Retail Space",
  "Office Space",
  "Commercial Building",
  "Investment Property"
];

// Master project types list
export const projectTypesList = [
  "All Property Types",
  "Residential Plot",
  "Individual House",
  "Villa",
  "Apartment",
  "New Residential Development",
  "Commercial Plot",
  "Shop & Retail Space",
  "Office Space",
  "Commercial Building",
  "Investment Property"
];

// Locations within Kanyakumari District
export const projectLocationsList = [
  "All Locations in Kanyakumari",
  "Nagercoil, Kanyakumari Dist.",
  "Marthandam, Kanyakumari Dist.",
  "Kanyakumari Coast, Kanyakumari Dist.",
  "Asaripallam, Nagercoil, Kanyakumari Dist.",
  "Thuckalay, Kanyakumari Dist.",
  "Nagercoil NH 66 Corridor, Kanyakumari Dist.",
  "Marthandam Junction, Kanyakumari Dist.",
  "Collectorate Road, Nagercoil, Kanyakumari Dist.",
  "Colachel Harbour Road, Kanyakumari Dist.",
  "Suchindram Bypass, Kanyakumari Dist."
];

/**
 * Helper methods to make it easy to add, edit, or remove property listings
 */
export function addPropertyListing(newListing) {
  if (!newListing.id) {
    newListing.id = `tlf-custom-${Date.now()}`;
  }
  properties.push(newListing);
  return newListing;
}

export function removePropertyListing(propertyId) {
  const index = properties.findIndex(p => p.id === propertyId);
  if (index !== -1) {
    return properties.splice(index, 1)[0];
  }
  return null;
}

export function updatePropertyListing(propertyId, updatedFields) {
  const item = properties.find(p => p.id === propertyId);
  if (item) {
    Object.assign(item, updatedFields);
    return item;
  }
  return null;
}
