// TEST
// Version: 0.01
// Built on: 2020-2-21 1:40:43 PM
/*global QUnit*/

sap.ui.define([
	"sample/UI5_Sample/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});