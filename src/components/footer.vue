<template>
    <ul class="wrapper">
        <li>
            <span>感谢使用</span>
        </li>
        <li>
            <a href="#">github</a>
        </li>
        <!-- <li img><img src="../assets/five.png" alt="five"></li> -->
        <li>
            <a href="#">@sleepyfive</a>
        </li>
    </ul>
</template>

<style lang="less" scoped>
    .wrapper{
        display: flex;
        justify-content: space-around;
        height: 100%;

        li{
            height: 100%;

            a,span{
                color: #f90;
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: center;

            }
        }
    }
</style>

<script>

export default {

}
</script>