<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'branches',
  data() {
    return {
      mapName: 'googleMap'
    }
  },
  mounted() {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 15,
      center: new google.maps.LatLng(-38.719713, -62.257095)
    }
    const googleMap = new google.maps.Map(element, options)
  }
}
</script>

<style>
#googleMap {
  height: 80vh;
}
</style>
