import { createPlugin } from '@bluebase/core';

import { Markdown } from './Markdown';
import { VERSION } from './version';

export * from './Markdown';

export default createPlugin({
	key: 'plugin-markdown',
	name: 'Markdown Plugin',
	description: 'Markdown Component for BlueBase Apps',
	version: VERSION,

	components: {
		Markdown,
	},
});
