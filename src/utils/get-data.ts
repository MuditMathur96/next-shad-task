import axios from "axios";
import https from 'https';

const agent = new https.Agent({
    rejectUnauthorized:false
})

const axiosInstance = axios.create({
    httpsAgent: agent
  });
async function getData(url:string) {
        try{
            const res = await axiosInstance.get(url);
            return res.data;
        }catch(err:any){
            console.log(err);
            return err;
        }
}

export default getData;