// import logo from '../logo.svg';
import '../links/css/home.css';

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <body className="body">
        <div className="container d-flex align-items-center justify-content-center">
          <div id="title" className=''>
          <h1 className='m-0 p-0 '>
            <span className="primary x">SHILP </span> 
            <span className="text-light">IIT BHU</span>
            </h1>
          <h2 className='text-light m-0 p-0'>Civil Engineering Society</h2>
          </div>
        </div>
        <div className="container"></div>
      </body>
    </div>
  );
}

export default Home;
