import requests

# The API endpoint
url = "http://localhost:7000/message/7222"

# Data to be sent in the POST request body
data = {"imageBase64": "value2765"}

try:
    response = requests.post(url, json=data)
    print(response.status_code)
    if response.status_code == 200:
        response_json = response.json()
        print(response_json)
    else:
        print(f"Error: {response.status_code} - {response.text}")
except requests.exceptions.RequestException as e:
    print(f"Request failed: {str(e)}")
