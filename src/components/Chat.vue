<template>

    <div id="chat">
        <div class="chat container">
            <h2 class="center teal-text">Chat {{ this.name }}</h2>
            <div class="card">
                <div class="card-content">
                    <ul class="messages" v-chat-scroll> <!-- v-chat-scroll used for this scrollbar -->
                        <li v-for="message in messages" :key="message.id">
                            <span class="teal-text">{{ message.name }}</span>
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
    props: ['name'],
    components: { // don't forgot to declare components we import here
        NewMessage 
    },
    data () {
        return {
            messages: []
        }
    },
    created () { // when the component is first created
        /* GET */
        let ref = db.collection('messages').orderBy('timestamp') // sort by date
        /* --- */

        // when something changes on the database, firestore take a snapshot
        ref.onSnapshot(snapshot => {
            snapshot.docChanges()
            (change => {
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
    mounted() {
        axios.get('https://us-central1-annon-chat.cloudfunctions.net/message')
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                
                id: response.data[i].id,
                this.messages.push({                        
                        content: response.data[i].content,
                        name: response.data[i].name,
                        timestamp: moment(response.data[i].timestamp).format('lll')
                    })
            }

        })           
    }               
    
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


