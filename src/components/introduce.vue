<template>
    <div class="introduce-wrapper" @click="setClick">
        <p class="title">
            操作介绍
        </p>
        <p v-if="!click" class="continue">
            点击开始...
        </p>
        <p v-else class="content-wrapper">
            <span class="content" v-html="curData"></span>
        </p>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import key from '../assets/key.mp3';

function continueOp(op:()=>void){
	const click = ref(false);
	const setClick = function(){
		if(!click.value){
			click.value = true;
			op();    
		}
        
	}
	return{
		click,
		setClick
	}
}

function show(){
	const allData = 
        `点击右边即可上传图片,`+
        `将鼠标移动到图片上面就会出现删除和下载图标,`+
        `<span>"欠"</span>、<span>"122"</span>、<span>"亿"</span>三个字均可重新编辑,`+
        `为了实际的显示效果，建议不要添加过多内容`;
	const interval = 80;
	const curData = ref(``);
	const len = allData.length;
	let cur = 0;
	const audio = document.createElement(`audio`);
	audio.src = key;
	let cnt = 0;
	const showData = function(n:number){
		if(n>=len) return;
		cnt+=2;
		if(cnt===10){
			audio.play();
			cnt = 0;
		}
		curData.value += allData[n]+(allData[n+1]||``);
		setTimeout(showData.bind(null,n+2),interval);
	}
	return{
		curData,
		showData
	}
}

export default {
	setup(){
		const {curData,showData} = show();
		const {click,setClick} = continueOp(showData.bind(null,0));
		return{
			curData,
			click,
			setClick
		}
	}
}
</script>

<style lang="less">
    .introduce-wrapper{
        background: #f90;
        height: 20vw;
		width: 20vw;
		position: relative;
		left: 50%;
		margin-left: -10vw;
		top: 50%;
		margin-top: -10vw;
		// border-radius: 10%;
        padding: 1vw;
        box-sizing: border-box;
        color:black;
        font-size: 1vw;
		overflow: auto;

        .title{
            font-size: 2vw;
            margin-bottom: 1vw;
        }

        .content-wrapper{
            .content{
                width: 80%;
                text-align: left;
                line-height: calc(100% + 10px);
                
                span{
                    font-style: italic;
                    font-weight: 1000;
                }
            }
        }
        
    }

</style>