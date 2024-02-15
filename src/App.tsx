import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import {lazy,Suspense} from "react";
import Loader from "./components/loader";

const Dashboard  = lazy(()=>import("./pages/dashboard"));
const Products  = lazy(()=>import("./pages/products"));
const Transaction  = lazy(()=>import("./pages/transaction"));
const Customers  = lazy(()=>import("./pages/customers"));
const NewProduct  = lazy(()=>import("./pages/management/new-product"));
const ProductManagement  = lazy(()=>import("./pages/management/product-management"));
const TransactionManagement  = lazy(()=>import("./pages/management/transaction-management"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />        
        
          {/*Charts*/}

          {/*Apps*/}

          {/*Management*/}
          <Route path="/admin/product/new" element={<NewProduct />} />   
          <Route path="/admin/product/:id" element={<ProductManagement />} />   
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />   

        
        
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App