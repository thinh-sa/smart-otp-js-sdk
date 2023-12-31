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

  beforeEach(function() {
    instance = new SmartOtpSdk.TotpApi();
  });

  describe('(package)', function() {
    describe('TotpApi', function() {
      describe('getTotpCode', function() {
        it('should call getTotpCode successfully', function(done) {
          // TODO: uncomment, update parameter values for getTotpCode call and complete the assertions
          /*
          var pin = "pin_example";

          instance.getTotpCode(pin, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SmartOtpSdk.InlineResponse200);
            expect(data.responseCode).to.be.a('string');
            expect(data.responseCode).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.data).to.be.a(SmartOtpSdk.InlineResponse200Data);
                  expect(data.data.otp).to.be.a('string');
              expect(data.data.otp).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
