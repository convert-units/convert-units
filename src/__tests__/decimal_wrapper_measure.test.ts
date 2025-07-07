import { Decimal } from 'decimal.js';
import { Wrapper } from '../wrapper.js';
import { decimal_cls } from './decimal_wrapper.js';

import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../definitions/volumeFlowRate.js';
import configureMeasurements from '../index.js';

describe('decimal wrapper', () => {
  const cls: Wrapper<Decimal> = Object.assign({}, decimal_cls);

  test('l/h to m3/h', () => {
    const convert = configureMeasurements<
      'volumeFlowRate',
      VolumeFlowRateSystems,
      VolumeFlowRateUnits,
      Decimal
    >(
      {
        volumeFlowRate,
      },
      cls
    );
    expect(convert(10).from('l/h').to('m3/h').toNumber()).toBe(0.01);
  });
});
