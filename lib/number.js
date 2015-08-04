'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var sqrt = Math.sqrt;


// CONSTANTS //

var PI = Math.PI;


// MEAN //

/**
* FUNCTION mean( sigma )
*	Computes the distribution mean for a Rayleigh with parameter sigma.
*
* @param {Number} sigma - scale parameter
* @returns {Number} distribution mean
*/
function mean( sigma ) {
	if ( !isPositive( sigma ) ) {
		return NaN;
	}
	return sigma * sqrt( PI / 2 );
} // end FUNCTION mean()


// EXPORTS

module.exports =  mean;
