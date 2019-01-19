export default {
    data() {
        return {
            rootURL: 'https://us-central1-annon-chat.cloudfunctions.net/chat'
        }
    },
    methods: {
        loadChats: async function() {
            console.log('eho')
            const response = await fetch(this.rootURL)
            console.log(response)
            const data = await response.json()
            
            return data
        }    
    }
}