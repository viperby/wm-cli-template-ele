<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item v-for="(item,index) in list" :key="index" :to="item">
			{{ $t("default.NAV."+item.meta.title) }}
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default {
		name: "breadcrumb",
		watch:{
			$route(){
				this.setLimit();
			}
		},
		props: {
			skip:{
				type:Number,
			},
		},
		data(){
			return {
				list:[]	
			}
		},
		methods:{
			setLimit:function(){
				//if(!this.limit && this.limit != 0) this.list = this.$route.matched;
				var list = [];
				for(var i = 0;i < this.$route.matched.length;i++){
					if(i <= this.skip)
						continue;
					list.push(this.$route.matched[i]);
				}
				this.list = list;
				console.log(list,this.$route)
			}
		},
		mounted(){
			this.setLimit();
		},
		
	}
</script>

<style>
</style>
