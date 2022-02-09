export function getQueryParam(str) {
  if(str) {
    let link = window.location.href;
    let query = link.split('?');
    if(query && query.length>1){
      let queryArray = query[1].split('&');
      if(queryArray && queryArray.length>0){
        for(let i=0, len= queryArray.length; i<len; i++){
          let params = queryArray[i].split('=');
          if(params && params.length>0 && params[0].toLowerCase() === str.toLowerCase()){
            return params[1];
          }
        }
      }
    }
  } else {
    return ''
  }
}

export function preventCopy() {
   let link = window.location.href;
   let query = link.split('?');
   let theRequest = new Object();
   if (query && query.length>1) {
      let str = query[1];
      let strs = str.split("&");
      for(let i = 0; i < strs.length; i ++) {
        if(strs[i].toLowerCase().indexOf('sdk')!=-1){
          theRequest.sdkProductId = strs[i].slice(13,strs[i].length);
        }
        if(strs[i].toLowerCase().indexOf('user')!=-1){
          theRequest.userId = strs[i].slice(7,strs[i].length);
        }
        if(strs[i].toLowerCase().indexOf('ten')!=-1){
          theRequest.tenantId = strs[i].slice(9,strs[i].length);
        }
        theRequest.link = query[0];
        console.log(theRequest);
        // theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
      return theRequest;
   } else {
     return {
       link: query[0]
     }
   }
   
}
export function preventCopy1() {
    let link = window.location.href;
    let query = link.split('?');

    if(query && query.length>1){
      
      let returnObj = {};
      let queryArray = query[1].split('&');
      if(queryArray && queryArray.length>0){
        returnObj.link = query[0];
        for(let i=0, len= queryArray.length; i<len; i++){
          let params = queryArray[i].split('=');
          if(params && params.length>0 && params[0].toLowerCase() === 'sdkProductId'.toLowerCase()){
            returnObj.sdkProductId=params[1];
          }
          if(params && params.length>0 && params[0].toLowerCase() === 'userId'.toLowerCase()){
            returnObj.userId=params[1];
          }
          if(params && params.length>0 && params[0].toLowerCase() === 'tenantId'.toLowerCase()){
            returnObj.tenantId=params[1];
          }
          
        }
        // let queryStr =new URLSearchParams('?'+query[1]);
        // returnObj.tenantId = queryStr.get('tenantid') || queryStr.get('tenantId');
        // returnObj.userId = queryStr.get('userId');
        // returnObj.sdkProductId = queryStr.get('sdkProductId');
        // console.log(returnObj , 333);
        return returnObj;
      }
    }else{
      return {
        link: link
      }
    }
}

export function getNumber(num){
  return num<10 ? `0${num}`: num;
}

export function NorEmpty(str){
  if(str && str!=null && str!='null'){
    return true;
  }else 
    return false;
    
}

export function desensitizationName(name){
  if(!NorEmpty(name)){
    return name
  } else if(name.length<=1){
    return name
  } else if(name.length==2){
    return `${name.charAt(0)}*`
  }else {
    let str='';
    for(let i=0,len=name.length-2; i<len; i++){
      str +='*';
    }
    return `${name.charAt(0)}${str}${name.charAt(name.length-1)}`;
  }
}

export function desensitizationCard(card){
  if(card.match(/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dX]$/)) {
    // console.log(card.match(/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dX]$/),'身份证');
    let cardText='**************';
    return `${cardText}${card.slice(14,18)}`
  } else {
    return '';
  }
}