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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmartOtpSdk);
  }
}(this, function(expect, SmartOtpSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse200', function() {
      beforeEach(function() {
        instance = new SmartOtpSdk.InlineResponse200();
      });

      it('should create an instance of InlineResponse200', function() {
        // TODO: update the code to test InlineResponse200
        expect(instance).to.be.a(SmartOtpSdk.InlineResponse200);
      });

      it('should have the property responseCode (base name: "responseCode")', function() {
        // TODO: update the code to test the property responseCode
        expect(instance).to.have.property('responseCode');
        // expect(instance.responseCode).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));
