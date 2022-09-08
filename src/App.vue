<template>
  <body>
    <div id="doc2" class="container">
      <div class="row">
        <img
          src=".\assets\images\sjheader.jpg"
          class="img-fluid"
          width="950"
          height="233"
        />
      </div>

      <div id="office-hours" class="row">
        <strong
          >Office Hours Monday 1:00 p.m. - 4:30 p.m. and Tuesday-Friday 9:00
          a.m. - 4:30 p.m. |
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
              <li class="nav-item" ><router-link class="nav-link" to="/history"> History </router-link></li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="http://discovermass.com/church/st-joseph-augusta-ga/#bulletins"
                  >Weekly Bulletin</a
                >
              </li>
              <li class="nav-item">
                <a  class="nav-link" href="/assets/pdfs/calendar.pdf">Church Calendar</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About St. Joseph Church
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/contact">
                      Staff and Contact Information
                    </router-link>
                  </li>
                  <li><router-link to="/homily"> Homily </router-link></li>
                  <li>
                    <router-link to="/information">
                      Sacrament and Member Information
                    </router-link>
                  </li>

                  <li>
                    <router-link to="/schedules"> Schedules </router-link>
                  </li>
                  
                  <li>
                    <router-link to="/directions">
                      Driving Directions
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
                    <router-link to="/catholic-resources">
                      Catholic Resources
                    </router-link>
                  </li>
                  <li>
                    <a
                      href="https://www.usccb.org/offices/new-american-bible/books-bible"
                    >
                      Daily Readings
                    </a>
                  </li>
                  <li>
                    <a href="/assets/pdfs/ministry-catalog.pdf"
                      >Ministry Catalog</a
                    >
                  </li>
                  <li>
                    <router-link to="/basic-christian-living-series">
                      Basic Christian Living Series
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Router outlet section -->
      <router-view></router-view>

      <!-- footer section -->
      <footer class="row">
        <div class="text-center">
          <p text-align="center">
            &copy; Saint Joseph Catholic Church, Augusta, GA, All Rights
            Reserved. | e-mail:
            <a id="church-email" href="mailto:stjoesaug@aol.com"
              >stjoesaug@aol.com</a
            >
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
  margin-top: 1em;
  margin-bottom: 1em;
}

#doc2 {
  margin: auto;
  width: 67.89em;
  text-align: left;
  background: #ffffff;
  border-top: 2px solid #999;
  border-left: 2px solid #999;
  border-right: 2px solid #999;
  border-bottom: 2px solid #999;
}

body {
  background: url("./assets/images/bg_vstripe.gif") fixed;
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
  text-align: center;
}
</style>
