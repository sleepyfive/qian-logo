<template>
    <section class="introduce-wrapper" @click="setClick" ref="wrapper"
		:style="{
			width: style.width.num+style.width.unit,
			height: style.height.num+style.height.unit,
			marginLeft: -style.width.num/2+style.width.unit,
			marginTop: -style.height.num/2+style.height.unit
	}">
        <header class="title">
            操作介绍
        </header>
        <article v-if="!click" class="continue">
            点击开始...
        </article>
        <article v-else class="content-wrapper">
            <p class="content" v-html="curData"></p>
        </article>
    </section>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import key from '../assets/key.mp3';
import { getStyle } from '../util/index';

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
        `点击右侧(下方)图标即可上传图片,`+
        `电脑用户：将鼠标移动到图片上会出现删除和下载图标,`+
		`手机用户：点击图片出现删除下载图标，点击其他位置隐藏,`+
        `<em>欠</em>、<em>122</em>、<em>亿</em>三处均可重新编辑,`+
        `为了实际的显示效果，建议不要添加过多内容,`+
		`<em>如果下载失败，推荐使用火狐（firefox）浏览器、谷歌（Chrome）浏览器重试<em>`;
	const interval = 80;
	const curData = ref(``);
	const len = allData.length;
	const audio = document.createElement(`audio`);
	audio.src = key;
	let cnt = 0;
	const wrapper = ref(null);
	const showData = function(n:number){
		if(n>=len) return;
		cnt+=2;
		if(cnt===10){
			audio.play();
			cnt = 0;
		}
		curData.value += allData[n]+(allData[n+1]||``);
		//如果有滚动条，把它拖到最下面
		(wrapper.value as any as HTMLParagraphElement).scrollBy({
			top:100000,
			behavior:'smooth'
		});

		setTimeout(showData.bind(null,n+2),interval);
	}
	return{
		curData,
		showData,
		wrapper
	}
}

export default {
	
	name: 'g-itdc',
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

		const style = getStyle(props,{
			width:'20vw',
			height:'20vw'
		});

		const {curData,showData,wrapper} = show();
		const {click,setClick} = continueOp(showData.bind(null,0));
		return{
			curData,
			click,
			setClick,
			wrapper,
			style
		}
	}
}
</script>

<style lang="less">
	//加了scoped，js动态添加进去的em就不生效了

    .introduce-wrapper{
        background: #f90;
        height: 20vw;
		width: 20vw;
		position: relative;
		left: 50%;
		margin-left: -10vw;
		top: 50%;
		margin-top: -10vw;
        padding: 1vw;
        box-sizing: border-box;
        color:black;
        font-size: 10px;
		overflow: auto;

        .title{
            font-size: 40px;
            margin-bottom: 1vw;
        }

		.continue{
			font-size: 20px;
		}

        .content-wrapper{
            .content{
                text-align: left;
                line-height: calc(100% + 10px);
                font-size: 15px;
				
				em{
    				font-style: italic;
    				font-weight: 1000;
				}
            }
        }
        
    }

</style>