window.onload = () => {
	var packs = document.getElementsByClassName('pack');

	var top = 205;

	for (var i = 0; i < packs.length; i++) {
		var pack = packs[i];
		var children = pack.children;
		for (var j = 0; j < children.length; j++) {
			var child = children[j];
			while (child.children.length > 0) {
				child = child.children[0];
			}
			child.style.top = `${top}%`;
			console.log(child.style.top);
		}
		top += 35;
	}

	document.getElementById('footer').style.top = `${top}%`;
};
