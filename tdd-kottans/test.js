/*const {expect} = require('chai');

describe('Testing test tool', () =>{
	it('shoul always pass',() =>{
	expect(true).to.be.ok;
	})
})*/
"use strict"

require("chai").should()

const {main} = require("./package")
const add = require(main)

describe("add", () =>
{
	it("should be a function with 1 param", () =>
	{
		add.should
			.be.a("function")
			.have.lengthOf(1)
	})

	it("should add any number of ints", () =>
	{
		add("1").should.equal(1)
		add("1,2").should.equal(3)
		add("3,6,1").should.equal(10)
		add("4,8,15,16,23,42").should.equal(108)
	})

	it("should return 0 for empty string", () =>
	{
		add("").should.equal(0)
	})

	it("should handle new lines between numbers", () =>
	{
		add("1\n2,3").should.equal(6)
	})
})