// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div>
//       <h2>Welcome to the Wizard and Spell Collection</h2>
//       <p>Navigate to either Wizards or Spells:</p>
//       <Link to="/wizards">Go to Wizards</Link>
//       <br />
//       <Link to="/spells">Go to Spells</Link>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <img 
        src="https://deadline.com/wp-content/uploads/2023/04/harry-potter.jpg?w=681&h=383&crop=1" 
        alt="Harry Potter" 
        className="home-image" 
      />
      <h2 className="home-title">Welcome to the Wizard and Spell Collection</h2>
      <p className="home-description">Navigate to either Wizards or Spells:</p>
      <div className="home-links">
        <Link to="/wizards" className="home-link">Go to Wizards</Link>
        <Link to="/spells" className="home-link">Go to Spells</Link>
      </div>
    </div>
  );
};

export default HomePage;