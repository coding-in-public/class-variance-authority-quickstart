import bkg from "../assets/checks.png";

export default function Hero() {
  return (
    <>
      <img
        src={bkg}
        alt=""
        className="absolute -z-10 -top-24 -left-24 rotate-45 max-h-[70vh] dark:opacity-10"
        draggable="false"
      />
      <img
        src={bkg}
        alt=""
        className="absolute -z-10 -bottom-24 -right-24 rotate-[135deg] max-h-[70vh] dark:opacity-10"
        draggable="false"
      />
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="bg-theme-base relative rounded-full px-3 py-1 text-sm leading-6 text-theme-600 ring-1 ring-theme-900/10 hover:ring-theme-900/20">
            Take me to{" "}
            <a
              href="#"
              className="font-semibold text-theme-600 ring-theme-400 ring-offset-4 focus-visible:ring-4 rounded-full ring-offset-theme-base focus:outline-transparent"
            >
              <span className="absolute inset-0" aria-hidden="true"></span>
              your docs <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-theme-900 sm:text-6xl [text-wrap:balance]">
          Class <span className="text-theme-600">Variance</span> Authority
        </h1>
        <p className="mt-6 text-lg leading-8 text-theme-800 [text-wrap:balance]">
          CVA is a powerful library that empowers developers with enhanced
          control over StyleSheet output, enabling seamless customization and
          simplifying UI development within CSS-in-JS/TS environments.
        </p>
      </div>
    </>
  );
}
