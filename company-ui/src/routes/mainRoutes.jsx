// import AuthGuard from "../guard/AuthGuard";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import ProductList from "../pages/ProductListPage/ProductList";
// import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import ProductDetail from "../pages/ProductDetails";
import EditProduct from "../pages/EditProduct";
import Cart from "../pages/Cart";
import BuyProductList from "../component/BuyProducts";
import About from "../pages/About";
import Service from "../pages/servicesPage/Service";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import LivestockTreatment from "../pages/servicesPage/components/LivestockTreatment";
import InsecticidesAndPesticides from "../pages/servicesPage/components/Insecticide";
import ArtificialInsemination from "../pages/servicesPage/components/ArtifificialInsemination";
import GoatFertilizer from "../pages/servicesPage/components/GoatFertilizer";
import GoatSterilization from "../pages/servicesPage/components/GoatSterilization";
import Contact from "../pages/contact/Contact";
import CropCultivation from "../pages/OurProduce/components/CropCultivation";
import GoatFarming from "../pages/OurProduce/components/GoatFarming";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "services",
        element: <Service />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "add-product",
        element: <AddProduct />
      },
      {
        path: "product-detail/:id",
        element: <ProductDetail />
      },
      {
        path: "product-edit/:id",
        element: <EditProduct />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "shop",
        element: <BuyProductList />
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "livestock-treatment",
        element: <LivestockTreatment />
      },
      {
        path: "insecticides-pesticides",
        element: <InsecticidesAndPesticides />
      },
      {
        path: "artificial-insemination",
        element: <ArtificialInsemination />
      },
      {
        path: "goat-fertilizer",
        element: <GoatFertilizer />
      },
      {
        path: "goat-sterilization",
        element: <GoatSterilization />
      },
      {
        path: "crop-cultivation",
        element: <CropCultivation />
      },
      {
        path: "goat-farming",
        element: <GoatFarming />
      }
    ]
  }
];

export default mainRoutes;
