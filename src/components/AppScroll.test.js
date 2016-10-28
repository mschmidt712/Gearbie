import test from 'ava';
import sinon from 'sinon';
import $ from 'jquery';
import AppScroll from './AppScroll';

let AppScrollObj;
let onWindowStub;
let elementScrollSpy;

let timeNow;
let timeStamp;
let counter = 0;
let ev = {
  originalEvent: {
    wheelDelta: 3,
  },
};
let changeLocation = function mockChangeLocationFunction(direction) {
  return direction;
};
const scrollThreshold = 1000;

test.beforeEach(() => {
  AppScrollObj = new AppScroll();
  onWindowStub = sinon.spy($(window), 'on');
});

test.afterEach(() => {
  onWindowStub.restore();
});

test('handleScrollEvent function - first call', (t) => {
  elementScrollSpy = sinon.stub(AppScrollObj, 'elementScroll', () => {});
  const results = AppScrollObj.handleScrollEvent(
    timeStamp,
    counter,
    ev,
    changeLocation,
    scrollThreshold
  );
  const mockResults = [1, timeStamp];

  t.deepEqual(results, mockResults);
  t.false(elementScrollSpy.called);
});

test('handleScrollEvent function - second call', (t) => {
  elementScrollSpy = sinon.stub(AppScrollObj, 'elementScroll', () => {});
  counter = 1;
  timeNow = new Date().getTime();

  const results = AppScrollObj.handleScrollEvent(
    timeStamp,
    counter,
    ev,
    changeLocation,
    scrollThreshold
  );
  const mockResults = [0, timeNow];

  t.deepEqual(results, mockResults);
  t.true(elementScrollSpy.called);
});

test('handleScrollEvent function - third call', (t) => {
  elementScrollSpy = sinon.stub(AppScrollObj, 'elementScroll', () => {});
  counter = 0;
  timeStamp = new Date().getTime();

  const results = AppScrollObj.handleScrollEvent(
    timeStamp,
    counter,
    ev,
    changeLocation,
    scrollThreshold
  );
  const mockResults = [1, timeStamp];

  t.deepEqual(results, mockResults);
  t.false(elementScrollSpy.called);
});

test('elementScroll function - scroll down', (t) => {
  ev = {
    originalEvent: {
      wheelDelta: -5,
    },
  };
  changeLocation = sinon.spy();

  AppScrollObj.elementScroll(ev, changeLocation);

  t.true(changeLocation.called);
  t.deepEqual(changeLocation.getCalls()[0].args, ['next']);
});

test('elementScroll function - scroll up', (t) => {
  ev = {
    originalEvent: {
      wheelDelta: 5,
    },
  };
  changeLocation = sinon.spy();

  AppScrollObj.elementScroll(ev, changeLocation);

  t.true(changeLocation.called);
  t.deepEqual(changeLocation.getCalls()[0].args, ['last']);
});
