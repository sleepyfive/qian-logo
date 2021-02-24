<template>
    <span title="保存图片" @click="exportIMG">
        <svg t="1613751961678" class="download-icon icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6552" width="200" height="200"><path d="M810.666667 554.666667v213.333333c0 23.466667-19.2 42.666667-42.666667 42.666667H256c-23.466667 0-42.666667-19.2-42.666667-42.666667v-213.333333c0-23.466667-19.2-42.666667-42.666666-42.666667s-42.666667 19.2-42.666667 42.666667v256c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333v-256c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666666 42.666667z m-256-14.08l80.213333-80.213334a42.496 42.496 0 1 1 60.16 60.16l-153.173333 153.173334a42.496 42.496 0 0 1-60.16 0L328.533333 520.533333c-8.106667-8.106667-12.373333-18.773333-12.373333-29.866666s4.693333-22.186667 12.373333-29.866667a42.496 42.496 0 0 1 60.16 0L469.333333 540.586667V170.666667c0-23.466667 19.2-42.666667 42.666667-42.666667s42.666667 19.2 42.666667 42.666667v369.92z" p-id="6553" fill="#2C2C2C"></path></svg>
    </span>
</template>

<script lang="ts">
import dom2img from 'dom-to-image';
import { ElMessage } from 'element-plus';

function exportIMG(){

	const el = document.getElementById(`img-fn-wrapper`)!
	el.style.display = `none`;
	dom2img.toPng(document.getElementById(`img-wrapper`)!)
		.then(function (url) {
			const a = document.createElement(`a`);
			a.download = `${Date.now()}-five-xxx.png`;
			a.href = url;
			const event = new MouseEvent(`click`);
			a.dispatchEvent(event);
			ElMessage.success('开始下载');
			el.style.display = ``;
		});

	return {
	};
}

export default {
	setup(){

		return{
			exportIMG,
		}
	}
}
</script>

<style lang="less" scoped>
    .download-icon{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>