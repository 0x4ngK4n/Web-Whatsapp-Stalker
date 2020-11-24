from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime


class CORSRequestHandler(SimpleHTTPRequestHandler):
	def end_headers(self):
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Access-Control-Allow-Methods', 'GET')
		self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
		with open('stalker.txt','a') as f:
			now = datetime.now()
			dt_string = "--> " + str(now.strftime("%d/%m/%Y %H:%M:%S")) + "\n"
			f.write(str(dt_string))
		return super(CORSRequestHandler, self).end_headers()


httpd = HTTPServer(('localhost', 8003), CORSRequestHandler)
httpd.serve_forever()