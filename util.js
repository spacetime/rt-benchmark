function comparePerformance(tag, opts) {
    var measurements = [];

    for (var i = 0; i < opts.length; i++) {
        var start = new Date();
        var result = opts[i].func();
	console.log(typeof(result));
        var end = new Date();
        var diff = (end.getTime() - start.getTime());
        measurements.push(diff);
        console.log(opts[i].name + " took: " + diff + " ms");
	var canvas = document.getElementById(opts[i].name);
	writeCanvas(canvas, result);
	console.log(opts[i].name + " took: " + diff + " ms");
    }

    for (var i = 0; i < opts.length; i++) {
        var id = tag + "-" + opts[i].name;
        var td = document.getElementById(id);
        td.textContent = measurements[i] + " ms";
    }

    for (var i = 1; i < opts.length; i++) {
        var ratio = (measurements[0] / measurements[i]);
        var id = tag + "-" + opts[0].name + "-" + opts[i].name + "-ratio";
        var td = document.getElementById(id);
        td.textContent = ratio;
    }
    

    
   
}
