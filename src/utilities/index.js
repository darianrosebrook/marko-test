const { NEWS_API_KEY } = require("../../env.js");
const searchDefaults = {
	path: "top-headlines",
	params: {
		country: "us",
		apiKey: NEWS_API_KEY,
	},
};
const stringifyParams = (params) => {
	return Object.keys(params)
		.map((key) => {
			return `${key}=${params[key]}`;
		})
		.join("&");
};
const newsAPI = {};
newsAPI.search = async (searchObj = searchDefaults) => {
	const urlPath = searchObj.path;
	const url = `https://newsapi.org/v2/${urlPath}?${stringifyParams(
		searchObj.params
	)}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.newsAPI = newsAPI;
