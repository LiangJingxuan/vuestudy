<template>
    <ul>
        <li><router-link to="/index" active-class="active">Home</router-link></li>
        <li><router-link to="/about" active-class="active">About</router-link></li>
    </ul>
</template>

<style scoped lang="scss">
    ul li{
        list-style: none;
        float: left;
        margin: 0 10px;
        .active{
            color: red;
        }
    }
</style>
