import { Link } from 'react-router-dom';
// import { useState } from "react";
function Listes() {

 
  return (
    <>
<header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
  <a href="index.html" className="logo d-flex align-items-center">
    <img src="" alt=""/>
    <span className="d-none d-lg-block">Ecomil</span>
  </a>
  <i className="bi bi-list toggle-sidebar-btn"></i>
</div>

<div className="search-bar">
  <form className="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
  </form>
</div>

<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">

    <li className="nav-item d-block d-lg-none">
      <a className="nav-link nav-icon search-bar-toggle " href="#">
        <i className="bi bi-search"></i>
      </a>
    </li>

    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>

      </ul>

    </li>

    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
          <a href="#">
            <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>
            <div>
              <h4>Maria Hudson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
          <a href="#">
            <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle"/>
            <div>
              <h4>Anna Nelson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
          <a href="#">
            <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle"/>
            <div>
              <h4>David Muldon</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>

      </ul>

    </li>

    <li className="nav-item dropdown pe-3">

      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src="assets/img/jm.png" alt="Profile" className="rounded-circle"/>
        <span className="d-none d-md-block dropdown-toggle ps-2">M. Jeremie</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Mengi Jeremie</h6>
          <span>Web Designer</span>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>
</nav>

</header>  

<aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <a className="nav-link " href="index.html">
      <i className="bi bi-grid"></i>
      <span>Tableau de bord </span>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-journal-text"></i><span>{`Inscription de L'eleve`}</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="forms-nav" className="nav-content collapse " >
    <li>
    <Link to="/formlay">
     <i className="bi bi-circle"></i><span>{`Formulaire d'inscription`}</span>
   </Link>
  </li>


    </ul>
  </li>
  
  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-layout-text-window-reverse"></i><span>Etats des eleves</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="tables-general.html">
          <i className="bi bi-circle"></i><span> Liste des élèves.</span>
        </a>
      </li>
      <li>
        <a href="tables-data.html">
          <i className="bi bi-circle"></i><span>Presences</span>
        </a>
      </li>
      <li>
        <a href="tables-data.html">
          <i className="bi bi-circle"></i><span>Absences</span>
        </a>
      </li>
    </ul>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="components-carousel.html">
          <i className="bi bi-circle"></i><span>Carousel</span>
        </a>
      </li>
      <li>
        <a href="components-list-group.html">
          <i className="bi bi-circle"></i><span>List group</span>
        </a>
      </li>
      <li>
        <a href="components-modal.html">
          <i className="bi bi-circle"></i><span>Modal</span>
        </a>
      </li>
      <li>
        <a href="components-tabs.html">
          <i className="bi bi-circle"></i><span>Tabs</span>
        </a>
      </li>
    </ul>
  </li>

  <li className="nav-heading">Pages</li>

  <li className="nav-item">
    <a className="nav-link collapsed" href="users-profile.html">
      <i className="bi bi-person"></i>
      <span>Profile</span>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" href="pages-faq.html">
      <i className="bi bi-question-circle"></i>
      <span>F.A.Q</span>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" href="pages-contact.html">
      <i className="bi bi-envelope"></i>
      <span>Contact</span>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" href="pages-register.html">
      <i className="bi bi-card-list"></i>
      <span>Register</span>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" href="pages-login.html">
      <i className="bi bi-box-arrow-in-right"></i>
      <span>Login</span>
    </a>
  </li>

</ul>

</aside>

<main id="main" className="main">
<div className="pagetitle">
      <h1>TABLEAU DE BORD</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Acceuil</a></li>
          <li className="breadcrumb-item active">Bienvenue</li>
        </ol>
      </nav>
    </div>


      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
    {  ` Listes des eleves`}
      </h2>
      

      <section style={{
            textAlign: 'center',
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
        }}>
             <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
    <Link 
        to="/presence" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Présence
    </Link>
    <Link 
        to="/communique" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Communiqué
    </Link>
    <Link 
        to="/sortie" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FF5722', color: 'white', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Sortie
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
    <Link 
        to="/notifications" 
        style={{ minWidth: '180px', padding: '15px', fontSize: '18px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
        Notification
    </Link>
</div>

        </section>
</main>

      
    </>
  )
}

export default Listes
