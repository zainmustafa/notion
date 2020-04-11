import React, { FC, forwardRef, Ref, ReactNode } from 'react';
import styles, { dropdown } from './Dropdown.module.scss';
import classNames from 'classnames';

import Checkbox from '../checkbox/Checkbox';
import Select from '../Select/Select';
import Label from '../Label/Label';

interface Props {
	/**
	 * React ref passtrough to input node
	 */
	ref?: Ref<HTMLInputElement>;

	/**
	 * Types of dropdown
	 */
	type: 'multi-check' | 'normal';

	/**
	 * Dropdown styles class
	 */
	dropdown?: string;

	/**
	 * Dropdown dropdownContent styles class
	 */
	dropdownContent?: string;

	/**
	 * Dropdown ListItem styles class
	 */
	listItem?: string;

	/**
	 * Read only mode. Default: false
	 */
	disabled?: boolean;

	/**
	 * Items to display in dropdown
	 */
	list: Array<{ title: String } | { children?: ReactNode }>;
}

const Dropdown: FC<Props> = forwardRef((props, ref) => {
	const { type, disabled, dropdownContent, list, listItem, ...otherProps } = props;

	return (
		<div ref={ref} className={classNames(styles.dropdown, dropdown)} {...otherProps}>
			<Select disabled={disabled} />
			{type === "multi-check" && !disabled && (
				<div className={classNames(styles.dropdownContent, dropdownContent)}>
					{list?.length > 0 && list.map((item, index) => {
						return (
							<li key={JSON.stringify(index)} className={styles.listItem}>
								<Checkbox {...item} />
							</li>
						)
					})}
				</div>
			)}
			{type === "normal" && !disabled && (
				<div className={styles.dropdownContent}>
					{list?.length > 0 && list.map((item, index) => {
						return (
							<li key={JSON.stringify(index)} className={classNames(styles.listItem, listItem)}>
								<Label {...item} />
							</li>
						);
					})}
				</div>
			)}
		</div>
	);
});

export default Dropdown;
