// Modules
const fs = require('fs');
const path = require('path');

const db = require('../database/models/')
const sequelize = db.sequelize;

const Op = db.Sequelize.Op;


// Constants

const controller = {
	index: (req, res) => {

		res.render('index');

	},
	about: (req,res)=>{
		res.render('about')
	},
	contact: (req,res)=>{
		res.render('contact')
	},
	storeContact: (req,res)=>{
		db.Contacts.create(req.body);
		return res.redirect('/');
	}
};

module.exports = controller