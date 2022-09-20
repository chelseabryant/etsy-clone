import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="top-logo-searchbar">
        <h1 className="etsy-logo">Etsy</h1>
        <div className="searchbar-wrapper">
          <input
            className="searchbar"
            type="text"
            placeholder="Search for anything"
          ></input>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item">Summer Clothing & Accessories</div>
        <div className="menu-item">Jewelry & Accessories</div>
        <div className="menu-item">Clothing & Shoes</div>
        <div className="menu-item">Home & Living</div>
        <div className="menu-item">Wedding & Party</div>
        <div className="menu-item">Toys & Entertainment</div>
        <div className="menu-item">Art & Collectibles</div>
        <div className="menu-item">Craft Supplies</div>
        <div className="menu-item">Gifts & Gift Cards</div>
      </div>
      <div className="welcome-border">
        <div className="welcome">Welcome back, Chelsea!</div>
      </div>
      <div className="shop-link-body">
        <div className="shop-links">
          <img
            src="https://images.unsplash.com/photo-1604304194650-3ba3cfa752fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            className="circle-image"
            alt=""
          />
          <div>dried flowers</div>
        </div>
        <div className="shop-links">
          <img
            src="https://images.unsplash.com/photo-1499332251574-a76a01d733fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=833&q=80"
            className="circle-image"
            alt=""
          />
          <div>books</div>
        </div>
        <div className="shop-links">
          <img
            src="https://images.unsplash.com/photo-1556395676-1925d260d81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="circle-image"
            alt=""
          />
          <div>wine glasses</div>
        </div>
        <div className="shop-links">
          <img
            src="https://images.unsplash.com/photo-1619021016992-07909c5b85d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="circle-image"
            alt=""
          />
          <div>water bottles</div>
        </div>
        <div className="shop-links">
          <img
            src="https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="circle-image"
            alt=""
          />
          <div>mirrors</div>
        </div>
        <div className="shop-links">
          <img
            src="https://images.unsplash.com/photo-1590080876351-941da357bde6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="circle-image"
            alt=""
          />
          <div>baking utensils</div>
        </div>
      </div>
    </div>
  )
}

export default App
