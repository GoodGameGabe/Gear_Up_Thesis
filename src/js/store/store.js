const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			bundleList: [],

			usersList: [],

			articlesList: []
		},
		actions: {}
	};
};

export default getState;
