//if 'online' div element is present, make the XHR request
var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(mutation.addedNodes.length){
		//person came online
		if(mutation.addedNodes[0].className == '_2ruUq _3xjAz'){
			console.log('came online')
			const randomHttp = new XMLHttpRequest();
			const randomurl='http://127.0.0.1:8003/online';
			randomHttp.open("GET", randomurl);
			randomHttp.send();

			randomHttp.onreadystatechange = (e) => {
			//console.log(randomHttp.responseText)
			}
		}
	}
	if(mutation.removedNodes.length){
		//person gone offline
		if(mutation.removedNodes[0].className == '_2ruUq _3xjAz'){
			console.log('went offline')
			const randomHttp = new XMLHttpRequest();
			const randomurl='http://127.0.0.1:8003/offline';
			randomHttp.open("GET", randomurl);
			randomHttp.send();

			randomHttp.onreadystatechange = (e) => {
			//console.log(randomHttp.responseText)
			}
		}
	}
  });
});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});