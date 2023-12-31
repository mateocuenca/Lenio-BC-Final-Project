// External dependencies
import { Route, Routes } from "react-router";

// Internal dependencies
import { HomePage } from "../../features/Home/containers/HomePage";
import { Comic } from "../../features/Comic/components/Comic";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/:favourites" element={<HomePage />} />
    <Route path="/comic/:comicId" element={<Comic />} />
  </Routes>
);

export { MainRoutes };
