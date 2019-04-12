const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			userList: [],

			bundleList: [],

			itemList: [
				{
					id:1,
					name:"Canon EOS 5D Mark IV Full Frame Digital SLR Camera Body",
					brand:"Canon",
					price: 2999.00,
					category:"Camera",
					link:"https://www.amazon.com/Canon-Mark-Frame-Digital-Camera/dp/B01KURGS9E/ref=sr_1_1_sspa?keywords=canon+5d&qid=1554915517&s=gateway&sr=8-1-spons&psc=1",
					vendor:"Amazon"
				},
				
				
				{
					id: 2,
					name:"Canon EOS C700 Cinema Camera",
					brand:"Canon",
					price: 28000.00,
					category:"Camera",
					link:"https://www.bhphotovideo.com/c/product/1278096-REG/canon_1454c002_eos_c700_cinema_camera.html/?ap=y&gclid=CjwKCAjwqLblBRBYEiwAV3pCJjwHFP11a7QVQ0ceGTcHxYqXf2aw_IIBN7uPlRlV2oxksQq188EOxhoC0QUQAvD_BwE&lsft=BI%3A514&smp=Y",
					vendor:"B&H Photo"
				},
				
				
				{
					id: 3,
					name:"Canon EF 50mm f/1.4 USM Standard & Medium Telephoto Lens for Canon SLR Cameras - Fixed",
					brand:"Canon",
					price: 329.99,
					category:"Lense",
					link:"https://www.amazon.com/Canon-Standard-Medium-Telephoto-Cameras/dp/B00009XVCZ/ref=sr_1_5?keywords=canon+lense&qid=1554916141&s=gateway&sr=8-5",
					vendor:"Amazon"
				},
				
				
				{
					id: 4,
					name:"Canon EF 100-400mm f/4.5-5.6L IS II USM Lens",
					brand:"Canon",
					price: 1799.99,
					category:"Lense",
					link:"https://www.bhphotovideo.com/c/product/1092632-REG/canon_9524b002_ef_100_400mm_f_4_5_5_6l_is.html",
					vendor:"B&H Photo"
				},
				
				
				{
					id: 5,
					name:"nikon D500 DX-Format Digital SLR (Body Only)",
					brand:"nIKON",
					price: 1796.95,
					category:"Camera",
					link:"https://www.amazon.com/Nikon-D500-DX-Format-Digital-Body/dp/B01A7Q0J3Y/",
					vendor:"Amazon"
				},
				
				{
					id: 6,
					name:"Nikon D5 DSLR 20.8 MP Point & Shoot Digital Camera, Dual XQD Slots - Black",
					brand:"Nikon",
					price: 6496.95,
					category:"Camera",
					link:"https://www.amazon.com/Nikon-Point-Shoot-Digital-Camera/dp/B01A7Q0DVM/",
					vendor:"Amazon"
				},
				
				{
					id: 7,
					name:"Nikon AF-S DX NIKKOR 35mm f/1.8G Lens with Auto Focus for Nikon DSLR Cameras",
					brand:"Nikon",
					price: 196.95,
					category:"Lens",
					link:"https://www.amazon.com/Nikon-AF-S-NIKKOR-Focus-Cameras/dp/B001S2PPT0/",
					vendor:"Amazon"
				},
				
				{
					id: 8,
					name:"Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR Lens",
					brand:"Nikon",
					price: 2796.95,
					category:"Lens",
					link:"https://www.bhphotovideo.com/c/product/1292140-REG/nikon_af_s_nikkor_70_200mm_f_2_8e.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 9,
					name:"Tiffen 77mm Variable Neutral Density Filter",
					brand:"TIFFEN",
					price: 129.95,
					category:"Lens Filter",
					link:"https://www.bhphotovideo.com/c/product/813278-REG/Tiffen_77VND_77mm_Variable_Neutral_Density.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 10,
					name:"AmazonBasics Circular Polarizer Lens - 77 mm",
					brand:"Amazon Basics",
					price: 7.66,
					category:"Lens Filter",
					link:"https://www.amazon.com/AmazonBasics-Circular-Polarizer-Lens-58/dp/B00XNMYJKO/",
					vendor:"Amazon"
				},
				
				{
					id: 11,
					name:"neewer Pro 100% Metal Max Height 10ft/305cm Adjustable Reflector Stand with 4ft/120cm Holding Arm and 2 Pieces Grip Head for Photography Studio Video Reflector, Monolight and Other Equipment",
					brand:"Neewer",
					price: 139.94,
					category:"Stands",
					link:"https://www.amazon.com/Neewer-Adjustable-Reflector-Photography-Monolight/dp/B01GUQUBEW/",
					vendor:"Amazon"
				},
				
				{
					id: 12,
					name:"Manfrotto Xpro Aluminum Video Monopod with 500 Series Video Head, Black (MVMXPRO500US)",
					brand:"Manfrotto",
					price: 239.00,
					category:"Tripod",
					link:"https://www.amazon.com/Manfrotto-Aluminum-Video-Monopod-MVMXPRO500US/dp/B01MDR8K49/",
					vendor:"Amazon"
				},
				
				{
					id: 13,
					name:"Rode RODELink Filmmaker Kit Digital Camera-Mount Wireless Omni Lavalier Microphone System (2.4 GHz)",
					brand:"Rode",
					price: 299.99,
					category:"Microphone",
					link:"https://www.bhphotovideo.com/c/product/1152351-REG/rode_videomic_pro_r_videomic_pro_with_lyre.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 14,
					name:"Rode RODELink Filmmaker Kit Digital Camera-Mount Wireless Omni Lavalier Microphone System (2.4 GHz)",
					brand:"Rode",
					price: 399.99,
					category:"Microphone",
					link:"https://www.bhphotovideo.com/c/product/1115091-REG/rode_rodlnk_fm_rodelink_wireless_filmmaker_kit.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 15,
					name:"X-Rite ColorChecker Passport Video",
					brand:"X-Rite",
					price:139.99,
					category:"Accesories",
					link:"https://www.bhphotovideo.com/c/product/1191324-REG/x_rite_msccppvc_color_checker_passport_video.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 16,
					name:"Zoom H4n Pro 4-Channel Handy Recorder",
					brand:"Zoom",
					price:219.99,
					category:"Audio Mixer",
					link:"https://www.bhphotovideo.com/c/product/1253811-REG/zoom_h4npro_4_channel_handy_recorder.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 17,
					name:"Sennheiser MKE 600 Shotgun Microphone",
					brand:"Sennheiser",
					price: 249.49,
					category:"Audio Microphone",
					link:"https://www.bhphotovideo.com/c/product/878340-REG/Sennheiser_MKE_600_Shotgun.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 18,
					name:"ARRI 1000W T1 Location Fresnel with Stand Mount (120-240 VAC)",
					brand:"ARRI",
					price: 731.00,
					category:Lighting,
					link:"https://www.bhphotovideo.com/c/product/575690-REG/Arri_551100_T1_Location_Fresnel.html?sts=pi",
					vendor:"B&H Photo"
				},
				
				{
					id: 19,
					name:"Genaray LED-7100T 312 LED Variable-Color On-Camera Light",
					brand:"Genaray",
					price: 189.99,
					category:"Lighting",
					link:"https://www.amazon.com/Genaray-LED-7100T-Variable-Color-Camera-Light/dp/B00X8SHET6/ref=sr_1_9?keywords=on+camera+light&qid=1554928538&s=gateway&sr=8-9",
					vendor:"Amazon"
				},
				
				{
					id: 20,
					name:"Cavision Next-Generation Clock Slate PLUS",
					brand:"Cavision",
					price: 311.12,
					category:"Accessories",
					link:"https://www.bhphotovideo.com/c/product/1084622-REG/cavision_sslc2818c_plus_next_gen_clock_slte_pls.html/?ap=y&gclid=CjwKCAjwqLblBRBYEiwAV3pCJvfztlyGARdOi1Kwjwnl1NeNFfpju-Pypu-vcFrrC4uDwygxychU5BoCVfEQAvD_BwE&lsft=BI%3A514&smp=Y",
					vendor:"B&H Photo"
				},
				
				{
					id: 21,
					name:"Dot Line Pro Color Clapboard",
					brand:"Dot Line",
					price: 32.99,
					category:"Accessories",
					link:"https://www.bhphotovideo.com/c/product/1343700-REG/dot_line_dl_vprocb5_pro_color_clapboard.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 22,
					name:"Elvid 7 4K On-Camera Monitor with Battery, Articulating Arm, and HDMI Cable Kit",
					brand:"Elvid",
					price: 232.65,
					category:"Monitor",
					link:"https://www.bhphotovideo.com/c/product/1398766-REG/elvid_7_4k_on_camera_monitor.html",
					vendor:"B&H Photo"
				},
				
				{
					id: 23,
					name:"Atomos SUMO19M 19 HDR/High-Brightness Monitor",
					brand:"Atomos",
					price: 1195.00,
					category:"Monitor",
					link:"https://www.bhphotovideo.com/c/product/1361553-REG/atomos_atomsumo19m_19_sumo_monitor_unit.html",
					vendor:"B&H Photo"
				},
				
				{
					id:24,
					name:"DJI Mavic 2 Pro with Fly More Combo Kit",
					brand:"DJI",
					price: 1878.00,
					category:"Drone",
					link:"https://www.bhphotovideo.com/c/product/1432999-REG/dji_mavic_2_pro_with.html",
					vendor:"B&H Photo"
				}
			],

			articleList: [
				],

			specList: [],

			session: []
		},
		
		actions: {
			user: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/users",
						{
							method:"GET" // or 'PUT'
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
							method:"GET"
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
							method:"DELETE"
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

				add: (a_username, a_password, some_cart) => {

					var data = {
						username: a_username,
						password: a_password,
						cart: some_cart
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/user/add",
						{
							method:"POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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

				update: (index, a_username, a_password, some_cart) => {

					const store = getStore();

					var data = {
						username: a_username,
						password: a_password,
						cart: some_cart
					};

					var id = store.userList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/user/" +
							id,
						{
							method:"PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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

			bundle: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/users",
						{
							method:"GET" // or 'PUT'
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
							method:"GET"
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
							method:"DELETE"
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

				add: (a_title, a_body, a_vendor, some_items) => {

					var data = {
						title: a_title,
						body: a_body,
						vendor: a_vendor,
						items: some_items
					};

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/bundle/add",
						{
							method:"POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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

				update: (index, a_title, a_body, a_vendor, some_items) => {

					const store = getStore();

					var data = {
						title: a_title,
						body: a_body,
						vendor: a_vendor,
						items: some_items
					};

					var id = store.bundleList[index].id;

					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/bundle/" +
							id,
						{
							method:"PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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
							method:"GET" // or 'PUT'
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
							method:"GET"
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
							method:"DELETE"
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
							method:"POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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
							method:"PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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

			article: {
				getAll: () => {
					fetch(
						"https://contact-list-api-goodgamegabe.c9users.io/articles",
						{
							method:"GET" // or 'PUT'
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
							method:"GET"
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
							method:"DELETE"
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
							method:"POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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

				update: (index, a_title, a_picture, some_specs, some_bundles) => {
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
							method:"PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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
							method:"GET" // or 'PUT'
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
							method:"GET"
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
							method:"DELETE"
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
							method:"POST", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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
							method:"PUT", // or 'PUT'
							body: JSON.stringify(data), // data can be `string` or {object}!
							headers: {
								"Content-Type:"application/json"
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
