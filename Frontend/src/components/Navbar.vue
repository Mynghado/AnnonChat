 <template>
    <div class="navbar">
        <nav class="byzantium">
            <div class="nav-wrapper">
                <a href="/" class="brand-logo center">AnnonChat</a>
                <!-- permanent showing -->
                <a href="" class="sidenav-trigger show-on-large" data-target="mobile-menu">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="/list"><i class="large material-icons left">list</i>Chat list</a></li>
                    <li><a href="/create"><i class="material-icons left">add</i>Create a chat</a></li>
                    <!-- <li><router-link :to="{ name: 'Signup' }"><i class="large material-icons left">person_add</i></router-link></li>   v-if to add -->
                    <li><router-link :to="{ name: 'Welcome' }"><i class="large material-icons left">exit_to_app</i></router-link></li> <!-- v-if to add -->
                   <!-- <li><router-link :to="{ name: 'Login' }"><i class="large material-icons left">power_settings_new</i></router-link></li> -->
                </ul>
                <ul class="sidenav grey lighten-2" id="mobile-menu">
                    <li>
                        <div class="card-image">
                            <div class="background">
                                <img src="./../images/fond2.jpg" alt="fond">
                            </div>
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">account_circle</i>Connected as {{user}}</a></li>
                    <!-- <li><router-link :to="{ name: 'Signup' }"><i class="large material-icons left">person_add</i>Signup</router-link></li>  v-if to add -->
                    <li><router-link :to="{ name: 'Welcome' }"><i class="large material-icons left">exit_to_app</i>Home</router-link></li> <!-- v-if to add -->
                    <!-- <li><router-link :to="{ name: 'Login' }"><i class="large material-icons left">power_settings_new</i>Logout</router-link></li>  v-if to add -->
                    <li><a href="/list"><i class="material-icons">list</i>Chats list</a></li>
                    <li><a href="/create"><i class="material-icons">add</i>Create a chat</a></li>
                    <li><div class="divider byzantium"></div></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    name: 'Navbar',
    data () {
        return {
            user: null
        }
    },
    methods: {
        logout() {

        }
    },
    mounted () {
        $(document).ready(function(){
            $('.sidenav').sidenav();
        });
        this.user = localStorage.getItem('username')
    }
}
</script>

<style>
.byzantium {
    background-color: #702963;
}

.divider{
    position:absolute;
    left:50%;
    top:10%;
    bottom:10%;
    border-left:1px solid white;
}
</style>
