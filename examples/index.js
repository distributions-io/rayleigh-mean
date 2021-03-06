'use strict';

var matrix = require( 'dstructs-matrix' ),
	mean = require( './../lib' );

var sigma,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
sigma = new Array( 10 );
for ( i = 0; i < sigma.length; i++ ) {
	sigma[ i ] = i + 1;
}
out = mean( sigma );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < sigma.length; i++ ) {
	sigma[ i ] = {
		'x': sigma[ i ]
	};
}
out = mean( sigma, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < sigma.length; i++ ) {
	sigma[ i ] = {
		'x': [ i, sigma[ i ].x ]
	};
}
out = mean( sigma, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
sigma = new Int32Array( 10 );
for ( i = 0; i < sigma.length; i++ ) {
	sigma[ i ] = i + 1;
}
tmp = mean( sigma );
out = '';
for ( i = 0; i < sigma.length; i++ ) {
	out += tmp[ i ];
	if ( i < sigma.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( sigma, [5,2], 'int32' );
out = mean( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = mean( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );
