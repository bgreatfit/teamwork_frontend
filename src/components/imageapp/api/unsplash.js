
const API_KEY = 'XB6Vbgf28d19tx8dR4xfF28_ZTXYvY_3uUOKmlHjre4';

export default function (url, term){
    return  fetch(`https://api.unsplash.com/${url}?q=${term}`, {
            method: 'GET',
            headers: {'Authorization': `Client-ID ${API_KEY}`},

        });
}