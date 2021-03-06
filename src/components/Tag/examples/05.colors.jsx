import React from 'react';
import createClass from 'create-react-class';
import { Tag } from '../../../index';

export default createClass({
	render() {
		return (
			<div>
				<Tag>
					<Tag kind={'info'}>notitia</Tag>
					<Tag kind={'danger'}>periculum</Tag>
					<Tag kind={'default'}>deficio</Tag>
				</Tag>
				<Tag>
					<Tag isRemovable kind={'info'}>
						notitia
					</Tag>
					<Tag isRemovable kind={'danger'}>
						periculum
					</Tag>
					<Tag isRemovable kind={'default'}>
						deficio
					</Tag>
				</Tag>
			</div>
		);
	},
});
