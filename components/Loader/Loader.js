import React from "react";

import styles from "./styles.module.scss";

export default () => (
	<div className={styles.skCubeGrid}>
		{new Array(9).fill(null).map((_, idx) => (
			<div className={`${styles.skCube} ${styles[`skCube${idx+1}`]}`}></div>
		))}
	</div>
);
