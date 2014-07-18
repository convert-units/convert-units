convert-units
=============

[![Build Status](https://travis-ci.org/ben-ng/convert-units.png)](https://travis-ci.org/ben-ng/convert-units)

A handy utility for converting between quantities in different units.

Usage
-----

`convert-units` has a simple chained API that is easy to read.

Here's how you move between the metric units for volume:

```js
var convert = require('convert-units')

convert(1).from('ltr').to('ml')
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

You can get a list of the measurement types supported with `.measures`

```js
convert().measures()
// [ 'length', 'mass', 'volume' ]
```

If you ever want to know the possible conversions for a unit, just use `.possibilities`

```js
convert().from('ltr').possibilities()
// [ 'ml', 'ltr', 'tsp', 'tbsp', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

convert().from('kg').possibilities()
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

You can also get the possible conversions for a measure:
```js
convert().possibilities('mass')
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

You can also get the all the available units:
```js
convert().possibilities()
// [ 'mm', 'cm', 'm', 'in', 'ft', 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'ml', 'ltr', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ea' ];
```

To get a detailed description of a unit, use `describe`

```
convert().describe('kg')
/*
  {
    measure: 'mass'
  , system: 'metric'
  , singular: 'Kilogram'
  , plural: 'Kilograms'
  }
*/
```

Supported Units
---------------

### Length

* mm
* cm
* m
* in
* ft

### Mass

 * mcg
 * mg
 * g
 * kg
 * oz
 * lb

### Volume

 * ml
 * ltr
 * tsp
 * tbsp
 * fl-oz
 * cup
 * pnt
 * qt
 * gal



### Want More?

Adding new measurement sets is easy. Take a look at [`lib/definitions`](https://github.com/ben-ng/convert-units/tree/master/lib/definitions) to see how it's done.

License
-------
Copyright (c) 2013 Ben Ng, http://benng.me

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
