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
    { name_en: "Microbus", name_ar: "ميكروباص", category: "Bus", description: "Shared small van, informal but fixed routes. Cheap and fast." },
    { name_en: "CTA Public Bus", name_ar: "أتوبيس عام", category: "Bus", description: "Govt. buses with cheap fares and fixed routes." },
    { name_en: "Private Bus", name_ar: "أتوبيس خاص", category: "Bus", description: "Privately owned buses with varying quality and prices." },
    { name_en: "Swvl", name_ar: "سويفل", category: "Cars", description: "App-based bus/car service with fixed routes. Good comfort." },
    { name_en: "Taxi", name_ar: "تاكسي", category: "Cars", description: "Official city taxis with meters (but often not used)." },
    { name_en: "White Taxi", name_ar: "تاكسي أبيض", category: "Cars", description: "Newer taxis with meters. Usually white-colored." },
    { name_en: "Railway", name_ar: "قطار", category: "Other", description: "Egyptian National Railways. Inter-city & cross-country travel." },
    { name_en: "Tram (Alexandria)", name_ar: "ترام الإسكندرية", category: "Other", description: "Old street tram system in Alexandria." },
    { name_en: "Bus Rapid Transit (BRT)", name_ar: "النقل السريع بالحافلات", category: "Other", description: "Planned Cairo fast bus system with dedicated lanes." }
];

let currentLocation = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    populateCities();
    populateTransportation();
    
    // Show sample routes on page load for demonstration
    setTimeout(() => {
        showRouteOptions('Cairo', 'Giza');
    }, 1000);

    // Add city filter event listeners
    document.querySelectorAll('.city-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentCityCategory = this.getAttribute('data-category');
            // Update active state
            document.querySelectorAll('.city-filter-btn').forEach(b => b.classList.remove('ring', 'ring-green-400'));
            this.classList.add('ring', 'ring-green-400');
            populateCities();
        });
    });

    // Add transport filter event listeners
    document.querySelectorAll('.transport-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentTransportCategory = this.getAttribute('data-category');
            // Update active state
            document.querySelectorAll('.transport-filter-btn').forEach(b => b.classList.remove('ring', 'ring-green-400'));
            this.classList.add('ring', 'ring-green-400');
            populateTransportation();
        });
    });
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
        console.log('Sort options button found and listener attached');
        sortOptionsBtn.addEventListener('click', toggleSortOptions);
    } else {
        console.error('Sort options button NOT found!');
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

    // Map is now live Google Maps iframe
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
    // Map is now live Google Maps iframe
}

// Sample route options for demonstration
const sampleRoutes = [
    {
        name: "Metro Line 1 + Microbus",
        icon: "fas fa-subway",
        color: "green",
        time: "40 min",
        cost: "12 EGP",
        transfers: "1 transfer",
        description: "Metro Line 1 from Ramses to Helwan, then Microbus to Maadi",
        recommended: true,
        type: "fastest"
    },
    {
        name: "Public Bus #400",
        icon: "fas fa-bus",
        color: "blue",
        time: "55 min",
        cost: "5 EGP",
        transfers: "Direct",
        description: "Bus 400 from Ramses to Dokki",
        type: "cheapest"
    },
    {
        name: "Microbus Only",
        icon: "fas fa-bus",
        color: "orange",
        time: "50 min",
        cost: "8 EGP",
        transfers: "Direct",
        description: "Microbus route 355 from Ramses to Giza",
        type: "fewest"
    }
];

// Generate route options
function generateRouteOptions(start, destination) {
    return sampleRoutes;
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
    console.log('showRouteOptions called with:', start, destination);
    const allRoutes = generateRouteOptions(start, destination);
    displayRouteOptions(allRoutes);
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

// Filtered cities state
let currentCityCategory = 'all';

// Populate cities with filter
function populateCities() {
    const container = document.getElementById('cities-grid');
    if (!container) return;
    container.innerHTML = '';

    // Filter cities by category
    const filteredCities = currentCityCategory === 'all'
        ? cities
        : cities.filter(city => city.category === currentCityCategory);

    filteredCities.forEach(city => {
        const cityElement = document.createElement('div');
        cityElement.className = 'city-card bg-white overflow-hidden shadow rounded-lg transition duration-300 p-4';
        cityElement.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium text-gray-900">${city.name_en}</h3>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">${city.category}</span>
            </div>
            <p class="text-gray-500 mb-2">${city.name_ar}</p>
            <p class="text-gray-500 mb-2">Navigate ${city.name_en} with our comprehensive transportation guide.</p>
        `;
        container.appendChild(cityElement);
    });
}

// Get city background color based on category
function getCityBackgroundColor(category) {
    const colors = {
        'city': 'bg-blue-600',
        'suburb': 'bg-green-600', 
        'neighborhood': 'bg-purple-600'
    };
    return colors[category] || 'bg-gray-600';
}

// Filtered transportation state
let currentTransportCategory = 'all';

// Populate transportation options with filter
function populateTransportation() {
    const container = document.getElementById('transportation-grid');
    if (!container) return;
    container.innerHTML = '';

    // Filter transportation by 4 main categories
    let filteredTransport;
    if (currentTransportCategory === 'all') {
        filteredTransport = transportationOptions;
    } else if (['Metro', 'Bus', 'Cars'].includes(currentTransportCategory)) {
        filteredTransport = transportationOptions.filter(t => t.category === currentTransportCategory);
    } else if (currentTransportCategory === 'Other') {
        filteredTransport = transportationOptions.filter(t => !['Metro', 'Bus', 'Cars'].includes(t.category));
    } else {
        filteredTransport = transportationOptions;
    }

    filteredTransport.forEach(transport => {
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
                <p class="text-gray-500 mb-2">${transport.description}</p>
                <a href="#" class="text-green-600 text-xs hover:underline mt-2 inline-block" style="font-size: 0.85rem;" onclick="learnMoreTransport('${transport.name_en}'); return false;">Learn more</a>
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

// Set sample route
function setSampleRoute(start, destination) {
    document.getElementById('current-location').value = start;
    document.getElementById('destination').value = destination;
    findRoute();
}

// Explore city function
function exploreCity(cityName) {
    alert(`This would show detailed transportation information for ${cityName}`);
}

// Learn more transport function
function learnMoreTransport(transportName) {
    alert(`This would show detailed information about ${transportName}`);
}

// Google Maps iframe is now embedded directly in HTML
// No need for simulated route markers since we have a live map

// Replace Pound Icon with EGP
document.addEventListener('DOMContentLoaded', function() {
    const currencyElements = document.querySelectorAll('.fa-pound-sign');
    currencyElements.forEach(el => {
        el.classList.remove('fa-pound-sign');
        el.classList.add('fa-egp');
        el.textContent = 'EGP';
    });
});
