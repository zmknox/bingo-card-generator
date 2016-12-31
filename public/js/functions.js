function title() {
	$.ajax({
		url : ('/cardentries.json'),
		success : function(result){
			var element = document.getElementById("heading");
			element.innerHTML = result.name + " Bingo Card Generator";
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
			for(var i = 1; i <= 25; i++) {
				var element = document.getElementById(i.toString());
				element.innerHTML = result.entries[i - 1];
			}
    	}
	});
}
