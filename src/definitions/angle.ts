import Decimal from 'decimal.js';
import { Measure, Unit } from './../index.js';
export type AngleUnits = AngleSIUnits;
export type AngleSystems = 'SI';

export type AngleSIUnits = 'rad' | 'deg' | 'grad' | 'arcmin' | 'arcsec';

const SI: Record<AngleSIUnits, Unit> = {
  rad: {
    name: {
      singular: 'radian',
      plural: 'radians',
    },
    to_anchor: new Decimal(180).div(Math.PI),
  },
  deg: {
    name: {
      singular: 'degree',
      plural: 'degrees',
    },
    to_anchor: 1,
  },
  grad: {
    name: {
      singular: 'gradian',
      plural: 'gradians',
    },
    to_anchor: new Decimal(9).div(10),
  },
  arcmin: {
    name: {
      singular: 'arcminute',
      plural: 'arcminutes',
    },
    to_anchor: new Decimal(1).div(60),
  },
  arcsec: {
    name: {
      singular: 'arcsecond',
      plural: 'arcseconds',
    },
    to_anchor: new Decimal(1).div(3600),
  },
};

const measure: Measure<AngleSystems, AngleUnits> = {
  systems: {
    SI,
  },
};

export default measure;
