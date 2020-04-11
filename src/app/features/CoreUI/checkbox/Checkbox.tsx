import React, { FC } from 'react';
import style from './Checkbox.module.scss';
import Label from '../Label/Label';

interface Props {
	/**
	 * Register callback for change event
	 */
	onChange?: () => void;

	/**
	 * Read only mode. Default: false
	 */
	disabled?: boolean;

	/**
	 * Set default value of checkbox.
	 */
	isChecked?: boolean;

	/**
   * Label to be displayed alongside with Checkbox
   */
	label?: string;
}

const Checkbox: FC<Props> = ((props) => {
	const { label, disabled, onChange, isChecked, ...otherProps } = props;
	return (
		<Label title={label || ''} disabled={disabled} position='right' className={style.container} >
			<input
				className={style.checkbox}
				onChange={onChange}
				checked={isChecked}
				type="checkbox"
				disabled={disabled}
				{...otherProps}
			/>
			<span className={style.checkmark}></span>
		</Label>
	);
});

export default Checkbox;
