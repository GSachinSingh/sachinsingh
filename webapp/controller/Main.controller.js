sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("sachinsingh.controller.Main", {
			onInit: function () {
				// Example Usage:
				const result = this.calculateExperience("2022-06-20");
				this.aboutMe = `Dynamic and results-oriented Senior Technical Analyst with over ${result} years `;
				let aboutText = this.getView().byId("aboutMe").getText();
				this.getView()
					.byId("aboutMe")
					.setText(this.aboutMe + aboutText);
			},
			// Controller.js
			calculateExperience: function (startDateStr) {
				const startDate = new Date(startDateStr); // from model
				const currentDate = new Date(); // always "now"

				const diffInMs = currentDate - startDate;
				const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

				return diffInYears.toFixed(1); // e.g. "3.5"
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
