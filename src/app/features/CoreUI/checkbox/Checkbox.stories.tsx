import React from 'react';
import '../../App/Root/Root.scss';
import Checkbox from './Checkbox';

export default {
	component: Checkbox,
	title: 'Checkbox',
};

export const normal = () => (
	<div>
		<Checkbox label='Checkbox' />
	</div>
);

export const active = () => (
	<div>
		<Checkbox isChecked label='Checkbox' />
	</div>
);

export const disabled = () => (
	<div>
		<Checkbox disabled label='Checkbox' />
	</div>
);
