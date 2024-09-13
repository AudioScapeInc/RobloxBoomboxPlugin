import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Players can search by genre or vibe across 1000s of tracks',
    Svg: require('@site/static/svg/search.svg').default,
    description: (
      <>
        No need to leave your experience to copy sound IDs. This includes the new Distrokid tracks released at RDC24.
      </>
    ),
  },
  {
    title: 'Compact UI',
    Svg: require('@site/static/svg/boombox.svg').default,
    description: (
      <>
         Keeps the focus on the game
      </>
    ),
  },
  {
    title: 'Configurable',
    Svg: require('@site/static/svg/configure.svg').default,
    description: (
      <>
        Change player location, default audio selection, or accent colors!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
