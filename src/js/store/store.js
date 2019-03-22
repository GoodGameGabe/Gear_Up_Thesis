const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			bundleList: [],

			users: [],

			articles: []
		},
		actions: {}
	};
};

export default getState;
