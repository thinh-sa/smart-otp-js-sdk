# SmartOtpSdk.OcraApi

All URIs are relative to *http://api.vnptpay.vn/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateOtpOcra**](OcraApi.md#generateOtpOcra) | **GET** /get-ocra-otp | Get user OTP code on SDK


<a name="generateOtpOcra"></a>
# **generateOtpOcra**
> InlineResponse200 generateOtpOcra(pin, challenge)

Get user OTP code on SDK

Get user OTP OCRA on SDK

### Example
```javascript
var SmartOtpSdk = require('smart_otp_sdk');

var apiInstance = new SmartOtpSdk.OcraApi();

var pin = "pin_example"; // String | PIN of user set for token

var challenge = "challenge_example"; // String | challenge code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateOtpOcra(pin, challenge, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**| PIN of user set for token | 
 **challenge** | **String**| challenge code | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

