import baseUrl from "../apis/instance"

export const loginUser = async (userLogin) => {
    const response = await baseUrl.post("api.hoaiducmarket.com/v1/auth/login",userLogin);
    return response.data ;
}