function userCookieMiddleware (req, res, next) {
	res.locals.isLogged = false;

	if (req.cookies.userCookie || req.session.user) {		
		req.session.user = req.cookies.userCookie ? req.cookies.userCookie : req.session.user;
		res.locals.isLogged = true;	
	}

	next();
}

module.exports = userCookieMiddleware;