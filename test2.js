function rotateString(str, rotateInstructions) {
	let strArr = str.split("");
	let instructions = rotateInstructions.split("");
	for (i = 0; i < instructions.length; i += 2) {
		if (instructions[i] == "L") {
			for (j = 0; j < +instructions[i + 1]; j++) {
				strArr.push(strArr[0]);
				strArr.shift();
			}
		}
		if (instructions[i] == "R") {
			for (j = 0; j < +instructions[i + 1]; j++) {
				strArr.unshift(strArr[strArr.length - 1]);
				strArr.pop();
			}
		}
	}
	return strArr.join("");
}
console.log(rotateString("abc", "R1L2R3L1")); // "cab"
console.log(rotateString("Good Morning!", "R2L7L1R5")); // "ood Morning!G"
console.log(rotateString("programming", "L1R3L3L1")); // "ogrammingpr"
