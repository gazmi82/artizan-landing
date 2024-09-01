import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import LoadingSpinner from "./components/Loading";
import { Suspense } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or some async operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading component...</div>}>
        {loading && (
          <LoadingSpinner
            loading={loading}
            color="blue"
            size={50}
            speedMultiplier={1}
            message="Loading data, please wait..."
          />
        )}
        <>
          <HomePage />
        </>
      </Suspense>
    </div>
  );
};

export default App;
