<template>
    <div>
        <banner></banner>
		<content-grid :cardsData="oneBike"></content-grid>
    </div>
</template>

<script>
import Banner from '_components_/Banner.vue';
import ContentGrid from '_components_/ContentGrid.vue';
import { mapGetters } from 'vuex';
export default {
	name: "FocusedPage",
	components: {
		Banner,
		ContentGrid
	},
	computed: {
		...mapGetters(['bikes']),
		oneBike() {
			return [this.bikes && this.bikes[0] || {}];
		}
	}
};
</script>

<style>
</style>
