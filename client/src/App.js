import React , { useState } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from './components/Products/Products';
// import { words } from "./words";
import data from './data.json'
import Filter from './components/Filter/Filter';


function App () {

  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("");
  const [company, setCompany] = useState("");

  const handleFilterByCompany = (e) => {
      setCompany(e.target.value);
      if(e.target.value == "All"){
        setProducts(data);
      } else {
        let productsClone = [...products];
        let newProducts = productsClone.filter(p => p.company.indexOf(e.target.value) != -1);
        setProducts(newProducts);

      }
  }

  const handleFilterByOrder = (e) => {
      let order = e.target.value;
      setSort(order);
      let productsClone = [...products];
      let newProducts = productsClone.sort(function(a,b) {
        if(order == "lowest") {
          return a.price - b.price
        }
        else if(order == "highest") {
          return b.price - a.price
        }
        else {
          return a.id < b.id ? 1 : -1
        }
      });

      setProducts(newProducts)

  }

  return (
    <div className="layout">
      <Header />

      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            company={company}
            sort={sort}
            handleFilterByOrder={handleFilterByOrder}
            handleFilterByCompany={handleFilterByCompany}  
            />
        </div>
      </main>

      <Footer />
      
    </div>
  );

 }
 export default App;