import { useEffect, useState } from 'react';
import Link from 'next/link';

import MyIsacaUser from './MyIsacaUser';

const IsacaHeader = ({ id, user, userSummary }: { id: any; user: any; userSummary: any }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(id);
  }, [id]);

  return (
    <>
      <MyIsacaUser userData={user} userSummary={userSummary} />
      <div style={styles.main}>
        <div
          style={
            activeLink === 'membership-status' ? styles.activeLinkContainer : styles.linkContainer
          }
        >
          <Link href="/myisaca/membership-status">
            <a style={activeLink === 'membership-status' ? styles.activeLink : styles.link}>
              Membership Status
            </a>
          </Link>
        </div>

        <div
          style={
            activeLink === 'certifications' ? styles.activeLinkContainer : styles.linkContainer
          }
        >
          <Link href="/myisaca/certifications">
            <a style={activeLink === 'certifications' ? styles.activeLink : styles.link}>
              Certifications & CPE Management
            </a>
          </Link>
        </div>

        <div style={activeLink === 'learnings' ? styles.activeLinkContainer : styles.linkContainer}>
          <Link href="/myisaca/learnings">
            <a style={activeLink === 'learnings' ? styles.activeLink : styles.link}>
              Learning Access
            </a>
          </Link>
        </div>

        <div
          style={
            activeLink === 'cpecertificates' ? styles.activeLinkContainer : styles.linkContainer
          }
        >
          <Link href="/myisaca/cpecertificates">
            <a style={activeLink === 'cpecertificates' ? styles.activeLink : styles.link}>
              ISACA CPE Records
            </a>
          </Link>
        </div>

        <div style={activeLink === 'downloads' ? styles.activeLinkContainer : styles.linkContainer}>
          <Link href="/myisaca/downloads">
            <a style={activeLink === 'downloads' ? styles.activeLink : styles.link}>Resources</a>
          </Link>
        </div>

        <div
          style={activeLink === 'certificates' ? styles.activeLinkContainer : styles.linkContainer}
        >
          <Link href="/myisaca/certificates">
            <a style={activeLink === 'certificates' ? styles.activeLink : styles.link}>
              Cerificate Programs
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '106px',
    backgroundColor: '#e2e5e6',
  } as React.CSSProperties,
  linkContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '260px',
  } as React.CSSProperties,
  activeLinkContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '260px',
    borderBottom: '5px solid #a30046',
  } as React.CSSProperties,
  link: {
    textDecoration: 'none',
    color: '#a30046',
    fontSize: '1.25em',
  } as React.CSSProperties,
  activeLink: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'default',
    pointerEvents: 'none',
    fontSize: '1.25em',
  } as React.CSSProperties,
};

export default IsacaHeader;

