# annonchat
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Requests for our Express API : (not detailed yet)

GET chats :
 https://us-central1-annon-chat.cloudfunctions.net/chat

GET a chat :
 https://us-central1-annon-chat.cloudfunctions.net/chat/:id
Require : chat id

GET messages from a chat :
 https://us-central1-annon-chat.cloudfunctions.net/chat/:id/message
Require : chat id

PUT a chat :
 https://us-central1-annon-chat.cloudfunctions.net/chat/:id
Require : chat id
Body : name

POST a chat :
 https://us-central1-annon-chat.cloudfunctions.net/chat
Body : name

POST a message in a chat :
 https://us-central1-annon-chat.cloudfunctions.net/chat/:id/message
Require : chat id
Body : content, name, timestamp

DELETE a chat with his messages :
 https://us-central1-annon-chat.cloudfunctions.net/chat/:id
Require : chat id

Codes :
400 : communication with server
300 : data not found
200 : success

* API Contract
** Chat
*** GET chats
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat]]
   - Method : =GET=
   - Required : 
   - Success Response :
     - Code : =200=
     - Content :
    [
        {
            "id": "580xBsfipGuEYSsJn5m6",
            "name": "ssat"
        },
        ...
    ]
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=

*** GET a chat
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat/:id]]
   - Method : =GET=
   - Required : =id=
   - Success Response :
     - Code : =200=
     - Content :
    [
        {
            "id": "580xBsfipGuEYSsJn5m6",
            "name": "ssat"
        }
    ]
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=
   - Error Response :
     - Code : =300=
     - Content : =Chat not found=
     
*** GET messages from a chat
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat/:id/message]]
   - Method : =GET=
   - Required : =id=
   - Success Response :
     - Code : =200=
     - Content :
    [
        {
            "id": "dtWui71b23I39dCjPLg7",
            "content": "haha",
            "name": "kolmar",
            "timestamp": 212384112115
        },
        {
            "id": "wu3JaIVxGLM5tqkTGlDL",
            "content": "kerbal",
            "name": "l3ar",
            "timestamp": 1548542604005
        },
        ...
    }
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=
   - Error Response :
     - Code : =300=
     - Content : =Chat not found=

*** PUT on a chat
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat/:id]]
   - Method : =PUT=
   - Required : =id=
   - Body :
    {
        "name": ""
    }
   - Success Response :
     - Code : =200=
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=
   - Error Response :
     - Code : =300=
     - Content : =Chat not found=

*** POST a chat
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat/]]
   - Method : =POST=
   - Required :
   - Body :
    {
        "name": ""
    }
   - Success Response :
     - Code : =200=
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=

*** POST a message in a chat
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat/:id/message]]
   - Method : =POST=
   - Required : =id=
   - Body :
    {
        "content": "",
        "name": "",
        "timestamp": ""
    }
   - Success Response :
     - Code : =200=
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=
   - Error Response :
     - Code : =300=
     - Content : =Chat not found=

*** DELETE a chat
   - Return : http code
   - Url :[[https://us-central1-annon-chat.cloudfunctions.net/chat/:id]]
   - Method : =DELETE=
   - Required : =id=
   - Success Response :
     - Code : =200=
             
   - Error Response :
     - Code : =400=
     - Content : =Problem with server communication=
   - Error Response :
     - Code : =300=
     - Content : =Chat not found=
