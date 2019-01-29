<template>
    <div id="chat">
        <div class="chat container">
            <h2 class="center teal-text">Chat {{ this.chatname }}</h2>
            <div class="card">
                <div class="card-content">
                    <ul class="messages" v-chat-scroll> <!-- v-chat-scroll used for this scrollbar -->
                        <li v-for="message in messages" :key="message.id">
                            <span class="teal-text">{{ message.name }} :</span>
                            <span class="grey-text text-darken-3">{{ message.content }}</span>
                            <span class="grey-text time">{{ message.timestamp }}</span> 
                        </li>
                    </ul>
                </div>
                <div class="card-action">
                    <NewMessage :name="name" /> <!-- pass username like a property -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
import axios from 'axios'

export default {
    name: 'Chat',
    id: this.id,
    props: ['name', 'id'],
    components: { // don't forgot to declare components we import here
        NewMessage 
    },
    data () {
        return {
            messages: [],
            chatname : null,
            chatid : localStorage.getItem('chatid'),
            user: localStorage.getItem('username')
        }
    },
    created () { // when the component is first created
        /* GET */
        let ref = db.collection('chats').doc(this.chatid).collection('messages').orderBy('timestamp') // sort by date
        /* --- */
    
        // when something changes on the database, firestore take a snapshot
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        content: doc.data().content,
                        name: doc.data().name,
                        timestamp: moment(doc.data().timestamp).format('lll') // see momentjs.com for parameters
                    })
                }
            })
        })
    },
    mounted(){
        this.chatid = localStorage.getItem('chatid')
        this.chatname = localStorage.getItem('chatname')
        console.log(this.chatid, this.chatname, localStorage.getItem('chatid'))
        console.log(this.id)
    }
    /*mounted() {
        axios.get('https://us-central1-annon-chat.cloudfunctions.net/message')
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                this.messages.push({     
                    id: response.data[i].id,                   
                    content: response.data[i].content,
                    name: response.data[i].name,
                    timestamp: moment(response.data[i].timestamp).format('lll')
                })
            }
        })           
    }*/               
}
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;
}
.chat .time {
    display: block;
    font-size: 0.8em;
}
/* to scroll down*/
.messages {
    max-height: 300px;
    overflow: auto; 
}
.messages::-webkit-scrollbar {
    width: 3px;    
}
.messages::-webkit-scrollbar-track {
    background: #DDD;
}
.messages::-webkit-scrollbar-thumb {
    background: #AAA;
}
</style>


