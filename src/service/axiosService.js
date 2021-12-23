import axios from 'axios'


const dataService ={
    async  d_req(data ,route, method) {
        // let rez = null;
        return await axios({
            method: method,
            url: 'http://'+window.location.hostname+':8080/'+route,
            host:"http://localhost:80",
            headers: {'Accept':'application/json'},

            data: data
        }).then(response =>{ return response.status ===200 ? response.data : null;}).catch(() => { return });}}

export default dataService;