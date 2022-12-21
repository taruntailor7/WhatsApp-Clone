import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export const setUserInfo = (userInfo)=>{
    cookies.set("userInfo", JSON.stringify(userInfo), { path: '/' });
};

export const getUserInfo = (userInfo)=>{
    cookies.get('userInfo');
}