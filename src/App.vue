<template>
  <body>
    <div id="main-body" class="container">
      <div class="row">
        <img
          src=".\assets\images\sjheader.jpg"
          class="img-fluid"
          width="950"
          height="233"
        />
      </div>

      <div id="office-hours" class="row">
        <strong><a class="contact-links" href="http://maps.google.com/?q=2607 Lumpkin Road Augusta, GA 30906">2607 Lumpkin Road Augusta, GA 30906</a> | Phone: <a class="contact-links" href="tel:+17067981920">(706) 798-1920</a> | Fax: <a class="contact-links" href="tel:+17067988594">(706) 798-8594</a> | 
          <a id="church-email" href="mailto:stjoesaug@aol.com"
            >stjoesaug@aol.com</a
          ></strong
        >
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            St. Joseph Church
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
             
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="http://discovermass.com/church/st-joseph-augusta-ga/#bulletins"
                  >Weekly Bulletin</a
                >
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Staff and Contacts
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item" to="/contact">
                      Staff and Contact Information
                    </router-link>
                  </li>



                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Resources
                </a>
                <ul class="dropdown-menu">
                  <li>
                   <a class="dropdown-item" href="http://www.diosav.org"
                      >Diocese of Savannah</a
                    >
                  </li>
                  <li>
                      <a class="dropdown-item" href="http://www.usccb.org"
                        >Bishops Conference</a
                      >
                  </li>
                  <li>
                      <a class="dropdown-item" href="https://www.diosav.org/offices/vocations">Vocations</a>
                  </li>
                  <li>
                      <a class="dropdown-item" href="http://www.aquinashigh.org"
                        >Aquinas High School</a
                      >
                  </li>
                  <li>
                          <a class="dropdown-item" href="http://www.vatican.va/">Vatican</a>
                  </li>
                  <li>
                    <a class="dropdown-item"
                      href="https://bible.usccb.org/daily-bible-reading"
                    >
                      Daily Readings
                    </a>
                  </li>
                 
                 
                  <li>
                    <a class="dropdown-item" href="https://www.diosav.org/childyouthprotection">
                      Child and Youth Protection
                    </a>
                  </li>
                </ul>
              </li>
               <li class="nav-item">
                <router-link class="nav-link" to="/history">
                  History
                </router-link>
              </li>
              
            </ul>
          </div>
        </div>
        <button class="btn">
                <a class="btn btn-primary" href="https://www.facebook.com/St-Joseph-Catholic-Church-Augusta-GA-171859041023/" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
              </button>
      </nav>

      <!-- Router outlet section -->
      <router-view></router-view>

      <!-- footer section -->
      <footer class="row">
        <div class="text-center">
          <p text-align="center">
            &copy; Saint Joseph Catholic Church, Augusta, GA, All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
footer {
  padding: 5px;
  border-top: 1px solid #999999;
  margin-top: 40px;
}

nav {
  margin-top: 15px;
  margin-bottom: 15px;
}

#main-body {
  margin: auto;
  text-align: left;
  background: #ffffff;
  border-top: 2px solid #999;
  border-left: 2px solid #999;
  border-right: 2px solid #999;
  border-bottom: 2px solid #999;
}

body {
  *font-size: small;
  *font: x-small;
  font-family: arial, helvetica, clean, sans-serif;
  font-size: 14px;
  line-height: 1.231;
}

#church-email {
  text-decoration: none;
  color: #333366;
}

#office-hours {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.contact-links {
    color: #141619;
    text-decoration: none;
}
</style>
