import { Fragment } from 'react';
import { type MoserLabsThemeKey, type MoserLabsAppThemeKey } from '../../dist';

export function Board({ className = '' }: { className?: string }) {
  const themeKeys = [
    'aero',
    'eventide',
    'lemonade',
    'peaches',
    'razzmatazz',
    'sapphire',
    'sherbet',
    'sylvian',
    'tortuga',
    'vista',
    'zomp',
  ] as MoserLabsThemeKey[];

  const appThemeKeys = [
    'clearpath',
    'eats',
    'engagements',
    'idealab',
    'labs',
    'roomgrabber',
    'spenio',
    'tickets',
    'timetracking',
    'training',
    'wellness',
  ] as MoserLabsAppThemeKey[];

  const allThemeKeys = [...themeKeys, ...appThemeKeys];

  return (
    <div className={`${className} flex flex-col gap-6`}>
      <section>
        <h3 className="mbs-0">Background Colors</h3>

        <div className="flex flex-wrap gap-4">
          {allThemeKeys.map((key) => (
            <Fragment key={key}>
              <div
                className={`bg-${key}-primary text-${key}-primary-text px-4 py-2 rounded-xl`}
              >
                bg-{key}-primary
              </div>

              <div
                className={`bg-${key}-secondary text-${key}-secondary-text px-4 py-2 rounded-xl`}
              >
                bg-{key}-secondary
              </div>

              <div
                className={`bg-${key}-gradient text-${key}-primary-text px-4 py-2 rounded-xl`}
              >
                bg-{key}-gradient
              </div>
            </Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mbs-0 mbe-3">Text Colors</h3>

        <div className="flex flex-wrap gap-y-2">
          {allThemeKeys.map((key) => (
            <Fragment key={key}>
              <div className={`text-${key}-primary px-4 py-2 rounded-xl`}>
                text-{key}-primary
              </div>

              <div className={`text-${key}-secondary px-4 py-2 rounded-xl`}>
                text-{key}-secondary
              </div>

              <div className={`text-${key}-gradient px-4 py-2 rounded-xl`}>
                text-{key}-gradient
              </div>
            </Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mbs-0">Icons</h3>

        <div className="flex flex-wrap gap-6">
          {appThemeKeys.map((key) => (
            <div key={key} className="flex items-center gap-4">
              <i className={`i-mli-${key} text-${key}-primary text-4xl`} />
              <span>i-mli-{key}</span>
            </div>
          ))}

          <div className="flex items-center gap-4">
            <i className="i-mli-apps text-primary text-4xl" />
            <span>i-mli-apps</span>
          </div>

          <div className="flex items-center gap-4">
            <i className="i-mli-clipboard-check text-primary text-4xl" />
            <span>i-mli-clipboard-check</span>
          </div>

          <div className="flex items-center gap-4">
            <i className="i-mli-drag text-primary text-4xl" />
            <span>i-mli-drag</span>
          </div>

          <div className="flex items-center gap-4">
            <i className="i-mli-microsoft-365 text-primary text-4xl" />
            <span>i-mli-microsoft-365</span>
          </div>

          <div className="flex items-center gap-4">
            <i className="i-mli-receipt text-primary text-4xl" />
            <span>i-mli-receipt</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mbs-0">Badges</h3>

        <div className="flex flex-wrap gap-6">
          {appThemeKeys.map((key) => (
            <Fragment key={key}>
              <div className="flex items-center gap-4">
                <i className={`i-mli-${key}-badge text-4xl`} />
                <span>i-mli-{key}-badge</span>
              </div>

              <div className="flex items-center gap-4">
                <i className={`i-mli-${key}-badge-lg text-4xl`} />
                <span>i-mli-{key}-badge-lg</span>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
