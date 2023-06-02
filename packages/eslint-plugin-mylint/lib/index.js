/**
 * @fileoverview test
 * @author singlepoi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  "rules": requireIndex(__dirname + "/rules"),
  "configs": {
    "recommended": {
      "plugins": ['mylint'],
      "rules": {
        'mylint/no-var': ['error']
      }
    }
  }
}

