function getToken () {
	return localStorage['token'];
};

function authenticate() {
	//TODO: Handle expiry
	if(getToken()) {
		return;
	}
	localStorage['source'] = window.location;
	window.location = '/as.html';
};

module.exports = {
	authenticate: authenticate,
	getToken: getToken
};