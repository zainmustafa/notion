import React from 'react';
import '../../App/Root/Root.scss';

import Dropdown from './DropDown';
import Label from '../Label/Label';

export default {
	component: Dropdown,
	title: 'Dropdown',
};

const optionsList = [ {title: "Option"}, {title: "Option"} ]

export const normal = () => (
	<div>
		<Label title={'Normal'} />
		<Dropdown
			type="multi-check"
			list={[]}
		/>
	</div>
);
export const ActiveMulti = () => (
	<div>
		<Label title={'Active (Multi Select)'} />
		<Dropdown
			type="multi-check"
			list={optionsList}
		/>
	</div>
);
export const ActiveNormal = () => (
	<div>
		<Label title={'Active (Normal Select)'} />
		<Dropdown
			type="normal"
			list={optionsList}
		/>
	</div>
);
export const disabled = () => (
	<div>
		<Label title={'Disabled'} />
		<Dropdown
			type="normal"
			disabled={true}
			list={optionsList}
		/>
	</div>
);