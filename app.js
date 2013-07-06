/*jslint node: true, nomen: true, vars: true*/
'use strict';

/**
 * Nodedit main file
 * @author Sergio García Mondaray <sgmonda@gmail.com>
 */

// DEPENDENCES =================================================================

var settings = require('./settings.js');
var gui = require('./gui.js');

// GLOBAL OBJECTS ==============================================================


// MAIN LOGIC ==================================================================

//gui.setTitle(settings.DEFAULT_TITLE);

// EXPORTS =====================================================================

// SIGNALS =====================================================================

process.on('SIGINT', function () {
	gui.close();
});

// TESTS =======================================================================

