<template>
    <div class="logo">
        <p class="item-wrapper">
            <!-- 这里遇到一个问题，就是inline-block不能直接用margin-top top来垂直居中 -->
            <span class="first">Qian</span>
            <span class="last">Logo</span>
        </p>
        
    </div>
</template>

<style scoped lang="less">

    .logo{
        height: 100%;
        overflow: hidden;
        .item-wrapper{
              width: 8vw;
                height: 2vw;
            position: relative;
            top: 50%;
            margin-top: -1vw;
            span{
                display: inline-block;
                border-radius: 0.5vw;
                width: 4vw;
            height: 2vw;
           
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
    }
    
</style>