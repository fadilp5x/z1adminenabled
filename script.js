document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }
    });
    
    // Load featured vehicles on homepage
    loadFeaturedVehicles();
});

// Function to load featured vehicles on homepage
async function loadFeaturedVehicles() {
    const featuredContainer = document.getElementById('featured-vehicles');
    
    if (!featuredContainer) return;
    
    try {
        featuredContainer.innerHTML = '<div class="loading">Loading vehicles...</div>';
        
        // Check if supabase client is available
        if (!window.supabaseClient) {
            console.warn('Supabase client not available, showing fallback content');
            showFallbackVehicles();
            return;
        }
        
        // Get just a few featured vehicles for the homepage
        const { data, error } = await window.supabaseClient
            .from('vehicles')
            .select('*')
            .order('order', { ascending: true })
            .order('created_at', { ascending: false })
            .limit(3);
        
        if (error) {
            console.error('Error loading featured vehicles:', error);
            showFallbackVehicles();
            return;
        }
        
        if (!data || data.length === 0) {
            showFallbackVehicles();
            return;
        }
        
        featuredContainer.innerHTML = '';
        
        data.forEach(vehicle => {
            const rateValue = parseInt(vehicle.rate.replace(/\D/g, ''));
            const card = document.createElement('div');
            card.className = 'vehicle-card';
            
            card.innerHTML = `
                <div class="vehicle-badge">${vehicle.type}</div>
                <div class="vehicle-image">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
                </div>
                <div class="vehicle-details">
                    <h3>${vehicle.name}</h3>
                    <p>The perfect blend of luxury and comfort for Kerala's diverse terrains</p>
                    <div class="vehicle-price">
                        <div class="price">₹${rateValue.toLocaleString()} <span>/day</span></div>
                        <a href="book.html?vehicle=${encodeURIComponent(vehicle.name)}" class="vehicle-cta">Book Now</a>
                    </div>
                </div>
            `;
            
            featuredContainer.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading featured vehicles:', error);
        showFallbackVehicles();
    }
}

// Fallback function to show sample vehicles when Supabase fails
function showFallbackVehicles() {
    const featuredContainer = document.getElementById('featured-vehicles');
    const fallbackVehicles = [
        {
            name: "Range Rover Defender",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rate: "70000 INR /Day",
            type: "Premium SUV"
        },
        {
            name: "BMW X5",
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rate: "20000 INR /Day",
            type: "Luxury SUV"
        },
        {
            name: "Mercedes-Benz GLS",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rate: "30000 INR /Day",
            type: "Executive Class"
        }
    ];
    
    featuredContainer.innerHTML = '';
    
    fallbackVehicles.forEach(vehicle => {
        const rateValue = parseInt(vehicle.rate.replace(/\D/g, ''));
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        
        card.innerHTML = `
            <div class="vehicle-badge">${vehicle.type}</div>
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}">
            </div>
            <div class="vehicle-details">
                <h3>${vehicle.name}</h3>
                <p>The perfect blend of luxury and comfort for Kerala's diverse terrains</p>
                <div class="vehicle-price">
                    <div class="price">₹${rateValue.toLocaleString()} <span>/day</span></div>
                    <a href="book.html?vehicle=${encodeURIComponent(vehicle.name)}" class="vehicle-cta">Book Now</a>
                </div>
            </div>
        `;
        
        featuredContainer.appendChild(card);
    });
}