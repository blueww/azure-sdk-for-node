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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the UserUpdateParameters class.
 * @constructor
 * Request parameters for updating an existing work or school account user.
 *
 * @member {boolean} [accountEnabled] Whether the account is enabled.
 *
 * @member {string} [displayName] The display name of the user.
 *
 * @member {object} [passwordProfile] The password profile of the user.
 *
 * @member {string} [passwordProfile.password] Password
 *
 * @member {boolean} [passwordProfile.forceChangePasswordNextLogin] Whether to
 * force a password change on next login.
 *
 * @member {string} [mailNickname] The mail alias for the user.
 *
 */
class UserUpdateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of UserUpdateParameters
   *
   * @returns {object} metadata of UserUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserUpdateParameters',
      type: {
        name: 'Composite',
        className: 'UserUpdateParameters',
        modelProperties: {
          accountEnabled: {
            required: false,
            serializedName: 'accountEnabled',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          passwordProfile: {
            required: false,
            serializedName: 'passwordProfile',
            type: {
              name: 'Composite',
              className: 'PasswordProfile'
            }
          },
          mailNickname: {
            required: false,
            serializedName: 'mailNickname',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserUpdateParameters;