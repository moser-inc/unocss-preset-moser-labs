import { type Preset } from 'unocss';

export interface PresetMoserLabsOptions {
  test?: string;
}

export default function presetMoserLabs(
  options?: PresetMoserLabsOptions,
): Preset {
  console.log(options);

  return {
    name: 'moser-labs',
  };
}
