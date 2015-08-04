/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),
	
	// Module to be tested:
	mean = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean using an accessor', function test() {
		var sigma, actual, expected;

		sigma = [
			{'sigma':2},
			{'sigma':4},
			{'sigma':6},
			{'sigma':8}
		];
		actual = new Array( sigma.length );

		actual = mean( actual, sigma, getValue );
		expected = [ 2.506628, 5.013257, 7.519885, 10.02651 ];

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );


		function getValue( d ) {
			return d.sigma;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mean( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var sigma, actual, expected;

		sigma = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( sigma.length );
		actual = mean( actual, sigma, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
