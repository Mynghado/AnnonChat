export default {
    data() {
        return {
            rootURL: 'https://us-central1-annon-chat.cloudfunctions.net/message'
        }
    },
    methods: {
        createMessage: async function() {
            let newMessage = {
                content: "test",
                name: "testname",
                timestamp: "testimestamp"
            }
            await fetch(this.rootURL, {
                method: 'post',
                body: newMessage
            })
            .then(function(response) {
                var newMessageParse = JSON.stringify(newMessage);
                console.log(newMessage)
                //console.log(JSON.parse(newMessageParse))
                return response.json() 
            })
            .then(function(data) {
                console.log("youpitest")
            })
        }    
    }
}