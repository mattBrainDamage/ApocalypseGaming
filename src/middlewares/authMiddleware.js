function authMiddleware (req, res, next) {
	res.locals.userLogged = false;
	if (req.session.user) {
		res.locals.userLogged = req.session.user;
	} else if (req.cookies.userCookie){
		res.locals.userLogged = req.cookies.userCookie;
	}

	next();
}

module.exports = authMiddleware;	


