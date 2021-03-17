module.exports = {
	url: "https://bstackdemo.com",
	elements: {
		cartButton: { selector: ".bag--float-cart-closed" },
		checkoutButton: { selector: ".buy-btn" },
		iPhone12CartButton: { selector: '[id="1"] .shelf-item__buy-btn' },
		iPhone12MiniCartButton: { selector: '[id="2"] .shelf-item__buy-btn' },
		iPhone12ProMaxCartButton: { selector: '[id="3"] .shelf-item__buy-btn' },
	},
	commands: [
		{
			addiPhonesToCartAndCheckout: function () {
				return this.click("@iPhone12CartButton")
					.click("@iPhone12MiniCartButton")
					.click("@iPhone12ProMaxCartButton")
					.click("@checkoutButton");
			},
		},
	],
};
