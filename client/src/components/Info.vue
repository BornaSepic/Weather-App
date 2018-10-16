<template>
  <div class="info-container">
    <h1>weather update</h1>
    <p>Weather Forcast app built with Vue.js, Node.js and Love</p>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info-container{
  text-align: left;
  width: 30%;
  min-width: 320px;
  color: white;
  margin-bottom: 45px;
}
</style>
