import { Fragment } from 'react';
import { type MoserLabsAppThemeKey } from '../../dist';

export function Board(props: { className?: string }) {
  const keys = [
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

  return (
    <div {...props}>
      <section>
        <h3 className="mbs-0">Colors</h3>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            {keys.map((key) => (
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

          <div className="flex flex-wrap gap-y-2">
            {keys.map((key) => (
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
        </div>
      </section>

      <section>
        <h3>Icons</h3>

        <div className="flex flex-wrap gap-6">
          {keys.map((key) => (
            <div key={key} className="flex items-center gap-4">
              <i
                className={`i-labs-logo-${key} text-${key}-primary text-4xl`}
              />
              <span>i-labs-logo-{key}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Logos</h3>

        <div className="flex flex-wrap gap-6 mb-10">
          {keys.map((key) => (
            <Fragment key={key}>
              <div className="flex items-center gap-4">
                <i className={`i-labs-logo-${key}-badge text-4xl`} />
                <span>i-labs-logo-{key}-badge</span>
              </div>

              <div className="flex items-center gap-4">
                <i className={`i-labs-logo-${key}-badge-lg text-4xl`} />
                <span>i-labs-logo-{key}-badge-lg</span>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
