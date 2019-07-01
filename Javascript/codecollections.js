//find missing angle and what it is
function missingAngle(angle1, angle2) {
	var angle = 180 -(angle1+angle2);
	if(angle < 90){
		return "acute";
	}
	else if(angle === 90){
		return "right";
	}
	else return "obtuse";
}
	
//Find difference between 2 num in arr
function differenceMaxMin(arr) {
	var min = Math.min( ...arr ),
    	max = Math.max( ...arr );
	return Math.abs(min - max)
}    