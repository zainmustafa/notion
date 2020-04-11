import React, { FC, forwardRef, Ref } from 'react';
import styles from './Select.module.scss';

interface Props {
	className?: string;
	ref?: Ref<HTMLInputElement>;
	dropbtn?: string;
	dropdown?: string;
	dropdownContent?: string;
	container?: string;
	selectBox?: string;
	optionsContainer?: string;
	selected?: string;
	active?: string;
	option?: string;
	radio?: string;
	name?: string;
	disabled?: boolean;
}

const Select: FC<Props> = forwardRef((props, ref) => {
	const { className } = props;


	return (
		<div>
			<div className={styles.selectBox}>
				<div className={styles.optionsContainer}>
					<div className={styles.option}>
						<input
							type="radio"
							className={styles.radio}
							id="automobiles"
							name="category"
						/>
						<label>Automobiles</label>
					</div>

					<div className={styles.option}>
						<input type="radio" className="radio" id="film" name="category" />
						<label>Film & Animation</label>
					</div>

					<div className={styles.option}>
						<input
							type="radio"
							className="radio"
							id="science"
							name="category"
						/>
						<label>Science & Technology</label>
					</div>

					<div className={styles.option}>
						<input type="radio" className="radio" id="art" name="category" />
						<label>Art</label>
					</div>

					<div className={styles.option}>
						<input type="radio" className="radio" id="music" name="category" />
						<label>Music</label>
					</div>

					<div className={styles.option}>
						<input type="radio" className="radio" id="travel" name="category" />
						<label>Travel & Events</label>
					</div>

					<div className={styles.option}>
						<input type="radio" className="radio" id="sports" name="category" />
						<label>Sports</label>
					</div>

					<div className={styles.option}>
						<input type="radio" className="radio" id="news" name="category" />
						<label>News & Politics</label>
					</div>

					<div className={styles.option}>
						<input
							type="radio"
							className="radio"
							id="tutorials"
							name="category"
						/>
						<label>Tutorials</label>
					</div>
				</div>

				<div className={styles.selected}>Label</div>
			</div>
		</div>
	);
});

export default Select;
