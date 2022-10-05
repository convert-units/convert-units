import { Measure, Unit } from './../index.js';
export type PiecesUnits = PiecesUnitUnits;
export type PiecesSystems = 'unit';

export type PiecesUnitUnits =
  | 'pcs'
  | 'bk-doz'
  | 'cp'
  | 'doz-doz'
  | 'doz'
  | 'gr-gr'
  | 'gros'
  | 'half-dozen'
  | 'long-hundred'
  | 'ream'
  | 'scores'
  | 'sm-gr'
  | 'trio';

const unit: Record<PiecesUnitUnits, Unit> = {
  pcs: {
    name: {
      singular: 'Piece',
      plural: 'Pieces',
    },
    to_anchor: 1,
  },
  'bk-doz': {
    name: {
      singular: 'Bakers Dozen',
      plural: 'Bakers Dozen',
    },
    to_anchor: 13,
  },
  cp: {
    name: {
      singular: 'Couple',
      plural: 'Couples',
    },
    to_anchor: 2,
  },
  'doz-doz': {
    name: {
      singular: 'Dozen Dozen',
      plural: 'Dozen Dozen',
    },
    to_anchor: 144,
  },
  doz: {
    name: {
      singular: 'Dozen',
      plural: 'Dozens',
    },
    to_anchor: 12,
  },
  'gr-gr': {
    name: {
      singular: 'Great Gross',
      plural: 'Great Gross',
    },
    to_anchor: 1728,
  },
  gros: {
    name: {
      singular: 'Gross',
      plural: 'Gross',
    },
    to_anchor: 144,
  },
  'half-dozen': {
    name: {
      singular: 'Half Dozen',
      plural: 'Half Dozen',
    },
    to_anchor: 6,
  },
  'long-hundred': {
    name: {
      singular: 'Long Hundred',
      plural: 'Long Hundred',
    },
    to_anchor: 120,
  },
  ream: {
    name: {
      singular: 'Reams',
      plural: 'Reams',
    },
    to_anchor: 500,
  },
  scores: {
    name: {
      singular: 'Scores',
      plural: 'Scores',
    },
    to_anchor: 20,
  },
  'sm-gr': {
    name: {
      singular: 'Small Gross',
      plural: 'Small Gross',
    },
    to_anchor: 120,
  },
  trio: {
    name: {
      singular: 'Trio',
      plural: 'Trio',
    },
    to_anchor: 3,
  },
};

const measure: Measure<PiecesSystems, PiecesUnits> = {
  systems: {
    unit,
  },
};

export default measure;
