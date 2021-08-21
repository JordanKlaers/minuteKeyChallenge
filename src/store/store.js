import * as actions from './actions';
import { createStore } from "vuex" 

const store = createStore({
    state: {
        /*
            Start with a null state allowing for ui option for
            -no data, has no attempted to fetch data
            -no data, attempted to fetch but no data returned
            -has data
            Additional options can be configured to account for loading
        */

		bikes: null
	},
	mutations: {
		UPDATE_DATA_LIST(state, payload) {
			state.bikes = payload;
		}
	},
	getters: {
		bikes: state => state.bikes
	},
	actions
})

export default store
