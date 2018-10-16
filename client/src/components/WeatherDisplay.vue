<template>
  <div class="weather-icon-wrapper">
    <div
      v-if="weatherStatus === 'Clouds'"
      class="icon">
      <div class="weather-icon cloud" />
      <div class="weather-icon cloud second-cloud" />
    </div>
    <div
      v-if="weatherStatus === 'Rain'"
      class="icon">
      <div class="weather-icon cloud">
        <div
          v-for="(rainDrop, index) in 12"
          :key="index + 'rainDrop'"
          :style="{right: (index * 8 - 15) + 'px', bottom: (-20 + (index * Math.floor(Math.random() * Math.floor(5)))) + 'px'}"
          class="rain-drops"
        />
      </div>
      <div class="weather-icon cloud second-cloud" />
    </div>
    <div
      v-if="weatherStatus === 'Clear'"
      class="icon">
        <div class="sun-wrapper">
          <div class="sun">
              <div
              v-for="(ray, index) in 6"
              :key="index"
              :style="rotateSunRayStyle(index)"
              class="sun-ray" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherIcons',
  props: {
    weatherStatus: {
      type: String,
      default: ''
    }
  },
  methods: {
      rotateSunRayStyle(index) {
        return { transform: 'rotate(' + 30 * index + 'deg)'}
      }
  }
}
</script>

<style>
.cloud{
  width: 90px;
  height: 30px;
  background: rgb(230, 228, 228);
  border-radius: 40px;
  position: relative;
  top: 40px;
  right: 10px;
  margin: auto;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.2);
}
.cloud::before {
  content: "";
  width: 50px;
  height: 50px;
  background: rgb(230, 228, 228);
  border-radius: 50%;
  position: absolute;
  top: -20px;
  right: 11px;
}
.cloud::after {
  content: "";
  width: 30px;
  height: 30px;
  background: rgb(230, 228, 228);
  border-radius: 50%;
  position: absolute;
  top: -11px;
  right: 50px;
}
.second-cloud{
  right: -25px;
  top: 22px;
}
.rain-drops {
  width: 2px;
  height: 11px;
  background: rgb(88, 88, 202);
  position: absolute;
  z-index: 20;
  border-radius: 50%;
  transform: skewX(-20deg);
  animation: rainDrop 2s infinite;
}

.sun{
  height: 90px;
  width: 90px;
  background: yellow;
  border-radius: 50%;
  margin: auto;
  position: relative;
  z-index: 5;
  animation: sunSpin 40s infinite linear;
  top: 15px;
}

.sun-ray{
  width: 120px;
  height: 3px;
  margin: auto;
  position: absolute;
  top: calc(50% - 1.5px);
  right: -25px;;
  border-right: 10px solid yellow;
  border-left: 10px solid yellow;
}


.weather-icon .rain-drops:nth-child(3n+1) { animation-delay: .5s }
.weather-icon .rain-drops:nth-child(2) { animation-delay: .9s }
.weather-icon .rain-drops:nth-child(1) { animation-delay: .6s }
.weather-icon .rain-drops:nth-child(4) { animation-delay: .2s }
.weather-icon .rain-drops:nth-child(5) { animation-delay: 1s }

@keyframes rainDrop {
  0% {transform: translate(20%) skewX(-20deg); background: transparent}
  0% {background: rgb(88, 88, 202)}
  100% {transform: translate(-10px, 30px) skewX(-20deg); background: transparent}
}
@keyframes sunSpin {
  100% {transform: rotate(360deg)}
}
</style>
