let navbar=()=>{
    return` <header >
    <img src="https://play-lh.googleusercontent.com/0FNnNtu7VCpoP0ZJFWdvoGKFe3RIhk2cnDIR1NcNBu82V93LHwDHP1G7IfyYblctng=w240-h480-rw"  class="logo">
  <div class="navigation">
    <ul class="menu">
     
      <li class="menu-item"><a href="#">Home</a></li>
      <li class="menu-item"><a href="#">Availability</a></li>
      <li class="menu-item"><a href="#">Integrations</a></li>
      <li class="menu-item">
        <a class="sub-btn" href="#">Help <i class="fas fa-angle-down"></i></a>
        <ul class="sub-menu">
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          help
          </span>Help center</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          contact_support
          </span>Chat with us</a></li>
        </ul>
      </li>
      <li class="menu-item">
        <a class="sub-btn" href="#"><span class="material-symbols-outlined">
        hdr_auto
        </span>Account <i class="fas fa-angle-down"></i></a>
        <ul class="sub-menu">
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          person
          </span>Account Setting</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          credit_card
          </span>Billing</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          calendar_today
          </span>Calender Connection</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          group
          </span>Admin Management</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          lock
          </span>Organization Settings</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          share
          </span>Share Your Link</a></li>
          <li class="sub-item"><a href="#"><span class="material-symbols-outlined">
          apps
          </span>Apps</a></li>
          <hr class="clear" />
          <li class="sub-item"><a href="#" id="lobbn"><span class="material-symbols-outlined">
          logout
          </span>Logout</a></li>
          </ul>
      </li>
    
    </ul>
  </div>
</header>`
};
export default navbar;