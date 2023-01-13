<template>
  <tr class="order-item">
    <td>{{ nota }}</td>
    <td>{{ sacado }}</td>
    <td>{{ cedente }}</td>
    <td>{{ emissao }}</td>
    <td class="currency">
      {{ valor }}
    </td>
    <td>{{ statusValue[status].text }}</td>
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
      default: '1234'
    },
    sacado: {
      type: String,
      default: 'SACADO 001'
    },
    cedente: {
      type: String,
      default: 'CEDENTE 002'
    },
    emissao: {
      type: String,
      default: '12/02/2020'
    },
    valor: {
      type: String,
      default: '49725,00'
    },
    status: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      statusValue: [
        {value: 0,        
        text: 'Pendente de confirmação'},
        {value: 1,                
        text: 'Pedido confirmado'},
        {value: 2,        
        text: 'Não reconhece o pedido'},
        {value: 3,        
        text: 'Mercadoria não recebida'},
        {value: 4,        
        text: 'Recebida com avaria'},
        {value: 5,        
        text: 'Devolvida'},
        {value: 6,        
        text: 'Recebida com devolução parcial'},
        {value: 7,        
        text: 'Recebida e confirmada'},
        {value: 8,
        text: 'Pagamento Autorizado'}
      ],
    }
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

 .currency::before {
  content: 'R$: '
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