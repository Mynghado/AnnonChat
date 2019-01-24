<template>
  <div id="create">
    <div class="create container">
      <div class="card">
        <div class="card-content center-align">
          <h2 class="teal-text">Create</h2>
          <form @submit.prevent="enterChat()">
            <label for="name">Enter chat name</label>
            <input type="text" name="name" v-model="name">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <button class="btn teal">Create Chat</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Create',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.create {
  max-width: 400px;
  margin-top: 100px;
}
.create h2 {
  font-size: 3em;
}
.create button {
  margin: 30px auto;
}
</style>
