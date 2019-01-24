<template>
    <div id="list">
        <div class="list container">
            <h2 class="center teal-text">Chat list</h2>
            <div class="card">
                <div class="collection with-header">
                    <div class="collection-header"><h4>Names</h4></div>
                    <a href="#!" class="collection-item"  v-for="chat in chats" :key="chat.id"><div class="black-text">{{ chat.name }}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
//import ch from '../models/Chat'
import axios from 'axios'

export default {
    name: 'List',
    components: { // don't forget to declare components we import here

    },
    data () {
        return {
            chats: []
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
        }
    },
    mounted () {
        this.loadChats()
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


