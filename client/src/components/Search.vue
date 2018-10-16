<template>
  <div class="search-container">
    <h3 class="search-info-text">Enter A City Name:</h3>
    <div class="search-field">
      <input
        @keypress="enterPress()"
        @focus="removeError()"
        v-model="currentSearchQuery"
        type="text"
        class="city-query-field"
      >
      <button
        @click="getWeatherData()"
        class="city-search-button">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <h3
      v-if="searchError"
      class="error-message">
      Seems like {{ currentSearchQuery }} is not a valid city name. Please try again!
    </h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data: () => {
    return {
      currentSearchQuery: "",
      searchError: false
    };
  },
  methods: {
    enterPress: function() {
      if(event.key === 'Enter'){
        this.getWeatherData()
      };
    },
    removeError: function() {
      this.searchError = false;
    },
    getWeatherData: function() {
      const cityName = this.currentSearchQuery;
      if (cityName === "") {
        return;
      }
      axios
        .get(`http://localhost:3000/${cityName}`, {
          params: {
            id: cityName
          }
        })
        .then(response => {
          if (typeof response.data === "string") {
            this.searchError = true;
            return;
          }
          this.currentSearchQuery = "";
          this.extractData(response.data);
        });
    },
    extractData: function(data) {
      const weatherData = {
        name: data.city.name,
        country: data.city.country,
        temperature: data.list[0].main.temp,
        windSpeed: data.list[0].wind.speed,
        weather: data.list[0].weather[0].main
      };
      this.$store.commit("createNewCard", weatherData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-info-text {
  text-align: center;
}
.search-field {
  position: relative;
  display: inline-block;
  margin-left: calc(50% - 140px);
}
.city-query-field {
  border: none;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  padding-right: 75px;
}
.city-search-button {
  cursor: pointer;
  width: 45px;
  height: 38.5px;
  -webkit-appearance: none;
  border: none;
  position: absolute;
  right: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fd6467;
}
.city-query-field:focus,
.city-search-button:focus {
  outline: none;
}
button.city-search-button {
  font-size: 20px;
  line-height: 38.5px;
  color: white;
}
.error-message {
  text-align: center;
}
.search-container {
  margin-bottom: 150px;
}
</style>
