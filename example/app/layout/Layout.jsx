import React from 'react';

import Hero from '../components/Hero/Hero';
import Content from '../components/Content/Content';

import css from './Layout.scss';

export default class Layout extends React.Component {

  render() {
    return (
      <section className={css.layout}>
        <Hero />
        <Content />
      </section>
    );
  }

}
