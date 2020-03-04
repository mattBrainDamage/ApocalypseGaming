const usersController = 

{
	index: (req, res) => {

        let users= [
			{"id":1,"firstName":"Erik","lastName":"Selby","eMail":"eselby0@last.fm"},
			{"id":2,"firstName":"Aurelia","lastName":"Sabates","eMail":"asabates1@smh.com.au"},
			{"id":3,"firstName":"Jo","lastName":"O'Dreain","eMail":"jodreain2@ed.gov"},
			{"id":4,"firstName":"Tedda","lastName":"Rabbitt","eMail":"trabbitt3@ifeng.com"},
			{"id":5,"firstName":"Arvie","lastName":"Frostick","eMail":"afrostick4@skype.com"},
			{"id":6,"firstName":"Zack","lastName":"Hartford","eMail":"zhartford5@skyrock.com"},
			{"id":7,"firstName":"Gilbert","lastName":"Longega","eMail":"glongega6@google.pl"},
			{"id":8,"firstName":"Herman","lastName":"Diegan","eMail":"hdiegan7@google.co.uk"}
		]
	
		res.render('users', {'users': users});
	},
	register: (req, res) => {

		res.render('register');
	},
	login: (req, res) => {

		res.render('login');
	},	
	store: (req, res) => {

		let user = [{
			id : 1,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			eMail : req.body.eMail
		}]

		res.redirect('/users')

	},
	edit: (req, res) => {
		
		let idUser = req.params.idUser;

		let users= [
			{"id":1,"firstName":"Erik","lastName":"Selby","eMail":"eselby0@last.fm"},
			{"id":2,"firstName":"Aurelia","lastName":"Sabates","eMail":"asabates1@smh.com.au"},
			{"id":3,"firstName":"Jo","lastName":"O'Dreain","eMail":"jodreain2@ed.gov"},
			{"id":4,"firstName":"Tedda","lastName":"Rabbitt","eMail":"trabbitt3@ifeng.com"},
			{"id":5,"firstName":"Arvie","lastName":"Frostick","eMail":"afrostick4@skype.com"},
			{"id":6,"firstName":"Zack","lastName":"Hartford","eMail":"zhartford5@skyrock.com"},
			{"id":7,"firstName":"Gilbert","lastName":"Longega","eMail":"glongega6@google.pl"},
			{"id":8,"firstName":"Herman","lastName":"Diegan","eMail":"hdiegan7@google.co.uk"}
		]
		
		let userToEdit = users[idUser]

		//res.send(userToEdit);
		res.render('useredit',{'userToEdit' : userToEdit});

	}
}
;

module.exports = usersController ;