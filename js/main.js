window.onload = function () {
	var canvas = document.getElementById("canvas"),
		controllers = document.getElementById("controllers"),
		nowPage = document.getElementById("nowPage");
		
	setObjectHeight(canvas);
	setObjectHeight(controllers);
	
	for (var i = 1; i < 6; i++) {
		document.getElementById("page" + i).style.cssText = "display: none;";
	}
	
	// page0
	var pageObj = document.getElementById("page0"),
		loading = document.getElementById("loading"),
		loadPer = document.getElementById("loadPer");
	var loadValue = 0, spot = "";
	var timer0 = setInterval(function () {
		if (loadValue % 8 === 0) { spot += "." }
		if (spot === "....") { spot = "" }
		loading.innerHTML = "LOADING" + spot;
		loadPer.innerHTML = loadValue + " %";
		if (loadValue > 95) {
			pageObj.style.cssText = "opacity: " + (100 - loadValue) / 10;
		}
		if (loadValue > 99) {
			clearInterval(timer0);
			page1();
		}
		loadValue += 1;
	}, 20);
	
	// touch event listenner
	var y = 0
	controllers.addEventListener("touchstart", function (e) {
		y = e.touches[0].pageY;
		nowPage = document.getElementById("nowPage").value;
	}, false);
	controllers.addEventListener("touchmove", function (e) {
		if (e.touches[0].pageY < y && (getScrollTop() + getWindowHeight() == getScrollHeight() - 1)) {
			switch (nowPage) { // ↓ next page
				case "1":
					page2();
					break;
				case "2":
					page3();
					break;
				default:
					break;
			}
		}
		if (e.touches[0].pageY > y && (getScrollTop() < 3)) {
			switch (nowPage) { // ↑ previous page
				case "2":
					page1();
					break;
				case "3":
					document.getElementById("page3-control").style.cssText = "display: none";
					page2();
					break;
				case "4":
					document.getElementById("page4-control").style.cssText = "display: none";
					page3();
					break;
				default:
					break;
			}
		}
	}, false);
	
	// bgm controller
	var audio = document.getElementById("audio"),
		music = document.getElementById("music");
	music.onclick = function() {
		if (audio.paused) {
			audio.play();
			music.style.cssText = "opacity: 1;background: url(img/0/bgmOn.png);background-size: 100%;";
		} else {
			audio.pause();
			music.style.cssText = "opacity: 1;background: url(img/0/bgmOff.png);background-size: 100%;";
		}
	};
}

function page1() {
	document.getElementById("nowPage").value = 1;
	var music = document.getElementById("music"),
		audio = document.getElementById("audio");
	music.style.cssText = "opacity: 1";
	setTimeout(audio.play(), 1000);
	setTimeout(function () {
		document.getElementsByClassName("arrow")[0].style.cssText = "display: block";
	}, 4000);
	for (var i = 0; i < 6; i++) {
		document.getElementById("page" + i).style.cssText = "display: none;";
	}
	document.getElementById("page1").style.cssText = "display: block";
	
	var ms = 200;
	for (var i = 0; i < 6; i++) {
		ms += 500;
		document.getElementById("page1-text" + i).style.cssText = "animation: opacity 1s linear " + ms + "ms 1 normal forwards";
	}
}

function page2() {
	document.getElementById("nowPage").value = 2;
	var windowHeight = window.parent.document.documentElement.clientHeight;
	
	for (var i = 0; i < 6; i++) {
		document.getElementById("page" + i).style.cssText = "display: none;";
	}
	setObjectHeight(document.getElementById("page2"), "display: block;");
}

function page3() {
	document.getElementById("nowPage").value = 3;
	var windowHeight = window.parent.document.documentElement.clientHeight;
	
	for (var i = 0; i < 6; i++) {
		document.getElementById("page" + i).style.cssText = "display: none;";
	}
	setObjectHeight(document.getElementById("page3"), "display: block;");
	document.getElementById("page3-control").style.cssText = "display: block";
}

function page4() {
	var name = document.getElementById("name");
	if (name.value.length === 0) {
		alert("请输入姓名");
		page3();
		return null;
	} else if (name.value.length < 2 || name.value.length > 4) {
		alert("昵称字符2-4");
		page3();
		return null;
	}
	document.getElementById("page3-control").style.cssText = "display: none";
	document.getElementById("nowPage").value = 4;
	var windowHeight = window.parent.document.documentElement.clientHeight;
	
	for (var i = 0; i < 6; i++) {
		document.getElementById("page" + i).style.cssText = "display: none;";
	}
	setObjectHeight(document.getElementById("page4"), "display: block;");
	document.getElementById("page4-control").style.cssText = "display: block";
	
	var cBg = "img/4/oc.png",
		obj = document.getElementById("cBg"),
		oc = document.getElementById("oc").value;
	if (oc === "stu") {
		cBg = "img/4/stu.png";
	}
	obj.style.cssText = "background: url('" + cBg + "') center no-repeat;background-size: 100%;";
}

function page5() {
	document.getElementById("page4-control").style.cssText = "display: none";
	document.getElementById("nowPage").value = 5;
	var objPage5 = document.getElementById("page5"),
		page4Control = document.getElementById("page4-control"),
		page5Control = document.getElementById("page5-control"),
		windowHeight = window.parent.document.documentElement.clientHeight;
		
	setObjectHeight(objPage5, "display: block;");
	page5Control.style.cssText = "display: block;height: " + windowHeight + "px;";
	page5Control.onclick = function () {
		objPage5.style.cssText = "display: none";
		page5Control.style.cssText = "display: none";
		page4Control.style.cssText = "display: block";
		document.getElementById("nowPage").value = 4;
	}
}