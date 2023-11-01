import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light"); // ["dark", "light"]
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div data-theme={theme} className="bg-alternative md:p-12">
      <section className="bg-default rounded-lg p-4 text-default flex flex-col gap-4 border-default shadow-xs">
        <div className="flex gap-4 items-center">
          <p className="font-bold">Theme: {theme}</p>
          <button
            className="border-primary-default border-2 text-primary-default hover:text-primary-inverse border-primary-default border-1 hover:bg-primary-default px-4 py-1 rounded-full font-bold"
            onClick={handleThemeChange}
          >
            Change theme
          </button>
        </div>
        <h1 className="text-s-display-md md:text-l-display-md text-alternative">
          MetaMask design tokens x Tailwind
        </h1>
        <p className="text-body-lg-medium text-alternative">
          This is a demo that uses the MetaMask design tokens in the Tailwind
          config.
        </p>
        <h2 className="text-s-heading-lg lg:text-l-heading-lg">Color</h2>

        <h3 className="text-s-heading-sm lg:text-l-heading-sm">Background</h3>
        <div className="grid grid-cols-3 gap-4">
          {/** Background Colors **/}
          {/* Default Background */}
          <div className="bg-default rounded-lg flex items-center justify-center text-center p-4">
            bg-default
          </div>
          <div className="bg-hover rounded-lg flex items-center justify-center text-center p-4">
            bg-hover
          </div>
          <div className="bg-pressed rounded-lg flex items-center justify-center text-center p-4">
            bg-pressed
          </div>
          <div className="bg-alternative rounded-lg flex items-center justify-center text-center p-4">
            bg-alternative
          </div>

          {/* Alternative Background */}
          <div className="bg-alternative-hover rounded-lg flex items-center justify-center text-center p-4">
            bg-alternative-hover
          </div>
          <div className="bg-alternative-pressed rounded-lg flex items-center justify-center text-center p-4">
            bg-alternative-pressed
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Fill in other text color cl
          {/** Primary Colors **/}
          <div className="bg-primary-default rounded-lg flex items-center justify-center text-center p-4 text-primary-inverse">
            bg-primary-default
          </div>
          <div className="bg-primary-alternative rounded-lg flex items-center justify-center text-center p-4 text-primary-inverse">
            bg-primary-alternative
          </div>
          <div className="bg-primary-muted rounded-lg flex items-center justify-center text-center p-4">
            bg-primary-muted
          </div>
          <div className="bg-primary-inverse border-muted border-1 rounded-lg flex items-center justify-center text-center p-4">
            bg-primary-inverse
          </div>

          {/** Error Colors **/}
          <div className="bg-error-default rounded-lg flex items-center justify-center text-center p-4 text-error-inverse">
            bg-error-default
          </div>
          <div className="bg-error-alternative rounded-lg flex items-center justify-center text-center p-4 text-error-inverse">
            bg-error-alternative
          </div>
          <div className="bg-error-muted rounded-lg flex items-center justify-center text-center p-4">
            bg-error-muted
          </div>
          <div className="bg-error-inverse border-muted border-1 rounded-lg flex items-center justify-center text-center p-4">
            bg-error-inverse
          </div>

          {/** Success Colors **/}
          <div className="bg-success-default rounded-lg flex items-center justify-center text-center p-4 text-success-inverse">
            bg-success-default
          </div>
          <div className="bg-success-alternative rounded-lg flex items-center justify-center text-center p-4 text-success-inverse">
            bg-success-alternative
          </div>
          <div className="bg-success-muted rounded-lg flex items-center justify-center text-center p-4">
            bg-success-muted
          </div>
          <div className="bg-success-inverse border-muted border-1 rounded-lg flex items-center justify-center text-center p-4">
            bg-success-inverse
          </div>

          {/** Warning Colors **/}
          <div className="bg-warning-default rounded-lg flex items-center justify-center text-center p-4 text-warning-inverse">
            bg-warning-default
          </div>
          <div className="bg-warning-alternative rounded-lg flex items-center justify-center text-center p-4 text-warning-inverse">
            bg-warning-alternative
          </div>
          <div className="bg-warning-muted rounded-lg flex items-center justify-center text-center p-4">
            bg-warning-muted
          </div>
          <div className="bg-warning-inverse border-muted border-1 rounded-lg flex items-center justify-center text-center p-4">
            bg-warning-inverse
          </div>

          {/** Info Colors **/}
          <div className="bg-info-default rounded-lg flex items-center justify-center text-center p-4 text-info-inverse">
            bg-info-default
          </div>
          <div className="bg-info-alternative rounded-lg flex items-center justify-center text-center p-4 text-info-inverse">
            bg-info-alternative
          </div>
          <div className="bg-info-muted rounded-lg flex items-center justify-center text-center p-4">
            bg-info-muted
          </div>
          <div className="bg-info-inverse border-muted border-1 rounded-lg flex items-center justify-center text-center p-4">
            bg-info-inverse
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
