from flask import Flask, render_template, request
from flask_cors import CORS
from w4u_controller import w4uController

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
   return render_template('index.html')

@app.route('/w4u', methods=['POST', 'GET'])
def w4u():
    if request.method == 'POST': 
       data = request.json
       input_location = data['location']

       w4u = w4uController()

       geo_location = w4u.getLocation(input_location)
       if geo_location == None:
           w4u_address = "Unknown location"
           report_template = render_template('reports.html', weather_address=w4u_address)
           return report_template 
       
       w4u_address = geo_location.address       
       w4u_reports = w4u.getWeatherReports(data, geo_location)

       report_template = render_template('reports.html', weather_address=w4u_address, weather_reports=w4u_reports)

    return report_template  

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')   
