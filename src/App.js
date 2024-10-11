import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";
import Navbar from "./component/Navigation/NavBar";
import Cart from "./pages/Cart";
import { DefaultLayout } from "./component/Layout/DefaultLayout";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<Main cartItem={cartItem} setCartItem={setCartItem} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
