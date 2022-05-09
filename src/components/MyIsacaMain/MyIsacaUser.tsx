import React from 'react';

import styles from './MyIsacaMain.module.css';
import Image from 'next/image';

const MyIsacaUser = (props: any) => {
  return (
    <div className={styles['main-container']}>
      <div className={styles['user-container']}>
        <div className={styles['button-container']}>
          <button
            className={styles['btn-primary']}
            onClick={() => window.open(props.userData?.ProfileLink, '_blank')}
          >
            My ISACA Profile
          </button>
          <button className={styles['btn-primary']}>Chapter Leader Portal</button>
        </div>
        <div>
          <h1>{props.userData?.FirstName}</h1>
          <h1>{props.userData?.LastName}</h1>
          <p>{props.userData?.EmailAddress}</p>
        </div>
      </div>
      <div className={styles.certifications}>
        <p className={styles['certifications-header']}>Certification</p>
        {props.userSummary?.Categories[0].Details.map((el: any) => {
          return (
            <>
              <div key={Math.random()} className={styles['certifications-container']}>
                <div className={styles['cert-img-container']}>
                  <Image width={40} height={40} src={`https://sf-sit.isaca.org${el.LogoImage}`} />
                  <div className={styles['cert-title-container']}>
                    <h1 className={styles['cert-title']}>{el.Title}</h1>
                    <p className={styles['cert-subtitle']}>{el.Through}</p>
                  </div>
                </div>
                {el.Balances.map((balance: any) => {
                  return (
                    <div key={Math.random()} className={styles['cert-balance-container']}>
                      <p className={styles['cert-key']}>{balance.Key}:</p>
                      <span className={styles['cert-value']}>{balance.Value}</span>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
        <div className={styles['cert-invoice-summary-total']}>
          <span className={styles['cert-value']}>{props.userSummary?.TotalBalanceValue}</span>
          <p className={styles['cert-key']}>{props.userSummary?.TotalBalanceLabel}:</p>
          <div className={styles['btn-invoice-container']}>
            <button className={styles['btn-primary']}>{props.userSummary?.ActionText}</button>
            <button className={styles['btn-tertiary']}>{props.userSummary?.PrintInvoice}</button>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <p className={styles['cert-invoice-summary-message']}>
            Need your invoice address/addressee changed?
          </p>
          <a style={{ fontSize: '.875rem', color: 'blue', cursor: 'pointer', marginLeft: '5px' }}>
            Edit Invoice
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyIsacaUser;

