

import { useDataPengunjung } from "../lib/swr-fetch";
const detilpgj = ()=> {
    const {data, error} = useDataPengunjung();

    if(error) {return <div>Error....</div>}
    if(!data){return <div>Loading...</div>}

    const {dataPengunjung} = data;
    return (
        <div>
            <ul>
                {dataPengunjung.map((pgj,id) =>(
                    <>
                    <li>{pgj.Nama}</li>
                    <li>{pgj.Umur}</li>
                    <li>{pgj.Alamat}</li>
                    <li>{pgj.Email}</li>
                    </>

                    ))}
            </ul>
        </div>
    );
}
export default detilpgj ;
