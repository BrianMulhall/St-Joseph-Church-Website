<template>
  <div id="doc2" class="container">
      <div class="row">
        <img src=".\assets\images\sjheader.jpg" class="img-fluid" width="950" height="233" >
      </div>

      <div class="row">
          <strong>Office Hours Monday 1:00 p.m. - 4:30 p.m. and Tuesday-Friday 9:00 a.m. - 4:30 p.m. | <a href="mailto:stjoesaug@aol.com">stjoesaug@aol.com</a></strong>
      </div>

      <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Features</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Pricing</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link disabled">Disabled</a>
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
                  &copy; Saint Joseph Catholic Church, Augusta, GA, All Rights Reserved. | e-mail: <a id="church-email" href="mailto:stjoesaug@aol.com">stjoesaug@aol.com</a>
              </p>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
#doc2 {
    margin: auto;
    width: 67.89em;
    text-align: left;
    background: #FFFFFF;
    border-top: 2px solid #999;
    border-left: 2px solid #999;
    border-right: 2px solid #999;
    border-bottom: 2px solid #999;
}

body {
    background: url("./assets/images/bg_vstripe.gif") fixed;
}

#church-email{
    text-decoration: none;
    color: #333366;
}

</style>
