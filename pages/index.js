import React from 'react';
import Head from 'next/head';
import { TerminalType, Link } from '../components';

import styles from './index.module.scss';

const captions = [ 'Positive', 'Passionate', 'Dedicated', 'Simplicity > Complexity', 'Secure, Succinct Development', 'Test Driven Development', 'Iterative Development' ];

const Index = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title key="title">Dillon Streator</title>
            </Head>
            <div className={styles.profileImage}><img alt={'Picture of me'} src="/static/profile.jpg" /></div>
            <div className={styles.name}><h1 data-text="Dillon Streator">Dillon Streator</h1></div>
            <div className={styles.about}><h2 data-text="Full Stack Developer">Full Stack Developer</h2></div>
            <TerminalType before=">" commands={captions} />
            <hr className={styles.divider} />
            <Link href="/static/resume.pdf" raw target="blank" rel="noopener noreferrer">CV</Link>

            <div className={styles.socialLinks}>
                <Link icon="linkedin.svg" href="https://www.linkedin.com/in/dillon-streator-75b01b83/" raw target="blank" rel="noopener noreferrer"></Link>
                <Link icon="github.svg" href="https://github.com/DillonStreator" raw target="blank" rel="noopener noreferrer"></Link>
                <Link icon="stack-overflow" href="https://stackoverflow.com/users/8765619/cranky-coder" icon="stack-overflow.svg" raw target="blank" rel="noopener noreferrer"></Link>
                <Link icon="npm.svg" href="https://www.npmjs.com/~dillonstreator" raw target="blank" rel="noopener noreferrer"></Link>
            </div>
        </div>
    );
};

export default Index;