import { Link } from 'react-router-dom';



function Admin() {
  return (
    <>
    <body>
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

{/* <!-- ======= Sidebar ======= --> */}
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

    <section className="section dashboard">
      <div className="row">

        {/* <!-- Left side columns --> */}
        <div className="col-lg-8">
          <div className="row">

            {/* <!-- Sales Card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

                <div className="card-body">
                  <h5 className="card-title">{`Nombre total d'élèves`}<span></span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      {/* <!-- <i class="bi bi-cart"></i> --> */}
                    </div>
                    <div className="ps-3">
                      <h6>500</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>

         
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
                <div className="card-body">
                  <h5 className="card-title">Presences</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      {/* <!-- <i class="bi bi-currency-dollar"></i> --> */}
                    </div>
                    <div className="ps-3">
                      <h6>480</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>

           
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
                <div className="card-body">
                  <h5 className="card-title">Absence</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      {/* <!-- <i class="bi bi-currency-dollar"></i> --> */}
                    </div>
                    <div className="ps-3">
                      <h6>20</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-12">
              <div className="card top-selling overflow-auto">
                <div className="card-body pb-0">
                  <h5 className="card-title">Utilisateurs<span></span></h5>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">nom utilisateur</th>
                        <th scope="col">{`Nombre d'eleves`}</th>
                        <th scope="col">Numero de telephone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""/></a></th>
                        <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                        <td>$64</td>
                        <td className="fw-bold">124</td>
                 
                      </tr>
                      <tr>
                        <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""/></a></th>
                        <td><a href="#" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                        <td>$46</td>
                        <td className="fw-bold">98</td>
                   
                      </tr>
                      <tr>
                        <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""/></a></th>
                        <td><a href="#" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                        <td>$59</td>
                        <td className="fw-bold">74</td>
                 
                      </tr>
                      <tr>
                        <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""/></a></th>
                        <td><a href="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                        <td>$32</td>
                        <td className="fw-bold">63</td>
               
                      </tr>
                      <tr>
                        <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""/></a></th>
                        <td><a href="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                        <td>$79</td>
                        <td className="fw-bold">41</td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div>

          </div>
        </div>    
        </div>
               
    </section>



</main>
    </body>
     
    </>
  );
}

export default Admin;
