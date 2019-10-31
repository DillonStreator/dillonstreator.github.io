import React, { useState, useEffect, useRef } from 'react';

import styles from './styles.module.scss';

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const tick = () => savedCallback.current();
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

export default ({
	commands,
	typeSpeed = 50,
	startPauseDuration = 200,
	endPauseDuration = 2000,
	cursorBlinkSpeed = 350,
	before,
}) => {
	const [showCursor, setShowCursor] = useState(true);
	const [commandIdx, setCommandIdx] = useState(0);
	const [commandLength, setCommandLength] = useState(0);
	const [command, setCommand] = useState('');
	const [erasing, setErasing] = useState(false);

	const [speed, setSpeed] = useState(typeSpeed);
	const [hasPaused, setHasPaused] = useState(false);

	useInterval(() => {
		setShowCursor(currCursor => !currCursor);
	}, cursorBlinkSpeed);

	useInterval(() => {
		if (commandLength === commands[commandIdx].length && !hasPaused) {
			setSpeed(endPauseDuration);
			setHasPaused(true);
			return;
		} else if (commandLength === 0 && !hasPaused) {
			setSpeed(startPauseDuration);
			setHasPaused(true);
			return;
		}

		setSpeed(typeSpeed);
		setHasPaused(false);
		if (!erasing && commandLength < commands[commandIdx].length) {
			setCommandLength(l => l + 1);
			setCommand(c => c + commands[commandIdx].charAt(commandLength));
			if (commandLength === commands[commandIdx].length - 1)
				setErasing(true);
		} else {
			setCommand(c => c.substring(0, commandLength - 1));
			setCommandLength(l => l - 1);

			if (commandLength === 0) {
				setErasing(false);
				const isLastCommand = commandIdx === commands.length - 1;
				setCommandIdx(isLastCommand ? 0 : commandIdx + 1);
			}
		}
	}, speed);

	return (
		<span className={styles.terminalContainer}>
			{before && <span className={styles.before}>{before}</span>}
			<span className={styles.content}>{command}</span>
			<span
				className={`${styles.cursor} ${
					showCursor ? styles.show : styles.hide
				}`}
			>
				|
			</span>
		</span>
	);
};
