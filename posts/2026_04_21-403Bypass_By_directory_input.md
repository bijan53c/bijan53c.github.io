There was a scenario on one of our bug hunts, I make it simple, short and useful here : 

imagine a directory that we found in a bug hunt as `storagesite.com/uploads/`. In response of out GET request we get a 403. Based on the items and ways of restrictions we gotta now *What* is restricting us. After some tests we found out adding another `/` at the end of directory bypasses the 403 and returns a 200 which shows us the list of all uploaded data to the server. Something like `storagesite.com/uploads//`. Without looking at the source code (since I found it in a bug hunt) this was a mistake from the code and authentication mechanism deployed; Cause it's obvious that the app was asking for authenticated cookie for `/uploads/` but not the `/uploads//` so they had missed it.

> Now consider that here the `/` did the work, but on different configuration, different payload may work. So do your recon, make your payload list ready and run right tools and good luck out there!

You can read on 403 bypass concept here : [[2026_3_19-concept_on_403_bypass-pubbed]]
