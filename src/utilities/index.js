// Require api key from this file, hidden from git.
const { NEWS_API_KEY } = require("../../env.js");

// Setting defaults for path and params
const searchDefaults = {
	params: { q: "test", limit: 10 },
};
const stringifyParams = (params) => {
	// force that api key into the params, stringify all params
	params.api_key = NEWS_API_KEY;
	return Object.keys(params)
		.map((key) => {
			return `${key}=${params[key]}`;
		})
		.join("&");
};

const search = (searchObj = searchDefaults) => {
	// the search object is used to set the params
	const url = `https://api.giphy.com/v1/gifs/search?${stringifyParams(
		searchObj.params
	)}`;

	const data = fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
			return { err, message: "Error fetching data from Giphy" };
		});
	return data;
};
exports.search = search;
