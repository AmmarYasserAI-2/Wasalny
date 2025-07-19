// Egyptian Cities Data
const cities = [
    { name_en: "Cairo", name_ar: "القاهرة", category: "city" },
    { name_en: "Alexandria", name_ar: "الإسكندرية", category: "city" },
    { name_en: "Giza", name_ar: "الجيزة", category: "city" },
    { name_en: "Port Said", name_ar: "بورسعيد", category: "city" },
    { name_en: "Suez", name_ar: "السويس", category: "city" },
    { name_en: "Luxor", name_ar: "الأقصر", category: "city" },
    { name_en: "Aswan", name_ar: "أسوان", category: "city" },
    { name_en: "Tanta", name_ar: "طنطا", category: "city" },
    { name_en: "Mansoura", name_ar: "المنصورة", category: "city" },
    { name_en: "Faiyum", name_ar: "الفيوم", category: "city" },
    { name_en: "Zagazig", name_ar: "الزقازيق", category: "city" },
    { name_en: "Ismailia", name_ar: "الإسماعيلية", category: "city" },
    { name_en: "Damietta", name_ar: "دمياط", category: "city" },
    { name_en: "Damanhur", name_ar: "دمنهور", category: "city" },
    { name_en: "Beni Suef", name_ar: "بني سويف", category: "city" },
    { name_en: "Qena", name_ar: "قنا", category: "city" },
    { name_en: "Sohag", name_ar: "سوهاج", category: "city" },
    { name_en: "6th of October City", name_ar: "مدينة 6 أكتوبر", category: "suburb" },
    { name_en: "10th of Ramadan City", name_ar: "مدينة 10 رمضان", category: "suburb" },
    { name_en: "New Cairo", name_ar: "القاهرة الجديدة", category: "suburb" },
    { name_en: "Sheikh Zayed City", name_ar: "مدينة الشيخ زايد", category: "suburb" },
    { name_en: "Nasr City", name_ar: "مدينة نصر", category: "neighborhood" },
    { name_en: "Heliopolis", name_ar: "مصر الجديدة", category: "neighborhood" },
    { name_en: "Maadi", name_ar: "المعادي", category: "neighborhood" },
    { name_en: "Zamalek", name_ar: "الزمالك", category: "neighborhood" },
    { name_en: "Downtown Cairo", name_ar: "وسط البلد", category: "neighborhood" },
    { name_en: "Shubra El-Kheima", name_ar: "شبرا الخيمة", category: "city" },
    { name_en: "Helwan", name_ar: "حلوان", category: "neighborhood" },
    { name_en: "New Heliopolis (Masr El Gedida)", name_ar: "مصر الجديدة", category: "neighborhood" },
    { name_en: "Abbassia", name_ar: "العباسية", category: "neighborhood" },
    { name_en: "Ain Shams", name_ar: "عين شمس", category: "neighborhood" },
    { name_en: "Al Rehab", name_ar: "الرحاب", category: "neighborhood" },
    { name_en: "El Nozha", name_ar: "النزهة", category: "neighborhood" },
    { name_en: "El Tagamoa El Khames", name_ar: "التجمع الخامس", category: "neighborhood" }
];

// Transportation Options Data
const transportationOptions = [
    { name_en: "Metro Line 1", name_ar: "الخط الأول للمترو", category: "Metro", description: "Oldest line, from El Marg to Helwan. Covers major downtown stations." },
    { name_en: "Metro Line 2", name_ar: "الخط الثاني للمترو", category: "Metro", description: "From Shubra El-Kheima to El Mounib. Passes Cairo University, downtown." },
    { name_en: "Metro Line 3", name_ar: "الخط الثالث للمترو", category: "Metro", description: "From Airport (in future) to Imbaba. Covers Heliopolis, Abbasia." },
    { name_en: "Microbus", name_ar: "ميكروباص", category: "Minibus", description: "Shared small van, informal but fixed routes. Cheap and fast." },
    { name_en: "CTA Public Bus", name_ar: "أتوبيس عام", category: "Bus", description: "Govt. buses with cheap fares and fixed routes." },
    { name_en: "CTA Air-Conditioned Bus", name_ar: "أتوبيس مكيف", category: "Bus", description: "More comfortable gov. buses, slightly higher price." },
    { name_en: "Private Bus", name_ar: "أتوبيس خاص", category: "Bus", description: "Privately owned buses with varying quality and prices." },
    { name_en: "Ride-Sharing (Uber/Careem)", name_ar: "اوبر / كريم", category: "Ride-Sharing", description: "Private car apps. Safe and convenient but pricier." },
    { name_en: "Swvl", name_ar: "سويفل", category: "Shuttle Bus", description: "App-based bus service with fixed routes. Good comfort." },
    { name_en: "TokTok", name_ar: "توك توك", category: "Rickshaw", description: "Small 3-wheeler used in inner neighborhoods and villages." },
    { name_en: "Taxi", name_ar: "تاكسي", category: "Taxi", description: "Official city taxis with meters (but often not used)." },
    { name_en: "White Taxi", name_ar: "تاكسي أبيض", category: "Taxi", description: "Newer taxis with meters. Usually white-colored." },
    { name_en: "Railway", name_ar: "قطار", category: "Train", description: "Egyptian National Railways. Inter-city & cross-country travel." },
    { name_en: "Tram (Alexandria)", name_ar: "ترام الإسكندرية", category: "Tram", description: "Old street tram system in Alexandria." },
    { name_en: "Bus Rapid Transit (BRT)", name_ar: "النقل السريع بالحافلات", category: "BRT", description: "Planned Cairo fast bus system with dedicated lanes." }
];

// Remove all Google Maps API usage and simulate map/route markers

// Global variables
let currentLocation = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    populateCities();
    populateTransportation();
});

// Setup event listeners
function setupEventListeners() {
    // Locate me button
    const locateMeBtn = document.getElementById('locate-me');
    if (locateMeBtn) {
        locateMeBtn.addEventListener('click', locateMe);
    }

    // Find route button
    const findRouteBtn = document.getElementById('find-route-btn');
    if (findRouteBtn) {
        findRouteBtn.addEventListener('click', findRoute);
    }

    // Plan journey button
    const planJourneyBtn = document.getElementById('plan-journey-btn');
    if (planJourneyBtn) {
        planJourneyBtn.addEventListener('click', planJourney);
    }

    // View map button
    const viewMapBtn = document.getElementById('view-map-btn');
    if (viewMapBtn) {
        viewMapBtn.addEventListener('click', viewFullMap);
    }

    // Sort options
    const sortOptionsBtn = document.getElementById('sort-options');
    if (sortOptionsBtn) {
        sortOptionsBtn.addEventListener('click', toggleSortOptions);
    }

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Navigation smooth scroll
    setupSmoothScroll();
}

// Locate Me functionality (simulated)
function locateMe() {
    // Simulate a fixed location in Cairo
    currentLocation = { lat: 30.0444, lng: 31.2357 };
    document.getElementById('current-location').value = 'Cairo, Egypt';
    // Optionally, store in localStorage/cookies
    try {
        localStorage.setItem('wasanly_current_location', 'Cairo, Egypt');
    } catch (e) {}
}

// Find Route functionality
function findRoute() {
    const startLocation = document.getElementById('current-location').value;
    const destination = document.getElementById('destination').value;

    if (!startLocation || !destination) {
        alert('Please enter both start and destination locations.');
        return;
    }

    // Update map display
    document.getElementById('start-location').textContent = startLocation;
    document.getElementById('end-location').textContent = destination;

    // Show route options
    showRouteOptions(startLocation, destination);

    // Simulate route on static map
    simulateMapRoute(startLocation, destination);
}

// Plan Journey functionality
function planJourney() {
    const startLocation = document.getElementById('current-location').value;
    const destination = document.getElementById('destination').value;

    if (!startLocation || !destination) {
        alert('Please enter both start and destination locations.');
        return;
    }

    // Simulate route planning
    const routes = generateRouteOptions(startLocation, destination);
    displayRouteOptions(routes);
    simulateMapRoute(startLocation, destination);
}

// Generate route options
function generateRouteOptions(start, destination) {
    const options = [
        {
            name: "Metro + Microbus",
            icon: "fas fa-subway",
            color: "green",
            time: "35 min",
            cost: "15 EGP",
            transfers: "1 transfer",
            description: "Metro line 2 → Microbus 355 at Opera",
            recommended: true
        },
        {
            name: "Public Bus",
            icon: "fas fa-bus",
            color: "blue",
            time: "50 min",
            cost: "5 EGP",
            transfers: "Direct",
            description: "Bus 400 from Ramses to Dokki"
        },
        {
            name: "Ride Share",
            icon: "fas fa-taxi",
            color: "purple",
            time: "20 min",
            cost: "65 EGP",
            transfers: "Direct",
            description: "Uber or Careem available now"
        },
        {
            name: "Microbus Only",
            icon: "fas fa-bus",
            color: "orange",
            time: "45 min",
            cost: "8 EGP",
            transfers: "Direct",
            description: "Microbus route 355"
        }
    ];

    return options;
}

// Display route options
function displayRouteOptions(routes) {
    const container = document.getElementById('route-options');
    if (!container) return;

    container.innerHTML = '';

    routes.forEach((route, index) => {
        const routeElement = document.createElement('div');
        routeElement.className = 'route-option border border-gray-200 rounded-lg p-4 transition duration-300 cursor-pointer hover:border-green-300';
        routeElement.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0 bg-${route.color}-100 rounded-full p-3">
                    <i class="${route.icon} text-${route.color}-600 text-xl"></i>
                </div>
                <div class="ml-4 flex-1">
                    <div class="flex items-center justify-between">
                        <h4 class="text-lg font-medium text-gray-900">${route.name}</h4>
                        ${route.recommended ? '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Recommended</span>' : ''}
                    </div>
                    <div class="mt-1 flex items-center text-sm text-gray-500">
                        <i class="fas fa-clock mr-1"></i>
                        <span>${route.time}</span>
                        <span class="mx-2">•</span>
                        <span class="mr-1">EGP</span>
                        <span>${route.cost}</span>
                        <span class="mx-2">•</span>
                        <i class="fas fa-exchange-alt mr-1"></i>
                        <span>${route.transfers}</span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <i class="fas fa-info-circle mr-1 text-blue-500"></i>
                        <span>${route.description}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(routeElement);
    });
}

// Show route options
function showRouteOptions(start, destination) {
    const routes = generateRouteOptions(start, destination);
    displayRouteOptions(routes);
}

// View full map
function viewFullMap() {
    const startLocation = document.getElementById('current-location').value;
    const destination = document.getElementById('destination').value;

    if (!startLocation || !destination) {
        alert('Please enter both start and destination locations first.');
        return;
    }

    // In a real app, this would open a full-screen map
    alert('Opening full-screen map with route from ' + startLocation + ' to ' + destination);
}

// Toggle sort options
function toggleSortOptions() {
    const button = document.getElementById('sort-options');
    const options = ['Fastest', 'Cheapest', 'Fewest Transfers'];
    const currentText = button.textContent.split(': ')[1];
    const currentIndex = options.indexOf(currentText);
    const nextIndex = (currentIndex + 1) % options.length;
    
    button.innerHTML = `Sort by: ${options[nextIndex]} <i class="fas fa-chevron-down ml-2"></i>`;
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// Setup smooth scroll navigation
function setupSmoothScroll() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active state
                updateActiveNavState(this);
            }
        });
    });

    // Handle scroll-based active state
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
                updateActiveNavStateBySection(currentSection);
            }
        });
    });
}

// Update active navigation state
function updateActiveNavState(activeLink) {
    document.querySelectorAll('nav a').forEach(link => {
        if (!link.classList.contains('bg-green-600')) {
            link.classList.remove('text-gray-900');
            link.classList.add('text-gray-500');
        }
    });
    
    if (!activeLink.classList.contains('bg-green-600')) {
        activeLink.classList.remove('text-gray-500');
        activeLink.classList.add('text-gray-900');
    }
}

// Update active navigation state by section
function updateActiveNavStateBySection(sectionId) {
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}` && !link.classList.contains('bg-green-600')) {
            link.classList.remove('text-gray-500');
            link.classList.add('text-gray-900');
        } else if (!link.classList.contains('bg-green-600')) {
            link.classList.remove('text-gray-900');
            link.classList.add('text-gray-500');
        }
    });
}

// Populate cities
function populateCities() {
    const container = document.getElementById('cities-grid');
    if (!container) return;

    cities.forEach(city => {
        const cityElement = document.createElement('div');
        cityElement.className = 'city-card bg-white overflow-hidden shadow rounded-lg transition duration-300';
        
        // Get a relevant image for the city
        const imageUrl = getCityImage(city.name_en);
        
        cityElement.innerHTML = `
            <div class="h-48 bg-cover bg-center" style="background-image: url('${imageUrl}');"></div>
            <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-medium text-gray-900">${city.name_en}</h3>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">${city.category}</span>
                </div>
                <p class="text-gray-500 mb-2">${city.name_ar}</p>
                <p class="text-gray-500 mb-4">Navigate ${city.name_en} with our comprehensive transportation guide.</p>
                <div class="flex items-center text-sm text-gray-500">
                    <i class="fas fa-bus mr-2 text-green-600"></i>
                    <span>Multiple Routes</span>
                    <span class="mx-2">•</span>
                    <i class="fas fa-subway mr-2 text-blue-600"></i>
                    <span>Public Transport</span>
                </div>
                <button class="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300" onclick="exploreCity('${city.name_en}')">
                    Explore ${city.name_en}
                </button>
            </div>
        `;
        container.appendChild(cityElement);
    });
}

// Get city image
function getCityImage(cityName) {
    const cityImages = {
        'Cairo': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'Alexandria': 'https://images.unsplash.com/photo-1566378246598-5b11a0b20e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'Giza': 'https://images.unsplash.com/photo-1584735429095-25c8d794e4a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'Luxor': 'https://images.unsplash.com/photo-1581434681313-9de1ec0d1d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'Aswan': 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };
    
    return cityImages[cityName] || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
}

// Populate transportation options
function populateTransportation() {
    const container = document.getElementById('transportation-grid');
    if (!container) return;

    transportationOptions.forEach(transport => {
        const transportElement = document.createElement('div');
        transportElement.className = 'transportation-card bg-white overflow-hidden shadow rounded-lg transition duration-300';
        
        const iconClass = getTransportIcon(transport.category);
        const colorClass = getTransportColor(transport.category);
        
        transportElement.innerHTML = `
            <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 bg-${colorClass}-100 rounded-full p-3">
                            <i class="${iconClass} text-${colorClass}-600 text-xl"></i>
                        </div>
                        <div class="ml-3">
                            <h3 class="text-lg font-medium text-gray-900">${transport.name_en}</h3>
                            <p class="text-sm text-gray-500">${transport.name_ar}</p>
                        </div>
                    </div>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">${transport.category}</span>
                </div>
                <p class="text-gray-500 mb-4">${transport.description}</p>
                <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300" onclick="learnMoreTransport('${transport.name_en}')">
                    Learn More
                </button>
            </div>
        `;
        container.appendChild(transportElement);
    });
}

// Get transport icon
function getTransportIcon(category) {
    const icons = {
        'Metro': 'fas fa-subway',
        'Bus': 'fas fa-bus',
        'Minibus': 'fas fa-bus',
        'Ride-Sharing': 'fas fa-taxi',
        'Shuttle Bus': 'fas fa-bus',
        'Rickshaw': 'fas fa-motorcycle',
        'Taxi': 'fas fa-taxi',
        'Train': 'fas fa-train',
        'Tram': 'fas fa-tram',
        'BRT': 'fas fa-bus'
    };
    return icons[category] || 'fas fa-bus';
}

// Get transport color
function getTransportColor(category) {
    const colors = {
        'Metro': 'green',
        'Bus': 'blue',
        'Minibus': 'orange',
        'Ride-Sharing': 'purple',
        'Shuttle Bus': 'indigo',
        'Rickshaw': 'yellow',
        'Taxi': 'red',
        'Train': 'gray',
        'Tram': 'yellow',
        'BRT': 'green'
    };
    return colors[category] || 'blue';
}

// Explore city function
function exploreCity(cityName) {
    alert(`This would show detailed transportation information for ${cityName}`);
}

// Learn more transport function
function learnMoreTransport(transportName) {
    alert(`This would show detailed information about ${transportName}`);
}

// Simulate route markers on the static map
function simulateMapRoute(start, end) {
    const markersContainer = document.getElementById('simulated-route-markers');
    if (!markersContainer) return;
    markersContainer.innerHTML = '';

    // For simulation, use fixed positions for start/end
    // These are relative to the Egypt map image (tweak as needed)
    const mapWidth = 600; // px (matches image width)
    const mapHeight = 600; // px (matches image height)
    // Example: Cairo (center), Alexandria (top left), Aswan (bottom)
    const cityPositions = {
        'Cairo': { x: 320, y: 320 },
        'Alexandria': { x: 120, y: 120 },
        'Giza': { x: 300, y: 340 },
        'Aswan': { x: 350, y: 520 },
        'Luxor': { x: 340, y: 470 },
        'Port Said': { x: 500, y: 120 },
        'Suez': { x: 500, y: 300 },
        'Tanta': { x: 250, y: 220 },
        'Mansoura': { x: 350, y: 180 },
        'Faiyum': { x: 250, y: 400 },
        'Zagazig': { x: 400, y: 200 },
        'Ismailia': { x: 480, y: 200 },
        'Damietta': { x: 480, y: 100 },
        'Damanhur': { x: 180, y: 180 },
        'Beni Suef': { x: 320, y: 400 },
        'Qena': { x: 360, y: 480 },
        'Sohag': { x: 350, y: 500 },
        '6th of October City': { x: 250, y: 350 },
        '10th of Ramadan City': { x: 420, y: 220 },
        'New Cairo': { x: 370, y: 340 },
        'Sheikh Zayed City': { x: 260, y: 340 },
        'Nasr City': { x: 340, y: 320 },
        'Heliopolis': { x: 350, y: 310 },
        'Maadi': { x: 330, y: 350 },
        'Zamalek': { x: 320, y: 310 },
        'Downtown Cairo': { x: 320, y: 320 },
        'Shubra El-Kheima': { x: 320, y: 300 },
        'Helwan': { x: 340, y: 370 },
        'Abbassia': { x: 340, y: 315 },
        'Ain Shams': { x: 350, y: 300 },
        'Al Rehab': { x: 390, y: 320 },
        'El Nozha': { x: 360, y: 300 },
        'El Tagamoa El Khames': { x: 400, y: 340 }
    };
    // Helper to get city position or random
    function getPos(city) {
        for (const key in cityPositions) {
            if (city.toLowerCase().includes(key.toLowerCase())) return cityPositions[key];
        }
        // Default: center
        return { x: 320, y: 320 };
    }
    const startPos = getPos(start);
    const endPos = getPos(end);
    // Place start marker
    const startMarker = document.createElement('div');
    startMarker.style.position = 'absolute';
    startMarker.style.left = `${startPos.x - 8}px`;
    startMarker.style.top = `${startPos.y - 8}px`;
    startMarker.style.width = '16px';
    startMarker.style.height = '16px';
    startMarker.style.background = '#22c55e';
    startMarker.style.border = '2px solid #fff';
    startMarker.style.borderRadius = '50%';
    startMarker.style.boxShadow = '0 0 6px #22c55e88';
    startMarker.title = 'Start';
    markersContainer.appendChild(startMarker);
    // Place end marker
    const endMarker = document.createElement('div');
    endMarker.style.position = 'absolute';
    endMarker.style.left = `${endPos.x - 8}px`;
    endMarker.style.top = `${endPos.y - 8}px`;
    endMarker.style.width = '16px';
    endMarker.style.height = '16px';
    endMarker.style.background = '#ef4444';
    endMarker.style.border = '2px solid #fff';
    endMarker.style.borderRadius = '50%';
    endMarker.style.boxShadow = '0 0 6px #ef444488';
    endMarker.title = 'Destination';
    markersContainer.appendChild(endMarker);
    // Draw a simple line (SVG)
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', mapWidth);
    svg.setAttribute('height', mapHeight);
    svg.style.position = 'absolute';
    svg.style.left = '0';
    svg.style.top = '0';
    svg.style.pointerEvents = 'none';
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', startPos.x);
    line.setAttribute('y1', startPos.y);
    line.setAttribute('x2', endPos.x);
    line.setAttribute('y2', endPos.y);
    line.setAttribute('stroke', '#0ea5e9');
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-dasharray', '8,8');
    svg.appendChild(line);
    markersContainer.appendChild(svg);
}

// Replace Pound Icon with EGP
document.addEventListener('DOMContentLoaded', function() {
    const currencyElements = document.querySelectorAll('.fa-pound-sign');
    currencyElements.forEach(el => {
        el.classList.remove('fa-pound-sign');
        el.classList.add('fa-egp');
        el.textContent = 'EGP';
    });
});
