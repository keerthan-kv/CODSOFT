document.getElementById('crop-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const soil = document.getElementById('soil').value;
    const climate = document.getElementById('climate').value;
    const season = document.getElementById('season').value;
    const month = document.getElementById('month').value;
    const water = document.getElementById('water').value;

    // Dummy data for demonstration purposes
    const cropSuggestions = [
        { crop: 'Wheat', price: 150, waterRequired: 300 },
        { crop: 'Rice', price: 200, waterRequired: 400 },
        { crop: 'Maize', price: 180, waterRequired: 250 },
    ];

    // Logic to suggest the best crop based on user input
    const suitableCrops = cropSuggestions.filter(crop => crop.waterRequired <= water);

    // Find the crop with the highest price from the suitable crops
    const bestCrop = suitableCrops.reduce((prev, current) => (prev.price > current.price) ? prev : current, {});

    // Display the result
    const resultDiv = document.getElementById('result');
    if (bestCrop.crop) {
        resultDiv.innerHTML = `<h2>Recommended Crop: ${bestCrop.crop}</h2>
                               <p>Estimated Price: $${bestCrop.price} per quintal</p>
                               <p>Water Requirement: ${bestCrop.waterRequired} mm</p>`;
    } else {
        resultDiv.innerHTML = '<p>No suitable crops found for the given conditions.</p>';
    }
});
