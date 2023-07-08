import { moserLabsAppThemeKeys } from '../../dist';

export function App() {
  const keys = moserLabsAppThemeKeys;

  return (
    <main className="min-h-screen max-w-6xl mx-auto p-10 text-xl font-semibold flex flex-col gap-6">
      <h1 className="sr-only">UnoCSS Preset Moser Labs Playground</h1>

      <section>
        <h2 className="mbs-0">Colors</h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            {keys.map((key) => (
              <>
                <div
                  key={`${key}-primary`}
                  className={`bg-${key}-primary text-${key}-primary-text px-4 py-2 rounded-xl`}
                >
                  bg-{key}-primary
                </div>

                <div
                  key={`${key}-secondary`}
                  className={`bg-${key}-secondary text-${key}-secondary-text px-4 py-2 rounded-xl`}
                >
                  bg-{key}-secondary
                </div>

                <div
                  key={`${key}-gradient`}
                  className={`bg-${key}-gradient text-${key}-primary-text px-4 py-2 rounded-xl`}
                >
                  bg-{key}-gradient
                </div>
              </>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {keys.map((key) => (
              <>
                <div
                  key={`${key}-primary`}
                  className={`text-${key}-primary px-4 py-2 rounded-xl`}
                >
                  text-{key}-primary
                </div>

                <div
                  key={`${key}-secondary`}
                  className={`text-${key}-secondary px-4 py-2 rounded-xl`}
                >
                  text-{key}-secondary
                </div>

                <div
                  key={`${key}-gradient`}
                  className={`text-${key}-gradient px-4 py-2 rounded-xl`}
                >
                  text-{key}-gradient
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2>Icons</h2>

        <div className="flex flex-wrap gap-6">
          {keys.map((key) => (
            <div key={key} className="flex items-center gap-4">
              <i className={`i-app-${key} text-${key}-primary text-5xl`} />
              <span>i-app-{key}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Logos</h2>

        <div className="flex flex-wrap gap-10 mb-10">
          {keys.map((key) => (
            <>
              <div key={key} className="flex items-center gap-4">
                <i className={`i-logo-${key} text-5xl`} />
                <span>i-logo-{key}</span>
              </div>

              <div key={key} className="flex items-center gap-4">
                <i className={`i-logo-${key}-large text-5xl`} />
                <span>i-logo-{key}-large</span>
              </div>
            </>
          ))}
        </div>
      </section>
    </main>
  );
}
