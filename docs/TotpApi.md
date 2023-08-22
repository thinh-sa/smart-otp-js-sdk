# SmartOtpSdk.TotpApi

All URIs are relative to *http://api.vnptpay.vn/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTotpCode**](TotpApi.md#getTotpCode) | **GET** /get-totp-code | Get user OTP code on SDK


<a name="getTotpCode"></a>
# **getTotpCode**
> InlineResponse200 getTotpCode(pin)

Get user OTP code on SDK

Generate user OTP Token on SDK

### Example
```javascript
var SmartOtpSdk = require('smart_otp_sdk');

var apiInstance = new SmartOtpSdk.TotpApi();

var pin = "pin_example"; // String | PIN of user set for token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTotpCode(pin, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**| PIN of user set for token | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

