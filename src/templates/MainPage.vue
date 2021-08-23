<template>
    <div>
        <banner></banner>
		<div
			:class="`display-toggle ${activeView}`"
			@click="toggleActiveView">
			Table  Grid
		</div>
		<content-table
			:tableData="tableData"
			v-if="activeView == 'table'">
		</content-table>
		<content-grid
			:cardsData="bikes"
			v-if="activeView == 'grid' && !!bikes && bikes.length">
		</content-grid>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
import Banner from '_components_/Banner.vue';
export default {
	name: "MainPage",
	components: {
		Banner,
		ContentTable: defineAsyncComponent(() => import('_components_/ContentTable.vue')),
		ContentGrid: defineAsyncComponent(() => import('_components_/ContentGrid.vue')),
	},
	data() {
		return {
			activeView: 'grid'
		}
	},
	computed: {
		...mapGetters(['bikes']),
		tableData() {
			return {
				tableHeaders: ['Model', 'Manufacturer', 'Year', 'Color', 'Displacement', 'Power'],
				//if the keys in the data did not match the header values, a seperate array could be used to map the correct data to each column
				dataList: this.bikes || []
			}
		}
	},
	methods: {
		toggleActiveView() {
			this.activeView = this.activeView == 'grid' ? 'table' : 'grid';
		}
	}
};
</script>

<style lang="scss">
.display-toggle {
	display: inline-block;
	border-radius: 5px;
	margin-left: 60px;
	margin-bottom: 30px;
	height: 20px;
	border: 2px solid #5f8ee4;
	box-shadow: 3px 3px 3px #e6e6e6;
	padding: 5px;
	position: relative;
	font-weight: 400;
	font-family: 'merriweather';
	font-size: 16px;
	color: #19191a;
	&:hover {
		cursor: pointer;
	}
	&.grid::after {
		content: '';
		z-index: -1;
		position: absolute;
		width: 45%;
		right: 0;
		top: 0;
		height: calc(100% + 0px);
		border-radius: 0 3 px 3px 0;
		background-color: #e4655f;
	}
	&.table::before {
		content: '';
		z-index: -1;
		position: absolute;
		width: 55%;
		left: 0;
		top: 0;
		height: calc(100% + 0px);
		border-radius: 3px 0 0 3px;
		background-color: #e4655f;
	}
}
</style>
