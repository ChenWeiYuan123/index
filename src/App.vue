<template>
<div :class="$style.root">
	<div :class="$style.container" ref="container" >
		<div :class="$style.padding"></div>
	    <u-popover trigger="click" v-if="control">
	    	<template scope="props" slot="popover" >
			    <div v-show="props.show">
			    	<div :class="$style.arrow" u-arrow></div>
					<div :class="$style.popover">popover</div>
				</div>
			</template>
			<u-button slot="reference" :class="$style.reference">reference</u-button>
		</u-popover>
		<div :class="$style.padding"></div>
	</div>
	<div :class="$style.container" >
		<div :class="$style.padding"></div>
	    <u-popover trigger="click" v-if="control">
		    <div slot="popover" >
		    	<div :class="$style.arrow" u-arrow></div>
				<div :class="$style.popover">popover</div>
			</div>
			<u-button slot="reference" :class="$style.reference">reference</u-button>
		</u-popover>
		
		<div :class="$style.padding"></div>
	</div>
	<div :class="$style.container" >
		<div :class="$style.padding"></div>
	    <u-popover trigger="click"  refkey="popover1" v-if="control">
			    <div slot="popover" >
			    	<div :class="$style.arrow" u-arrow></div>
					<div :class="$style.popover">popover</div>
				</div>
		</u-popover>
		<u-popover trigger="click"  refkey="popover1" v-if="control">
			    <div slot="popover" >
			    	<div :class="$style.arrow" u-arrow></div>
					<div :class="$style.popover">popover</div>
				</div>
		</u-popover>
		<u-button ref=popover1 :class="$style.reference">reference</u-button>
		<div :class="$style.padding"></div>
	</div>
	<div :class="$style.container" ref="container">
		<div :class="$style.padding">
	    <u-popover-tooltips trigger="click" text="aaaaaaaa" placement="bottom-start" theme="dark" :modifiers="modifiers" :escapeWithReference="false" >
				<u-button slot="reference">reference</u-button>
		</u-popover-tooltips>
		</div>
	</div>
	<div :class="$style.container" ref="container">
		<div :class="$style.padding">
	    <u-popover-slot trigger="click" text="aaaaaaaa" placement="bottom-start" :modifiers="modifiers" >
	    		<div slot="popover">
			    	<div :class="$style.arrow" u-arrow></div>
					<div :class="$style.popover">popover</div>
				</div>
				<u-button slot="reference">reference</u-button>
		</u-popover-slot>
		</div>
	</div>
	<u-button @click="control=!control">control</u-button>
</div>
</template>

<script>
import Popover from './common/u-popover.vue';
import PopoverSlot from './common/u-popover-slot.vue';
import PopoverTooltips from './common/u-popover-tooltips.vue';
import Button from 'u-button.vue'
export default {
	data(){
		return {
			showferen:true,
			control:true,
			escapeWithReference:false,
			offset:"10px,10px",
			modifiers:{
				
			},
			boundariesElement:this.$refs.container
		}
	},
	mounted(){
		this.boundariesElement = this.$refs.container
	},
	directives:{
		popoverref(el,binding,vnode){
			console.log('popoverref',[el,binding,vnode])
			vnode.context.$refs[binding.arg].$refs.reference = el
		}
	},
    components: {
        [PopoverSlot.name]: PopoverSlot,
        [PopoverTooltips.name]: PopoverTooltips,
        [Button.options.name]: Button,
        [Popover.name]:Popover,
    },
};
</script>

<style module>
$height: 15px;
.root {
    height: calc($height - 5px);
}
.container{
	height: 200px;
	width: 500px;
	overflow: scroll;
	border:1px solid;
}
.padding{
	/*margin-left: 700px;
	margin-top: 200px;
	margin-bottom: 200px;*/
}
.popover{
	padding: 20px;
	margin-top: 5px;
	background: #ccc;
}
.reference{
	padding: 5px;
	margin:100px;
	border:none;
	background-color: #aaa;
}
.arrow{
	position: absolute;
	width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: none;
	border-bottom: 5px solid #ccc;
}
</style>
