For security reasons, we consider "Target app", as the target we practiced on, and the real name won't be disclosed in this post.

The target app, was a niche music streaming platform, available in web and mobile PWA, meaning the structure is same but access is easier for cross platform.
The app worked in this way :
1. You register using an account, 3rd party like google or via email
2. After that you can use the app for free with a 3 day window (3 day trial)
3. After the 3 day you gotta buy subscription to continue listening

The flaw, existed in the first step, when you register using an email, no verification happens! You could enter any type of string@something.com, a random password and start your free trial.
So what happens is that first I use string1@something.com, for 3 days. When the time runs out, I use string2@something.com for another 3 days. And since the app's trial and actual subscription don't have any difference, and the 3 day time window is the only limitation, the user with such knowledge from the app doesn't need to buy any subscriptions while such flaw exists!

**Mitigation**:
- Apply email verification step after user input, so they have to use the received link to verify their address
- Blacklist "temporary email" service's address or IPs, so users won't generate any email to register after their trial has expired.

This way, the registration process isn't too complex while keeps app from attackers avoiding a "For ever free" usage on the app.