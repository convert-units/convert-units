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
import configureMeasurements, { allMeasures } from 'convert-units';

const convert = configureMeasurements(allMeasures);
```

It's also possible to limit the measures configured to only the ones your application needs:

```js
import configureMeasurements, { volume, mass, length } from 'convert-units';

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

Here's how you move between the metric units for volume:

```js
convert(1).from('l').to('ml');
// 1000
```

Jump from imperial to metric units the same way:

```js
convert(1).from('lb').to('kg');
// 0.4536... (tested to 4 significant figures)
```

Just be careful not to ask for an impossible conversion:

```js
convert(1).from('oz').to('fl-oz');
// throws -- you can't go from mass to volume!
```

You can ask `convert-units` to select the best unit for you. You can also optionally explicitly exclude orders of magnitude or specify a cut off number for selecting the best representation.
```js
convert(12000).from('mm').toBest();
// { val: 12, unit: 'm', plural: 'Meters' } (the smallest unit with a value above 1)

convert(12000).from('mm').toBest({ exclude: ['m'] });
// { val: 1200, unit: 'cm', plural: 'Centimeters' } (the smallest unit excluding meters)

convert(900).from('mm').toBest({ cutOffNumber: 10 });
// { val: 90, unit: 'cm', plural: 'Centimeters' } (the smallest unit with a value equal to or above 10)

convert(1000).from('mm').toBest({ cutOffNumber: 10 });
// { val: 100, unit: 'cm', plural: 'Centimeters' } (the smallest unit with a value equal to or above 10)
```

You can get a list of the measures available to the current instance with `.measures`

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

If you ever want to know the possible conversions for a unit, just use `.possibilities`

```js
convert().from('l').possibilities();
// [ 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

convert().from('kg').possibilities();
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

You can also get the possible conversions for a measure:
```js
convert().possibilities('mass');
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't' ]
```

You can also get the all the available units:
```js
convert().possibilities();
// [ 'mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'mi', 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't', 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ea', 'dz' ];
```

To get a detailed description of a unit, use `describe`

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

To get detailed descriptions of all units, use `list`.

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

You can also get detailed descriptions of all units for a measure:

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

It's possible to define custom measures if the ones packaged aren't what you need:

```js
import configureMeasurements from 'convert-units';

const customMeasure = {
  systems: {
    A: {
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
};

const convert = configureMeasurements({ customMeasure });
convert(1).from('a').to('bl')
// 20
```

The order of opperations goes as follows:

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

It's also possible to extend existing measures:

```ts
import configureMeasurements, {
  length,
  LengthSystems,
  LengthUnits,
  Measure
} from 'convert-units';

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

Migrating from Old API
---------------------

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
import configureMeasurements, { allMeasures } from 'convert-units';

export default configureMeasurements(allMeasures);
```

Typescript
----------

Defining types can provide the benefit of exposing issues while working on your application.

```ts
import configureMeasurements, {
  AllMeasures,
  allMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
  area,
  AreaSystems,
  AreaUnits,
  length,
  LengthSystems,
  LengthUnits,
} from 'convert-units';

// Meausres: The names of the measures being used
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

// If you'd like to use all the packages measures that can be done like so
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
### Length
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

### Area
* mm2
* cm2
* m2
* ha
* km2
* in2
* ft2
* ac
* mi2

### Mass
* mcg
* mg
* g
* kg
* oz
* lb
* mt
* t

### Volume
* mm3
* cm3
* ml
* l
* kl
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

### Volume Flow Rate
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

### Temperature
* C
* F
* K
* R

### Time
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

### Frequency
* Hz
* mHz
* kHz
* MHz
* GHz
* THz
* rpm
* deg/s
* rad/s

### Speed
* m/s
* km/h
* mph
* knot
* ft/s

### Pace
* s/m
* min/km
* s/ft
* min/mi

### Pressure
* Pa
* hPa
* kPa
* MPa
* bar
* torr
* psi
* ksi

### Digital
* b
* Kb
* Mb
* Gb
* Tb
* B
* KB
* MB
* GB
* TB

### Illuminance
* lx
* ft-cd

### Parts-Per
* ppm
* ppb
* ppt
* ppq

### Voltage
* V
* mV
* kV

### Current
* A
* mA
* kA

### Power
* W
* mW
* kW
* MW
* GW
* PS
* Btu/s
* ft-lb/s
* hp

### Apparent Power
* VA
* mVA
* kVA
* MVA
* GVA

### Reactive Power
* VAR
* mVAR
* kVAR
* MVAR
* GVAR

### Energy
* Wh
* mWh
* kWh
* MWh
* GWh
* J
* kJ

### Reactive Energy
* VARh
* mVARh
* kVARh
* MVARh
* GVARh

### Angle
* deg
* rad
* grad
* arcmin
* arcsec

### Charge
* c
* mC
* μC
* nC
* pC

### Force
* N
* kN
* lbf

### Acceleration
* g (g-force)
* m/s2

### Pieces
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

