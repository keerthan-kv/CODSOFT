
### Putting It All Together

Ensure you have three files: `index.html`, `styles.css`, and `scripts.js`. Place them in the same directory and open `index.html` in a browser to see your interactive frontend.

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crop Recommendation System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Crop Recommendation System</h1>
        <form id="crop-form">
            <label for="soil">Soil Type:</label>
            <select id="soil" name="soil" required>
                <option value="loamy">Loamy</option>
                <option value="clay">Clay</option>
                <option value="sandy">Sandy</option>
                <option value="silt">Silt</option>
            </select>

            <label for="climate">Climate:</label>
            <select id="climate" name="climate" required>
                <option value="tropical">Tropical</option>
                <option value="arid">Arid</option>
                <option value="temperate">Temperate</option>
                <option value="continental">Continental</option>
            </select>

            <label for="season">Season:</label>
            <select id="season" name="season" required>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="monsoon">Monsoon</option>
            </select>

            <label for="month">Month:</label>
            <input type="month" id="month" name="month" required>

            <label for="water">Water Availability (in mm):</label>
            <input type="number" id="water" name="water" required>

            <button type="submit">Submit</button>
        </form>
        <div id="result"></div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
