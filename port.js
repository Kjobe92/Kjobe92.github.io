console.log('Movies!')
let baseUrl = `https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=`
const key = "Token token=yd8WzkWNEEzGtqMSgiZBrwtt"
let url;

function fetchResults(e) {
    e.preventDefault();
    url = `${baseUrl}`;
    console.log("URL:", url)

fetch(url, {
	"method": "GET",
	"headers": new Headers ({
		"authorization": "Token token=yd8WzkWNEEzGtqMSgiZBrwtt",
		"x-rapidapi-key": "e6d1d9d0b1msha77d8563694d231p129841jsna2a49423e4ca",
		"x-rapidapi-host": "juanroldan1989-moviequotes-v1.p.rapidapi.com"
	})
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
})
}
