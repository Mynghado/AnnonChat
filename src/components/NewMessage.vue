<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import Message from '@/models/Message'

export default {
    name: 'NewMessage', // component name
    props: ['name'], // props we recieve
    data () {
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage () {
            if (this.newMessage) {
                console.log(this.newMessage, this.name, Date.now())
                /* POST */
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                /* --- */

                this.newMessage = null
                this.feedback = null
            } else {
                this.feedback = "You must enter a message in order to send one" 
            }
        },
        removeMessages () {

        }
    }
}
</script>

