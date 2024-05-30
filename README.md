convert-units
=============

[![Downloads](https://img.shields.io/npm/dm/convert-units.svg)](https://www.npmjs.com/package/convert-units)

A handy utility for converting between quantities in different units.

Installation
-----

```bash
npm install convert-units --save
```

```bash
# beta builds are also available with
npm install convert-units@beta --save
```

Usage
-----

`convert-units` has a simple chained API that is easy to read. It can also be configured with the measures that are packaged with it or custom measures.

The code snippet below shows everything needed to get going:

```js
// `allMeasures` includes all the measures packaged with this library
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';

const convert = configureMeasurements(allMeasures);
```

It's also possible to limit the measures configured. This allows for smaller packages when using a bundler like `webpack` or `rollup`:

```js
import configureMeasurements from 'convert-units';
import volume from 'convert-units/definitions/volume';

/*
  `configureMeasurements` is a closure that accepts a directory
  of measures and returns a factory function (`convert`) that uses
  only those measures.
*/
const convert = configureMeasurements({
    volume,
    mass,
    length,
});
```

Converting between units in a measure:

```js
convert(1).from('l').to('ml');
// 1000
```

Converting between systems is handled automatically (`imperial` to `metric` in this case):

```js
convert(1).from('lb').to('kg');
// 0.4536... (tested to 4 significant figures)
```

Attempting to convert between measures will result in an error:

```js
convert(1).from('oz').to('fl-oz');
// throws -- you can't go from mass to volume!
```

To convert a unit to another unit within the same measure with the smallest value above `1`:

```js
convert(12000).from('mm').toBest();
// { val: 12, unit: 'm', ... }
```

> Note: The `toBest` method is *subjective* and **does not work for all measures**.

If a *better* value is not found, then from unit is returned. This is also the case for zero:

```js
convert(1).from('mm').toBest();
// { val: 1, unit: 'mm', ... }

convert(0).from('mm').toBest();
// { val: 0, unit: 'mm', ... }
```

Exclude units to get different results:

```js
convert(12000).from('mm').toBest({ exclude: ['m'] });
// { val: 1200, unit: 'cm', ... } (the smallest unit excluding meters)
```

The best is always the smallest number above `1`. If the value is a negative number, the best is always the largest number below `-1`. The cut off number of either `1` or `-1` can be changed to get different results:

```js
convert(900).from('mm').toBest({ cutOffNumber: 10 });
// { val: 90, unit: 'cm', ... } (the smallest unit with a value equal to or above 10)

convert(1000).from('mm').toBest({ cutOffNumber: 10 });
// { val: 100, unit: 'cm', plural: 'Centimeters' } (the smallest unit with a value equal to or above 10)

// by default the system of the origin is used, the `system` option overwrites this behaviour
convert(254).from('mm').toBest({ system: 'imperial' }); // ('mm' is metric)
// { val: 10, unit: 'in', plural: 'Inches' }            // ('in' is imperial)
```

List all available measures:

```js
convert().measures();
// [ 'length', 'mass', 'volume', ... ]

const differentConvert = configureMeasurements({
    volume,
    mass,
    length,
    area,
});
differentConvert().measures();
// [ 'length', 'mass', 'volume', 'area' ]
```

List all units that a given unit can be converted to:

```js
convert().from('l').possibilities();
// [ 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

convert().from('kg').possibilities();
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

List all units that belong to a measure:

```js
convert().possibilities('mass');
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't' ]
```

List all configured units:

```js
convert().possibilities();
// [ 'mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'mi', 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't', 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ea', 'dz' ];
```

Get a detailed description of a unit:

```js
convert().describe('kg');
/*
  {
    abbr: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms',
  }
*/
```

List detailed descriptions of all units:

```js
convert().list();
/*
  [{
    abbr: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms',
  }, ...]
*/
```

List detailed descriptions of all units for a measure:

```js
convert().list('mass');
/*
  [{
    abbr: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms',
  }, ...]
*/
```

Custom Measures
---------------

To create a custom measure, it's best to start with an plain object. The key itself will be used as the measure's name. In the example below, the measure's name is "`customMeasure`".

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {},
};
```
</details>

Next step is to create the measure's systems. A system is a collection of related units. Here are some examples of some common systems: metric, imperial, SI, bits, bytes, etc. You don't need to use one of these systems for your measure. In the example below, there are 3 systems defined: `A`, `B`, `C`.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {},
      B: {},
      C: {},
    }
  },
};
```
</details>

Now the measure is ready to define some units. The first unit that needs to be defined for each system is the base unit. The base unit is like all other units except that it's the unit used to convert between systems and every other unit in the system will be configured to convert directly to it. Below is an example of a base unit for the `A` system.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        a: {  // the name of the unit (commonly an abbreviation)
          name: {  // human friendly names for the unit
            singular: 'a',
            plural: 'as',
          },
        }
      },
      // ignoring C & B for now
    }
  },
};
```
</details>

Each unit also needs to an `to_anchor` property. `to_anchor` holds a number which represents the factor needed to go from another unit in the system to the base unit. In the case of the `a` unit, the value will be `1`. The value for all base units in every system should to be `1` because if you convert `5 a` to `a` the result should be `5 a`. This is because the value of `to_anchor` is multiplied with the value of the unit being converted from. So in this case, `5 * 1 = 5`.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        a: {
          name: {
            singular: 'a',
            plural: 'as',
          },
          to_anchor: 1,
        }
      },
      // ignoring C & B for now
    }
  },
};
```
</details>

Adding a second measure to the `A` measure looks exactly the same as the `a` unit except the `to_anchor` value will be different. If the unit is supposed to be larger than the base then the `to_anchor` value needs to be greater than `1`. For example, the new unit `ah` should be a factor of 10 larger than the base. This would mean that `1 ah` equals `10 a`. To make sure this assumption is correct multiply the `to_anchor` by the unit, `5 ah * 10 = 50 a`.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        ah: {  // new unit, ah
          name: {
            singular: 'ah',
            plural: 'ahs',
          },
          to_anchor: 1e1,  // = 10 ^ 1 = 10
        },
        a: {
          name: {
            singular: 'a',
            plural: 'as',
          },
          to_anchor: 1,
        }
      },
      // ignoring C & B for now
    },
  },
};
```
</details>

If the unit should be smaller than the base unit then the `to_anchor` value should be less than `1` and greater than `0`. With that said, the new unit `al` should have a `to_anchor` value of `0.1`. This would mean that `10 al` would equal `1 a`.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        ah: {  // new unit, ah
          name: {
            singular: 'ah',
            plural: 'ahs',
          },
          to_anchor: 1e1,  // = 10 ^ 1 = 10
        },
        a: {
          name: {
            singular: 'a',
            plural: 'as',
          },
          to_anchor: 1,
        }
        al: {  // new unit, al
          name: {
            singular: 'al',
            plural: 'als',
          },
          to_anchor: 1e-1,  // = 10 ^ -1 = 0.1
        },
      },
      // ignoring C & B for now
    },
  },
};
```
</details>

There is one more option, `anchor_shift`, it can be defined on a unit if it requires to be shifted after the conversion. If `al` had a `anchor_shift` of `5` then `10 al` to `a` would look like, `10 * 0.1 - 5 = -4 a`. If the shift needs to go in the opposite direction then it should be a negative number. Typically, measures and units that use the `anchor_shift` only need to be shifted. If that is the desired effect then setting `to_anchor` to `1` for each unit will achieve that. To see a real world example, check out the `temperature` measure in the `definitions` folder.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        ah: {  // new unit, ah
          name: {
            singular: 'ah',
            plural: 'ahs',
          },
          to_anchor: 1e1,  // = 10 ^ 1 = 10
        },
        a: {
          name: {
            singular: 'a',
            plural: 'as',
          },
          to_anchor: 1,
        }
        al: {  // new unit, al
          name: {
            singular: 'al',
            plural: 'als',
          },
          to_anchor: 1e-1,  // = 10 ^ -1 = 0.1
          anchor_shift: 5,
        },
      },
      // ignoring C & B for now
    }
  },
};
```
</details>

At this point if the custom measure only needs one system then it's done! However, if it requires more than one system, an extra step is required. In the example code below, the previously ignored systems `C` and `B` have been defined to look exactly like the `A` system.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        ah: {
          name: {
            singular: 'ah',
            plural: 'ahs',
          },
          to_anchor: 1e1,
        },
        a: {
          name: {
            singular: 'a',
            plural: 'as',
          },
          to_anchor: 1,
        },
        al: {
          name: {
            singular: 'al',
            plural: 'als',
          },
          to_anchor: 1e-1,
        },
      },
      B: {
        bh: {
          name: {
            singular: 'bh',
            plural: 'bhs',
          },
          to_anchor: 1e1,
        },
        b: {
          name: {
            singular: 'b',
            plural: 'bs',
          },
          to_anchor: 1,
        },
        bl: {
          name: {
            singular: 'bl',
            plural: 'bls',
          },
          to_anchor: 1e-1,
        },
      },
      C: {
        ch: {
          name: {
            singular: 'ch',
            plural: 'chs',
          },
          to_anchor: 1e1,
        },
        c: {
          name: {
            singular: 'c',
            plural: 'cs',
          },
          to_anchor: 1,
        },
        cl: {
          name: {
            singular: 'cl',
            plural: 'cls',
          },
          to_anchor: 1e-1,
        },
      },
    },
  }
};
```
</details>

The measure now has three systems, `A`, `B`, and `C`. To define how each system can be converted to the other, anchors will needs to be defined for each possible conversion. To start, add the key `anchors` to the `customMeasure` object:

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      // ...
    },
    anchors: {},
  }
};
```
</details>

Then just like for the `systems` object, add a key for each system with it's value being an empty object:

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      // ...
    },
    anchors: {
      A: {},
      B: {},
      C: {},
    },
  }
};
```
</details>

In each of those empty objects, add keys for the other systems which their values being an empty object. The measure should look like the code snippet below:

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      // ...
    },
    anchors: {
      A: {  // A to B or C
        B: {},
        C: {},
      },
      B: {  // B to A or C
        A: {},
        C: {},
      },
      C: {  // C to A or B
        A: {},
        B: {},
      },
    },
  }
};
```
</details>

When converting, for example, `1 a` to `bl`, the code can perform a simple lookup here, `anchors.A.B`. If instead the conversion is from `10 c` to `ah` then the lookup would be, `anchors.C.A`. At this point how to convert from one system to the next hasn't been defined yet; that will be the next and final step in creating a new measure.

Each system pair needs to either defined a `ratio` or a `transform` function. If a `ratio` is defined then it's multiplied by the base unit to convert it to the target system's base unit. If `transform` is defined, the function is called with the value of the best unit. It's value is used as the base unit of the target system. The `transform` function should return a number.

> Note: If both `ratio` and `transform` are defined then the `ratio` will be used and the `transform` function will be ignored. If nether are defined, the conversion will throw an error.

<details>
<summary>Code example:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      // ...
    },
    anchors: {
      A: {  // A to B or C
        B: {
          ratio: 2,
        },
        C: {
          ratio: 3,
        },
      },
      B: {  // B to A or C
        A: {
          ratio: 1 / 2,
        },
        C: {
          ratio: 3 / 2,
        },
      },
      C: {  // C to A or B
        A: {
          // example of using a transform function
          // This would be the same as ratio: 1 / 3
          transform: value => value * 1 / 3,
        },
        B: {
          transform: value => value * 2 / 3,
        },
      },
    },
  }
};
```
</details>

With the above example, converting `10 cl` to `ah` would result in `0.0333` (rounded).

<details>
<summary>Here is the complete measure:</summary>

```js
const measure = {
  customMeasure: {
    systems: {
      A: {
        ah: {
          name: {
            singular: 'ah',
            plural: 'ahs',
          },
          to_anchor: 1e1,
        },
        a: {
          name: {
            singular: 'a',
            plural: 'as',
          },
          // to_anchor: The factor used to reach the base unit
          // The base unit should have a to_anchor value of 1
          // Eg. 1 a -> al = 1a * 1e-1 (to_anchor of al) = 10 al
          to_anchor: 1,
        },
        al: {
          name: {
            singular: 'al',
            plural: 'als',
          },
          to_anchor: 1e-1,
        },
      },
      B: {
        bh: {
          name: {
            singular: 'bh',
            plural: 'bhs',
          },
          to_anchor: 1e1,
        },
        b: {
          name: {
            singular: 'b',
            plural: 'bs',
          },
          to_anchor: 1,
        },
        bl: {
          name: {
            singular: 'bl',
            plural: 'bls',
          },
          to_anchor: 1e-1,
        },
      },
      C: {
        ch: {
          name: {
            singular: 'ch',
            plural: 'chs',
          },
          to_anchor: 1e1,
        },
        c: {
          name: {
            singular: 'c',
            plural: 'cs',
          },
          to_anchor: 1,
        },
        cl: {
          name: {
            singular: 'cl',
            plural: 'cls',
          },
          to_anchor: 1e-1,
        },
      },
    },
    anchors: {
      A: {
        // unit a -> unit b
        B: {
          ratio: 2,
        },
        // unit a -> unit c
        C: {
          ratio: 3,
        },
      },
      B: {
        // unit b -> unit a
        A: {
          ratio: 1 / 2,
        },
        // unit b -> unit c
        C: {
          ratio: 3 / 2,
        },
      },
      C: {
        // unit c -> unit a
        A: {
          ratio: 1 / 3,
        },
        // unit c -> unit b
        B: {
          ratio: 2 / 3,
        },
      },
    },
  }
};

const convert = configureMeasurements(measure);
convert(1).from('a').to('bl')
// 20
```
</details>

<details>
<summary>Pseudo code that shows the maths involved when converting a unit</summary>

```js
// a -> bl
let v = 1  // 1 a
let a_to_anchor = 1  // systems.A.a.to_anchor
let r = v * a_to_anchor
// r = 1 a
let ratio = 2  // anchors.A.B.ratio
r *= ratio
// r = 2 b
let bl_to_anchor = 1e-1  // systems.B.bl.to_anchor
r /= b_to_anchor
// r = 20 bl
```
</details>

## Extending Existing Measures

Since measure definitions are plain JS objects, additional units can be added, removed, and changed.

<details>
<summary>Example of extending the `length` measure</summary>

```ts
import configureMeasurements, {
  Measure
} from 'convert-units';

import
  length, {
  LengthSystems,
  LengthUnits,
} from "convert-units/definitions/length"

type NewLengthUnits = LengthUnits | 'px';
const DPI = 96;
const extendedLength: Measure<LengthSystems, NewLengthUnits> = {
  systems: {
    metric: {
      ...length.systems.metric,
      px: {
        name: {
          singular: 'Pixel',
          plural: 'Pixels',
        },
        to_anchor: 0.0254 / DPI,
      },
    },
    imperial: {
      ...length.systems.imperial,
    },
  },
  anchors: {
    ...length.anchors,
  },
};

const convert = configureMeasurements<'length', LengthSystems, NewLengthUnits>(
  { length: extendedLength }
);

convert(4).from('cm').to('px');
// 151.18110236220474
```
</details>

Migrating from v2 to v3+
-----------------------

This only applies if moving from `<=2.3.4` to `>=3.x`.
 
`index.js`
```js
import convert from 'convert-units';

convert(1).from('m').to('mm');
convert(1).from('m').to('ft');
```

The code above could be changed to match the following:

`index.js`
```js
import convert from './convert';  // defined below

convert(1).from('m').to('mm');
convert(1).from('m').to('ft');
```

`convert.js`
```js
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';  

export default configureMeasurements(allMeasures);
```

Typescript
----------

The library provides types for all packaged mesasures:

```ts
import configureMeasurements from 'convert-units';

import length, {
  LengthSystems,
  LengthUnits,
} from "convert-units/definitions/length"

import area, {
  AreaSystems,
  AreaUnits,
} from "convert-units/definitions/area"

// Measures: The names of the measures being used
type Measures = 'length' | 'area';
// Systems: The systems being used across all measures
type Systems = LengthSystems | AreaSystems;
// Units: All the units across all measures and their systems
type Units = LengthUnits | AreaUnits;

const convert = configureMeasurements<Measures, Systems, Units>({
  length,
  area,
});

convert(4).from('m').to('cm');
// 400
```

This also allows for IDE tools to highlight issues before running the application:

```ts
import configureMeasurements from 'convert-units';

import length, {
  LengthSystems,
  LengthUnits,
} from "convert-units/definitions/length"

import area, {
  AreaSystems,
  AreaUnits,
} from "convert-units/definitions/area"

// Measures: The names of the measures being used
type Measures = 'length' | 'area';
// Systems: The systems being used across all measures
type Systems = LengthSystems | AreaSystems;
// Units: All the units across all measures and their systems
type Units = LengthUnits | AreaUnits;

const convert = configureMeasurements<Measures, Systems, Units>({
  length,
  area,
});

convert(4).from('wat').to('cm');
// Typescript will warm that the unit `wat` does not exist because it's not a member of the `Units` type defined above.
```

Types for the `allMeasures` object are also provided:

```js
import configureMeasurements from 'convert-units';

import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from 'convert-units/definitions/all';

const convertAll = configureMeasurements<
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits
>(allMeasures);

convertAll(4).from('m2').to('cm2');
// 400000
```

Request Measures & Units
-----------------------

All new measures and additional units are welcome! Take a look at [`src/definitions`](https://github.com/convert-units/convert-units/tree/main/src/definitions) to see some examples.

Packaged Units
--------------
<details>
<summary>Length</summary>
* nm
* μm
* mm
* cm
* m
* km
* in
* yd
* ft-us
* ft
* fathom
* mi
* nMi
</details>

<details>
<summary>Area</summary>
* mm2
* cm2
* m2
* ha
* km2
* in2
* ft2
* ac
* mi2
</details>

<details>
<summary>Mass</summary>
* mcg
* mg
* g
* kg
* oz
* lb
* mt
* st
* t
</details>

<details>
<summary>Volume</summary>
* mm3
* cm3
* ml
* l
* kl
* Ml
* Gl
* m3
* km3
* tsp
* Tbs
* in3
* fl-oz
* cup
* pnt
* qt
* gal
* ft3
* yd3
</details>

<details>
<summary>Volume Flow Rate</summary>
* mm3/s
* cm3/s
* ml/s
* cl/s
* dl/s
* l/s
* l/min
* l/h
* kl/s
* kl/min
* kl/h
* m3/s
* m3/min
* m3/h
* km3/s
* tsp/s
* Tbs/s
* in3/s
* in3/min
* in3/h
* fl-oz/s
* fl-oz/min
* fl-oz/h
* cup/s
* pnt/s
* pnt/min
* pnt/h
* qt/s
* gal/s
* gal/min
* gal/h
* ft3/s
* ft3/min
* ft3/h
* yd3/s
* yd3/min
* yd3/h'
</details>

<details>
<summary>Temperature</summary>
* C
* F
* K
* R
</details>

<details>
<summary>Time</summary>
* ns
* mu
* ms
* s
* min
* h
* d
* week
* month
* year
</details>

<details>
<summary>Frequency</summary>
* Hz
* mHz
* kHz
* MHz
* GHz
* THz
* rpm
* deg/s
* rad/s
</details>

<details>
<summary>Speed</summary>
* m/s
* km/h
* mph
* knot
* ft/s
* in/h
* mm/h
</details>

<details>
<summary>Torque</summary>
* Nm
* lbf-ft
</details>



<details>
<summary>Pace</summary>
* s/m
* min/km
* s/ft
* min/mi
</details>

<details>
<summary>Pressure</summary>
* Pa
* hPa
* kPa
* MPa
* bar
* torr
* mH2O
* mmHg
* psi
* ksi
</details>

<details>
<summary>Digital</summary>
* bit
* byte
* kB
* MB
* GB
* TB
* KiB
* MiB
* GiB
* TiB
</details>

<details>
<summary>Illuminance</summary>
* lx
* ft-cd
</details>

<details>
<summary>Parts-Per</summary>
* ppm
* ppb
* ppt
* ppq
</details>

<details>
<summary>Voltage</summary>
* V
* mV
* kV
</details>

<details>
<summary>Current</summary>
* A
* mA
* kA
</details>

<details>
<summary>Power</summary>
* W
* mW
* kW
* MW
* GW
* PS
* Btu/s
* ft-lb/s
* hp
</details>

<details>
<summary>Apparent Power</summary>
* VA
* mVA
* kVA
* MVA
* GVA
</details>

<details>
<summary>Reactive Power</summary>
* VAR
* mVAR
* kVAR
* MVAR
* GVAR
</details>

<details>
<summary>Energy</summary>
* Ws
* Wm
* Wh
* mWh
* kWh
* MWh
* GWh
* J
* kJ
* MJ
* GJ
</details>

<details>
<summary>Reactive Energy</summary>
* VARh
* mVARh
* kVARh
* MVARh
* GVARh
</details>

<details>
<summary>Angle</summary>
* deg
* rad
* grad
* arcmin
* arcsec
</details>

<details>
<summary>Charge</summary>
* c
* mC
* μC
* nC
* pC
</details>

<details>
<summary>Force</summary>
* N
* kN
* lbf
* kgf
</details>

<details>
<summary>Acceleration</summary>
* g (g-force)
* m/s2
</details>

<details>
<summary>Pieces</summary>
* pcs
* bk-doz
* cp
* doz-doz
* doz
* gr-gr
* gros 
* half-dozen
* long-hundred
* ream
* scores
* sm-gr
* trio
</details>


License
-------
Copyright (c) 2013-2017 Ben Ng and Contributors, http://benng.me

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
