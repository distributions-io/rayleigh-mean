'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	MEAN  = require( './number.js' );


// MEAN //

/**
* FUNCTION: mean( sigma, path[, sep] )
*	Computes the distribution mean and deep sets the input array.
*
* @param {Array} sigma - input array
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array} input array
*/
function mean( sigma, path, sep ) {
	var len = sigma.length,
		opts = {},
		dget,
		dset,
		v, i;
	if ( arguments.length > 2 ) {
		opts.sep = sep;
	}
	if ( len ) {
		dget = deepGet( path, opts );
		dset = deepSet( path, opts );
		for ( i = 0; i < len; i++ ) {
			v = dget( sigma[ i ] );
			if ( typeof v === 'number' ) {
				dset( sigma[i], MEAN ( v ) );
			} else {
				dset( sigma[i], NaN );
			}
		}
	}
	return sigma;
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
