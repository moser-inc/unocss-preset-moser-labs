import { Fragment } from 'react';
import type { MoserLabsAppThemeKey, MoserLabsThemeKey } from '../../dist';

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
        <h3 className="mbe-3">Background Colors</h3>

        <div className="flex flex-wrap gap-4">
          <div className={`bg-primary text-primary-text px-4 py-2 rounded-xl`}>
            bg-primary
          </div>

          <div
            className={`bg-secondary text-secondary-text px-4 py-2 rounded-xl`}
          >
            bg-secondary
          </div>

          <div
            className={`bg-primary-gradient text-primary-text px-4 py-2 rounded-xl`}
          >
            bg-primary-gradient
          </div>

          <div className={`bg-error text-surface-ground px-4 py-2 rounded-xl`}>
            bg-error
          </div>

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
        <h3 className="mbe-3">Text Colors</h3>

        <div className="flex flex-wrap gap-y-2">
          <div className={`text-primary px-4 py-2 rounded-xl`}>
            text-primary
          </div>

          <div className={`text-secondary px-4 py-2 rounded-xl`}>
            text-secondary
          </div>

          <div className={`text-primary-gradient px-4 py-2 rounded-xl`}>
            text-primary-gradient
          </div>

          <div className={`text-error px-4 py-2 rounded-xl`}>text-error</div>

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
        <h3 className="mbe-3">Icons</h3>

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
        <h3 className="mbe-3">Badges</h3>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <i className={`i-mli-app-badge text-4xl`} />
            <span>i-mli-app-badge</span>
          </div>

          <div className="flex items-center gap-4">
            <i className={`i-mli-app-badge-lg text-4xl`} />
            <span>i-mli-app-badge-lg</span>
          </div>

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

      <section>
        <h3 className="mbe-3">Tiles</h3>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <div className={`labs-app-tile text-4xl`}>
              <i className={`i-mli-labs`} />
            </div>
            <span>labs-app-tile</span>
          </div>

          <div className="flex items-center gap-4">
            <div className={`labs-app-tile-lg text-4xl`}>
              <i className={`i-mli-labs`} />
            </div>
            <span>labs-app-tile-lg</span>
          </div>

          {appThemeKeys.map((key) => (
            <Fragment key={key}>
              <div className="flex items-center gap-4">
                <div className={`labs-${key}-tile text-4xl`}>
                  <i className={`i-mli-${key}`} />
                </div>
                <span>labs-{key}-tile</span>
              </div>

              <div className="flex items-center gap-4">
                <div className={`labs-${key}-tile-lg text-4xl`}>
                  <i className={`i-mli-${key}`} />
                </div>
                <span>labs-{key}-tile-lg</span>
              </div>
            </Fragment>
          ))}

          {themeKeys.map((key) => (
            <Fragment key={key}>
              <div className="flex items-center gap-4">
                <div className={`labs-${key}-tile text-4xl`}>
                  <i className={`i-mli-apps`} />
                </div>
                <span>labs-{key}-tile</span>
              </div>

              <div className="flex items-center gap-4">
                <div className={`labs-${key}-tile-lg text-4xl`}>
                  <i className={`i-mli-apps`} />
                </div>
                <span>labs-{key}-tile-lg</span>
              </div>
            </Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mbe-3">Prose</h3>

        <div className="labs-prose">
          <h1>Heading 1</h1>

          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>

          <h2>
            <a href="#">Heading 2 with link</a>
          </h2>

          <p>
            This is a paragraph with a <a href="#">link</a> and inline{' '}
            <code>code</code>.
          </p>

          <h3>Heading 3</h3>

          <blockquote>
            This is a blockquote with a <a href="#">link</a>.
          </blockquote>

          <pre>Code block example</pre>
        </div>
      </section>
    </div>
  );
}
