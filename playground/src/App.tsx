export function App() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-10 text-xl flex flex-col gap-6">
      <h1 className="sr-only">UnoCSS Preset Moser Labs Playground</h1>

      <section>
        <h2>Gradients</h2>

        <div className="flex gap-6">
          <div className="px-4 py-2 rounded-xl bg-wellness-gradient text-wellness-primary-text font-bold">
            Wellness
          </div>

          <div className="px-4 py-2 rounded-xl bg-idealab-gradient text-idealab-primary-text font-bold">
            Idea Lab
          </div>

          <div className="px-4 py-2 rounded-xl bg-spenio-gradient text-spenio-primary-text font-bold">
            Spenio
          </div>

          <div className="px-4 py-2 rounded-xl bg-training-gradient text-training-primary-text font-bold">
            Training
          </div>
        </div>
      </section>

      <section>
        <h2>Icons</h2>

        <div className="flex gap-6">
          <i className="i-app-wellness text-wellness-primary " />
          <i className="i-app-idealab text-idealab-primary" />
          <i className="i-app-spenio text-spenio-primary" />
          <i className="i-app-training text-training-primary" />
          <i className="pi-bars text-training-primary" />
        </div>
      </section>

      <section>
        <h2>Logos</h2>

        <div className="flex gap-8 mb-10">
          <i className="i-logo-wellness text-wellness-primary " />
          <i className="i-logo-idealab text-idealab-primary" />
          <i className="i-logo-spenio text-spenio-primary" />
          <i className="i-logo-training text-training-primary" />
        </div>

        <div className="flex gap-8">
          <i className="i-logo-wellness-large text-wellness-primary " />
          <i className="i-logo-idealab-large text-idealab-primary" />
          <i className="i-logo-spenio-large text-spenio-primary" />
          <i className="i-logo-training-large text-training-primary" />
        </div>
      </section>
    </main>
  );
}
