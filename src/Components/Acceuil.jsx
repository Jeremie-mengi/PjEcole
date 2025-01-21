
import Footer from "./Footer";
import Header from "./Header";
import Mainnn from "./Mainnn";
import Scoll from "./Scoll";


function Acceuil() {
  return (
    <>
     <body className="index-page">
<Header/>
<Mainnn/>
<Footer/>
<Scoll/>
{/* <!-- Scroll Top --> */}
  <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</body>
    </>
  )
}

export default Acceuil
