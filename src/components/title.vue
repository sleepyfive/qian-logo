<template>
    <p class="logo">
        <span class="first">Qian</span>
        <span class="last">Logo</span>
    </p>
        
</template>

<style scoped lang="less">

    .logo{
        width: 8vw;
        height: 100%;
        overflow: hidden;
        span{
            display: inline-block;
            border-radius: 0.5vw;
            width: 4vw;
            height: 2vw;
            position: relative;
            top: 50%;
            margin-top: -1vw;
            font-size: 1vw;
            line-height: 2vw;
            font-weight: 700;
        }

        .last{
            background: black;
            color: white;
        }
        .first{
            background: #f90;
            color: black;
        }
    }
    
</style>