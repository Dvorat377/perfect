const vali=require('./Router/validfunc')

test('check phone', () => {
    expect(vali.validphone("14152007986")).toBe(true);
  });