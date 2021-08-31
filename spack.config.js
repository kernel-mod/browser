const { config } = require("@swc/core/spack");

module.exports = config({
	mode: "production",
	entry: {
		index: __dirname + "/src/index.ts",
	},
	output: {
		path: __dirname + "/dist",
	},
	options: {
		sourceMaps: "inline",
	},
});
