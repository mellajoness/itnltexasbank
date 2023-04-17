import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './css/card.module.scss'
const Card = () => {
    return ( 
        <>
        <div className={styles.welcomeDiv}>
            <div>
                <div className={styles.welcome}>Good evening Kelbin S Anderson</div>
                <div className={styles.desc}>At a glance summary of your account</div>
            </div>
            <div className={styles.row}>
                <button className={styles.transferBtn}>Deposit<AiOutlineArrowRight className={styles.arrowIcon}/></button>
                <button className={styles.billsBtn}>Transfer Fund<AiOutlineArrowRight className={styles.arrowIcon}/></button>
            </div>
        </div>
        <div className={styles.rowHalf}>
            <div className={styles.half}>
              <div className={styles.title}>Overview</div>
              <div className={styles.box}>
                <div className={styles.miniBox}>
                    <div className={styles.name}>KE</div>
                    <div className={styles.link}>Linked cards</div>
                    <div className={styles.number}>3</div>
                </div>
                <div className={styles.miniBox}>
                    <div className={styles.available}>Available balance</div>
                    <div className={styles.number}>USD 650,000</div>
                    <div className={styles.paragraph}>Kelvin Anderson S</div>
                    <div className={styles.available}>Your ip address</div>
                    <div className={styles.paragraphTwo}>193.565.466.34</div>

                </div>
              </div>
                
            </div>
            <div className={styles.half}>
              <div className={styles.rowText}>
                 <div className={styles.title}>Checking Account</div>
                 <div  className={styles.transfer}>Transfer Fund</div>
              </div>
              <div className={styles.boxTwo}>
                <div className={styles.grayBox}>
                    <div>
                        <div className={styles.accNumb}>****93728</div>
                        <div className={styles.checkAmount}>650,00<span className={styles.usd} >USD</span></div>
                    </div>
                </div>
           
                <div className={styles.rowTextTwo}>
                  <div className={styles.title}>Loans and lines of credit</div>
                  <div  className={styles.transfer}>Pay bills</div>
                </div>

                <div className={styles.rowText}>
                  <div className={styles.grayBoxHalf}>
                     <div>
                        <div className={styles.accNumb}>Business Support Loan</div>
                        <div className={styles.checkAmount}>+400,00<span className={styles.usd} >USD</span></div>
                     </div>
                  </div>
                  <div className={styles.grayBoxHalf}>
                     <div>
                        <div className={styles.accNumb}>Business Support Loan</div>
                        <div className={styles.checkAmount}>+400,00<span className={styles.usd} >USD</span></div>
                     </div>
                  </div>
                </div>


              </div> 
            </div>
        </div>

        <div className={styles.rowHalf}>
            <div className={styles.half}>
                <div className={styles.rowTextThree}>
                  <div className={styles.title}>Recent Transaction Activities</div>
                  <div  className={styles.all}>All</div>
                </div>
                <div className={styles.boxBorder}>

                </div>
            </div>

            <div className={styles.half}>
                <div className={styles.rowTextThree}>
                  <div className={styles.title}>Recent Transaction Activities</div>
                  <div  className={styles.all}>All Time</div>
                </div>
                <div className={styles.boxBorder}>
                 <div className={styles.creditDivParent}>
                    <div className={styles.creditDiv} >
                        <div className={styles.creditBox} /> <div className={styles.credit}>Credit</div>
                    </div>
                    <div className={styles.creditDiv} >
                        <div className={styles.debitBox} /> <div className={styles.credit}>Debit</div>
                    </div>
                 </div>
                </div>
            </div>
        </div>    
        </>
     );
}
 
export default Card;