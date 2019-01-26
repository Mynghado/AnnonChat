<template>
  <div id="welcome">
    <div class="welcome container">
      <h2 align="center" class="teal-text">Welcome to Annonchat</h2>
      <div class="card">
    <br>
      <List></List>
    <br>
    <br>
      </div>
      <!-- <div class="card">
        <div class="card-content center-align">
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Create from './Create'
import List from './List'


export default {
  name: 'Welcome',
  components: {
    Create,
    List

  },
  data () {
    return {
      name : null,
      feedback: null
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 1000px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 4em;
}
.welcome button {
  margin: 30px auto;
}
</style>
