# Scenarios and how they got bypassed-pubbed

## A.Bad code :
### 1

> I explain the security aspect of it and how to stop such vulnerabilities in separate post

### 2.A Bad session management
There are times that simple `Admin` string in the `cookie` or `session` (or related custom headers), can cause you to authenticate to the app. For advance this simple string can be encoded to a commonly used format by the app (For example they use base64 a lot)
This 
##  B. WAF restriction
There was an app that we had confirmed a reflected user input on it. We had to make sure they don't sanitize the input so we could send they payload for reflected XSS. We sent and we got 403. WTF? You could just remove the restricted part... why so serious? Got back on our recon data, we saw that they had a local made WAF using in front of web app which was not really well known. So we had to do a little bit of reverse engineering to understand how the waf works and what is bad in it's idea. After some tests we found out that the WAF as defined rules which work on the base64 format. They get the user input, turn base64 and check on the encoded data for malicious payloads, if OK it would decode the payload from base64 to URL and sent to web app. So first thing we tried was to encode the XSS to BASE64 and Viola. DONE! What we think is that the WAF encoded our base64 one more time, then checked it so the codes were different now (since they were encoded 2 times) and then decoded completely and sent to web app. And web app didn't have input sanitized and relied completely on the WAF as security so we got our payload running.


