import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddUserPage from "./pages/AddUserPage";
import { SearchingAndSortingContext } from "./context/SearchingAndSortingContext";
import UserPage from "./pages/UserPage";
import PageNotFound from "./pages/PageNotFound";
import { SortingOptions } from "./components/navbar/sorting/Sorting";

function App() {
  const [sort, setSort] = React.useState(SortingOptions.Ascending);
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SearchingAndSortingContext.Provider
      value={{ searchQuery, setSearchQuery, sort, setSort }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<UserPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/404page" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </SearchingAndSortingContext.Provider>
  );
}

export default App;
