/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mean = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean', function test() {
		assert.closeTo( mean( 2 ), 2.506628, 1e-5 );
		assert.closeTo( mean( 4  ), 5.013257, 1e-5 );
		assert.closeTo( mean( 6  ), 7.519885, 1e-5 );
		assert.closeTo( mean( 8  ), 10.02651, 1e-5 );
	});

});
