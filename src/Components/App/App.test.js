import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";
import fetchMock from "fetch-mock";
import MockVehicleData from "./MockVehicleData";
import MockPeopleData from "./MockPeopleData";
import MockPlanetData from "./MockPlanetData";

describe("App", () => {
  const stateStub = {
    scroll: [],
    people: {},
    planets: {},
    vehicles: {},
    cleanedPlanets: {},
    cleanedVehicles: {},
    selected: ''
  };


  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      });
    });
  };

  it('should ', () => {

  });
});


var fetchMock = require('fetch-mock');
var makeRequest = require('./make-request');
// Mock the fetch() global to always return the same value for GET
// requests to all URLs.
fetchMock.get('*', {results: [{}], next: null);

makeRequest().then(function(data) {
  console.log('got data', data);
});

// Unmock.
fetchMock.restore();
