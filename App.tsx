import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-xl font-bold mb-4 text-center">TalOS</header>

      {/* Responsive layout */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Main Content</h2>
          <p>This section adapts to screen size.</p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Sidebar / Detail</h2>
          <p>Visible side-by-side on tablets.</p>
        </section>

        <section className="bg-white p-4 rounded shadow hidden lg:block">
          <h2 className="text-lg font-semibold">Extra Panel</h2>
          <p>Visible on larger tablets and landscape.</p>
        </section>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        © 2025 TalOS. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
