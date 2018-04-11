<template>
  <v-form v-model="valid">
    <v-text-field label="Nombre" v-model="name" :rules="nameRules" :counter="60" required autocomplete='given-name'></v-text-field>
    <v-text-field label="Apellido" v-model="surName" :rules="surNameRules" :counter="60" required autocomplete='family-name'></v-text-field>
    <v-text-field label="E-mail" v-model="email" :rules="emailRules" required autocomplete='email'></v-text-field>
    <v-select label="Sexo" v-model="sex" :items='sexItems' single-line></v-select>
    <v-text-field type='date' label="Fecha de nacimiento" v-model="birthDate" required></v-text-field>
    <v-text-field label="D.N.I." v-model="dni" :rules="dniRules" required></v-text-field>
    <v-btn @click="submit" color="primary" :disabled="!valid">
      enviar
    </v-btn>
    <v-btn @click="clear">reset</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      valid: false,
      sex: '',
      sexItems: ['Masculino', 'Femenino'],
      name: '',
      nameRules: [
        v => !!v || 'El nombre es obligatorio',
        v => v.length < 61 || 'No debe ingresar más de 60 caracteres'
      ],
      surName: '',
      surNameRules: [
        v => !!v || 'El nombre es obligatorio',
        v => v.length < 61 || 'No debe ingresar más de 60 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El email es obligatorio',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'El email debe ser válido'
      ],
      birthDate: '',
      birthDateRules: [v => !!v || 'La fecha de nacimiento es obligatoria'],
      dni: '',
      dniRules: [
        v => !!v || 'El DNI es obligatorio',
        v => v.length === 8 || 'El DNI debe tener 8 números'
      ]
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
    },
    clear(e) {
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
