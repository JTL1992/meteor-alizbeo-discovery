// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by txmdiscovery.js.
import { name as packageName } from "meteor/alizbeo:txmdiscovery";

// Write your tests here!
// Here is an example.
Tinytest.add('txmdiscovery - example', function (test) {
  test.equal(packageName, "txmdiscovery");
});
