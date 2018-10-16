<template>
  <div id="app">
    <div class="app-background"></div>
    <Info />
    <Search />
    <div class="result-wrapper">
      <ResultDisplay
        v-for="(cards, index) in this.$store.state.weatherCards.activeCards"
        :key = "index + 'weather-card'"
        :card-index = "index"
      />
    </div>
  </div>
</template>

<script>
import Info from "./components/Info.vue";
import Search from "./components/Search.vue";
import ResultDisplay from "./components/ResultDisplay.vue";

export default {
  name: "app",
  components: {
    Search,
    ResultDisplay,
    Info
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
#app {
  position: relative;
  background: #ECE8EF;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  z-index: 1;
  height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.app-background{
  height: 100%;
  width: 120vw;
  background: linear-gradient(to bottom,  #330867 0%, #30cfd0 70%, #ECE8EF 100%);
  transform: skewY(-12deg);
  transform-origin: top left;
  position: absolute;
  z-index: -1;
  top: 0px;
  right: 0px;
}
.result-wrapper {
    text-align: center;
}
</style>
