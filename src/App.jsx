import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router.tsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Scenario	                                                    Behavior
// Unauthenticated user tries /	                            Redirected to /signIn
// Authenticated user tries /signIn or /signUp	            Redirected to /
// After login, presses back	                              Stays on /, can’t return to /signIn
// Auth required for all pages except /signIn, /signUp	    ✅
// Deep linking to protected pages (e.g. /blogs)	          Redirects to /signIn if not authenticated
