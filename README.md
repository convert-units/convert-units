convert-units
=============

[![Build Status](https://travis-ci.org/ben-ng/convert-units.png)](https://travis-ci.org/ben-ng/convert-units) [![Downloads](https://img.shields.io/npm/dm/convert-units.svg)](https://www.npmjs.com/package/convert-units)

A handy utility for converting between quantities in different units.

Installation
-----

```
npm install convert-units --save
```

Usage
-----

`convert-units` has a simple chained API that is easy to read.

Here's how you move between the metric units for volume:

```js
var convert = require('convert-units')

convert(1).from('l').to('ml')
// 1000
```

Jump from imperial to metric units the same way:

```js
convert(1).from('lb').to('kg')
// 0.4536... (tested to 4 significant figures)
```

Just be careful not to ask for an impossible conversion:

```js
convert(1).from('oz').to('fl-oz')
// throws -- you can't go from mass to volume!
```

You can ask `convert-units` to select the best unit for you. You can also optionally explicitly exclude orders of magnitude or specify a cut off number for selecting the best representation.
```js
convert(12000).from('mm').toBest()
// 12 Meters (the smallest unit with a value above 1)

convert(12000).from('mm').toBest({ exclude: ['m'] })
// 1200 Centimeters (the smallest unit excluding meters)

convert(900).from('mm').toBest({ cutOffNumber: 10 });
// 900 Centimeters (the smallest unit with a value equal to or above 10)

convert(1000).from('mm').toBest({ cutOffNumber: 10 })
// 10 Meters (the smallest unit with a value equal to or above 10)
```

You can get a list of the measurement types supported with `.measures`

```js
convert().measures()
// [ 'length', 'mass', 'volume' ]
```

If you ever want to know the possible conversions for a unit, just use `.possibilities`

```js
convert().from('l').possibilities()
// [ 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

convert().from('kg').possibilities()
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

You can also get the possible conversions for a measure:
```js
convert().possibilities('mass')
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't' ]
```

You can also get the all the available units:
```js
convert().possibilities()
// [ 'mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'mi', 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't', 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ea', 'dz' ];
```

To get a detailed description of a unit, use `describe`

```js
convert().describe('kg')
/*
  {
    abbr: 'kg'
  , measure: 'mass'
  , system: 'metric'
  , singular: 'Kilogram'
  , plural: 'Kilograms'
  }
*/
```

To get detailed descriptions of all units, use `list`.

```js
convert().list()
/*
  [{
    abbr: 'kg'
  , measure: 'mass'
  , system: 'metric'
  , singular: 'Kilogram'
  , plural: 'Kilograms'
  }, ...]
*/
```

You can also get detailed descriptions of all units for a measure:

```js
convert().list('mass')
/*
  [{
    abbr: 'kg'
  , measure: 'mass'
  , system: 'metric'
  , singular: 'Kilogram'
  , plural: 'Kilograms'
  }, ...]
*/
```

Supported Units
---------------
### Length
* mm
* cm
* m
* in
* ft-us
* ft
* mi

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
* m/h
* knot
* ft/s

### Pace
* s/m
* min/km
* s/ft
* min/km

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

### Want More?

Adding new measurement sets is easy. Take a look at [`lib/definitions`](https://github.com/ben-ng/convert-units/tree/master/lib/definitions) to see how it's done.

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
