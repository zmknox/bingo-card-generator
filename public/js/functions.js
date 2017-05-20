function title() {
	$.ajax({
		url : ('/cardentries.json'),
		success : function(result){
			var element = document.getElementById("heading");
			element.innerHTML = result.name + " Bingo Card Generator";
			var freeSpace = document.getElementById("freeSpace");
			freeSpace.checked = result.freeSpace;
		}
	});
}

function generate() {
	$.ajax({
    	url : ('/cardentries.json'),
    	success : function(result){
			var x = 0;
			for(var i in result.entries) {
				x++;
			}
			var used = [];
			for(var i = 0; i < x; i++) {
				used[i] = false;
			}
			var freeSpace = document.getElementById("freeSpace");
			for(var i = 1; i <= 25; i++) {
				var element = document.getElementById(i.toString());
				if(i == 13 && freeSpace.checked == true) {
					element.innerHTML = result.freespaceTest;
				}
				else{
					var chosen = true;
					while(chosen) {
						var rand = Math.random() * (x - 1) + 1;
						var placing = Math.round(rand) - 1;
						if(!used[placing] || result.allowRepeats) {
							element.innerHTML = result.entries[placing];
							chosen = false;
							used[placing] = true;
						}
					}
				}
			}
    	}
	});
}
