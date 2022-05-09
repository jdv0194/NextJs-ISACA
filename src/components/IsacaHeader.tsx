import { useEffect, useState } from 'react';
import axios from 'axios';

const IsacaHeader = ({ id }: { id: any }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(id);
  }, [id]);

  useEffect(() => {
    console.log('active', activeLink);
  }, [activeLink]);

  const fetchInitialData = async () => {
    try {
      const response = await axios.get(
        'https://cm-sit.isaca.org/api/myisaca/jssheader?isacaId=467939'
      );
      console.log('response', response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.main}>
      <div style={activeLink === 'home' ? styles.activeLinkContainer : styles.linkContainer}>
        <a style={activeLink === 'home' ? styles.activeLink : styles.link} href="/myisaca">
          Membership Status
        </a>
      </div>

      <div
        style={activeLink === 'certifications' ? styles.activeLinkContainer : styles.linkContainer}
      >
        <a
          style={activeLink === 'certifications' ? styles.activeLink : styles.link}
          href="/myisaca/certifications"
        >
          Certifications & CPE Management
        </a>
      </div>

      <div style={activeLink === 'learnings' ? styles.activeLinkContainer : styles.linkContainer}>
        <a
          style={activeLink === 'learnings' ? styles.activeLink : styles.link}
          href="/myisaca/learnings"
        >
          Learning Access
        </a>
      </div>

      <div
        style={activeLink === 'cpecertificates' ? styles.activeLinkContainer : styles.linkContainer}
      >
        <a
          style={activeLink === 'cpecertificates' ? styles.activeLink : styles.link}
          href="/myisaca/cpecertificates"
        >
          ISACA CPE Records
        </a>
      </div>

      <div style={activeLink === 'downloads' ? styles.activeLinkContainer : styles.linkContainer}>
        <a
          style={activeLink === 'downloads' ? styles.activeLink : styles.link}
          href="/myisaca/downloads"
        >
          Resources
        </a>
      </div>

      <div
        style={activeLink === 'certificates' ? styles.activeLinkContainer : styles.linkContainer}
      >
        <a
          style={activeLink === 'certificates' ? styles.activeLink : styles.link}
          href="/myisaca/certificates"
        >
          Cerificate Programs
        </a>
      </div>
    </div>
  );
};

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '106px',
    backgroundColor: '#e2e5e6',
  },
  linkContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '260px',
  },
  activeLinkContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '260px',
    borderBottom: '5px solid #a30046',
  },
  link: {
    textDecoration: 'none',
    color: '#a30046',
    fontSize: '1.25em',
  },
  activeLink: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'default',
    pointerEvents: 'none',
    fontSize: '1.25em',
  },
};

export default IsacaHeader;

