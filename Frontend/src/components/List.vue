<template>
    <div id="list">
        <div class="list container">
            <h2 class="center teal-text">Chats list</h2>
            <div class="card">
                <div class="collection with-header">
                    <div class="collection-header"><h5>Choose a chat</h5></div>
                    <div class="collection-item" v-for="chat in chats" :key="chat.id">
                        <div>
                            <a href="#!" v-on:click="enterChat(chat)" class="black-text">
                                {{ chat.name }}
                            </a>
                            <!--<a href="#!" class="secondary-content">
                                <i v-on:click="deleteChat(chat)" class="material-icons">clear</i>
                            </a>-->
                            <a href="#!" class="secondary-content">
                                <i v-on:click="enterChat(chat)" class="material-icons">send</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import axios from 'axios'

export default {
    name: 'List',
    components: { // don't forget to declare components we import here

    },
    data () {
        return {
            chats: [],
            user: null
        }
    },
    methods: {
        loadChats() {
            //this.chat = ch.methods.loadChats()
            axios.get('https://us-central1-annon-chat.cloudfunctions.net/chat')
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    this.chats.push({
                        id: response.data[i].id,                        
                        name: response.data[i].name
                    })
                }
            })           
        },
        enterChat(chat) {
            localStorage.setItem('chatid', chat.id)
            localStorage.setItem('chatname',chat.name)
            /*if (this.user) {
                this.$router.push({ name: 'Chat', params: { name: this.user} })
            }*/
            //else {
                this.$router.push({ name: 'Pseudo', params: { name: this.name, id: chat.id } })
            //}
        },

        deleteChat(chat) {
            this.chats = this.chats.filter(currentChat => {
                return currentChat.id != chat.id
            })
            axios.delete('https://us-central1-annon-chat.cloudfunctions.net/chat/'+chat.id)
        }
    },
    mounted () {
        this.loadChats()
        this.user = localStorage.getItem('username')
    }
}
</script>

<style>
.list h2{
    font-size: 2.6em;
    text-align: center;
    margin-bottom: 40px;
}
</style>


