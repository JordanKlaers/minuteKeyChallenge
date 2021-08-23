'use strict'

export async function getBikesData({ commit }) {
	try {
		const data = await import('_assets_/data.js')
		commit('UPDATE_DATA_LIST', data.bikes);
	} catch (err) {
		console.log('Unable to get data async', err.message);
	}
}