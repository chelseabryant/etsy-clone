import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-logo-searchbar">
        <h1 className="etsy-logo">Etsy</h1>
        <div className="searchbar-wrapper">
          <input className="searchbar" type="text" placeholder="Search for anything"></input>
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
    </div>
  );
}

export default App;
