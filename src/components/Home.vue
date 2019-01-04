<template>
    <div id="home">
        <div class="home container">
            <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
                <div class="card-content">
                    <h2 class="indigo-text">{{ smoothie.title }}</h2>
                    <ul class="ingredients">
                        <li v-for="(ing, index) in smoothie.ingredients" :key="index">
                            <span class="chip">{{ ing }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Home',
    props: ['name'],
    components: { // don't forget to declare components we import here

    },
    data () {
        return {
            smoothies: [
                { title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['bananas', 'coffee', 'milk'], id: '1' },
                { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: '2' }
            ]
        }
    },
    created () { // when the component is first created

    }
}
</script>

<style>
.home{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
}
.home h2{
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
}
.home .ingredients{
    margin: 30px auto;
}
.home .ingredients li{
    display: inline-block;
}
</style>


