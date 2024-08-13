// Car-card click handler for modal popup
document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const modal = document.getElementById('popup-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalImages = document.getElementById('modal-images');
        const modalDesc = document.getElementById('modal-description');


        modalTitle.textContent = category;
        modalImages.innerHTML = getImages(category);
        modalDesc.textContent = getDescription(category);

        modal.style.display = "block";
    });
});

// Function to get images and names based on category
function getImages(category) {
    const images = {
        'Exotic Cars': [
            { src: 'cars/exotic cars/nfs Ferrari LaFerrari.jpg', name: 'Ferrari LaFerrari' },
            { src: 'cars/exotic cars/lambo.jpg', name: 'Lamborghini Aventador' },
            { src: 'cars/exotic cars/McLaren P1.jpg', name: 'McLaren P1' },
            { src: 'cars/exotic cars/Porsche 918 Spyder.jpg', name: 'Porsche 918 Spyder' },
            { src: 'cars/exotic cars/Bugatti Veyron.jpg', name: 'Bugatti Veyron' }
        ],
        'Sports Cars': [
            { src: 'cars/sports cars/Nissan GT-R (R35).jpg', name: 'Nissan GT-R (R35)' },
            { src: 'cars/sports cars/Chevrolet Corvette C7 Z06.jpg', name: 'Chevrolet Corvette C7 Z06' },
            { src: 'cars/sports cars/BMW M4.jpg', name: 'BMW M4' },
            { src: 'cars/sports cars/Audi R8 V10.jpg', name: 'Audi R8 V10' },
            { src: 'cars/sports cars/Porsche 911 Carrera S.jpg', name: 'Porsche 911 Carrera S' }
        ],
        'Muscle Cars': [
            { src: 'cars/Muscle Cars/Ford Mustang RTR.jpg', name: 'Ford Mustang RTR' },
            { src: 'cars/Muscle Cars/Dodge Charger RT.jpg', name: 'Dodge Charger R/T' },
            { src: 'cars/Muscle Cars/Chevrolet Camaro SS.jpg', name: 'Chevrolet Camaro SS' },
            { src: 'cars/Muscle Cars/Dodge Challenger SRT Hellcat.jpg', name: 'Dodge Challenger SRT Hellcat' },
            { src: 'cars/Muscle Cars/Pontiac GTO.jpg', name: 'Pontiac GTO' }
        ],
        'Supercars': [
            { src: 'cars/Supercars/McLaren 720S.jpg', name: 'McLaren 720S' },
            { src: 'cars/Supercars/Ferrari 488 GTB.jpg', name: 'Ferrari 488 GTB' },
            { src: 'cars/Supercars/Lamborghini Huracán.jpg', name: 'Lamborghini Huracán' },
            { src: 'cars/Supercars/Aston Martin V12 Vantage S.jpg', name: 'Aston Martin V12 Vantage S' },
            { src: 'cars/Supercars/Porsche 911 GT2 RS.jpg', name: 'Porsche 911 GT2 RS' }
        ],
        'Hypercars': [
            { src: 'cars/Hypercars/Koenigsegg Jesko.jpg', name: 'Koenigsegg Jesko' },
            { src: 'cars/Hypercars/Bugatti Chiron.jpg', name: 'Bugatti Chiron' },
            { src: 'cars/Hypercars/Pagani Huayra.jpg', name: 'Pagani Huayra' },
            { src: 'cars/Hypercars/Hennessey Venom GT.jpg', name: 'Hennessey Venom GT' }
        ],
        'Tuner Cars': [
            { src: 'cars/Tuner Cars/Nissan 350Z.jpg', name: 'Nissan 350Z' },
            { src: 'cars/Tuner Cars/Toyota Supra.jpg', name: 'Toyota Supra' },
            { src: 'cars/Tuner Cars/Mazda RX-7.jpg', name: 'Mazda RX-7' },
            { src: 'cars/Tuner Cars/Honda NSX.jpg', name: 'Honda NSX' },
            { src: 'cars/Tuner Cars/Mitsubishi Lancer Evolution X.jpg', name: 'Mitsubishi Lancer Evolution X' }
        ],
        'Rally Cars': [
            { src: 'cars/Rally Cars/Subaru WRX STI.jpg', name: 'Subaru WRX STI' },
            { src: 'cars/Rally Cars/Mitsubishi Lancer Evolution IX.jpg', name: 'Mitsubishi Lancer Evolution IX' },
            { src: 'cars/Rally Cars/Ford Fiesta ST.jpg', name: 'Ford Fiesta ST' },
            { src: 'cars/Rally Cars/Audi Quattro.jpg', name: 'Audi Quattro' },
            { src: 'cars/Rally Cars/Toyota Celica GT-Four.jpg', name: 'Toyota Celica GT-Four' }
        ],
        'SUVs and Off-Road Vehicles': [
            { src: 'cars/SUVs and Off-Road Vehicles/Ford Raptor.jpg', name: 'Ford Raptor' },
            { src: 'cars/SUVs and Off-Road Vehicles/BMW X6 M.jpg', name: 'BMW X6 M' }
        ],
        'Classic Cars': [
            { src: 'cars/Classic Cars/Ford Mustang 1965.jpg', name: 'Ford Mustang 1965' },
            { src: 'cars/Classic Cars/Aston Martin DB5.jpg', name: 'Aston Martin DB5' },
            { src: 'cars/Classic Cars/BMW M3 E30.jpg', name: 'BMW M3 E30' }
        ],
        'Electric Cars': [
            { src: 'cars/electric Cars/wasted.jpg', name: 'STILL WATCHING?' }
        ],
    };

    return images[category].map(image => `
        <div>
            <img src="${image.src}" alt="${image.name}">
            <p>${image.name}</p>
        </div>
    `).join('');
}

// Function to get description based on category
function getDescription(category) {
    switch(category) {
        case 'Exotic Cars':
            return 'Experience the thrill of driving rare and luxurious exotic cars that turn heads on every street.';
        case 'Sports Cars':
            return 'High performance and agility define our range of sports cars, perfect for the racing enthusiast.';
        case 'Muscle Cars':
            return 'Feel the raw power and classic design of muscle cars that have stood the test of time.';
        case 'Supercars':
            return 'Push the limits with supercars that combine cutting-edge technology with unparalleled speed.';
        case 'Hypercars':
            return 'Enter the realm of hypercars where innovation meets extreme performance.';
        case 'Tuner Cars':
            return 'Customize and tune cars to perfection, showcasing personal style and performance tweaks.';
        case 'Rally Cars':
            return 'Conquer diverse terrains with rally cars built for endurance and versatility.';
        case 'SUVs and Off-Road Vehicles':
            return 'Explore off-road adventures with SUVs designed for rugged landscapes and comfort.';
        case 'Classic Cars':
            return 'Take a trip down memory lane with classic cars that embody timeless elegance.';
        case 'Electric Cars':
            return 'REAL MAN DO NOT DRIVE IT.';
        default:
            return 'Explore our diverse range of cars.';
    }
}

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('popup-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
})



document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function() {
            const videoSrc = card.getAttribute('data-video');
            const text = card.getAttribute('data-text');
            
            modalVideo.querySelector('source').setAttribute('src', videoSrc);
            modalVideo.load();
            modalText.textContent = text;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

