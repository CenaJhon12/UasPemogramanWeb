 //@ts-check
//import useSWR from "swr"
 
//async function fetcher(url){
//    const res = await fetch(url);
//    return res.json();
//}

import DataPengunjung from '../../components/user/DataPengunjung'
import UserLayout from '../../components/user/UserLayout';
const dtpengunjung = () => {
    

  return (
        <div>
            <UserLayout>
            <div className ="mt-4">
            <DataPengunjung  />
            </div>
            </UserLayout>
        </div>
   

);
}



export default dtpengunjung ;