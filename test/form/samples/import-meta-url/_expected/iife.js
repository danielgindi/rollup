(function () {
	'use strict';

	document.body.innerText = (typeof document !== 'undefined' ? document.currentScript && document.currentScript.src || document.baseURI : new (typeof URL !== 'undefined' ? URL : require('ur'+'l').URL)('file:' + __filename).href);

}());
