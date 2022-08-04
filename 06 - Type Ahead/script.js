const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];
fetch(endpoint)
    .then(promise => promise.json())
    .then(data => cities.push(...data)); //**The three points are spreading the data we just pushed */

function findMatches(wordToMatch, cities) { //**We´re gonna search those two arguments */
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi'); //** g: global; i:insensitive */
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); //**This is gonna replace the value the person has searched for with the value it finds withe the Regex  */
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
            <span class="name">${cityName}, ${stateName} </span>
            <span className="population">${numberWithCommas(place.population)}</span>
            </li>

        `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); //** Remember to put the script always at the end of the boyd in the HTML document for this to work */
searchInput.addEventListener('keyup', displayMatches); //** We´ll be able to match the whole thing without the need of doing click outside */

