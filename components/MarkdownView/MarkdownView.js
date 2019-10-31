import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { Loader } from "../";

import styles from './styles.module.scss';

export default ({ mdUrl }) => {
	const [md, setMd] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(mdUrl)
			.then(res => res.text())
			.then(res => {
				setMd(res);
				setIsLoading(false);
			});
	}, [mdUrl]);

	return (
		<div classname={styles.container}>
			{isLoading ? <Loader /> : <ReactMarkdown source={md} />}
		</div>
	);
};
