There's a little fun bug I found on a video sharing website, which I can't tell the name of it, but I'm amazed that such bug exists on that platform cause it is more than 10 years for this platform to be online. 
With this bug, you can like a video infinite times without the need to log in. So you can become pretty popular with the likes you give to your own video (since more likes cause your video to get seen by more people), or idk, offer someone else amount of likes and get money instead?  Yeah this bug might not be that high impact at first glance or at all (Since I didn't investigate it further). But I'm gonna get into details here.

# Normal behavior of web app (Getting a lead)
The web app let you to like a video without authorization. That's already sus isn't it? But it could track you across browsers and sessions. E.g you use Firefox to like the video, you make a private tab to like again but... you see the video is already like by you. You switch to Chrome same happens. So you know what is going on, they are tracking users with the IP!

In that moment I smiled, turned VPN on, checked the site with a fresh session, liked the video, changed IP again and ... What? Video is already liked?! First it might seem strange but, since there isn't an authentication for account to count likes (Exactly unlike Youtube), there must be a way.

And the most interesting part is that this is not known as a bug from the developer (That's how they are working more than 10 years by the way). *It's a feature!* This way people don't have to create and own accounts to like a video they see so it's easier for them to like the videos (Since the platform is not really popular and creating an account can take long so people would ignore and don't like and get on with their lives as they watched the video already and information was useful to them.) So the content creator would get likes easier.


# The bug
As I said, they track users from IP and setting session on browser side, since we changed IP on same session but the video was already liked. So how can we *Hack* it for infinite likes?
Easy, change both of the IP and session cookie/token/whatever that is set on browser side, and the app won't recognize you anymore.
I changed IP while I opened a private tab, liked a random video, repeated the same loop again with a fresh IP and session, liked it again and so on. (I promise the content creator got really happy that day :) )

## Automating the process
In theory, you just would need a proxy list or a script to change your system's IP while the like request is being made in fresh sessions.
So 3 steps:
1. Fresh session (probably selenium)
2. Like the video 
3. Change IP (you can deploy scripts based on your solution (proxy,VPN,...))
4. Repeat 

# How to fix it?
Apply user account authentication for liking videos. Authentication can be applied by an OTP to user phone number for faster and more effective authentication, or force user to authenticate before watching the video at first place.


#web #logicflaw