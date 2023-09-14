import ButtonExample from "./components/ButtonExample";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-theme-base text-theme-900 text-center">
      <div className="grid min-h-screen place-content-center p-6 lg:p-8 relative z-0 overflow-hidden">
        <Hero />
        <div className="mx-auto">
          <div className="grid place-items-center gap-12 mt-16">
            <ButtonExample variant="secondary" size="md">
              Learn more
            </ButtonExample>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
