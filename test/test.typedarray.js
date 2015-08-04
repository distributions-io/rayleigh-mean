/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mean = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean', function test() {
		var sigma, actual, expected;

		sigma = new Float64Array( [ 2, 4, 6, 8  ] );
		actual = new Float64Array( sigma.length );

		actual = mean( actual, sigma );
		expected = new Float64Array( [ 2.506628, 5.013257, 7.519885, 10.02651 ] );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mean( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
