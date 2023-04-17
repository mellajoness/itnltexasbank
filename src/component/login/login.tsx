import { useEffect, useState } from 'react';
import styles from './css/login.module.scss'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  useEffect(() => {
     window.scrollTo(0,0)
  },[])
  let navigate=useNavigate()

  const gotoDashboard=()=>{
      navigate('/dashboard')
   }
    return ( 
        <div className={styles.parent}>
          <div className={styles.box}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.bankName}>NATIONAL BANK OF WEST AFRICA</div>
            <div className={styles.formDiv}>
              <div className={styles.inputDiv}>
                <span className={styles.inputTitle}>Account Number</span>
                <input onChange={e => setUsername(e.target.value)} type='text'  value={username}  placeholder='Enter account number' className={styles.input} />
              </div>
              <div className={styles.inputDiv}>
                <span className={styles.inputTitle}>Password</span>
                <input onChange={e => setPassword(e.target.value)} type='password'  value={password}  placeholder='Enter password' className={styles.input} />
              </div>
              <button onClick={gotoDashboard} className={styles.loginBtn}>Proceed to Login</button>

            </div>
             
          </div>
          
       
        </div>
     );
}
 
export default Login;