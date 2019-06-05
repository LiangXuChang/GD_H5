var selected = false,
	plused = false,
	resulted = false,
	selects = 0;
	abc = "未知",
	resultValue = 0;
	
function select(obj, value) {
	var sumObj = document.getElementById("sum"),
		levelObj = document.getElementById("level"),
		plusObj = document.getElementById("plus"),
		soundObj = document.getElementById("clickSound");
	sumObj.style.cssText = "opacity: 1";
	soundObj.play();
	levelObj.style.cssText = "opacity: 1";
	if (!selected && sumObj.innerHTML.indexOf("=") == -1) {
		obj.style.cssText = "background: rgba(0, 0, 0, 0.2)";
		
		sumObj.innerHTML += value;
		resultValue += value;
		selected = true;
		plused = false;
		selects += 1;
		
		plusObj.style.cssText = "animation: plus 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite alternate;";
	}
}

function ac() {
	var sumObj = document.getElementById("sum"),
		levelObj = document.getElementById("level"),
		resultTd = document.getElementById("result"),
		plusObj = document.getElementById("plus");
	plusObj.style.cssText = "animation: none";
	for (var i = 0; i < 9; i++) {
		document.getElementById("btn" + i).style.cssText = "background: transparent";
	}
	sumObj.style.cssText = "opacity: 0";
	sumObj.innerHTML = "";
	levelObj.style.cssText = "opacity: 0";
	levelObj.innerHTML = "";
	resultTd.style.cssText = "background: transparent";
	resultTd.innerHTML = "";
	resultValue = 0;
	selected = false;
	selects = 0;
}

function plus() {
	var sumObj = document.getElementById("sum"),
		plusObj = document.getElementById("plus");
	plusObj.style.cssText = "animation: none";
	if (!plused && sumObj.innerHTML.indexOf("=") == -1) {
		if (selects < 4) {
			sumObj.innerHTML += "+";
			selected = false;
			plused = true;
		} else {
			alert("最多选择 4 个");
		}
	}
}

function result() {
	var sumObj = document.getElementById("sum"),
		levelObj = document.getElementById("level"),
		resultTd = document.getElementById("result"),
		plusObj = document.getElementById("plus");
	plusObj.style.cssText = "animation: none";
	if (resultTd.innerHTML != "我的健康报告") {
		if (resultValue != 0) {
			sumObj.innerHTML += "=" + resultValue;
			if (resultValue >= 250) {
				abc = "优";
			} else if (150 < resultValue && resultValue < 250) {
				abc = "良";
			} else {
				abc = "差";
			}
			
			levelObj.innerHTML = abc;
			
			resultTd.innerHTML = "我的健康报告";
			resultTd.style.cssText = "background: #EFC210";
		}
	} else { // show result pane
		page5();
		var objInputName = document.getElementById("name"),
			objName = document.getElementById("resultName"),
			objValue = document.getElementById("resultValue"),
			objLevel = document.getElementById("resultLevel"),
			objLevelTitle = document.getElementById("resultLevel-title"),
			objPage5 = document.getElementById("page5"),
			objText = document.getElementById("page5-text0"),
			control = document.getElementById("page5-control");
		
		var text = ["您的饮食习惯很好，<br />加上适当的运动，<br />身体会更棒，<br />希望您继续保持哟！", "您的饮食习惯正常，<br />还需多吃健康食品，<br />才能有足够精力工作学习哟", "您的饮食习惯欠佳，<br />请多吃五谷杂粮，<br />少吃零食快餐才行哟！"];
		objName.innerHTML = objInputName.value;
		objValue.innerHTML = resultValue;
		objLevel.innerHTML = abc;
		objLevelTitle.innerHTML = abc;
		switch (abc){
			case "优":
				objText.innerHTML = text[0];
				break;
			case "良":
				objText.innerHTML = text[1];
				break;
			case "差":
				objText.innerHTML = text[2];
				break;
			default:
				break;
		}
	}
}