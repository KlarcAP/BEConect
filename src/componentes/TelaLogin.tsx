import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

export function LoginPage(props: { className: string | number | boolean | cn.ArgumentArray | cn.Mapping | cn.ReadonlyArgumentArray | null | undefined; }) {
  return (
    <header className={cn(styles.headerSection, props.className, 'partial-code')}> {/* ADD ??? DEU ERRO: style={{ '--src': `url(${'/assets/5a50290f2d7d0751faac210c2f142066.png'})` }} */}
      <section className={styles.mainContentBox} >  
        <div className={styles.flexRow}>
          <div className={styles.flexColumn}>
            <div className={styles.heroTitleBox_box}>
              <span className={styles.heroTitleBox}>
                <span className={styles.heroTitleBox_span0}>BE</span>
                <span className={styles.heroTitleBox_span1}>conect</span>
              </span>
            </div>
            <img className={styles.image} src={'/assets/a5891c8876f756842eb5197fc9a1f41f.svg'} alt="alt text" /> {/* ADICIONAR IMAGEM */}
            <h1 className={styles.bigTitle}>
              {/* Talvez texto aqui */}
              Novo por aqui? {/* LINK ADICIONAR */}
              <br />
              Cadastre-se
            </h1>
          </div>

          <div className={styles.flexColumn1}>
            <h1 className={styles.loginTitle}>
              Login
            </h1>

            <div className={styles.contentBox}>
              <div className={styles.flexRow1}>
                <img className={styles.loginImage} src={'/assets/cbecee52e6d095944c34479799afb127.svg'} alt="alt text" />
                <div className={styles.color2} />
                <img className={styles.secondaryImage} src={'/assets/49379f8799e34d3452a15b44f9687531.png'} alt="alt text" />
              </div>
            </div>

            <div className={styles.contentBox1}>
              <div className={styles.flexRow2}>
                <img className={styles.passwordImage} src={'/assets/cd606d11e744fcd3d1de36242e19ba87.svg'} alt="alt text" />
                <div className={styles.colorIndicator} />
                <h2 className={styles.passwordTitle}>
                  SENHA
                </h2>
              </div>
            </div>

            <div className={styles.contentBox2}>
              <h2 className={styles.entrarTitle}>
                Entrar
              </h2>
            </div>

            <h2 className={styles.orText}>
              ou
            </h2>

            <div className={styles.contentBox3}>
              <div className={styles.flexRow3}>
                <h2 className={styles.entrarWithGoogleTitle}>
                  {/* ADD GOOGLE API LINK ETC */}
                  Entrar com Google
                </h2>
                <img className={styles.googleLoginImage} src={'/assets/7045b1ddb885a6901335ec35d13fb1a1.svg'} alt="alt text" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
