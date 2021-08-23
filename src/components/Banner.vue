<template>
    <div id="banner">
		<h1>Motorcycles</h1>
    </div>
</template>

<script>
export default {
	name: "Banner"
};
</script>

<style lang="scss">
#banner {
	border-radius: 0 0 5px 5px;
	height: 100px;
	border-bottom: 2px solid #e6e6e6;
	box-shadow: 3px 3px 3px #e6e6e6;
	background-color: #5f8ee4;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	h1 {
		margin: auto 60px;
		font-size: 40px;
		font-weight: 300;
		font-family: 'open-sans';
	}
}
</style>
