function adminMiddleware (req, res, next) {
	if (req.session.userId != undefined) {
		return res.redirect('/users');
	}
	next();
}

module.exports = adminMiddleware;