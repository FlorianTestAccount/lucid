import _ from 'lodash';
import React from 'react';
import Icon from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { createClass } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-UnlinkedIcon');

const UnlinkedIcon = createClass({
	displayName: 'UnlinkedIcon',

	statics: {
		peek: {
			description: `
				For all those times you just need to break away.
			`,
			categories: ['visual design', 'icons'],
			extend: 'Icon',
			madeFrom: ['Icon'],
		},
	},

	propTypes: {
		...Icon.propTypes,
	},

	render() {
		const { className, ...passThroughs } = this.props;

		return (
			<Icon
				{...passThroughs}
				{..._.pick(passThroughs, _.keys(Icon.propTypes))}
				className={cx('&', className)}
			>
				<path d='M5.5 3.5l-1-2m8 9l2 1m-4 1l1 2m-8-9l-2-1' />
				<path d='M10.232 7.768a2.993 2.993 0 0 0 2.979-.737l1.414-1.414a3.009 3.009 0 0 0 0-4.243 3.009 3.009 0 0 0-4.243 0L8.968 2.789c-.804.804-1.04 1.956-.737 2.979M5.769 8.231c-1.023-.303-2.176-.067-2.98.737l-1.414 1.414a3.009 3.009 0 0 0 0 4.243 3.009 3.009 0 0 0 4.243 0l1.414-1.414c.804-.804 1.04-1.956.737-2.979' />
			</Icon>
		);
	},
});

export default UnlinkedIcon;
