<template>
  <div class="row">
    <div class="col-8">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Mass Schedule</h2>
          <p>Monday-Friday: 8:30 a.m.</p>
          <p>Saturday: 5:00 p.m.</p>
          <p>
            Sunday: English: 8:30 a.m. &amp; 11:00 a.m. <br />
            Korean: 12:30 p.m.<br />
            Spanish: 4:00 p.m.
          </p>
          <p>Holy Days: 7:00 a.m. &amp; 7:00 p.m.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Penance/Reconciliation</h2>
          <p>
            Saturday 3:30 p.m. - 4:30 p.m. <br />
            Sunday: 3:00 p.m. - 3:45 p.m. Spanish<br />
            Also by appointment, M-F 9:00 a.m. - 4:30 p.m.<br />
            Call 706-798-1920
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Covid Protocols</h2>
          <p>
            <a href="/assets/pdfs/covid-pentecost-english.pdf"
              >Click for English version of COVID-19 protocols
            </a>
          </p>
          <p>
            <a href="/assets/pdfs/covid-pentecost-spanish.pdf"
              >Haga clic para ver la versión en español de los protocolos
              COVID-19
            </a>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h2 class="card-title">
            Registration Forms for Parish Religious Education
          </h2>
          <p>
            <a href="/assets/pdfs/pre-2020-21-english.pdf"
              ><br />
              English</a
            >
            | <a href="/assets/pdfs/pre-2020-21-spanish.pdf">Spanish</a>
            <br />
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Hyde Amendment Petition</h2>
          <p>
            Below is a letter encouraging action regarding legislation that is
            being put forth to overturn the Hyde Amendment and allow federal
            funding for abortion. The USCCB has created an online petition.

            <a href="/assets/pdfs/hyde-amendment-petition.pdf"
              ><br />
              Click here to access the Bishop's Letter</a
            >
          </p>
        </div>
      </div>
    </div>

    <div class="col-4">
      <div id="online-giving" class="card">
        <div class="card-body">
          <h2 class="card-title">Online Giving</h2>
          <p>
            We are now offering an online option that complements our offering
            envelope use. By signing up to give your weekly offertory giving
            online, you will help the parish more accurately forecast our
            finances and plan more strategically. Online Giving is a safe,
            secure and dependable means of income for the parish.
          </p>
          <p id="tithe-button">
            <a href="http://giving.parishsoft.com/dl/?uid=stj2607207">
              <img
                src="../assets/images/tithe.png"
                width="150"
                height="50"
                alt="Tithe online today!"
            /></a>
          </p>
          <h4>
            <a class="catholic-appeal" href="https://diosav.org/baa"
              >2022 Annual Catholic Appeal</a
            >
          </h4>
          <p>
            The 2022
            <a class="catholic-appeal" href="https://diosav.org/baa"
              >Annual Catholic Appeal Website</a
            >
            is now accepting donations and has all the information you will
            need! When making an online donation, please be sure to indicate St.
            Joseph Parish, Augusta.
          </p>
          <h2>Our Mission</h2>

          <figure>
            <blockquote class="blockquote">
              <p id="bible-verse">
                Go, therefore, and make disciples of all nations, baptizing them
                in the name of the Father, and of the Son, and of the Holy
                Spirit, teaching them to observe all that I have commanded you.
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Matthew <cite title="Source Title">28:19-20</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
};
</script>

<style scoped>

#bible-verse{
  font-size:14px;
}

#online-giving {
  background-color: #e8e6bd;
}

.catholic-appeal {
  text-decoration: none;
  color: black;
}

#tithe-button {
  text-align: center;
}
</style>
