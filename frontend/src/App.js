import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./page/Home";
import Record from "./page/Record";
import Navbar from "./components/Navbar/Navbar";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <div className="App" class="container-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Record" element={<Record />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
