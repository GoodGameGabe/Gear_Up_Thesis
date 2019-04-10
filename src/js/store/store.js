const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			userList: [],

			cartList: [],

			bundleList: [],

			itemList: [],

			reviewList: [],

			articleList: [],

			specList: []
		},
		actions: {
			user: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/users",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log("Something went wrong");
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ contactList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.userList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/user/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.userList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/user/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().user.getAll());
				},

				add: (
					a_username,
					a_password,
					some_bundles,
					some_articles,
					some_specs,
					some_cart
				) => {
					var data = {
						username: a_username,
						password: a_password,
						bundles: some_bundles,
						articles: some_articles,
						specs: some_specs,
						cart: some_cart
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/user/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().getUsers());
				},

				update: (
					index,
					a_username,
					a_password,
					some_bundles,
					some_articles,
					some_specs,
					some_cart
				) => {
					const store = getStore();

					var data = {
						username: a_username,
						password: a_password,
						bundles: some_bundles,
						articles: some_articles,
						specs: some_specs,
						cart: some_cart
					};

					var id = store.userList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/user/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().user.getAll());
				}
			},

			cart: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/carts",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log(
									"Something went wrong getting all carts"
								);
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ cartList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.cartList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/cart/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.cartList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/cart/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().cart.getAll());
				},

				add: (a_username, some_bundles, some_items) => {
					var data = {
						username: a_username,
						bundles: some_bundles,
						items: some_items
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/cart/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().user.getAll());
				},

				update: (index, a_username, some_bundles, some_items) => {
					const store = getStore();

					var data = {
						username: a_username,
						bundles: some_bundles,
						items: some_items
					};

					var id = store.cartList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/cart/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().cart.getAll());
				}
			},

			bundle: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/users",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log("Something went wrong");
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ contactList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.bundleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/bundle/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.bundleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/bundle/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().bundle.getAll());
				},

				add: (
					a_title,
					a_body,
					a_vendor,
					a_author,
					some_reviews,
					some_items
				) => {
					var data = {
						title: a_title,
						body: a_body,
						vendor: a_vendor,
						author: a_author,
						reviews: some_reviews,
						items: some_items
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/bundle/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().bundle.getAll());
				},

				update: (
					index,
					a_title,
					a_body,
					a_vendor,
					a_author,
					some_reviews,
					some_items
				) => {
					const store = getStore();

					var data = {
						title: a_title,
						body: a_body,
						vendor: a_vendor,
						author: a_author,
						reviews: some_reviews,
						items: some_items
					};

					var id = store.bundleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/bundle/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().bundle.getAll());
				}
			},

			item: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/items",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log(
									"Something went wrong getting all items"
								);
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ itemList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.itemList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/item/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.itemList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/item/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().item.getAll());
				},

				add: (a_name, a_brand, a_price, a_vendor, a_category) => {
					var data = {
						name: a_name,
						brand: a_brand,
						vendor: a_vendor,
						category: a_category
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/item/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().item.getAll());
				},

				update: (
					index,
					a_name,
					a_brand,
					a_price,
					a_vendor,
					a_category
				) => {
					const store = getStore();

					var data = {
						name: a_name,
						brand: a_brand,
						vendor: a_vendor,
						category: a_category
					};

					var id = store.itemList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/item/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().item.getAll());
				}
			},

			review: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/reviews",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log(
									"Something went wrong getting all reviews"
								);
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ reviewList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.reviewList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/review/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.reviewList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/review/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().review.getAll());
				},

				add: (a_bundle, a_username, a_body, a_rating, a_category) => {
					var data = {
						bundle: a_bundle,
						username: a_username,
						body: a_body,
						rating: a_rating,
						category: a_category
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/review/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().review.getAll());
				},

				update: (
					index,
					a_bundle,
					a_username,
					a_body,
					a_rating,
					a_category
				) => {
					const store = getStore();

					var data = {
						bundle: a_bundle,
						username: a_username,
						body: a_body,
						rating: a_rating,
						category: a_category
					};

					var id = store.reviewList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/review/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().review.getAll());
				}
			},

			article: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/articles",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log(
									"Something went wrong getting all articles"
								);
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ articleList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.articleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/article/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.articleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/article/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().article.getAll());
				},

				add: (a_title, a_picture, some_specs, some_bundles) => {
					var data = {
						title: a_title,
						picture: a_picture,
						specs: some_specs,
						bundles: some_bundles
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/article/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().article.getAll());
				},

				update: (
					index,
					a_title,
					a_picture,
					some_specs,
					some_bundles
				) => {
					const store = getStore();

					var data = {
						title: a_title,
						picture: a_picture,
						specs: some_specs,
						bundles: some_bundles
					};

					var id = store.articleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/article/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().article.getAll());
				}
			},

			spec: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/specs",
						{
							method: "GET" // or 'PUT'
						}
					) // or 'PUT'
						.then(response => {
							if (response.ok) {
								console.log(response);
								return response.json();
							} else {
								console.log(
									"Something went wrong getting all specs"
								);
							}
						})
						.then(response2 => {
							console.log(response2);
							setStore({ specList: response2 });
						});
				},

				getOne: index => {
					const store = getStore();

					var data = store.specList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/spec/" +
							data,
						{
							method: "GET"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error));
				},

				delete: index => {
					const store = getStore();

					var data = store.specList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/spec/" +
							data,
						{
							method: "DELETE"
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json();
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().spec.getAll());
				},

				add: (a_title, a_category, a_body, a_picture) => {
					var data = {
						title: a_title,
						picture: a_picture,
						category: a_category,
						body: a_body
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/spec/add",
						{
							method: "POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().spec.getAll());
				},

				update: (index, a_title, a_category, a_body, a_picture) => {
					const store = getStore();

					var data = {
						title: a_title,
						picture: a_picture,
						category: a_category,
						body: a_body
					};

					var id = store.specList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/spec/" +
							id,
						{
							method: "PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type": "application/json"
							}
						}
					)
						.then(res => res.json())
						.then(response => {
							console.log("Success:", response.data);
							return response.json;
						})
						.catch(error => console.error("Error:", error))
						.finally(() => getActions().spec.getAll());
				}
			}
		}
	};
};

export default getState;
