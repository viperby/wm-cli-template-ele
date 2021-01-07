module.exports= {
	model:"local",
	serves:{
		local:{
			main:{
				https:false,
				area:"",
				upload:"",
			},
		},

	},
	getCurrentServe(){
		return this.serves[this.model];
	},
	getCurrentUploadAddr(){
		let area = this.getCurrentServeAddr("main")
		return area + this.getCurrentServe()["main"].upload;
	},
	getCurrentServeAddr(node){
		let serve = this.getCurrentServe()[node];
		return serve.https?"https://"+serve.area:"http://"+serve.area;
	},
}