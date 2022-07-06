// Require api key from this file, hidden from git.
const { NEWS_API_KEY } = require("../../env.js");

// Setting defaults for path and params
const searchDefaults = {
	path: "top-headlines",
	params: {
		country: "us",
	},
};
const stringifyParams = (params) => {
	// force that api key into the params, stringify all params
	params.apiKey = NEWS_API_KEY;
	return Object.keys(params)
		.map((key) => {
			return `${key}=${params[key]}`;
		})
		.join("&");
};
const search = async (searchObj = searchDefaults) => {
	const urlPath = searchObj.path;
	const url = `https://newsapi.org/v2/${urlPath}?${stringifyParams(
		searchObj.params
	)}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => {
			console.log(err);
		});
};
module.exports = {
	search,
};
