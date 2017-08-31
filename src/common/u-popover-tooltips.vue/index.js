import popover from '../u-popover.vue'
import Vue from 'vue';

export default {
	name:"u-popover-tooltips",
	props:{
		text:String,
		theme:{
			type:String,
			default:"dark"
		},
	},
	mixins:[popover],
	created(){
		
	},
	mounted(){
		console.log('u-popover-tooltips',this)
		// this.create();
		
	}

}