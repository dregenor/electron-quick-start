// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipcRenderer = require("electron").ipcRenderer;
buttonH.onclick = function(){
	console.warn("hide and show");
	ipcRenderer.send("hide")
}
buttonHI.onclick= function(){
	console.warn("hide and show inactive");
	ipcRenderer.send("hideInactive")
}