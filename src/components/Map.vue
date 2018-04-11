<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'map',
  data() {
    return {
      mapName: 'google-map'
    }
  },
  mounted () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 16,
      center: new google.maps.LatLng(-38.719713, -62.257095)
    }
    const map = new google.maps.Map(element, options)
  }
}
</script>

<style>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
