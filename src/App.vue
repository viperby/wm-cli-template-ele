<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data: () => ({
			
		}),
		created() {
		}
	};
</script>
<style>
	html,body,#app{
		width: 100%;
		height: 100%;
		padding:0;
		margin:0;
		overflow: hidden;
	}

	::-webkit-scrollbar {
		width: 4px
	} 
	::-webkit-scrollbar-thumb {
		background: transparent;
		border-radius: 4px
	} 
	::-webkit-scrollbar-thumb {
		background: hsla(0,0%,53%,.4)
	}
	.sidebar:hover::-webkit-scrollbar-track {
		background: hsla(0,0%,53%,.1)
	}
	.el-dialog__close{
		font-size:35px;
	}
</style>
