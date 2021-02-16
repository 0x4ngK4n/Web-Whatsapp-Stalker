# Web-Whatsapp-Stalker
An script to track people over WhatsApp based on their online and offline times.

Yes, IKR this is creepy but here goes the story.<br />
I was studying to check how can I track DOM changes in a page and stumbled across JavaScript MutationObserver API.
Whenever someone comes online, the DOM of the contact information in web whatsapp adds a DIV element to display online.
This div tag is removed whenever someone goes offline.

How does it works?

[WEB WHATSAPP {stalkerclient.js}] <<<==<<< PROXY(REMOVES CSP HEADER) <<<==<<<[WHATSAPP SERVER]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|↓|<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|↓|<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|↓|<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|↓|<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|↓|<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[↓]<br />
   [StalkerServer.py] >>>>>>>>>>> [Writes Timestamps to .txt File]

### HOW TO RUN
#### Follow below steps sequentially

1. Run the python stalkerserver.py.
2. Open web whatsapp and on brup proxy disable the Content-Security-Policy response header.
3. Click on a chat of the target contact person.
4. Open browser JS console and copy paste the stalkerclient.js, hit enter.
5. File 'stalker.txt' will be created on online/offline activity by the target person.


### Disclaimer
Kindly do not misuse. I wont accept responsibility for damages caused.
