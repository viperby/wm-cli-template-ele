<template>
	<el-container class="login-bg">
		<el-main style="padding-top:150px">
			<div style="height:100%;width:100%;position:absolute;text-align:center"
				v-loading="isLoading"
				element-loading-text="正在登陆..."
				element-loading-spinner="el-icon-loading"
				element-loading-background="rgba(0, 0, 0, 0.8)">
				<div class="login-form">
					<div style="width:400px;margin:0 auto">
						<img :src="require('../../src/assets/images/login/logo.png')" style="width:200px">
						<el-divider></el-divider>
						<div style="position:relative;">
							<el-input @keyup.enter.native="loginEnter" :placeholder="$t('default.BASIC.ACCOUNT')" size="large" v-model="loginInfo.key" suffix-icon="el-icon-user" style="margin-bottom:30px;"></el-input>
							<el-input @keyup.enter.native="loginEnter" :placeholder="$t('default.BASIC.PASSWORD')" size="large" v-model="loginInfo.pass" show-password style="margin-bottom:30px"></el-input>
							<el-button @click="loginEnter" round type="success" style="width:100%">{{ $t("default.BASIC.LOGIN") }}</el-button>
						</div>
					</div>
				</div>
			</div>
			
			<el-dropdown @command="handleCommand" style="position: fixed;bottom:50px;right: 50px;">
				<i class="el-icon-setting" style="font-size: 28px;"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
					<el-dropdown-item command="ja-JP">日本語</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-main>
	</el-container>
</template>

<script>
	import md5 from "js-md5"
	import {mapState,mapMutations} from 'vuex'
	export default {
		data(){
			return {
				isLoading:false,
				loginInfo: {
					key: "",
					pass: "",
				},
			}
		},
		methods:{
			...mapMutations(["update"]),
			loginEnter(){
				if(!this.loginInfo.key){
					this.$tips.warning(this.$t("default.TIPS.CLIENT.ACCOUNT_IS_NULL"));
					return
				}
				if(!this.loginInfo.pass){
					this.$tips.warning(this.$t("default.TIPS.CLIENT.PASSWORD_IS_NULL"));
					return
				}
				this.login();
			},
			async login(){
				this.$loading();
				let res = await this.$api.sys.login({ key: this.loginInfo.key, pass: md5(this.loginInfo.pass)})
				this.$loading().close();
				if(!res.IsPositive){
					this.$tips.warning(res.Error.Message);
					return
				}
				let data = res.Data;
				this.update({uInfo:data,token:data.Token});
				this.$router.push("/main")
			},
			handleCommand(e){
				this.$i18n.locale = e;
			}
		}
	}
</script>

<style>
	.login-bg{
		background:url('../../src/assets/images/login/bg.png') no-repeat;background-size:100% 100%;height:100%;width:100%;text-align:center;filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	}
</style>
