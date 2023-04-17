import { useState } from 'react';
import styles from './css/table.module.scss'
const Table = () => {
    const [product,setProduct]=useState([
      {id:1,  token:'12th Feb,2023',market:'$1,500.00',type:'Nipps',price:'John Doe', volume:'$1,000,000.00',last:'1.5%',profitlost:'+$20.54'},
      {id:2,  token:'17th Jan,2023',market:'$1,500.00',type:'Nipps',price:'Smith Allen', volume:'$3,000,000.00',last:'0.5%',profitlost:'+$10.54'},
      {id:3,  token:'2nd Deb,2023',market:'$1,500.00',type:'Nipps',price:'Amos Bill', volume:'$1,000,000.00',last:'16.5%',profitlost:'+$80.54'},
      {id:4,  token:'12th Feb,2023',market:'$1,500.00',type:'Nipps',price:'Travis Scott', volume:'$1,000,000.00',last:'16.5%',profitlost:'+$80.54'},
    ])
      return ( 
          <div className={styles.parent}>
              <div className={styles.content}>
                  <div className={styles.title}>Latest Transaction</div>
                  <div  className={styles.parent}>
                     <div className="table-responsive">     
                       <table className="table table-borderless">
                         <thead className={styles.tablerow}>
                           <tr>
                             <th className={styles.tablehead} scope="col">Date</th>
                             <th className={styles.tablehead} scope="col">Amount</th>
                             <th className={styles.tablehead} scope="col">Transfer Type</th>
                             <th className={styles.tablehead} scope="col">Sent From</th>   
                             <th className={styles.tablehead} scope="col">Sent To</th>   
                             <th className={styles.tablehead} scope="col">Description</th>  
                            </tr>
                         </thead>
                         <tbody>
                        {product.map((prod:any,index:any) =>
                         <tr key={index}>
                            <td className={styles.tabledata}>{prod.token} </td>
                            <td className={styles.tabledata}>{prod.market}</td>
                            <td className={styles.tabledata}>{prod.type}</td>
                            <td className={styles.tabledata}>{prod.price}</td>
                            <td className={styles.tabledata}>{prod.last}</td>
                            <td className={styles.tabledata}>{prod.profitlost}</td>             
                         </tr>
                        )}
                       </tbody>
                      </table>
                      </div>
                  </div>
              </div>
              
          </div>
       );
  }
  export default Table