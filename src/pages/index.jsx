import styles from './index.less';
import Worker from './worker';

export default function IndexPage() {
  const worker = new Worker();

  worker.postMessage('aaaa');

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
