import styles from './css/header.module.scss'
import Passport from '../assets/passport.jpg'

import { useState } from 'react';

const Header = () => {
    const [state, setState] = useState(true);
    return ( 
        <div className={styles.parent}>
           <div className={styles.logoDiv}>
                {/* <img src={Logo} className={styles.spaceIcon} alt="horse" /> */}
                <div className={styles.textDiv}>
                    <div className={styles.ultain}>LOGO</div>
                    {/* <div className={styles.instant}>INSTANT CREDITLINE</div> */}
                </div>
            </div>

            <div className={styles.row}>
                {/* <img src={Notification} className={styles.icons} alt="horse" />
                <img src={Sun} className={styles.icons} alt="horse" /> */}
              
                <div className={styles.passportDiv}>
                   <img src={Passport} className={styles.passport} alt="horse" />
                   <div  className={styles.nameConnectedDiv}>
                      <div className={styles.connected}>Connected</div>
                      <div className={styles.name}>Kelvin Anderson S</div>
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;