/*jslint node: true, nomen: true, vars: true*/
'use strict';

/**
 * Nodedit main file
 * @author Sergio García Mondaray <sgmonda@gmail.com>
 */

// DEPENDENCES =================================================================

var settings = require('./settings.js');
//var gui = require('./gui.js');
var ac = require('ansi-canvas');

// GLOBAL OBJECTS ==============================================================

var canvas = ac();
var context = canvas.getContext('2d');

// MAIN LOGIC ==================================================================

// draw a purple background
context.fillStyle = 'purple';
context.fillRect(0, 0, canvas.width, canvas.height);

// write some text
context.fillStyle    = '#00f';
context.font         = 'italic 15px sans-serif';
context.textBaseline = 'top';
context.fillText  ('Hello world!', 1, 1);
context.font         = 'bold 20px sans-serif';
context.strokeText('Hello world!', 1, 21);

// IMPORTANT!!!
// call `canvas.render()` when you're ready to flush the canvas to the terminal
canvas.render();

//gui.setTitle(settings.DEFAULT_TITLE);

// EXPORTS =====================================================================

// SIGNALS =====================================================================

// process.on('SIGINT', function () {
// 	gui.close();
// });

// TESTS =======================================================================

