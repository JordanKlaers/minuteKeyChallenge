<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "App",
	components: {
	},
	created() {
		//Dispatch the action to get data
		this.getBikesData();
	},
	methods: {
		...mapActions(["getBikesData"]),
	},
};
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #19191a;
}
</style>
