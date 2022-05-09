import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import IsacaHeader from '../../components/IsacaHeader';
import MyIsacaMain from '../../components/MyIsacaMain';
import StaticLayout from '../../StaticLayout';

import { loadUser, loadUserSummary } from 'lib/fetch-MyISACA-user';
import { useEffect } from 'react';

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const paths = coffeStoresData.map((el) => {
//     return {
//       params: {
//         id: el.id.toString(),
//       },
//     };
//   });
//   return {
//     paths: [
//       {
//         params: {
//           id: 'membership-status',
//         },
//       },
//     ],
//     fallback: false,
//   };
// };

const Page = (props: any) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log('id', id);
  });

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <StaticLayout />
      <MyIsacaMain id={id} user={props.user} userSummary={props.userSummary} />
      {id === 'membership-status' ? (
        <div style={{ padding: 10, textAlign: 'center' }}>
          <h1>Membership Status</h1>
        </div>
      ) : id === 'certifications' ? (
        <div style={{ padding: 10, textAlign: 'center' }}>
          <h1>Certifications & CPE Management</h1>
        </div>
      ) : id === 'learnings' ? (
        <div style={{ padding: 10, textAlign: 'center' }}>
          <h1>Access Your Virtual Events</h1>
        </div>
      ) : id === 'cpecertificates' ? (
        <div style={{ padding: 10, textAlign: 'center' }}>
          <h1>ISACA CPE Records</h1>
        </div>
      ) : id === 'downloads' ? (
        <div style={{ padding: 10, textAlign: 'center' }}>
          <h1>Resources</h1>
        </div>
      ) : id === 'certificates' ? (
        <div style={{ padding: 10, textAlign: 'center' }}>
          <h1>Certificate Programs</h1>
        </div>
      ) : null}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const user = await loadUser();
  const userSummary = await loadUserSummary();
  console.log('id', context.params);
  return {
    props: {
      user,
      userSummary,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    // revalidate: 5, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log('paths', context);
  return {
    paths: [
      {
        params: {
          id: 'membership-status',
        },
      },
      {
        params: {
          id: 'certifications',
        },
      },
      {
        params: {
          id: 'learnings',
        },
      },
      {
        params: {
          id: 'cpecertificates',
        },
      },
      {
        params: {
          id: 'downloads',
        },
      },
      {
        params: {
          id: 'certificates',
        },
      },
    ],
    fallback: false,
  };
};

export default Page;

