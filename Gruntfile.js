module.exports = function (grunt) {
	"use strict";
	var sVersion = "0.01";

	var oDate = new Date();
	var sBuildDate = oDate.toLocaleDateString();
	var sBuildTime = oDate.toLocaleTimeString();
	var aPrepend = ["Easysquare User Analytics Tool", "Promos Consult GmbH / Easysquare, Tobias Koops", "Version: " + sVersion, "Built on: " +
		sBuildDate + " " + sBuildTime
	];

	var sVersionReplace = sVersion + ", built on:" + sBuildDate;
	var sTargetDir = "dist";

	var config = {
		replace: {
			dist: {
				src: [sTargetDir + "/**"],
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: "@@version",
					to: sVersionReplace
				}]
			}
		},
		add_comment: {
			dist: {
				options: {
					comments: aPrepend,
					carriageReturn: "\n",
					prepend: true
				},
				files: [{
					expand: true,
					cwd: sTargetDir,
					src: ["**/*.js"],
					dest: sTargetDir
				}]
			}
		}
	};

	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	grunt.loadNpmTasks("grunt-text-replace");
	grunt.loadNpmTasks("grunt-add-comment");

	grunt.config.merge(config);

	grunt.log.writeln("\n### grunt.config() ###\n" + JSON.stringify(grunt.config(), null, 2));

	grunt.registerTask("default", [
		"clean",
		"lint",
		"build",
		"add_comment:dist",
		"replace:dist"
	]);
};