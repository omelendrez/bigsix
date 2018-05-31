<template>
  <div>
    <Header />
    <div class="google-map" :id="mapName"></div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'branches',
  components: {
    Header
  },
  data () {
    return {
      mapName: 'googleMap'
    }
  },
  methods: {
    addMarker (location, googleMap, label, body) {
      const image = '/static/img/icons/favicon-32x32.png'
      const content = `
      <div id='content'>
      <div id='siteNotice'></div>
        <h4 class='firstHeading'>${label}</h4>
        <div id='bodyContent'>
        ${body}
        </div>
      </div>
      `
      const infowindow = new google.maps.InfoWindow({
        content: content
      })
      const marker = new google.maps.Marker({
        position: location,
        map: googleMap,
        icon: image,
        title: label,
        animation: google.maps.Animation.DROP
      })
      marker.addListener('click', () => {
        infowindow.open(googleMap, marker)
      })
    }
  },
  mounted () {
    const element = document.getElementById(this.mapName)
    const center = { lat: -38.711153, lng: -62.253794 }
    const options = {
      zoom: 14,
      center: center
    }
    const googleMap = new google.maps.Map(element, options)
    const donado = { lat: -38.720513, lng: -62.264677 }
    const alem = { lat: -38.712448, lng: -62.261814 }
    const shopping = { lat: -38.700107, lng: -62.241468 }
    this.addMarker(donado, googleMap, 'Big Six', 'Donado 28')
    // this.addMarker(alem, googleMap, 'Big Six Premium', 'Av. Alem 229')
    this.addMarker(shopping, googleMap, 'Big Six', 'Bahía Plaza Shopping')
  }
}
</script>

<style>
#googleMap {
  height: 93vh;
}
</style>
