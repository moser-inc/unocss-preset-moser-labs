import { Board } from './Board';

export function App() {
  return (
    <main className="font-700">
      <h1 className="sr-only">UnoCSS Preset Moser Labs Playground</h1>

      <div className="grid grid-cols-2">
        <div className="dark min-h-screen bg-ground text-color p-8">
          <h2 className="mbs-0">Dark Mode</h2>

          <Board />
        </div>

        <div className="light min-h-screen bg-ground text-color p-8">
          <h2 className="mbs-0">Light Mode</h2>

          <Board />
        </div>
      </div>
    </main>
  );
}
