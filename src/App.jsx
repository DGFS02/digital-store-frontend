import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { MyAccountPage } from "./pages/MyAccountPage";
import { ProductsPage } from "./pages/ProductsPage"

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/my-account" element={<MyAccountPage />} />
                <Route path="/products" element={<ProductsPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
