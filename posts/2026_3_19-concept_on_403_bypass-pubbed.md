On web application security, whether there's a pentest going on or hunting for vulnerabilities, there's a concept or technique for bypassing restrictions. In here we are going on details of bypassing 403 restrictions which usually lead to finding impactful vulnerabilities.
# How the restriction works?
For bypassing the restriction, we need to know how it works and what it does restrict; and it's obvious that different apps use different mechanisms so, let's explore some real world scenarios. 

## The overall concept
For making a restriction, it has to be defined, so imagine it like a blacklist or whitelist mechanism which has to be bypassed. Now for bypassing them, you gotta understand what factors they are considering for restricting so, you would change focus on that item. Here we explore some types of restrictions:
### IP restriction
It's the simplest type, turn on your VPN. But remember that the IP can be set to whitelist some static IP's (e.g the admin's specific IP) which can make your job so much harder.

### Parameters restriction
As you know, in each HTTP request we have some headers or parameters in the URL (For more simplicity I'm referring to both as *"Parameters"*). Which they look something like these :
```HTTP
GET /somedirectory/?p=parameterdata
HOST: somesite.com
User-Agent: Mozilla...
Cookie: somestuff
```
In above HTTP request, you can see parameters with `parameterdata` value in URL, and *Headers* as `HOST`, `User-Agent` and `Cookie`. 

Now imagine, the admin uses the *Admin Cookie* as he has authenticated to visit `/OnlyAdmin/dash.html`. So Anyone without the *Admin Cookie* are not allowed to visit that page. So as our small example above, when you have a random cookie (not authenticated as admin) and visit the `/OnlyAdmin/dash.html`, you face a 403 status code since you are not authenticated and allowed to visit that admin dashboard.

So what is happening is that there is a restriction on that parameter/header. It's defined like ==If cookie = Admin --> allowed to visit `/OnlyAdmin/dash.html` and if cookie !=(not equal) to Admin, return 403 and don't allow to visit.== 
So you are facing a whitelisting mechanism here. 

Before exploring more scenarios and bypassing them, let's have some blacklist examples too.
- Sites restricting certain user agents
- Restricting certain IP ranges (like people from certain country)
- Restricting users who send too much requests (rate limit)
- Bad user input (Like XSS, SQLi payloads)
- ...

## So, how they are defined
Usually they are set in 3 major ways which are :
- Some are defined by the *WAF (web application firewall)* : For example blocking IP's or malicious parameters (e.g XSS,SQLi payloads)
- Some are put by the *reverse proxy* : similar to waf but only processes what waf allowed to go in.
- Some are hardcoded by the developer (*source code*): like the cookie scenario we explored

----

You can read our posts on some 403 bypass scenarios:
[[2026-4-21-403Bypass draft]]