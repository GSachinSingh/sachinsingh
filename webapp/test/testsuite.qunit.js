sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: sachinsingh",
		defaults: {
			page: "ui5://test-resources/sachinsingh/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "sachinsingh/",
				never: "test-resources/sachinsingh/"
			},
			loader: {
				paths: {
					"sachinsingh": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for sachinsingh"
			},
			"integration/opaTests": {
				title: "Integration tests for sachinsingh"
			}
		}
	};
});
