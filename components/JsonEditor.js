import { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import styles from '../styles/Index.module.css';

export default React.memo(function JsonEditor({ defaultResume, onChange }) {

    const onResumeUpdate = useCallback(e => {
        let resume = e.target.value;
        try {
            resume = JSON.parse(resume);
            onChange(resume)
        } catch (e) {
            //do nothing for invalid json
        }
    }, [onChange]);

    return <div className={classnames(styles.editorContainer, styles.noPrint)}>
        <textarea className={styles.editor} value={JSON.stringify(defaultResume, null, 2)} onChange={onResumeUpdate} />
    </div>
})