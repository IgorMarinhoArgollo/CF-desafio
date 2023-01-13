<template>
  <tr class="order-item">
    <td>{{ nota }}</td>
    <td>{{ sacado }}</td>
    <td>{{ cedente }}</td>
    <td>{{ emissao }}</td>
    <td>{{ valor }}</td>
    <td>{{ status }}</td>
    <td>
      <router-link
        v-slot="{ navigate }"
        to="/notFound"
        custom
      >
        <button
          role="link"
          @click="navigate"
        >
          Dados do cedente
        </button>
      </router-link>
    </td>
  </tr>  
</template>

<script>
export default {
 props: {
    nota: {
      type: String,
      default: '1234'},
    sacado: {
      type: String,
      default: 'SACADO 001'},
    cedente: {
      type: String,
      default: 'CEDENTE 002'},
    emissao: {
      type: String,
      default: '12/02/2020'},
    valor: {
      type: String,
      default: '49725,00'},
    status: {
      type: Number,
      default: 1}
  }
}
</script>

<style>
 td {
  text-align: center;
  padding: 15px 0;
 }

 button {
  background-color: transparent;
  width: 200px;
  height: 35px;
  border-radius: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.8em;
  font-weight: 600;
  color: #727D94;
  border-color: #DFE2EB;
  border-style: solid;
 }

 @media screen and (max-width: 450px){
tr {
  font-size: 0.6em;
}

button {
  width: 130px;
  height: 25px;
  font-size: 0.6em;
 }

}
</style>