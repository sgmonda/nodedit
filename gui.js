/*jslint node: true, nomen: true, vars: true*/
'use strict';

/**
 * Nodedit main file
 * @author Sergio García Mondaray <sgmonda@gmail.com>
 */

// DEPENDENCES =================================================================

var nc = require('ncurses');
var widgets = require('ncurses/lib/widgets');

// GLOBAL OBJECTS ==============================================================

var win = new nc.Window();

// MAIN LOGIC ==================================================================

var printText = function (win, x, y, text, attrs) {

	var curx = win.curx;
	var cury = win.cury;

	if (x < 0) {
		x = win.width + x - (text.length - 1);
	}

	if (y < 0) {
		y = win.height + y;
	}

	win.scroll(1);
	win.cursor(y, x);

	if (attrs) {
		win.attron(attrs);
	}

	win.print(text);

	if (attrs) {
		win.attroff(attrs);
	}

	win.cursor(cury, curx);
	win.refresh();
};


printText(win, -1, -1, 'bottom-right');
printText(win, 0, -1, 'bottom-left');
printText(win, 0, 0, 'top-left');
printText(win, -1, 0, 'top-right');

var close = function () {
	win.close();
};

// EXPORTS =====================================================================

exports.close = close;

// TESTS =======================================================================

