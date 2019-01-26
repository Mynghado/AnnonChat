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
import axios from 'axios' 


export default {
    name: 'NewMessage', // component name
    props: ['name'], // props we recieve
    data () {
        return {
            newMessage: null,
            feedback: null,
            chatid:localStorage.getItem('chatid')
        }
    },
    methods: {
        addMessage () {
            if (this.newMessage) {
                console.log(this.newMessage, this.name, Date.now())
                console.log(this.chatid)
                /* POST */
                axios.post('https://us-central1-annon-chat.cloudfunctions.net/message/'+this.chatid, {
                     content: this.newMessage,
                     name: this.name,
                     timestamp: Date.now()
                })
                // db.collection('messages').add({
                //     content: this.newMessage,
                //     name: this.name,
                //     timestamp: Date.now()
                // }).catch(err => {
                //     console.log(err)
                // })
                /* --- */
                //Message.methods.createMessage()

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

