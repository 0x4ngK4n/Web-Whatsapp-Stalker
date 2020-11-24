# Web-Whatsapp-Stalker
An insidious script made to stalk people over WhatsApp based on their online and offline times.

Yes, IKR this is creepy but here goes the story.
I was studying to check how can I track DOM changes in a page and stumbled across JavaScript MutationObserver API.
Whenever someone comes online, the DOM of the contact information in web whatsapp adds a DIV element to display online.
This div tag is removed whenever someone goes offline.

How does it works?

[WEB WHATSAPP OVER BROWSER {Injected JavaScript in Browser Console}] <<<============<<< PROXY(REMOVES CSP RESPONSE HEADER) <<<=============<<<[WHATSAPP SERVER]
          |↓|
          |↓|
          |↓|
          |↓|
          |↓|
          [↓]
   [Local Python Server] >>>>>>>>>>> [Writes Timestamps to .txt File]

Important Note: I assume no responsibilty for misuse :D
What you do can be constructive or distructive and is not on ME!! XD
