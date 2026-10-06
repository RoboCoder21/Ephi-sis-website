import {
  createIcons,
  Award,
  BookOpen,
  Sprout,
  ShieldCheck,
  Dna,
  TrendingUp,
  ArrowRight,
  Microscope,
  CheckCircle2,
  SunMedium,
  MapPin,
  History,
  Shield,
  Search,
  Sliders,
  BarChart3,
  ShoppingBag,
  CheckSquare,
  Landmark,
  Check,
  Calendar,
  UserCheck,
  User,
  FileText,
  Menu,
  X,
  Send,
  Globe,
  Share2,
  ExternalLink,
  Coffee,
  Wheat,
  Box,
  Disc
} from 'lucide';
import confetti from 'canvas-confetti';

const PACKAGING_TYPES = [
  'Bulk packaging',
  'Tin packaging',
  'Foil pouches packaging',
  'Box packaging'
];

const PACK_SIZES = [
  { label: '50g', grams: 50 },
  { label: '100g', grams: 100 },
  { label: '250g', grams: 250 },
  { label: '500g', grams: 500 },
  { label: '1kg', grams: 1000 }
];

// --------------------------------------------------------------------------
// COMMODITY CATALOG DATABASE (5 AGRICULTURAL SECTORS)
// --------------------------------------------------------------------------
const COMMODITY_CATALOG = [
  {
    id: 'coffee-1',
    category: 'coffee',
    inquiryCategory: 'coffee',
    name: 'Specialty Green Coffee Beans (Arabica Grade 1)',
    badge: 'Single Origin Sourcing',
    image: '/images/ethiopia-coffee-sorting.jpg',
    imageAlt: 'Coffee workers sorting green beans in Addis Ababa, Ethiopia',
    imagePosition: '50% 45%',
    desc: 'High-altitude Arabica green coffee beans directly sourced from African & Latin origins. Screen 18+, moisture 10-12%, zero defects.',
    specs: {
      origin: 'Ethiopia / Colombia',
      grade: 'Grade 1 Specialty Raw',
      moisture: '10.5 - 11.8%',
      processing: 'Washed / Sun-Dried',
      packaging: '60kg GrainPro Jute Sacks',
      incoterms: 'FOB / CIF Global Ports'
    },
    treatment: 'GrainPro Sealed Barrier',
    compliance: 'Phytosanitary & ICO Certified'
  },
  {
    id: 'seed-1',
    category: 'seed',
    inquiryCategory: 'seeds',
    name: 'Emanuel High-Yield Hybrid Corn Seeds (G-9)',
    badge: '99.1% Germination',
    image: '/images/ethiopia-jimma-farmers.jpg',
    imageAlt: 'Farmers preparing a field near Jimma, Ethiopia',
    imagePosition: '50% 40%',
    desc: 'Certified commercial field corn seeds engineered with deep root architecture for drought tolerance and maximum bushel yields.',
    specs: {
      origin: 'North America / EU Certified',
      grade: 'Hybrid F1 Commercial',
      germination: '99.1% ISTA Tested',
      purity: '99.85% Pure Seed',
      packaging: '80,000 Kernel Bags',
      incoterms: 'FOB Sharjah / CIF'
    },
    treatment: 'Fungicide Guard Coating',
    compliance: 'USDA & ISTA Lab Certified'
  },
  {
    id: 'vegetable-op',
    category: 'seed',
    subcategory: 'vegetable',
    inquiryCategory: 'vegetable-op',
    name: 'Open-Pollinated (OP) Vegetable Seeds',
    badge: 'Open-Pollinated (OP)',
    image: '/images/ethiopia-vegetable-market.jpg',
    imageAlt: 'Produce sellers at a market in Dire Dawa, Ethiopia',
    imagePosition: '35% 65%',
    desc: 'Open-pollinated vegetable seeds for commercial growers and distributors. Available in bulk, tin, foil pouches, and box packaging.',
    specs: {
      origin: 'Confirmed by variety',
      grade: 'Open-Pollinated (OP)',
      packaging: PACKAGING_TYPES.join(', '),
      packSizes: PACK_SIZES.map(size => size.label).join(', '),
      incoterms: 'FOB / CIF'
    },
    treatment: 'Specified by variety',
    compliance: 'Documentation available on inquiry'
  },
  {
    id: 'vegetable-hybrid',
    category: 'seed',
    subcategory: 'vegetable',
    inquiryCategory: 'vegetable-hybrid',
    name: 'Hybrid Vegetable Seeds',
    badge: 'Hybrid Varieties',
    image: '/images/ethiopia-vegetable-market.jpg',
    imageAlt: 'People trading fresh vegetables at Dire Dawa market in Ethiopia',
    imagePosition: '60% 65%',
    desc: 'Hybrid vegetable seeds for commercial cultivation and distribution. Available in bulk, tin, foil pouches, and box packaging.',
    specs: {
      origin: 'Confirmed by variety',
      grade: 'Hybrid Vegetable Seeds',
      packaging: PACKAGING_TYPES.join(', '),
      packSizes: PACK_SIZES.map(size => size.label).join(', '),
      incoterms: 'FOB / CIF'
    },
    treatment: 'Specified by variety',
    compliance: 'Documentation available on inquiry'
  },
  {
    id: 'legume-1',
    category: 'legume',
    inquiryCategory: 'legumes',
    name: 'Premium Red Split Lentils & Kabuli Chickpeas',
    badge: 'Sortex Machine Cleaned',
    image: '/images/ethiopia-grain-market.jpg',
    imageAlt: 'Traders beside bags of grain at Jinka Market in Ethiopia',
    imagePosition: '50% 50%',
    desc: 'Export grade split red lentils and 8mm Kabuli chickpeas. High protein content, 99.5% purity, zero foreign matter.',
    specs: {
      origin: 'Canada / Turkey',
      grade: 'Bold 8mm Sortex Cleaned',
      purity: '99.5% Minimum',
      moisture: '11.0 - 13.0%',
      packaging: '50kg Woven PP Bags',
      incoterms: 'FOB / CIF World Seaports'
    },
    treatment: 'Fumigated & Machine Polished',
    compliance: 'Phytosanitary & SGS Documentation'
  },
  {
    id: 'grain-1',
    category: 'grain',
    inquiryCategory: 'wheat',
    name: 'Hard Red Winter Milling Wheat (High Protein)',
    badge: '14% Protein Milling Grade',
    image: '/images/ethiopia-teff-farmers.jpg',
    imageAlt: 'Farmers gathering teff during harvest in Ethiopia',
    imagePosition: '35% 15%',
    desc: 'Bulk commercial milling wheat with 14% dry-basis protein, test weight 78 kg/hl, ideal for commercial flour bakeries.',
    specs: {
      origin: 'Black Sea / Australia',
      grade: 'Class 1 Hard Red Winter',
      protein: '13.5% - 14.2%',
      moisture: '12.0% Maximum',
      packaging: 'Bulk Vessel / 1MT Jumbo Bags',
      incoterms: 'FMC / FOB / CIF'
    },
    treatment: 'Bulk Cargo Inspections',
    compliance: 'GAFTA & Phytosanitary Clearance'
  },
  {
    id: 'cereal-1',
    category: 'grain',
    inquiryCategory: 'rice',
    name: 'Long Grain Basmati & Parboiled Rice Cereals',
    badge: 'Double Polished 1121',
    image: '/images/ethiopia-grain-winnowing.jpg',
    imageAlt: 'Farmers winnowing grain near Axum, Ethiopia',
    imagePosition: '65% 85%',
    desc: 'Premium extra long grain 1121 Basmati and non-basmati parboiled rice. Average grain length 8.35mm, 100% sortex clean.',
    specs: {
      origin: 'India / Pakistan',
      grade: '1121 Steam / Parboiled',
      grainLength: '8.35 mm Avg.',
      brokenRatio: '1.0% Maximum',
      packaging: '25kg & 50kg Non-Woven Bags',
      incoterms: 'FOB / CIF Jebel Ali / Sharjah'
    },
    treatment: 'Vacuum Sortex Packaging',
    compliance: 'ISO & Halal Certified'
  },
  {
    id: 'seed-2',
    category: 'seed',
    inquiryCategory: 'seeds',
    name: 'Crimson Nitrogen Cover Crop Seeds (Bio-N2)',
    badge: 'Soil Nitrogen Restoring',
    image: '/images/ethiopia-jimma-farmers.jpg',
    imageAlt: 'Farmers cultivating agricultural land near Jimma, Ethiopia',
    imagePosition: '65% 45%',
    desc: 'High-purity crimson clover and forage legume seeds that fix atmospheric nitrogen for commercial soil restoration.',
    specs: {
      origin: 'EU / United States',
      grade: 'High Vigor Agronomic',
      germination: '98.4%',
      purity: '99.70%',
      packaging: '50 lb Paper Sacks',
      incoterms: 'FOB / CIF Air Freight'
    },
    treatment: 'Rhizobium Inoculated',
    compliance: 'ISTA Certified Lot'
  }
];

// --------------------------------------------------------------------------
// DOM INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initPackagingOptions();

  // Initialize Lucide Icons
  initIcons();

  // Initialize Header Navigation Scroll Effect
  initHeaderScroll();

  // Initialize Mobile Drawer
  initMobileDrawer();

  // Initialize Hero Live Counter Animation
  initCounters();

  // Initialize Commodity Catalog Renderer & Filters
  initSeedCatalog();

  // Initialize Trade Planner Calculator
  initYieldCalculator();

  // Initialize Modals
  initModals();

  // Initialize Newsletter Form
  initNewsletter();
});

function initPackagingOptions(container = document) {
  container.querySelectorAll('[data-packaging-type]').forEach(select => {
    select.innerHTML = PACKAGING_TYPES.map(type => `<option value="${type}">${type}</option>`).join('');
  });
  container.querySelectorAll('[data-pack-size]').forEach(select => {
    select.innerHTML = PACK_SIZES.map(size => `<option value="${size.grams}">${size.label}</option>`).join('');
  });
}

// Lucide Icon Helper
function initIcons() {
  createIcons({
    icons: {
      Award,
      BookOpen,
      Sprout,
      ShieldCheck,
      Dna,
      TrendingUp,
      ArrowRight,
      Microscope,
      CheckCircle2,
      SunMedium,
      MapPin,
      History,
      Shield,
      Search,
      Sliders,
      BarChart3,
      ShoppingBag,
      CheckSquare,
      Landmark,
      Check,
      Calendar,
      UserCheck,
      User,
      FileText,
      Menu,
      X,
      Send,
      Globe,
      Share2,
      ExternalLink,
      Coffee,
      Wheat,
      Box,
      Disc
    }
  });
}

// --------------------------------------------------------------------------
// HEADER & MOBILE MENU
// --------------------------------------------------------------------------
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const links = drawer.querySelectorAll('a, button');

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// --------------------------------------------------------------------------
// HERO COUNTER ANIMATION
// --------------------------------------------------------------------------
function initCounters() {
  const metricValues = document.querySelectorAll('.metric-value');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricValues.forEach(val => {
          const target = parseFloat(val.dataset.target);
          const suffix = val.dataset.suffix || '';
          const decimals = parseInt(val.dataset.decimals || '0', 10);
          animateValue(val, 0, target, 2000, decimals, suffix);
        });
      }
    });
  }, { threshold: 0.2 });

  const metricsBar = document.querySelector('.hero-metrics-bar');
  if (metricsBar) observer.observe(metricsBar);
}

function animateValue(obj, start, end, duration, decimals, suffix) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = progress * (end - start) + start;
    obj.innerText = current.toFixed(decimals) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// --------------------------------------------------------------------------
// COMMODITY CATALOG RENDERER & INTERACTIVE FILTER
// --------------------------------------------------------------------------
let currentCategory = 'all';
let searchQuery = '';

function initSeedCatalog() {
  renderCatalog();

  // Category Tabs
  const tabs = document.querySelectorAll('#catalog-tabs .filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderCatalog();
    });
  });

  // Services Links Trigger Category Filter
  const serviceBtns = document.querySelectorAll('.pillar-link-btn');
  serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (cat) {
        currentCategory = cat;
        tabs.forEach(t => {
          if (t.dataset.category === cat) t.classList.add('active');
          else t.classList.remove('active');
        });
        renderCatalog();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Search Input
  const searchInput = document.getElementById('seed-search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCatalog();
  });
}

function renderCatalog() {
  const grid = document.getElementById('seed-grid');
  grid.innerHTML = '';

  const filtered = COMMODITY_CATALOG.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory || item.subcategory === currentCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.badge.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--color-bg-card); border-radius: 16px; border: 1px solid var(--color-border);">
        <i data-lucide="sprout" style="font-size: 2.5rem; color: var(--color-text-muted); margin-bottom: 1rem;"></i>
        <h3>No commodities match your search</h3>
        <p style="color: var(--color-text-muted); margin-top: 0.5rem;">Try adjusting your category filter or search keywords.</p>
      </div>
    `;
    initIcons();
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'seed-card';
    card.innerHTML = `
      <div class="seed-card-image-wrap">
        <img src="${item.image}" alt="${item.imageAlt}" class="seed-card-img" style="object-position: ${item.imagePosition};" loading="lazy" decoding="async" />
        <span class="seed-badge">${item.badge}</span>
        <span class="seed-category-tag">${item.category.toUpperCase()}</span>
      </div>
      <div class="seed-card-body">
        <h3 class="seed-card-title">${item.name}</h3>
        <p class="seed-card-desc">${item.desc}</p>
        <div class="seed-specs-list">
          <div class="spec-item">
            <span>Origin</span>
            <span>${item.specs.origin}</span>
          </div>
          <div class="spec-item">
            <span>Grade Standard</span>
            <span>${item.specs.grade}</span>
          </div>
          <div class="spec-item">
            <span>Packaging</span>
            <span>${item.specs.packaging}</span>
          </div>
          <div class="spec-item">
            <span>Incoterms</span>
            <span>${item.specs.incoterms}</span>
          </div>
          ${item.specs.packSizes ? `
            <div class="spec-item spec-item-wide">
              <span>Pack Sizes</span>
              <span>${item.specs.packSizes}</span>
            </div>
          ` : ''}
        </div>
        <div class="seed-card-footer">
          <button class="btn btn-primary spec-modal-trigger" data-id="${item.id}">
            <span>Trade Specifications</span> <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  initIcons();

  // Attach modal trigger click listeners
  document.querySelectorAll('.spec-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      openSeedSpecModal(btn.dataset.id);
    });
  });
}

// --------------------------------------------------------------------------
// COMMODITY SPECIFICATION MODAL
// --------------------------------------------------------------------------
function openSeedSpecModal(seedId) {
  const item = COMMODITY_CATALOG.find(s => s.id === seedId);
  if (!item) return;

  const contentBox = document.getElementById('seed-modal-content');
  contentBox.innerHTML = `
    <div class="modal-header">
      <span class="section-tag">${item.category.toUpperCase()} TRADING SPECS</span>
      <h2>${item.name}</h2>
    </div>
    <div class="modal-body">
      <div class="spec-overview">
        <img src="${item.image}" alt="${item.imageAlt}" style="width: 100%; height: 220px; object-fit: cover; object-position: ${item.imagePosition}; border-radius: 12px;" decoding="async" />
        <div>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1rem;">${item.desc}</p>
          <div style="background: var(--color-forest-100); padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.85rem; font-weight: 700; color: var(--color-forest-800); margin-bottom: 0.75rem;">
            <i data-lucide="shield-check"></i> Quality Documentation: ${item.compliance}
          </div>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--color-forest-900);">International Commercial Trade Parameters</h4>
      <div class="spec-parameters">
        <div>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Sourcing Origin</span>
          <span style="font-weight: 700; color: var(--color-forest-900); font-size: 1rem;">${item.specs.origin}</span>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Grade Classification</span>
          <span style="font-weight: 700; color: var(--color-forest-900); font-size: 1rem;">${item.specs.grade}</span>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Standard Packaging</span>
          <span style="font-weight: 700; color: var(--color-forest-900); font-size: 1rem;">${item.specs.packaging}</span>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Incoterms Available</span>
          <span style="font-weight: 700; color: var(--color-forest-900); font-size: 1rem;">${item.specs.incoterms}</span>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Barrier Protection</span>
          <span style="font-weight: 700; color: var(--color-forest-900); font-size: 1rem;">${item.treatment}</span>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">Customs Compliance</span>
          <span style="font-weight: 700; color: var(--color-harvest-yellow-hover); font-size: 1rem;">UAE Customs</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-6">
          <label for="spec-packaging-type" class="form-label">Packaging Type</label>
          <select id="spec-packaging-type" class="form-select" data-packaging-type></select>
        </div>
        <div class="form-group col-6">
          <label for="spec-pack-size" class="form-label">Pack Size</label>
          <select id="spec-pack-size" class="form-select" data-pack-size></select>
        </div>
      </div>

      <div class="spec-trading-entity">
        <span>Commercial Trading Entity: <strong>Emmanuel</strong></span>
        <span style="font-weight: 700;">Sharjah, UAE</span>
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn btn-secondary" id="close-seed-spec-modal-btn">Close Specs</button>
      <button class="btn btn-accent" id="seed-spec-add-quote-btn">
        <i data-lucide="file-text"></i> Request Trade Inquiry
      </button>
    </div>
  `;

  initPackagingOptions(contentBox);
  initIcons();
  document.getElementById('seed-spec-modal').classList.remove('hidden');

  document.getElementById('close-seed-spec-modal-btn').addEventListener('click', () => {
    document.getElementById('seed-spec-modal').classList.add('hidden');
  });

  document.getElementById('seed-spec-add-quote-btn').addEventListener('click', () => {
    document.getElementById('seed-spec-modal').classList.add('hidden');
    openQuoteModalWithPrefill(item.name, '', {
      commodity: item.inquiryCategory,
      packagingType: document.getElementById('spec-packaging-type').value,
      packSize: document.getElementById('spec-pack-size').value
    });
  });
}

// --------------------------------------------------------------------------
// B2B TRADE PLANNER & LOGISTICS CALCULATOR
// --------------------------------------------------------------------------
function initYieldCalculator() {
  const cropSelect = document.getElementById('calc-crop-select');
  const acreageSlider = document.getElementById('calc-acreage-slider');
  const acreageDisplay = document.getElementById('acreage-display');
  const soilSelect = document.getElementById('calc-soil-select');
  const packagingSelect = document.getElementById('calc-packaging-type');
  const packSizeSelect = document.getElementById('calc-pack-size');

  function calculate() {
    const tons = parseInt(acreageSlider.value, 10);
    const item = cropSelect.value;
    acreageDisplay.innerText = `${tons} Metric Tons`;

    let containersNeeded = '';
    let leadTime = '';
    let certQuality = '';
    let certSub = '';

    if (item === 'coffee') {
      const fcl = Math.ceil(tons / 19.2);
      containersNeeded = `${fcl} x 20ft FCL Container${fcl > 1 ? 's' : ''}`;
      leadTime = '10 - 15 Days (Direct Port Shipment)';
      certQuality = 'SGS & ICO Quality Documentation';
      certSub = 'Phytosanitary & Moisture Tested (10.5%)';
    } else if (item === 'seeds') {
      const fcl = Math.ceil(tons / 20);
      containersNeeded = `${fcl} x 20ft FCL Container${fcl > 1 ? 's' : ''}`;
      leadTime = '12 - 18 Days (Sharjah Port Dispatch)';
      certQuality = '99.1% ISTA Seed Germination';
      certSub = 'High Vigor Hybrid Seed Stock';
    } else if (item === 'vegetable-op' || item === 'vegetable-hybrid') {
      containersNeeded = 'Confirmed per shipment';
      leadTime = 'Confirmed by variety and destination';
      certQuality = 'Variety-Specific Documentation';
      certSub = item === 'vegetable-op' ? 'Open-Pollinated (OP) Vegetable Seeds' : 'Hybrid Vegetable Seeds';
    } else if (item === 'wheat') {
      const fcl = Math.ceil(tons / 24);
      containersNeeded = `${fcl} x 20ft / Bulk Vessel Charter`;
      leadTime = '14 - 21 Days Ocean Freight';
      certQuality = '14% Dry Protein Grade A';
      certSub = 'GAFTA & Phytosanitary Approved';
    } else if (item === 'legumes') {
      const fcl = Math.ceil(tons / 24);
      containersNeeded = `${fcl} x 20ft FCL Container${fcl > 1 ? 's' : ''}`;
      leadTime = '10 - 14 Days Container Dispatch';
      certQuality = 'Sortex Cleaned 99.5% Pure';
      certSub = 'Zero Damage Legumes & Pulses';
    } else if (item === 'rice') {
      const fcl = Math.ceil(tons / 25);
      containersNeeded = `${fcl} x 20ft FCL Container${fcl > 1 ? 's' : ''}`;
      leadTime = '8 - 12 Days Fast Dispatch';
      certQuality = '8.35mm Long Grain 1121';
      certSub = 'ISO & Halal Certified Export';
    }

    const packSize = PACK_SIZES.find(size => size.grams === Number(packSizeSelect.value));
    const packQuantity = Math.ceil((tons * 1000000) / packSize.grams);
    document.getElementById('res-seed-units').innerText = containersNeeded;
    document.getElementById('res-density').innerText = `${packQuantity.toLocaleString()} packs (${packSize.label}, ${packagingSelect.value})`;
    document.getElementById('res-shipping-terms').innerText = soilSelect.options[soilSelect.selectedIndex].text;
    document.getElementById('res-harvest-days').innerText = leadTime;
    document.getElementById('res-yield').innerText = certQuality;
    document.getElementById('res-yield-sub').innerText = certSub;
  }

  cropSelect.addEventListener('change', calculate);
  acreageSlider.addEventListener('input', calculate);
  soilSelect.addEventListener('change', calculate);
  packagingSelect.addEventListener('change', calculate);
  packSizeSelect.addEventListener('change', calculate);

  // Add Calc to Quote
  document.getElementById('add-calc-to-quote-btn').addEventListener('click', () => {
    const cropName = cropSelect.options[cropSelect.selectedIndex].text;
    const tons = acreageSlider.value;
    openQuoteModalWithPrefill(cropName, `${tons} Metric Tons`, {
      commodity: cropSelect.value,
      packagingType: packagingSelect.value,
      packSize: packSizeSelect.value,
      shippingTerms: soilSelect.options[soilSelect.selectedIndex].text
    });
  });

  // Initial calculation
  calculate();
}

// --------------------------------------------------------------------------
// MODALS SYSTEM (PRODUCT SPECS & B2B QUOTE)
// --------------------------------------------------------------------------
function initModals() {
  // Seed Spec Modal close btn
  const closeSeedModalBtn = document.getElementById('close-seed-modal');
  if (closeSeedModalBtn) {
    closeSeedModalBtn.addEventListener('click', () => {
      document.getElementById('seed-spec-modal').classList.add('hidden');
    });
  }

  // Quote Modal
  const quoteModal = document.getElementById('quote-modal');
  document.getElementById('q-crop').addEventListener('change', () => {
    document.getElementById('q-product').value = '';
  });
  const openQuoteBtns = [
    document.getElementById('open-quote-modal-btn'),
    document.getElementById('mobile-quote-btn'),
    document.getElementById('banner-quote-btn')
  ];
  const closeQuoteBtn = document.getElementById('close-quote-modal');

  openQuoteBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        quoteModal.classList.remove('hidden');
      });
    }
  });

  if (closeQuoteBtn) {
    closeQuoteBtn.addEventListener('click', () => {
      quoteModal.classList.add('hidden');
    });
  }

  // Close modals on backdrop click
  [document.getElementById('seed-spec-modal'), quoteModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    }
  });

  // Quote Form Submission & Confetti
  const quoteForm = document.getElementById('quote-form');
  const successMsg = document.getElementById('quote-success-msg');
  const closeSuccessBtn = document.getElementById('close-quote-success-btn');

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    quoteForm.classList.add('hidden');
    successMsg.classList.remove('hidden');

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      quoteModal.classList.add('hidden');
      quoteForm.reset();
      quoteForm.classList.remove('hidden');
      successMsg.classList.add('hidden');
    });
  }
}

function openQuoteModalWithPrefill(cropName, sizeText = '', options = {}) {
  const quoteModal = document.getElementById('quote-modal');

  document.getElementById('q-product').value = cropName;
  document.getElementById('q-acres').value = sizeText;
  if (options.commodity) document.getElementById('q-crop').value = options.commodity;
  if (options.packagingType) document.getElementById('q-packaging-type').value = options.packagingType;
  if (options.packSize) document.getElementById('q-pack-size').value = options.packSize;
  if (options.shippingTerms) document.getElementById('q-notes').value = `Shipping terms: ${options.shippingTerms}`;
  document.getElementById('quote-form').classList.remove('hidden');
  document.getElementById('quote-success-msg').classList.add('hidden');
  quoteModal.classList.remove('hidden');
}

// --------------------------------------------------------------------------
// NEWSLETTER FORM
// --------------------------------------------------------------------------
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const toast = document.getElementById('newsletter-toast');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.classList.remove('hidden');
    form.querySelector('input').value = '';
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 5000);
  });
}
