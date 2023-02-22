import React from 'react';
import { Layout } from '../layout';
import './components/styles/quote.css';

const Quote = () => (
  <Layout>
    <div className="quote_container">
      <p>
        &ldquo;Pure mathematics is, in its way, the poetry of logical ideas.&rdquo;

        <br />
        <br />
        <span>
          - Albert Einstein
        </span>
      </p>

    </div>
  </Layout>
);

export default Quote;
