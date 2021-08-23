<template>
	<div class="content-card">
		<div class='image-container'>
			<img :src="imgSrc" alt="Motorcycle"/>
		</div>
		<ul>
			<li
				v-for="(label, index) in labels"
				:key="`card-data-${label}-${index}`">
				<span class="label">{{label}}</span>
				<span class="value">{{data[label]}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "card",
	props: {
		data: {
			type: Object,
			required: true,
			validator() {
				//TODO: implement prop validation
				return true;
			}	
		},
		labels: {
			type: Array,
			required: true,
			validator() {
				//TODO: implement prop validation
				return true;
			}
		},
		description: {
			type: String
		}
	},
	computed: {
		imgSrc: function() {
			if (this.data && this.data.model) {
				try {
					let image = this.data.model.toLowerCase().replace(/\s/g, '');
					return require('_assets_/images/' + image + '.png');
				} catch (err) {
					console.log(err.message);
				}
			}
			return '';
		}
	}
};
</script>

<style lang="scss">
.content-card {
	display: flex;
	flex-direction: column;
	border: 2px solid #19191a;
	border-radius: 5px;
	.image-container {
		overflow: hidden;
		img {
			display: block;
			width: 100%;
		}
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 10px;
		li {
			margin-bottom: 10px;
			font-weight: 400;
			font-family: 'merriweather';
			font-size: 16px;
			color: #19191a;
			.label {
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
}
</style>