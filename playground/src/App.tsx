import { Board } from './Board';

export function App() {
  return (
    <main className="font-700">
      <h1 className="sr-only">UnoCSS Preset Moser Labs Playground</h1>

      <Board className="min-h-screen bg-ground text-color p-6" />
    </main>
  );
}
