var title = document.getElementsByClassName('title')[0],message=document.getElementsByClassName('message')[0], body=document.getElementsByTagName('body')[0]; 
readJSONFile('data.json', function(obj){
	var data = obj.data;
	title.innerHTML = data.title;
	message.innerHTML = data.body;
	body.style.backgroundImage ='url('+data.background+')';
});
function readJSONFile(path, callback) {
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.onreadystatechange = function() {
		if (xmlHttpRequest.readyState === 4&&xmlHttpRequest.status === 200) 
			callback(JSON.parse(xmlHttpRequest.responseText));
	};
	xmlHttpRequest.open('GET', path);
	xmlHttpRequest.send(); 
}