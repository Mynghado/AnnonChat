# annonchat
> Requests for our Express API : (not detailed yet)
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
