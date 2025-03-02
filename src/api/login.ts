import { LoginInfoType,LoginReturnType} from '../../types/login'

export const login = (info: LoginInfoType): LoginReturnType => {
    const { email,password } = info
    if(email === "dog@example.com" && password === "pochi"){
        return {id:1,name:"ポチ"}
    } else {
        throw new Error()
    }
}