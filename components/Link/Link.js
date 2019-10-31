import React from "react";
import Link from "next/link";

import styles from './styles.module.scss';

export default ({ icon, raw, children, ...rest }) => (
	raw ? 
	<a className={styles.link} {...rest}>
		<div>
			{icon && <img src={`/static/${icon}`} alt={icon} />}
			<div>{children}</div>
		</div>
	</a>
	:
	<Link {...rest}>
		<a className={styles.link}>
			<div>
				{icon && <img src={`/static/${icon}`} alt={icon} />}
				{children}
			</div>
		</a>
	</Link>
);
