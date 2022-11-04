// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact';
function Home() {
  return (
    <>
      <div className=" max-w-[800px] flex justify-center mb-6">
        <img id="profile_img" src="https://pbs.twimg.com/profile_images/1516046767678271496/xB1dNgVB_400x400.jpg" alt="image.jpeg" className=" items-center h-[92px] w-[92px] bg-gray-200 rounded-full justify-center" />
      </div>
      <div className="max-w-[800px] flex justify-center items-center font-black">
        <h1 >Chukky</h1>
      </div>
      <div className=" max-w-[800px]">
        <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4"  id="twitter"  href="https://twitter.com/Chukky84573297" target="_blank">Twitter Link</a>
        <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4" id="btn_zuri" href="https://training.zuri.team/" target="_blank">Zuri Team</a>
        <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4" id="books" href="http://books.zuri.team" target="_blank">Zuri Books</a>
        <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4" id="book_python" ref_id="Chukwuka Nonyelim" href="https://books.zuri.team/" target="_blank">Python Books</a>
        <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4" id="pitch" href="https://background.zuri.team" target="_blank">Background Check for Coders</a>
        <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4" id="book_design" href="https://books.zuri.team/design-rules" target="_blank">Design Books</a>
         <a className="flex justify-center items-center w-full h-[40px] bg-gray-200 rounded-md mb-4" href="/contact">Contact Me</a>
        < div className="flex justify-center items-center">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github logo" width="10%" height="50px"/>
            <img  src="https://launchpad.syr.edu/wp-content/uploads/2021/09/Slack-logo.jpg" alt="slack logo" width="10%" height="50px"/>
    </div>
    <div className="flex text-center w-full justify-center items-center max-w-[800px]">
<p className="font-black">Zuri.Internship</p> 

 <p>HNG Internship 9 Frontend Task</p> 
 
  <img src="https://i.ytimg.com/vi/OR05gnlvTHY/maxresdefault.jpg" alt="I4G logo" width="10%" height="50px"/>
    </div>
      </div >
      <Link className="font-black flex justify-center max-w-[800px]" to="/contact">Contact Page</Link>

    </>
  );
}

function App() {
  return (
    <div className="App p-6">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
