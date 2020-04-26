function userMiddleware (req, res, next) {
	if (!req.session.user){ 
		if(!req.cookies.userCookie){
			return res.redirect('/users/login');
		}
	}
	next();
}

module.exports = userMiddleware;