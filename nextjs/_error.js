import React from 'react';
import Link from 'next/link';


const errorPage = () => (
  <div>
    <h1>Oops i dun goofed</h1>
    <p>Try<Link href="/auth"><a>going back</a></Link>.</p>
  </div>
);

export default errorPage;