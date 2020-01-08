<template>
    <nav>
        <ul>
            <router-link to="/index" active-class="active" tag="li">
                <i></i>
                <span>电影</span>
            </router-link>
            <router-link to="/about" active-class="active" tag="li">
                <i></i>
                <span>影院</span>
            </router-link>
            <router-link to="/about" active-class="active" tag="li">
                <i></i>
                <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    .active{
        color: red;
    }
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: white;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
            }
        }
    }
</style>
