sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("sachinsingh.controller.Main", {
			onInit: function () {
				this.oRouter = this.getOwnerComponent().getRouter();
			},
			onLinkedinPress: function () {
				window.open(
					"https://www.linkedin.com/in/sachin-singh-a6795b340",
					"_blank",
				);
			},
		});
	},
);
