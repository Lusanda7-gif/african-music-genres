
// Getting the elements from the HTML page

const countrySelect = document.getElementById("countrySelect");

const welcomeMessage = document.getElementById("welcomeMessage");

const countryTitle = document.getElementById("countryTitle");

const genreList = document.getElementById("genreList");


// Adding countries to the dropdown list

countries.forEach(function(country) {

    const option = document.createElement("option");

    option.value = country.name;

    option.textContent = country.name;

    countrySelect.appendChild(option);

});


// This function displays the information about a genre

function displayGenre(genre) {

    // Creating a card for the genre

    const card = document.createElement("article");

    card.className = "genre-card";


    // Displaying the genre name

    const heading = document.createElement("h3");

    heading.textContent = genre.name;

    heading.className = "genre-name";

    card.appendChild(heading);


    // Displaying the genre type

    const type = document.createElement("span");

    type.className = "badge badge-" + genre.type;

    type.textContent = genre.type;

    card.appendChild(type);


    // Displaying the origin status

    const status = document.createElement("span");

    status.className = "badge badge-" + genre.originStatus;

    status.textContent = genre.originStatus;

    card.appendChild(status);


    // Displaying the description

    addInformation(card, "Description", genre.description);


    // Displaying the origin

    addInformation(card, "Origin and originality", genre.origin);


    // Displaying the classification

    addInformation(card, "Classification", genre.classification);


    // Adding the evidence heading

    const evidenceHeading = document.createElement("h4");

    evidenceHeading.textContent = "Evidence";

    card.appendChild(evidenceHeading);


    // Creating a list for the references

    const referenceList = document.createElement("ul");

    referenceList.className = "references";


    // Going through each reference

    genre.references.forEach(function(reference) {

        const item = document.createElement("li");

        item.textContent = reference.text + " ";

        // Creating a link if a source has a URL

        if (reference.url !== "") {

            const link = document.createElement("a");

            link.href = reference.url;

            link.textContent = "Link";

            link.target = "_blank";

            link.rel = "noopener noreferrer";

            item.appendChild(link);

        }

        referenceList.appendChild(item);

    });


    card.appendChild(referenceList);

    // Adding the completed card to the page

    genreList.appendChild(card);

}


// This function adds a heading and paragraph to a card

function addInformation(card, headingText, paragraphText) {

    const heading = document.createElement("h4");

    heading.textContent = headingText;

    const paragraph = document.createElement("p");

    paragraph.textContent = paragraphText;

    card.appendChild(heading);

    card.appendChild(paragraph);

}


// This function displays the selected country's genres

function showCountry(countryName) {

    // Clearing the previous information

    genreList.innerHTML = "";

    // Finding the selected country

    const selectedCountry = countries.find(function(country) {

        return country.name === countryName;

    });


    // If no country has been selected

    if (!selectedCountry) {

        welcomeMessage.textContent =
            "Choose a country above to see its music genres.";

        countryTitle.textContent = "";

        return;

    }


    // Displaying the country name

    countryTitle.textContent = selectedCountry.name;


    // Checking whether the country has music genres

    if (selectedCountry.genres.length === 0) {

        welcomeMessage.textContent =
            "Research for this country is coming soon.";

        return;

    }


    welcomeMessage.textContent =
        "Here are the music genres associated with " +
        selectedCountry.name + ".";


    // Displaying all the genres belonging to that country

    selectedCountry.genres.forEach(function(genre) {

        displayGenre(genre);

    });

}


// Listening for changes in the country dropdown

countrySelect.addEventListener("change", function() {

    showCountry(countrySelect.value);

});
