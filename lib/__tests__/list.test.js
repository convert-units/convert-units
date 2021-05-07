const convert = require('..');

test('list length not 0', () => {
  var list = convert().list();
  expect(list.length).not.toBe(0);
});

test('list has abbr key', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('abbr');
});

test('list abbr key is string', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.abbr).toBe('string');
});

test('list has measure key', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('measure');
});

test('list measure key is string', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.measure).toBe('string');
});

test('list has system key', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('system');
});

test('list system key is string', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.system).toBe('string');
});

test('list has singular key', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('singular');
});

test('list singular key is string', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.singular).toBe('string');
});

test('list has plural key', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('plural');
});

test('list plural key is string', () => {
  var list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.plural).toBe('string');
});

test('list by measure', () => {
  var full = convert().list(),
    measures = convert().measures();
  measures.map(function (measure) {
    var list = convert().list(measure);

    expect(list.length > 0).toBeTruthy();
    expect(list.length < full.length).toBeTruthy();
  });
});
