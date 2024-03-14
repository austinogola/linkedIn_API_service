# Set API URL
url = "https://api.iscraper.io/v2/profile-details"

# Set API key
headers = {
    'X-API-KEY': 'your_api_key'
    }

# Set payload
payload = {'profile_id': 'williamhgates'}
# Get Response
resp = requests.post(url, json=payload, headers=headers)