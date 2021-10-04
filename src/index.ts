// TODO: TYYYYYPPPPPPIIIINNNNNNGGGGGGSSSSSSSSS

// @ts-ignore
// const ogre = kernel.packages.getRendererPackages();

const packageInstances = {};

// TODO: Load efficiently with Promise.all.
// for (const layer of ogre) {
// 	for (const [id, pack] of Object.entries(layer)) {
// 		const packModule = await import("import://" + pack);
// 		const packClass = packModule.default ? packModule.default : packModule;
// 		const packInstance = new packClass();
// 		packageInstances[id] = packInstance;
// 		packInstance.start?.();
// 	}
// }

// // @ts-ignore
// kernel.packages.onPackageStart((data) => {
// 	console.log(data);
// });
// // @ts-ignore
// kernel.packages.onPackageStop((data) => {
// 	console.log(data);
// });

// @ts-ignore
kernel.sendFinished();

export {};
