<template>
  <div class="row">
    <div class="col-8">
    <div class="card">
      <div class="card-body">
      <h2 class="card-title">Office Hours</h2>
          <p>Monday 1:00 p.m. - 4:30 p.m.</p>
          <p>Tuesday-Friday 9:00 a.m. - 4:30 p.m.</p> 
      </div>

    </div>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Mass Schedule</h2>
          <p>Monday-Friday: 8:30 a.m.</p>
          <p>Saturday: 5:00 p.m. Vigil</p>
          <p>
            Sunday: English: 8:30 a.m. &amp; 11:00 a.m. <br />
            Korean: 1:00 p.m.<br />
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
            Sunday: 3:00 p.m. - 3:45 p.m.<br />
            Also by appointment
          </p>
        </div>
      </div>





    </div>

    <div class="col-4">
      <div id="online-giving" class="card">
        <div class="card-body">
          <h2 class="card-title">Online Giving</h2>
          <p>
            By giving online you help the parish more accurately forecast our
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
              >2023 Annual Catholic Appeal</a
            >
          </h4>
          <p>
            The 2022
            <a class="catholic-appeal" href="https://diosav.org/baa"
              >Annual Catholic Appeal Website</a
            >
            please be sure to indicate St.
            Joseph Parish, Augusta.
          </p>
          <h2>Our Vision</h2>
              <p id="bible-verse">
                St. Joseph Catholic Church is a faith community
                rooted in God's Word. We are formed in the truth of 
                Jesus Christ and empowered by the Holy Spirit to reach
                out to other's with the Father's unconditional love.
              </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
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
