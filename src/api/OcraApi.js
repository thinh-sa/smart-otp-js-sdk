/*
 * SmartOTP SDK
 * SmartOTP API Specs for Payment
 *
 * OpenAPI spec version: 1.0.0
 * Contact: phuthinh@vnpt.vn
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

const { generateOTPFromCRCode } = require('../utils/ocra-generator');

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/InlineResponse200'),
    );
  } else {
    // Browser globals (root is window)
    if (!root.SmartOtpSdk) {
      root.SmartOtpSdk = {};
    }
    root.SmartOtpSdk.OcraApi = factory(
      root.SmartOtpSdk.ApiClient,
      root.SmartOtpSdk.InlineResponse200,
    );
  }
})(this, function (ApiClient, InlineResponse200) {
  'use strict';

  /**
   * Ocra service.
   * @module api/OcraApi
   * @version 1.0.0
   */

  /**
   * Constructs a new OcraApi.
   * @alias module:api/OcraApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Callback function to receive the result of the generateOtpOcra operation.
     * @callback module:api/OcraApi~generateOtpOcraCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user OTP code on SDK
     * Get user OTP OCRA on SDK
     * @param {String} pin PIN of user set for token
     * @param {String} challenge challenge code
     * @param {module:api/OcraApi~generateOtpOcraCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.generateOtpOcra = async function (pin, challenge, callback) {
      var postBody = null;

      // verify the required parameter 'pin' is set
      if (pin === undefined || pin === null) {
        throw new Error(
          "Missing the required parameter 'pin' when calling generateOtpOcra",
        );
      }

      // verify the required parameter 'challenge' is set
      if (challenge === undefined || challenge === null) {
        throw new Error(
          "Missing the required parameter 'challenge' when calling generateOtpOcra",
        );
      }

      var pathParams = {};
      var queryParams = {
        pin: pin,
        challenge: challenge,
      };
      var collectionQueryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      // return this.apiClient.callApi(
      //   '/get-ocra-otp', 'GET',
      //   pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      //   authNames, contentTypes, accepts, returnType, callback
      // );

      const otpCode = await generateOTPFromCRCode(challenge, pin);
      callback(null, otpCode);
    };
  };

  return exports;
});
