// import * as Appwirte from 'appwrite';
export function search(str, data){
    let res = []
    for(const obj of data){
        if(Object.keys(obj).find(el => obj[el].includes(str))){
            res.push(obj);
        }
    }
    return res;
}


export function signUp(appwrite, obj){
    // create an account
    const {fName, lName, email, password, phonenumber, userType} = obj;
    const name = fName + " " + lName;
    appwrite.createAccount(email, name,password ).then(async (response) => {
        // console.log(response);
    }).catch(error => {
        alert("Sorry, unable to sign up");
        console.log("signUp() -- appwrite() -- ", error);
    });
}


export async function autoLogin(jwt){
    let accessToken = null;

    try {

    } catch (error) {
        console.log(error);
        console.log("Resolving token failed");
        console.log("accessToken ", accessToken);
    }
}


export async function signIn(data){
    let { setIsLoading, user, setUser } = data;
}

