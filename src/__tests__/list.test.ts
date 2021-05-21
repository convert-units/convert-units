import convert from '..';

test('list length not 0', () => {
  const list = convert().list();
  expect(list.length).not.toBe(0);
});

test('list has abbr key', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('abbr');
});

test('list abbr key is string', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.abbr).toBe('string');
});

test('list has measure key', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('measure');
});

test('list measure key is string', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.measure).toBe('string');
});

test('list has system key', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('system');
});

test('list system key is string', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.system).toBe('string');
});

test('list has singular key', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('singular');
});

test('list singular key is string', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.singular).toBe('string');
});

test('list has plural key', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('plural');
});

test('list plural key is string', () => {
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.plural).toBe('string');
});

test('list by measure', () => {
  const full = convert().list(),
    measures = convert().measures();
  measures.map(function (measure) {
    const list = convert().list(measure);

    expect(list.length > 0).toBeTruthy();
    expect(list.length < full.length).toBeTruthy();
  });
});

test('unsupported measure should throw', () => {
  expect(() => {
    convert().list('BadMeasure');
  }).toThrow();
});
