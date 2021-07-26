
# OSINTCart

OSINTCart is built on [simpleStore](http://chrisdiana.github.io/simplestore), a clean, responsive
storefront boilerplate with no database you can setup in minutes. simpleStore uses
[simpleCart.js](http://simplecartjs.org) and [Skeleton](http://getskeleton.com)
CSS Framework for a lightweight, fast, simple to use, and completely
customizable experience.

## OSINT Tool Evaluation Criteria

Criteria developed by Citizen Clinic's Rachael Cornejo and Thyne Boonmark, with input from RightsCon 2020 attendees.

<table>
  <tr>
   <td>Category
   </td>
   <td>Attribute
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td colspan="2" >Date of Review
   </td>
   <td>Date of information
   </td>
  </tr>
  <tr>
   <td colspan="2" >Basic Functionality
   </td>
   <td>How can the tool be useful for an investigation?
   </td>
  </tr>
  <tr>
   <td rowspan="9" >Provider & Geography
   </td>
   <td>Provider Access
   </td>
   <td>What information does the tool gain from the user, even temporarily?
   </td>
  </tr>
  <tr>
   <td>Provider Retention
   </td>
   <td>Does the tool retain this info more permanently and if so, how/where is it stored?
   </td>
  </tr>
  <tr>
   <td>Provider Goal
   </td>
   <td>Who owns and/or developed the tool and what are their plans for the data?
   </td>
  </tr>
  <tr>
   <td>Provider Location
   </td>
   <td>Where is the provider located or headquartered? 
   </td>
  </tr>
  <tr>
   <td>Provider Business Model
   </td>
   <td>How is the tool monetized? If the tool is free to use, how is maintenance, development, and security resourced?
   </td>
  </tr>
  <tr>
   <td>Location-
<p>
Based
<p>
Bans
   </td>
   <td>Is the service banned in any locations? Attempts to block?
   </td>
  </tr>
  <tr>
   <td>Applicable Privacy Laws
   </td>
   <td>Which privacy regulations or rights are applicable?
   </td>
  </tr>
  <tr>
   <td>Location Control
   </td>
   <td>Can users control where data is stored? 
   </td>
  </tr>
  <tr>
   <td>Self-Host
   </td>
   <td>Do users have the ability to self-host?
   </td>
  </tr>
  <tr>
   <td rowspan="4" >Provider Transparency
   </td>
   <td>Vulnerability Transparency
   </td>
   <td>Does the provider have a robust bug bounty program? Do they publish public bug reports? How does the provider handle known security issues?
   </td>
  </tr>
  <tr>
   <td>Government / Law Enforcement Interaction Transparency
   </td>
   <td>Do developers have a realistic and transparent attitude toward government and law enforcement?
   </td>
  </tr>
  <tr>
   <td>Legal Obligations
   </td>
   <td>All providers can be obligated to turn content over to law enforcement when legally requested. 
   </td>
  </tr>
  <tr>
   <td>Chain of Custody
   </td>
   <td>Reliability and chain of custody for legal investigations – what can users authenticate?
   </td>
  </tr>
  <tr>
   <td rowspan="5" >Personal Identifiers
   </td>
   <td>Aliases
   </td>
   <td>Do you have to use a personal identifier (phone number, real name, etc) as a public-facing username?
   </td>
  </tr>
  <tr>
   <td>Data required to use
   </td>
   <td>How much information do you have to hand over to the provider in order to sign up?
   </td>
  </tr>
  <tr>
   <td>Data collected
   </td>
   <td>What type of information does the company collect?
   </td>
  </tr>
  <tr>
   <td>Login Authentication
   </td>
   <td>If login required, offers multi-factor authentication?
   </td>
  </tr>
  <tr>
   <td>Contact Authentication
   </td>
   <td>Can you be certain that the person being contacted is the intended recipient?
   </td>
  </tr>
  <tr>
   <td rowspan="9" >Tool Security features
   </td>
   <td>Retention of 
<p>
Metadata
   </td>
   <td>Does the company retain data surrounding the content you create/upload?
   </td>
  </tr>
  <tr>
   <td>Cloud Storage
   </td>
   <td>Does the company retain data in the cloud? If so, is it stored securely?
   </td>
  </tr>
  <tr>
   <td>Transport encryption
   </td>
   <td>Does the tool protect messages from being listened in on by outsiders?
   </td>
  </tr>
  <tr>
   <td>End-to-end encryption
   </td>
   <td>Does the tool protect messages from being listened in on by outsiders AND the company hosting the tool?
   </td>
  </tr>
  <tr>
   <td>Encryption by default
   </td>
   <td>Do you have to configure something or upload keys or certs in order for encryption to happen?
   </td>
  </tr>
  <tr>
   <td>App vs browser
   </td>
   <td>Do you have to download an app, or can you use this tool in your browser?
   </td>
  </tr>
  <tr>
   <td>Access Controls
   </td>
   <td>Can you control who can access shared information?
   </td>
  </tr>
  <tr>
   <td>Open-Source Code
   </td>
   <td>Is the code publicly available for audits?
   </td>
  </tr>
  <tr>
   <td>Independently audited
   </td>
   <td>Have independent auditors checked the tool for security vulnerabilities? What have they found?
   </td>
  </tr>
  <tr>
   <td rowspan="7" >Tool Usability & Maintenance
   </td>
   <td>Cost
   </td>
   <td>Free to use? If not, how expensive?
   </td>
  </tr>
  <tr>
   <td>Ease of use
   </td>
   <td>Easy to set up? Does it require training to know how to use it?
   </td>
  </tr>
  <tr>
   <td>Cross-user collaboration
   </td>
   <td>Does this tool allow for multiple collaborators/contributors in real time?
   </td>
  </tr>
  <tr>
   <td>User support capacity
   </td>
   <td>If you run into issues using the tool, can you get support? How much support can you get
   </td>
  </tr>
  <tr>
   <td>Consistent Maintenance & Updates
   </td>
   <td>Are developers frequently maintaining and updating their application? If a security issue is found, do the developers quickly address the problem? 
   </td>
  </tr>
  <tr>
   <td>Training
   </td>
   <td>Can you use the tool with little to no training? If not, how is training available?
   </td>
  </tr>
  <tr>
   <td>Compatibility with other tools
   </td>
   <td>Does this tool work correctly through most VPNs? Does it work over TOR?
   </td>
  </tr>
  <tr>
   <td rowspan="4" >Accessibility
   </td>
   <td>Compatibility with legacy or low-end devices
   </td>
   <td>Do you have the ability to use this tool on low-end phones such as $50 androids?
   </td>
  </tr>
  <tr>
   <td>Language Support
   </td>
   <td>Which languages does the tool offer for its user interface or for data collection (right-to-left characters, etc)? 
   </td>
  </tr>
  <tr>
   <td>Localization
   </td>
   <td>Has the tool been localized to various regions?
   </td>
  </tr>
  <tr>
   <td>Vision or hearing accommodations
   </td>
   <td>Has the tool been developed to remain usable for those users with vision or hearing impairments?
   </td>
  </tr>
</table>



## Credit where credit is due

For further documentation on expanding/tweaking simpleStore, check out the
framework/plugin pages.

* [Skeleton](http://getskeleton.com)
* [simpleCart.js](http://simplecartjs.org)
* [Normalize.css](http://necolas.github.io/normalize.css)
* [FontAwesome](http://fortawesome.github.io/Font-Awesome)
* [jQuery](https://jquery.com/)

### A note about JavaScript shopping carts

ALL JavaScript shopping carts are NOT fullproof. Because simpleStore is fully
client-side, some users may attempt to alter prices before checkout.
SimpleStore does the best it can to minimize this
kind of activity. Make sure to monitor your sales. Just like in real life, if someone
walks into your store and changes the price tag, you will certainly not honor
those changes.


# Contributing

All forms of contribution are welcome: bug reports, bug fixes, pull requests and simple suggestions.
If you do wish to contribute, please follow the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) Thanks!


## List of contributors

You can find the list of contributors [here](https://github.com/chrisdiana/simplestore/graphs/contributors).
