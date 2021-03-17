module.exports = {
	url: "https://bstackdemo.com/signin",
	elements: {
		usernameField: { selector: "#username input" },
		passwordField: { selector: "#password input" },
	},
	commands: [
		{
			login: function (username, password) {
				return this.clearValue("@usernameField")
					.setValue("@usernameField", username + "\n")
					.clearValue("@passwordField")
					.setValue("@passwordField", password + "\n")
					.click("#login-btn");
			},
		},
	],
};
