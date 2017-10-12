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
