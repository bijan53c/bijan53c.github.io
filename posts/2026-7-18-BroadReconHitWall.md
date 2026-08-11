# When Recon Fights Back: How a Giant's Infrastructure Made My Life Harder

I started working on a bug bounty program — a wide scope target, a giant in the gaming industry. I won't name them.

Wide scope meant one thing to me: lots of untouched endpoints, lots of juicy stuff waiting to be found. I fired up my tools, kicked off the automation and waited.

When I got back to the results file, I had plenty — subdomains, endpoints, the works. At first glance it looked great.

Then I looked closer.

URLs and domains I *knew* didn't belong to this program were mixed throughout the output. Third party infrastructure was hosting their main domains in a cloud structure. Not ideal, but not a dealbreaker — ASN lookups, certificate transparency and DNS data should cut through the noise and help me map what actually belongs to them.

Except they didn't.

---

## The ASN Problem

Different domains that I was 100% certain belonged to the same company were returning completely different ASN data. No shared blocks, no common ground. Dead end.

## The DNS Problem

Same story. DNS data wasn't helping me connect the dots — it was just adding more noise to an already noisy output.

I tried well known tools like AssetFinder. Same results. At this point I started questioning my own workflow, but the problem wasn't me — it was the infrastructure.

## The Certificate Problem

Here's where it got interesting. The company had 2-3 known domains that were clearly theirs, but each had been deployed in different years. Different deployment timelines meant different certificate issuers, different certificate data, no shared patterns to pivot from. Same story as the hosting — everything that should connect them, didn't.

---

## Coming Back with Fresh Eyes

I stepped away and came back the next day.

This time instead of chasing infrastructure signals, I went looking for something more tangible — something visible on the actual web pages of those 2-3 known domains.

The copyright text was the first shared element I spotted. Seemed promising. I tried Google dorking it, built a Nuclei template to filter my noisy output for matches.

Failure again.

I dug into the source code and found out why — those elements were rendered by JavaScript. DOM elements. Not in the raw HTML. My template was looking for something that didn't exist at the source level.

Same problem with the shared navigation menu sitting at the top of each site — same logo, same structure across domains — but again, pure DOM. Invisible to standard scraping.

At this point I had two paths: write a Python or Node.js tool to render and parse the DOM, or find a smarter way with less grind. Writing a custom tool for a single program felt like overkill.

---

## The Smarter Move

I went with three approaches that didn't require writing a single line of custom code:

**1. Spider the shared navigation menu**
That shared DOM menu linked to other assets belonging to the company. I used it as a starting point to manually map connected properties — essentially using their own navigation as a recon tool.

**2. Track shared analytics scripts**
Each of the known domains loaded 2-3 JavaScript analytics files from consistent addresses. Those JS file URLs were present in the raw HTML — unlike the DOM elements. I extracted them as samples, built a Nuclei template around them and ran it against my noisy output. This filtered the results down to assets genuinely connected to the target.

**3. Avoid generic string matching**
I could have built templates around the company name or other common strings in the HTML, but that would have pulled in any third party site that mentioned them — news articles, partners, forums — adding even more noise rather than reducing it.

---

## The Takeaway

Modern infrastructure — cloud hosting, third party CDNs, inconsistent deployment timelines — can make traditional recon signals completely unreliable. ASN, DNS and certificates are still valuable, but when a target's history is fragmented across different providers and different eras, you need to pivot to what's actually consistent: the product itself.

Look at what the web pages share visually and functionally. Shared scripts, shared assets, shared navigation — these are the fingerprints that infrastructure can't hide.

Have you hit a similar wall during recon? I'd love to hear how you handled it in the comments.

---

*#bugbounty #cybersecurity #infosec #recon #webdev*
