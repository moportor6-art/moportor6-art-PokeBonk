export const appConfig = {
	test: false,
};

export const isSaveExportDisabled = () => appConfig.test === true;
