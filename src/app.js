import tmpl from './partial.eta'

document.addEventListener("DOMContentLoaded", (event) => {
	updatePage();
});

function updatePage() {
	console.log("attempting to use the template")
	document.getElementById("replace").innerHTML = tmpl({foo:"bar"});
}
