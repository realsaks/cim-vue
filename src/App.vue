<template>

<div id="app">
    <!--<img src="./assets/logo.png"> -->
    <Header />
    <div class="container-fluid">
      <router-view/>
    </div>
    <Footer />
</div>

</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components: {
        Header,
        Footer
    },
    name: "App"
};

</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Kanit");
body {
    font-family: "Kanit", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #fefefe;
}

</style>
