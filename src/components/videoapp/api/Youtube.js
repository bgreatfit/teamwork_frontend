const KEY = 'AIzaSyD7J4ryUih3UizkMNcSDhidbHhQkz6AOhM';

export default function (term) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?q=${term}
                        &part=snippet&maxResults=5&myRating=like&key=${KEY}`,
        {method:'GET'}
    )
}
