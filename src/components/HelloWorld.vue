<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    axios.get('ajax/moreComingList?token=&movieIds=443387%2C1219754%2C1220983%2C247949%2C1203825%2C1213293%2C1218474%2C1258163%2C1237279%2C1203046&optimus_uuid=BE5E9CD030EF11EA96A513DB01BCE45AB63FA50C05E34CA0AF7285E7A837A876&optimus_risk_level=71&optimus_code=10').then(res => {
      // console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
