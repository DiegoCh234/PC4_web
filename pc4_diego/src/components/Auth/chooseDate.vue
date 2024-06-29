<template>
  <div class="chooseDate">
    <div class="header">
      <div class="logo">
        <img src="/icons/nasa-logo.png" alt="NASA Logo" />
      </div>
      <div class="title">APOD's choice</div>
    </div>
    <div class="container">
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Start Date</span>
              <input type="date" v-model="start_date" placeholder="dd-mm-yyyy" required>
            </div>
            <div class="input-box">
              <span class="details">End Date</span>
              <input type="date" v-model="end_date" placeholder="dd-mm-yyyy" required>
            </div>
            <div class="input-box">
              <span class="details">API Key</span>
              <input type="text" v-model="api_key" placeholder="Enter your API Key" required>
            </div>
          </div>
          <div class="button">
            <input type="button" value="Buscar APOD" @click="searchAPOD">
          </div>
        </form>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#">NASA</a> |
          <a href="#">CALTECH</a> |
          <a href="#">PRIVACY</a> |
          <a href="#">IMAGE POLICY</a> |
          <a href="#">FAQ</a> |
          <a href="#">FEEDBACK</a>
        </div>
        <div class="footer-info">
          <p>CL#21-5435</p>
          <p>Site Manager: Diego Chavez</p>
          <p>University: ESAN School of Business</p>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ChooseDate",
  data() {
    return {
        start_date: "",
        end_date: "",
        api_key: "",
    }
  },

  methods: {
    searchAPOD() {

      const baseURL = "https://api.nasa.gov/planetary/apod";

      const url = `${baseURL}?api_key=${this.api_key}&start_date=${this.start_date}&end_date=${this.end_date}`;

      axios.get(url)
        .then(response => {

          console.log('Solicitud exitosa:')

          localStorage.setItem("userData", JSON.stringify(response.data))
          this.$router.push("/dashboard/apod")
        })

        .catch(error => {

          console.error('Error fetching APOD data:', error);

        });
    },

  }
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.chooseDate {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia23518-16.jpg') no-repeat center center/cover;
  background-size: cover;
}

.header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
}

.header .logo img {
  height: 50px;
  margin-right: 20px;
}

.header .title {
  font-size: 25px;
  font-weight: 500;
  color: #fff;
  text-align: center;
}

.container {
  max-width: 700px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
}

.container::before {
  content: "";
  position: absolute;
  top: calc(70px);
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/icons/fondo.png') no-repeat center center/cover;
  background-size: cover;
  z-index: -1;
  border-radius: 5px;
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
}

.content form .user-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

form .user-details .input-box {
  width: 100%;
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}

form .button {
  height: 45px;
}

form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

form .button input:hover {
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

@media (max-width: 584px) {
  .container {
    max-width: 100%;
  }
}

.footer {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  margin-bottom: 10px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-info p {
  margin: 5px 0;
  font-size: 14px;
}


</style>
