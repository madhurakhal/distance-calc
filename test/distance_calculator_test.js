'use strict';

let expect = require('chai').expect;
let distranceBetweenPoints = require('../lib/distance_calculator');

describe("distranceBetweenPoints", () => {
  let err = new Error();
  it("should throw error when any of the argument is missing", () => {
    expect(function() {
      distranceBetweenPoints();
    }).to.throw(err);
  });

  it("should calculate distance between two geographical points", () => {
    expect(distranceBetweenPoints(38.898556, -77.037852, 38.897147, -77.043934)).to.equal(0.549);
  });

});
