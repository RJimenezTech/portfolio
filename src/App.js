import React, {useState, useEffect} from 'react';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  // use state to track which page is being currently render
  const [currentPage, setCurrentPage] = useState("About");
  // use effect to change the title of the page when currentPage state is updated
  useEffect(() => {
    document.title= currentPage;
  }, [currentPage]);
  // render a page when the currentPage state is various options
  const renderPage = () => {
    if (currentPage === "About") {
      return <About/>
    }
    if (currentPage === "Portfolio") {
      return <Portfolio/>
    }
    if (currentPage === "Resume") {
      return <Resume/>
    }
    if (currentPage === "Contact") {
      return <Contact/>
    }
  }
  // function that handles the page change
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <body className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
        <main>{renderPage()}</main>
        <Footer></Footer>
      </body>
      
    </div>
  );
}

export default App;