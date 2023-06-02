/**
 * @fileoverview no var
 * @author singlepoi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "no var",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noVarMsg: '不允许使用var'
    }
  },

  create (context) {
    // variables should be defined here
    const sourceCode = context.sourceCode
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      VariableDeclaration (node) {
        if (node.kind === 'var') {
          context.report({
            node,
            messageId: 'noVarMsg',
            fix (fixer) {
              const varToken = sourceCode.getFirstToken(node)
              return fixer.replaceText(varToken, 'let')
            }
          })
        }
      }
    };
  },
};
