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
 * Navigation for DSC Report Resource.
 *
 */
class DscReportResourceNavigation {
  /**
   * Create a DscReportResourceNavigation.
   * @member {string} [resourceId] Gets or sets the ID of the resource to
   * navigate to.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DscReportResourceNavigation
   *
   * @returns {object} metadata of DscReportResourceNavigation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DscReportResourceNavigation',
      type: {
        name: 'Composite',
        className: 'DscReportResourceNavigation',
        modelProperties: {
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DscReportResourceNavigation;