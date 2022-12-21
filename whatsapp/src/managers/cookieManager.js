import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export const setUserInfoInCookie = (userInfo)=>{
    cookies.set("userInfo", JSON.stringify(userInfo), { path: '/' });
};

export const getUserInfo = ()=>{
   return cookies.get('userInfo');
}