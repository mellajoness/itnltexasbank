import Card from "./card";
import styles from './css/dashboard.module.scss'
import Table from "./table";
const Dashboard = () => {
    return ( 
        <div className={styles.parent}>
            <div>
                <Card/>
            </div>
            {/* <div>
                <Table/>
            </div> */}
       
        </div>
     );
}
 
export default Dashboard;