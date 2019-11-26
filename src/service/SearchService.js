import api from './api'
export const SearchService = async (options,page)=>{
    let url = '/v1/error/aggregates'
    if(options != null){
     url = '/v1/error/aggregates?'+
        "environment="+options.environment+
        "&"+options.searchParam+"="+options.text+
        "&sort="+options.order+",desc";
    }
    if(page != null){
        url+= "&page="+(page-1)
    }
    let request = await api(url);
    return await request;
}

export const SearchOne = async (id) =>{
    let url = '/v1/error/'+id;
    let request = await api(url);
    return new Array(await request.data);
}