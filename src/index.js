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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200', 'model/InlineResponse200Data', 'model/RegisterOtpRequestModel', 'model/RegisterOtpResponseModel', 'model/RegisterOtpResponseModelData', 'api/OcraApi', 'api/RegisterApi', 'api/TotpApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/InlineResponse200'), require('./model/InlineResponse200Data'), require('./model/RegisterOtpRequestModel'), require('./model/RegisterOtpResponseModel'), require('./model/RegisterOtpResponseModelData'), require('./api/OcraApi'), require('./api/RegisterApi'), require('./api/TotpApi'));
  }
}(function(ApiClient, InlineResponse200, InlineResponse200Data, RegisterOtpRequestModel, RegisterOtpResponseModel, RegisterOtpResponseModelData, OcraApi, RegisterApi, TotpApi) {
  'use strict';

  /**
   * SmartOTP_API_Specs_for_Payment.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SmartOtpSdk = require('index'); // See note below*.
   * var xxxSvc = new SmartOtpSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SmartOtpSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SmartOtpSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SmartOtpSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse200Data model constructor.
     * @property {module:model/InlineResponse200Data}
     */
    InlineResponse200Data: InlineResponse200Data,
    /**
     * The RegisterOtpRequestModel model constructor.
     * @property {module:model/RegisterOtpRequestModel}
     */
    RegisterOtpRequestModel: RegisterOtpRequestModel,
    /**
     * The RegisterOtpResponseModel model constructor.
     * @property {module:model/RegisterOtpResponseModel}
     */
    RegisterOtpResponseModel: RegisterOtpResponseModel,
    /**
     * The RegisterOtpResponseModelData model constructor.
     * @property {module:model/RegisterOtpResponseModelData}
     */
    RegisterOtpResponseModelData: RegisterOtpResponseModelData,
    /**
     * The OcraApi service constructor.
     * @property {module:api/OcraApi}
     */
    OcraApi: OcraApi,
    /**
     * The RegisterApi service constructor.
     * @property {module:api/RegisterApi}
     */
    RegisterApi: RegisterApi,
    /**
     * The TotpApi service constructor.
     * @property {module:api/TotpApi}
     */
    TotpApi: TotpApi
  };

  return exports;
}));
