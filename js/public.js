function setObjectHeight(obj , css) {
	var windowHeight = window.parent.document.documentElement.clientHeight;
	if (window.screen.width > window.screen.height || windowHeight < 1743) {
		obj.style.cssText = "height: 1743px;" + css;
	} else {
		obj.style.cssText = "height: " + windowHeight + "px;" + css;
	}
}

function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    };
    return windowHeight;
};

function getScrollTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    };
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    };
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
};

function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}