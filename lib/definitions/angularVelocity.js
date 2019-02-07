var angularVelocities;

angularVelocities = {
  'av-rad/s': { to_anchor: 1, name: { singular: 'radian per second', plural: 'radians per second' } },
  'av-rad/m': { to_anchor: 1/60, name: { singular: 'radian per minute', plural: 'radians per minutes' } },
  'av-rad/hr': { to_anchor: 1/3600, name: { singular: 'radian per second', plural: 'radians per hour' } },
  'av-deg/s': { to_anchor: 1/57.3, name: { singular: 'degree per second', plural: 'degrees per second' } },
  'av-deg/m': { to_anchor: 1/3438, name: { singular: 'degree per minute', plural: 'degrees per minute' } },
  'av-deg/hr': { to_anchor: 1/206265, name: { singular: 'degree per hour', plural: 'degrees per hour' } },
  'av-rps': { to_anchor: 1/0.16, name: { singular: 'rotation per second', plural: 'rotations per second' } },
  'av-rpm': { to_anchor: 1 / (60 * 2 * Math.PI), name: { singular: 'rotation per minute', plural: 'rotations per minute' } },
  'av-rph': { to_anchor: 180/Math.PI, name: { singular: 'rotation per hour', plural: 'rotations per hour' } },
};

module.exports = {
  metric: angularVelocities
, _anchors: {
    metric: {
      unit: 'av-rad/s'
    , ratio: 1
    }
  }
};
