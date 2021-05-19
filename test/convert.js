const assert = require('assert');
const convert = require('../src/originalConvert');
const {UC, UCWithNewRule} = require('../src/index');
const tests = {};

tests['test Convertor'] = function () {
//   assert.strictEqual(convert(1).from('g-force').to('m/s2'), 9.80665);
  const convertor = UC();

//   assert.strictEqual(convertor.getUnit("b"), convert().getUnit("b"));
};

// tests['m/s2 to g'] = function () {
//   assert.strictEqual(convert(9.80665).from('m/s2').to('g-force'), 1);

// };

module.exports = tests;









// import { convertOveride as UC } from "./Convertor";
// import convert from "./unit-converts/index";
// import numeral from "numeral";

// describe("test Convertor", () => {
//   it("methods of the convert-units can be accessed", () => {
//     expect.hasAssertions();
//     const convertor = UC();

//     expect(convertor.getUnit("b")).toStrictEqual(convert().getUnit("b"));
//     expect(convertor.list()).toStrictEqual(convert().list());
//     expect(convertor.possibilities()).toStrictEqual(convert().possibilities());
//     expect(convertor.measures()).toStrictEqual(convert().measures());
//   });
//   it("toBest and to works correctly", () => {
//     expect.hasAssertions();

//     expect(
//       UC(10001)
//         .from("b")
//         .to("Kb")
//         .toNumber()
//     ).toStrictEqual(
//       convert(10001)
//         .from("b")
//         .to("Kb")
//     );

//     expect(
//       UC(10001)
//         .from("b")
//         .toBest()
//         .toNumber()
//     ).toStrictEqual(
//       convert(10001)
//         .from("b")
//         .toBest().val
//     );
//   });

//   it("'format' and 'formatWithUnit' works correctly", () => {
//     expect.hasAssertions();

//     const result = UC(10001)
//       .from("b")
//       .to("Kb")
//       .toNumber();
      
//     expect(
//       UC(10001)
//         .from("b")
//         .to("Kb")
//         .format(0.0)
//         .toString()
//     ).toStrictEqual(numeral(result).format(0.0));

//     expect(
//       UC(10001)
//         .from("b")
//         .to("Kb")
//         .formatWithUnit(0.0)
//         .toString()
//     ).toStrictEqual(numeral(result).format(0.0) + " Kb");
//   });

//   it("transform correctly", () => {
//     expect.hasAssertions();

//     expect(
//       UC(10001)
//         .from("b")
//         .to("Kb")
//         .transform({ alias: { Kb: "kbps" } })
//         .formatWithUnit()
//         .toString()
//     ).toStrictEqual(
//       convert(10001)
//         .from("b")
//         .to("Kb") + " kbps"
//     );

//     expect(
//       UC(10001)
//         .from("b")
//         .to("Kb")
//         .transform({
//           alias: { Kb: "kbps" },
//           transform: (result) => ({ ...result, val: 1 }),
//         })
//         .formatWithUnit()
//         .toString()
//     ).toStrictEqual("1 kbps");

//     expect(
//       UC(10001)
//         .from("b")
//         .to("Kb")
//         .transform({
//           alias: { Kb: "kbps" },
//           transform: [(result) => ({ ...result, val: 1 }), (result) => ({ ...result, val: result.val + 1 })],
//         })
//         .formatWithUnit()
//         .toString()
//     ).toStrictEqual("2 kbps");


//   });
// });
