import React from 'react';
import '../../App/Root/Root.scss';
import Select from './Select';

export default {
	component: Select,
	title: 'Select',
};

export const normal = () => (
	<div>
		<p>Normal</p>
		<Select />
	</div>
);

export const Disable = () => (
	<div>
		<p>Disable</p>
		<Select disabled />
	</div>
);
