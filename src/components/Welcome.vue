<template>
  <div id="welcome">
    <div class="welcome container">
      <div class="card">
        <div class="card-content center-align">
          <h2 class="teal-text">Welcome</h2>
          <form @submit.prevent="enterChat()">
            <label for="name">Enter your name</label>
            <input type="text" name="name" v-model="name">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <button class="btn teal">Enter Chat</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Welcome',
  components: {

  },
  data () {
    return {
      name : null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        // name of the component we want to push + props(username)
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = "You must enter a name"
      }
    },
    logIn() {
      if(this.name) {
        // name of the component we want to push + props(username)
        this.$router.push({ name: 'Home', params: { name: this.name } })
      } else {
        this.feedback = "You must enter a name"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>
