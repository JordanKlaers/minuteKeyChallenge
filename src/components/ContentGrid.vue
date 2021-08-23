<template>
	<div class="content-grid">
		<card
			v-for="(data, index) in cardsData"
			:key="`card-${index}`"
			:data="data"
			:labels="labels">
		</card>
	</div>
</template>

<script>
import Card from '_components_/Card.vue';
export default {
	name: "ContentGrid",
	props: {
		cardsData: {
			type: Array,
			required: true,
			validator() {
				//TODO: implement prop validation
				return true
			}	
		}
	},
	data() {
		return {
			labels: [
				'manufacturer',
				'model',
				'year',
				'color',
				'displacement',
				'power',
				'description'
			]
		}
	},
	components: {
		Card
	},
	methods: {
		setGridItemPlacement(index) {
			return `
				-ms-grid-colum: ${index - index % 2};
				-ms-grid-colum-span: 1;
				-ms-grid-row: ${index - index % 2};
				-ms-grid-row-span: 1;
				grid-row: ${index - index % 2} / span 1
				grid-column: ${index - index % 2} / span 1;
			`;
		}
	}
};
</script>

<style lang="scss">
.content-grid {
	display: -ms-grid;
    display: grid;
	-ms-grid-column: 50% 50%;
	grid-template-columns: 50% 50%;
	row-gap: 15px;
	column-gap: 15px;
	margin: 30px 60px;
}
</style>