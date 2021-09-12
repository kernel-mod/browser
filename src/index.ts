// @ts-ignore
kernel.ipc.invoke("KERNEL_GET_RENDERER_PACKAGES").then(async (ogre) => {
	for (const layer of ogre) {
		for (const [id, pack] of Object.entries(layer)) {
			const packModule = await import("import://" + pack);
			const packClass = packModule.default ? packModule.default : packModule;
			const packInstance = new packClass();
			packInstance.start();
		}
	}
});
