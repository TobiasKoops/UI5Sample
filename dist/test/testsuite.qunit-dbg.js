// TEST
// Version: 0.01
// Built on: 2020-1-31 15:13:26
// eslint-disable-next-line sap-no-global-define
window.suite = function () {
	"use strict";
	/* eslint-disable new-cap */
	var oSuite = new parent.jsUnitTestSuite(),
		sContextPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);

	oSuite.addTestPage(sContextPath + "unit/unitTests.qunit.html");
	oSuite.addTestPage(sContextPath + "integration/opaTests.qunit.html");

	return oSuite;
};