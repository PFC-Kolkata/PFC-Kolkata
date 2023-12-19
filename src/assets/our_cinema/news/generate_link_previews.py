from linkpreview import link_preview
from htmldate import find_date
import requests
import json
from PIL import Image
import io

link_file = open('links', 'r')
link_json = open('links.json', 'w+')

i = 0
data_array = []

for url in link_file:
	url = url.strip()
	preview = link_preview(url)
	img_name = str(i) + '.webp'
	response = requests.get(preview.image)
	
	Image.open(io.BytesIO(response.content)).save(img_name, format='webp', quality=40, optimize=True)
	
	data = {}
	
	data['sl'] = i
	data['url'] = url
	data['title'] = preview.title
	data['description'] = preview.description
	data['image'] = img_name
	data['date'] = find_date(url, outputformat='%d %B, %Y')
	
	data_array.append(data)
	
	i += 1

link_json.write(json.dumps(data_array))
