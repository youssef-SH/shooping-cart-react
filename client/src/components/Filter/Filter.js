import React from 'react'
import "../../css/Filter/Filter.css"

function Filter() {
  return (
    <div className="filter-wrapper">
        <h2 className='filter-title'>Filter</h2>
        <div className='num-of-products'> Number Of Products : 3</div>
        <div className='filter-by-company'>
            <span> Filter </span>
            <select className='filter-select'>
                <option value="All">All</option>
                <option value="iphone">iphone</option>
                <option value="samsung">samsung</option>
                <option value="oppo">oppo</option>
            </select>
        </div>

        <div className='filter-by-order'>
            <span> Order </span>
            <select className='filter-select'>
                <option value="latest">latest</option>
                <option value="lower">lower</option>
                <option value="highest">highest</option>
            </select>
        </div>
    </div>

  )
}
export default Filter;
