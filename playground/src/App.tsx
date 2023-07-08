import { Fragment } from 'react';
import { type MoserLabsAppThemeKey } from '../../dist';

export function App() {
  const keys = [
    'eats',
    'engagements',
    'idealab',
    'roomgrabber',
    'spenio',
    'tickets',
    'timetracking',
    'training',
    'wellness',
  ] as MoserLabsAppThemeKey[];

  return (
    <main className="min-h-screen max-w-6xl mx-auto p-10 text-xl font-semibold flex flex-col gap-6">
      <h1 className="sr-only">UnoCSS Preset Moser Labs Playground</h1>

      <section>
        <h2 className="mbs-0">Colors</h2>

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

          <div className="flex flex-wrap gap-4">
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
        <h2>Icons</h2>

        <div className="flex flex-wrap gap-6">
          {keys.map((key) => (
            <div key={key} className="flex items-center gap-4">
              <i className={`i-labs-${key} text-${key}-primary text-5xl`} />
              <span>i-labs-{key}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Logos</h2>

        <div className="flex flex-wrap gap-6 mb-10">
          {keys.map((key) => (
            <Fragment key={key}>
              <div className="flex items-center gap-4">
                <i className={`i-logo-${key} text-5xl`} />
                <span>i-logo-{key}</span>
              </div>

              <div className="flex items-center gap-4">
                <i className={`i-logo-${key}-large text-5xl`} />
                <span>i-logo-{key}-large</span>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
