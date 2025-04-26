import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import Landing from "./pages/landing";
import Onboarding from "./pages/onboarding";
import Job from "./pages/job";
import JobListing from "./pages/job-listing";
import MyJobs from "./pages/my-jobs";
import PostJob from "./pages/post-job";
import SavedJob from "./pages/saved-job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/job/:id", element: <Job /> },
      { path: "/job-listing", element: <JobListing /> },
      { path: "/my-jobs", element: <MyJobs /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-job", element: <SavedJob /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
