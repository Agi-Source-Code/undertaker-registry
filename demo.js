var DefaultRegistry = require("./index");

var util = require("util");
var fs = require("fs");
// DefaultRegistry();

// function MyRegistry() {
//   DefaultRegistry.call(this);
// }

// util.inherits(MyRegistry, DefaultRegistry);

// module.exports = MyRegistry;

function CommonRegistry(opts) {
  DefaultRegistry.call(this);
  opts = opts || {};
  this.buildDir = opts.buildDir || "./build";
}

util.inherits(CommonRegistry, DefaultRegistry);

CommonRegistry.prototype.init = function (takerInst) {
  var buildDir = this.buildDir;
  var exist = fs.existsSync(buildDir);

  if (exist) {
    throw new Error(
      "Cannot initialize common tasks. " + buildDir + " directory exists."
    );
  }
};

CommonRegistry({ buildDir: "./build" });

module.exports = CommonRegistry;
