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
                </ul>
                <ul class="sidenav grey lighten-2" id="mobile-menu">
                    <li>
                        <div class="card-image">
                            <div class="background">
                                <img src="./../images/fond2.jpg" alt="fond">
                            </div>
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">account_circle</i>Connected as []</a></li>
                    <li><a href="/list"><i class="material-icons">list</i>Chat list</a></li>
                    <li><a href="/create"><i class="material-icons">add</i>Create a chat</a></li>
                    <li><div class="divider byzantium"></div></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {

        }
    },
    methods: {
        /*enterList() {
            this.$router.push({ name: 'Home' })
        }*/
    },
    mounted () {
        $(document).ready(function(){
            $('.sidenav').sidenav();
        });
    }
}
</script>

<style>
.byzantium {
    background-color: #702963;
}
</style>
