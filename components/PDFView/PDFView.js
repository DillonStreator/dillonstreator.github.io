import React from "react";

import styles from './styles.module.scss';

export default ({ url, height = 500, width = 600 }) => (
        <iframe
            className={styles.conatiner}
            style={{ height, width }}
            src={`http://docs.google.com/gview?url=${url}&embedded=true`}
            frameborder="0"
        />
);
