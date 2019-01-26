<template>
  <div id="pseudo">
    <div class="pseudo container">
      <div class="card">
        <div class="card-content center-align">
          <h4 class="teal-text">Create your username</h4>
          <form @submit.prevent="enterChat()">
            <label for="name">Enter your username</label>
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
    name: 'Pseudo',
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
          localStorage.setItem('username', this.name)
          this.$router.push({ name: 'Chat', params: { name: this.name} })
        } else {
          this.feedback = "You must enter a name"
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .pseudo {
    max-width: 400px;
    margin-top: 100px;
  }
  .pseudo h2 {
    font-size: 3em;
  }
  .pseudo button {
    margin: 30px auto;
  }
</style>
