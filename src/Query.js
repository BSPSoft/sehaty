import './dist/index.css';
import Footer from "./queryComponent/Footer";
import Header from "./queryComponent/Header";
import Main from "./queryComponent/Main";


function Query() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  
  );
}

export default Query;
