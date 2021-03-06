/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The response of a list operation.
 */
class ResponseWithContinuationFormula extends Array {
  /**
   * Create a ResponseWithContinuationFormula.
   * @member {string} [nextLink] Link for next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResponseWithContinuationFormula
   *
   * @returns {object} metadata of ResponseWithContinuationFormula
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResponseWithContinuation[Formula]',
      type: {
        name: 'Composite',
        className: 'ResponseWithContinuationFormula',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FormulaElementType',
                  type: {
                    name: 'Composite',
                    className: 'Formula'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResponseWithContinuationFormula;
