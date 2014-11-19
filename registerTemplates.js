var fs = require("fs-extra");

var obj = {
	'basePath': 'public',
	'directory': 'templates',
	'jsonFile': 'templates.json'
};

var controlList = {};

var jsonDir = function(callback){

	var exec = require('child_process').exec;
	var options = {
		timeout: 0,
		encoding: 'utf8',
		killSignal: 'SIGTERM',
		cwd: null,
		env: process.env
	};
	var statusOfFiles= {};
	var originalCurrentDirectory = process.cwd();
	var cmd = "cd " + obj.basePath + '/' + obj.directory + "; find . -print";
	//console.log("CMD = (" + cmd + ")");
	exec(cmd, options, function(error, stdout, stderr){
		if(error){
			console.log("ERROR = " + error);
		}
		if(stdout){
			var evalString = "";
			var lines = stdout.split("\n");
			for(var x = 0; x < lines.length; x++){
				var myLine = lines[x];
				myLine = myLine.replace('./','');
				if(myLine !== '.' && myLine !== ""){
					//console.log("myLine = (" + myLine + ")");
					
					var myTmpFile = obj.basePath + '/' + obj.directory + '/' + myLine;
					//console.log("myTmpFile = (" + myTmpFile + ")");
					var tmpEvalString = "statusOfFiles['" + myTmpFile + "'] = '" + myLine + "';";
					//console.log("tmpEvalString = " + tmpEvalString);
					eval(tmpEvalString);

					var myTmpFileStatus = statusOfFiles[myTmpFile];
					var stat = fs.statSync(myTmpFile);
					if(stat && stat.isDirectory()){
						//console.log("isDirectory => " + statusOfFiles[myTmpFile]);
						//evalString = evalString + "controlList['" + myTmpFileStatus + "'] = {};\n";
						myLineArray = myLine.split("/");	
						var evalEntry = "controlList";
						for(var z = 0; z < myLineArray.length; z++){
							evalEntry = evalEntry + "['" + myLineArray[z] + "']";
						}
						evalEntry = evalEntry + " = {};\n";
						eval(evalEntry);
						//console.log("IS_DIRECTORY::evalEntry = " + evalEntry);
					} else {
						//console.log("isFile => " + statusOfFiles[myTmpFile]);
						myLineArray = myLine.split("/");	
						var evalEntry = "controlList";
						for(var z = 0; z < myLineArray.length; z++){
							evalEntry = evalEntry + "['" + myLineArray[z] + "']";
						}
						evalEntry = evalEntry + " = true;\n";
						eval(evalEntry);
						//console.log("IS_FILE::evalEntry = " + evalEntry);
					}
				}
			}
			process.chdir(originalCurrentDirectory);
			fs.outputJson(obj.jsonFile, controlList, function(err){
				if(err){
					callback(false,err);
				} else {
					callback(true,"success");
				}
			});
		}
		if(stderr){
			//console.log("STDERR = " + stderr);
			callback(false,stderr);
		}
	});
};
//console.log("platform: " + process.platform);
//console.log('Current directory: ' + process.cwd());
jsonDir(function(status,msg){

	if(status){
		console.log("Generating " + obj.jsonFile + "...success.");
		process.exit(0);
		
	} else {
		console.log("Generating " + obj.jsonFile + "...failure.");
		process.exit(1);
	}
});
