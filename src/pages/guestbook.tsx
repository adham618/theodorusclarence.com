import * as React from 'react';

import Accent from '@/components/Accent';
import Comment from '@/components/content/Comment';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function GuestbookPage() {
  return (
    <Layout>
      <Seo templateTitle='Guestbook' />

      <main>
        <section className=''>
          <div className='py-20 layout'>
            <h1>
              <Accent>Guestbook</Accent>
            </h1>
            <p className='mt-2 text-gray-700 dark:text-gray-200'>
              Leave whatever you like to say—message, appreciation, suggestions.
            </p>
            <figure className='mt-12'>
              <Comment />
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  );
}