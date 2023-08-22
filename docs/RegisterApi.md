# SmartOtpSdk.RegisterApi

All URIs are relative to *http://api.vnptpay.vn/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerSmartOtp**](RegisterApi.md#registerSmartOtp) | **POST** /register-smart-otp | Register SmartOTP on a device


<a name="registerSmartOtp"></a>
# **registerSmartOtp**
> RegisterOtpResponseModel registerSmartOtp(body)

Register SmartOTP on a device

Send Post data to SmartOTP Server

### Example
```javascript
var SmartOtpSdk = require('smart_otp_sdk');

var apiInstance = new SmartOtpSdk.RegisterApi();

var body = new SmartOtpSdk.RegisterOtpRequestModel(); // RegisterOtpRequestModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerSmartOtp(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterOtpRequestModel**](RegisterOtpRequestModel.md)|  | 

### Return type

[**RegisterOtpResponseModel**](RegisterOtpResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

