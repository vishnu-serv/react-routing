// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import { NoPageFound } from "./pages/NoPageFound";
// import { NavBar } from "./Component/navBar/NavBar";
// import { Profile } from "./pages/Profile/Profile";
// import SignIn from "./pages/SignIn/signIn";
// import SignUp from "./pages/SignUp/signUp";
// import ProtectedRoutes from "./utils/ProtectedRoutes";
// import { getStorageItem } from "./utils/localStorageHelper";

// function App() {
//   const isLoggedIn = !getStorageItem({ key: "loggedUser" });
//   console.log("🚀 ~ App ~ isLoggedIn:", isLoggedIn);
//   console.log("component rerender>>>>");

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* unauthorized */}
//         {isLoggedIn && (
//           <>
//             <Route path="/" element={<SignIn />} />
//             <Route path="/signIn" element={<SignIn />} />
//             <Route path="/signUp" element={<SignUp />} />
//           </>
//         )}

//         {/* ProtectedRoutes */}
//         <Route element={<ProtectedRoutes />}>
//           <Route path="/" element={<NavBar />}>
//             <Route index element={<Home />} />

//             <Route path="/signIn" element={<Navigate to="/" />} />
//             <Route path="/signUp" element={<Navigate to="/" />} />

//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="*" element={<NoPageFound />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

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
