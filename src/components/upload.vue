<template>
    <div class="upload-wrapper">
        <div v-show="!showImg" class="input-wrapper" >
            <div ref="input" class="input-box">
                <svg t="1613711906334" class="plus-icon icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2827" width="200" height="200"><path d="M819.2 477.87008H546.12992V204.8h-68.25984v273.07008H204.8v68.27008h273.07008V819.2h68.25984V546.14016H819.2z" p-id="2828" fill="#707070"></path></svg>
            </div>
        </div>
        <div v-show="showImg" class="content-wrapper">
            <div class="img-wrapper" id="img-wrapper">
                <img src="#" alt="" ref="img" class="img-show">
             <div class="img-background"></div>
             <span class="img-words">
                 <span class="img-words-left" contenteditable="true" ref="left">欠</span>
                <span class="img-words-mid" contenteditable="true">&nbsp;122&nbsp;</span>
                <span class="img-words-right" contenteditable="true">亿</span>
             </span>
            <span class="img-fn-wrapper" id="img-fn-wrapper">
                <div class="img-fn">
                    <span class="remove-wrapper" title="删除图片">
                        <svg ref="remove" t="1613716053267" class="remove-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2135" width="200" height="200"><path d="M192 1024 832 1024 896 320 128 320zM640 128 640 0 384 0l0 128L64 128l0 192 64-64 768 0 64 64L960 128 640 128zM576 128l-128 0L448 64l128 0L576 128z" p-id="2136" fill="#2c2c2c"></path></svg>
                    </span>
                    <Export class="export"/>
                </div>
                
             </span>
            </div>

        </div>
        
    </div>
</template>

<script lang="ts">
import { ref,onMounted, Ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import Export from './export.vue';

function upload(){
	const input = ref(null);
	const img = ref(null);
	const showImg = ref(false);

	onMounted(()=>{
		(input.value as any as HTMLInputElement).addEventListener(`click`,function(){
			const realInput = document.createElement(`input`);
			realInput.type = `file`;
			realInput.addEventListener(`change`,function(){
				if(this.files&&this.files[0]){
                    //销毁原来的内存数据
                    const oldURL = (img.value as any as HTMLImageElement).src;
                    if(oldURL!=='#'&&oldURL!==''){
                        URL.revokeObjectURL(oldURL);
                    }
					(img.value as any as HTMLImageElement).src = URL.createObjectURL(this.files![0]);
					showImg.value = true;
				}else{
					ElMessage.error(`选择失败！`);
				}
			});
			const e = new MouseEvent(`click`);
			realInput.dispatchEvent(e);
		})
	});
	return {
		input,
		img,
		showImg
	};
}

function removeImg(showImg:Ref<boolean>){
	const remove = ref(null);

	onMounted(()=>{
		(remove.value as any as HTMLElement).addEventListener(`click`,function(){
			ElMessageBox.confirm(`确认删除吗？`,`提示`,{
				showCancelButton:true,
				cancelButtonText:`取消`,
				confirmButtonText: `确定`,
			}).then(()=>{
				showImg.value = false;
			}).catch(()=>{});
		})
	});
	return remove;
}

//想用来解决，把所有字都删除以后，整个文字框就不太容易找到的情况，但是现在没用
function resolveTextLost(){
	const leftText = ref(`欠`);
	const midText = ref(`122`);
	const rightText = ref(`亿`);

	const left = ref(null);

	onMounted(()=>{
		(left.value as any as HTMLSpanElement).addEventListener(`input`,function(e){
			if(!this.textContent){

			}
		})
	})

	return{
		leftText,
		midText,
		rightText,
		left
	};
}

export default {
	name:`upload`,
	components:{
		Export
	},
	setup(){
		const {input,img,showImg} = upload();
		const remove = removeImg(showImg);
		const {
			leftText,
			midText,
			rightText,
			left
		} = resolveTextLost();

		return {
			input,
			img,
			showImg,
			remove,
			leftText,
			midText,
			rightText,
			left
		}
	}
}
</script>

<style lang="less" scoped>

    .upload-wrapper{
        width: 20vw;
        height: 20vw;
        position: relative;
        left: 50%;
        margin-left: -10vw;
        top: 50%;
        margin-top: -10vw;
    }

    .input-box{
        background: white;;

        .plus-icon{
            display: block;
            position: relative;
            width: 50%;
            height: 50%;
            left: 50%;
            top: 50%;
            margin-left: -25%;
            margin-top: -25%;
        }
    }

    .input-wrapper,
    .content-wrapper{
        position: relative;
        display: flex;
        justify-content: space-around;

        .input-box,
        .img-wrapper{
            width: 20vw;
            height: 20vw;
            // border-radius: 1.5rem;
            overflow: hidden;
            position: relative;

            &:hover{
                .img-fn-wrapper{
                    display: block;
                }
            }

            .img-show{
                width: 100%;
                height: 100%;
            }

            .img-background{
                background: linear-gradient(to top ,#E03309,#FFA157);
                height: 5vw;
                width: 100%;
                position: absolute;
                bottom: 0;
                z-index: 1;
            }

            .img-words{
                display: block;
                width: 100%;
                position: absolute;
                bottom: 0;
                z-index: 2;
                line-height: 5vw;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color: white;
                font-size: 2.5vw;
                font-style: italic;
                font-weight: 800;

                .img-words-mid{
                    font-size: 3.5vw;
                    font-style: bold;
                }
            }

            .img-fn-wrapper{
                display: none;
                width: 100%;
                height: 4vw;
                position: absolute;
                z-index: 2;
                top: 0;
                bottom: 0;
                margin: auto;
                color: white;
                background: rgba(255, 255, 255, 0.5);
                .img-fn{
                    display: flex;
                    justify-content: space-between;
                    width: 6vw;
                    height: 2.5vw;
                    position: relative;
                    left: 50%;
                    top: 50%;
                    margin-left: -3vw;
                    margin-top: -1.25vw;

                        .remove-wrapper{
                            display: block;
                            height: 2.5vw;
                            width: 2.5vw;
                
                        .remove-icon{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }

                        &:hover{
                            width: 3vw;
                            height: 3vw;
                            
                        }
                    }

                .export{
                     display: block;
                    height: 2.5vw;
                    width: 2.5vw;

                        &:hover{
                            width: 3vw;
                            height: 3vw;
                           
                        }
                    }
                }
                
            }
        }
    }

</style>