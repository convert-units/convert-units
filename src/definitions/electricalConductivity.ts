import { Measure, Unit } from './../index.js';
export type ElectricalConductivityUnits = ElectricalConductivitySIUnits;
export type ElectricalConductivitySystems = 'SI';

export type ElectricalConductivitySIUnits =
  | 'S/m'
  | 'dS/m'
  | 'mS/m'
  | 'μS/m'
  | 'nS/m'
  | 'pS/m'
  | 'S/cm'
  | 'dS/cm'
  | 'mS/cm'
  | 'μS/cm'
  | 'nS/cm'
  | 'pS/cm';

const SI: Record<ElectricalConductivitySIUnits, Unit> = {
  'S/m': {
    name: {
      singular: 'Siemens per meter',
      plural: 'Siemens per meter',
    },
    to_anchor: 1,
  },
  'dS/m': {
    name: {
      singular: 'Decisiemens per meter',
      plural: 'Decisiemens per meter',
    },
    to_anchor: 0.1, // 1 dS/m = 0.1 S/m
  },
  'mS/m': {
    name: {
      singular: 'Millisiemens per meter',
      plural: 'Millisiemens per meter',
    },
    to_anchor: 0.001, // 1 mS/m = 0.001 S/m
  },
  'μS/m': {
    name: {
      singular: 'Microsiemens per meter',
      plural: 'Microsiemens per meter',
    },
    to_anchor: 0.000001, // 1 μS/m = 0.000001 S/m
  },
  'nS/m': {
    name: {
      singular: 'Nanosiemens per meter',
      plural: 'Nanosiemens per meter',
    },
    to_anchor: 0.000000001, // 1 nS/m = 1e-9 S/m
  },
  'pS/m': {
    name: {
      singular: 'Picosiemens per meter',
      plural: 'Picosiemens per meter',
    },
    to_anchor: 0.000000000001, // 1 pS/m = 1e-12 S/m
  },
  'S/cm': {
    name: {
      singular: 'Siemens per centimeter',
      plural: 'Siemens per centimeter',
    },
    to_anchor: 100, // 1 S/cm = 100 S/m
  },
  'dS/cm': {
    name: {
      singular: 'Decisiemens per centimeter',
      plural: 'Decisiemens per centimeter',
    },
    to_anchor: 10, // 1 dS/cm = 10 S/m
  },
  'mS/cm': {
    name: {
      singular: 'Millisiemens per centimeter',
      plural: 'Millisiemens per centimeter',
    },
    to_anchor: 0.1, // 1 mS/cm = 0.1 S/m
  },
  'μS/cm': {
    name: {
      singular: 'Microsiemens per centimeter',
      plural: 'Microsiemens per centimeter',
    },
    to_anchor: 0.0001, // 1 μS/cm = 0.0001 S/m
  },
  'nS/cm': {
    name: {
      singular: 'Nanosiemens per centimeter',
      plural: 'Nanosiemens per centimeter',
    },
    to_anchor: 0.0000001, // 1 nS/cm = 1e-7 S/m
  },
  'pS/cm': {
    name: {
      singular: 'Picosiemens per centimeter',
      plural: 'Picosiemens per centimeter',
    },
    to_anchor: 0.0000000001, // 1 pS/cm = 1e-10 S/m
  },
};

const measure: Measure<
  ElectricalConductivitySystems,
  ElectricalConductivityUnits
> = {
  systems: {
    SI,
  },
};

export default measure;
