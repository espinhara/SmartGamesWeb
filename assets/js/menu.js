let pathName = window.location.pathname;
let parts = pathName.split('/');
let fileName = parts.pop() || parts.pop();
let namePage = fileName.split('.')[0];

let menuHeader = `
<i class="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
  aria-hidden="true" id="iconSidenav"></i>
<a class="navbar-brand m-0" href="" target="_blank">
  <img src="../assets/img/logos/favicon.png" class="navbar-brand-img h-100" alt="main_logo">
  <span class="ms-1 font-weight-bold text-dark">Tribunali</span>
</a>`

document.getElementById('sidenav-header').innerHTML = menuHeader;

let activeClass = 'text-white active bg-gradient-info';

document.getElementById('sidenav-collapse-main').innerHTML = `
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link ${namePage == 'dashboard' ? activeClass : 'text-dark'}" href="../pages/dashboard.html">
      <div
        class=" ${namePage == 'dashboard' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
        <i class="material-icons opacity-10">dashboard</i>
      </div>
      <span class="nav-link-text ms-1">Acompanhamento<br /> de Clientes</span>
    </a>
  </li>
  <li class="nav-item">
    <a data-bs-toggle="collapse" href="#dashboardsExamples"
      class="nav-link text-dark ${namePage == 'consultas' || namePage == 'salvas' || namePage == 'data-jud' ? 'active' : ''} collapsed"
      aria-controls="dashboardsExamples" role="button" aria-expanded="false">
      <i class="material-icons-round opacity-10">table_view</i>
      <span class="nav-link-text ms-2 ps-1">Consultas</span>
    </a>
    <div
      class="collapse ${namePage == 'divida-ativa' || namePage == 'salvas' || namePage == 'data-jud' ? 'show' : ''} "
      id="dashboardsExamples" style="">
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link ${namePage == 'divida-ativa' ? activeClass : 'text-dark'}"
            href="../pages/divida-ativa.html">
            <span class="sidenav-mini-icon"> D </span>
            <span class="sidenav-normal  ms-2  ps-1"> Divida Ativa </span>
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link ${namePage == 'salvas' ? activeClass : 'text-dark'} " href="../pages/salvas.html">
            <span class="sidenav-mini-icon"> S </span>
            <span class="sidenav-normal  ms-2  ps-1"> Salvas </span>
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link ${namePage == 'data-jud' ? activeClass : 'text-dark'} " href="../pages/data-jud.html">
            <span class="sidenav-mini-icon"> DJ </span>
            <span class="sidenav-normal  ms-2  ps-1"> DataJud </span>
          </a>
        </li>
      </ul>
    </div>
  </li>
  <!---<li class="nav-item">
  <a data-bs-toggle="collapse" class="nav-link ${namePage == 'consultas' ? activeClass : 'text-dark'} " href="../pages/consultas.html">
    <div class="${namePage == 'consultas' ? 'text-white' : 'text-dark'}  text-center me-2 d-flex align-items-center justify-content-center">
      <i class="material-icons opacity-10">table_view</i>
    </div>
    <span class="nav-link-text ms-1">Consultas</span>
  </a>
</li>--->
  <!-- <li class="nav-item">
  <a class="nav-link ${namePage == 'tables' ? activeClass : 'text-dark'}" href="../pages/tables.html">
    <div class="${namePage == 'tables' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
      <i class="material-icons opacity-10">table_view</i>
    </div>
    <span class="nav-link-text ms-1">Tables</span>
  </a>
</li> -->
  <!-- <li class="nav-item">
  <a class="nav-link ${namePage == 'billing' ? activeClass : 'text-dark'}" href="../pages/billing.html">
    <div class="${namePage == 'billing' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
      <i class="material-icons opacity-10">receipt_long</i>
    </div>
    <span class="nav-link-text ms-1">Billing</span>
  </a>
</li> -->
  <!---<li class="nav-item">
  <a class="nav-link ${namePage == 'virtual-reality' ? activeClass : 'text-dark'}" href="../pages/virtual-reality.html">
    <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
      <i class="material-icons opacity-10">view_in_ar</i>
    </div>
    <span class="nav-link-text ms-1">Virtual Reality</span>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link text-white  ${namePage == 'rtl' ? activeClass : ''}" href="../pages/rtl.html">
    <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
      <i class="material-icons opacity-10">format_textdirection_r_to_l</i>
    </div>
    <span class="nav-link-text ms-1">RTL</span>
  </a>
</li>--->
  <!-- <li class="nav-item">
    <a class="nav-link ${namePage == 'notifications' ? activeClass : 'text-dark'}" href="../pages/notifications.html">
      <div
        class="${namePage == 'notifications' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
        <i class="material-icons opacity-10">notifications</i>
      </div>
      <span class="nav-link-text ms-1">Notifications</span>
    </a>
  </li> -->
  <li class="nav-item mt-3">
    <h6 class="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-8">Minha Conta</h6>
  </li>
  <li class="nav-item">
    <a class="nav-link ${namePage == 'profile' ? activeClass : 'text-dark'}" href="../pages/profile.html">
      <div
        class="${namePage == 'profile' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
        <i class="material-icons opacity-10">person</i>
      </div>
      <span class="nav-link-text ms-1">Perfil</span>
    </a>
  </li>
  <!-- <li class="nav-item">
    <a class="nav-link ${namePage == 'sign-in' ? activeClass : 'text-dark'}" href="../pages/sign-in.html">
      <div
        class="${namePage == 'sign-in' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
        <i class="material-icons opacity-10">login</i>
      </div>
      <span class="nav-link-text ms-1">Sign In</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link ${namePage == 'sign-up' ? activeClass : 'text-dark'}" href="../pages/sign-up.html">
      <div
        class="${namePage == 'sign-up' ? 'text-white' : 'text-dark'} text-center me-2 d-flex align-items-center justify-content-center">
        <i class="material-icons opacity-10">assignment</i>
      </div>
      <span class="nav-link-text ms-1">Sign Up</span>
    </a>
  </li>
</ul> -->
  `