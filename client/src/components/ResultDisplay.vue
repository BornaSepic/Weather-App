<template>
  <div class="result-info-holder">
    <div class="city-info">

      <div class="city-name">{{ cityName }}, {{ country }} </div>
    </div>
    <div class="weather-display">
      <WeatherDisplay :weatherStatus="weather"/>
    </div>
    <p class="temperature">{{ temperature }} <span class="celsius-circle"/> </p>
    <p class="general-weather">{{ weather }}</p>
  </div>
</template>

<script>
import WeatherDisplay from "./WeatherDisplay";

export default {
  name: "ResultDisplay",
  components: {
    WeatherDisplay
  },
  props: {
    weatherData: {
      type: Object,
      default: () => ({})
    },
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    cityName() {
      return this.$store.state.weatherCards.cardContent[this.cardIndex].name;
    },
    country() {
      return this.$store.state.weatherCards.cardContent[this.cardIndex].country;
    },
    temperature() {
      return Math.round(this.$store.state.weatherCards.cardContent[this.cardIndex].temperature - 273.15);
    },
    windSpeed() {
      return this.$store.state.weatherCards.cardContent[this.cardIndex].windSpeed;
    },
    weather() {
      return this.$store.state.weatherCards.cardContent[this.cardIndex].weather;
    }
  }
};
</script>

<style >
.weather-display {
  height: 90px;
  position: relative;
}
.result-info-holder {
  width: 280px;
  height: 400px;
  display: inline-block;
  text-align: center;
  background: salmon;
  border-radius: 20px;
  margin: 0px 10px;
  animation: 1s createCard;
}
.city-info {
  margin-bottom: 40px;
}
.city-name {
  text-align: right;
  float: right;
  padding: 10px;
}
.local-time {
  float: left;
  padding: 10px;
}
.temperature {
  position: relative;
  font-size: 58px;
}
span.celsius-circle {
  width: 7px;
  height: 7px;
  border: 3px solid #2c3e50;
  border-radius: 50%;
  position: absolute;
}

@keyframes createCard {
  0% {
    opacity: 0;
    transform: rotateY(180deg);
  }
  100% {
    opacity: 1;
  }
}
</style>
