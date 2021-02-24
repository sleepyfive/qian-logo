<template>
    <div class="logo">
        <p class="item-wrapper" 
        :style="{
            width: style.width.num+style.width.unit,
            height: style.height.num+style.height.unit,
            marginTop: -style.height.num/2+style.height.unit
            }">
            <!-- 这里遇到一个问题，就是inline-block不能直接用margin-top top来垂直居中 -->
            <span class="first"
            :style="{
            width: style.width.num/2+style.width.unit,
            height: style.height.num+style.height.unit,
            lineHeight: style.height.num+style.height.unit,
            fontSize: style.width.num/8+style.width.unit,
            borderRadius: style.width.num/16+style.width.unit
            }">Qian</span>

            <span class="last"
            :style="{
                width: style.width.num/2+style.width.unit,
                height: style.height.num+style.height.unit,
                lineHeight: style.height.num+style.height.unit,
                fontSize: style.width.num/8+style.width.unit,
                borderRadius: style.width.num/16+style.width.unit
            }">Logo</span>
        </p>
        
    </div>
</template>

<script lang="ts">
import {getStyle} from '../util/index';

export default {
    name:'g-title',
    props:{
        width:{
            type:String,
            required:false
        },
        height:{
            type:String,
            required:false
        }
    },
    setup(props){
        const style = getStyle(props);
        return {
            style
        };
    }
}
</script>

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
            overflow: hidden;
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