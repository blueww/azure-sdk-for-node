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
 * @class
 * Initializes a new instance of the StorageEndpointProperties class.
 * @constructor
 * The properties of the Azure Storage endpoint for file upload.
 *
 * @member {moment.duration} [sasTtlAsIso8601] The period of time for which the
 * the SAS URI generated by IoT Hub for file upload is valid. See:
 * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options.
 *
 * @member {string} connectionString The connection string for the Azure
 * Storage account to which files are uploaded.
 *
 * @member {string} containerName The name of the root container where you
 * upload files. The container need not exist but should be creatable using the
 * connectionString specified.
 *
 */
class StorageEndpointProperties {
  constructor() {
  }

  /**
   * Defines the metadata of StorageEndpointProperties
   *
   * @returns {object} metadata of StorageEndpointProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageEndpointProperties',
      type: {
        name: 'Composite',
        className: 'StorageEndpointProperties',
        modelProperties: {
          sasTtlAsIso8601: {
            required: false,
            serializedName: 'sasTtlAsIso8601',
            type: {
              name: 'TimeSpan'
            }
          },
          connectionString: {
            required: true,
            serializedName: 'connectionString',
            type: {
              name: 'String'
            }
          },
          containerName: {
            required: true,
            serializedName: 'containerName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageEndpointProperties;