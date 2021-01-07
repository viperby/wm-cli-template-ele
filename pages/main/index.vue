<template>
	<el-container>
		<el-aside style="width:auto;padding-top:60px">
			<el-menu router class="el-menu-vertical" :collapse="isCollapse">
				<el-menu-item>
					<i class="el-icon-user"></i>
					<span slot="title">{{ $t("default.NAV.PATIENTS") }}</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>
				<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" style="background-image: linear-gradient(to right, #fff 45%, #f5fffc);">
					<el-submenu index="2" style="float: right;">
						<template slot="title">
							<el-avatar size="small" src="http://img2.imgtn.bdimg.com/it/u=2421351453,1852348871&fm=26&gp=0.jpg"></el-avatar>
							{{ uInfo.UserName }}
						</template>
						<el-menu-item index="2-1">{{ $t("default.INFOS.INFO") }}</el-menu-item>
						<el-menu-item index="2-3">{{ $t("default.BASIC.LOGIN_OUT") }}</el-menu-item>
					</el-submenu>
					<el-menu-item index="3" style="float: right;">
						<i class="el-icon-bell"></i>
					</el-menu-item>
					<el-submenu index="1" style="float: right;">
						<template slot="title">{{ $t("default.EVENTS.SWITCH_LANGUAGES")}}</template>
						<el-menu-item @click="switchLanguaes('zh-CN')" index="1-1">简体中文</el-menu-item>
						<el-menu-item index="1-2">English</el-menu-item>
						<el-menu-item @click="switchLanguaes('ja-JP')" index="1-3">日本語</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-header>
			<el-main>
				<breadcrumb style="margin-bottom:15px"></breadcrumb>
					<router-view></router-view>
			</el-main>
		</el-container>
		<!-- video -->
		<live></live>
	</el-container>
</template>

<script>
	import breadcrumb from '@/src/components/breadcrumb.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			breadcrumb,
		},
		computed: {
			...mapState(["uInfo"]),
		},
		data() {
			return {
				isCollapse: false,
				message: null,
				tokens:{},
			}
		},
		methods: {			
			...mapMutations(["update"]),
			switchLanguaes(e) {
				this.$i18n.locale = e;
			},
			goHome() {
				this.$router.push("/main")
			},
			handleSelect(e, keypath) {
				if (e == 1) {
					
				}
				if(e == "2-3"){
					this.loginOut();
				}
			},
			async loginOut(){
				this.update({uInfo:null,token:null})
				this.$router.push({path:"/login"})
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
	.el-menu-vertical:not(.el-menu--collapse) {
		width: 200px;
		min-height: 800px;
	}
</style>
