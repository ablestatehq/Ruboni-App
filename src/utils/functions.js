import { ENDPOINT, PROJECTID, userBucket } from "../constants/constants";


export function search(str, data){
    let res = []
    for(const obj of data){
        if(Object.keys(obj).find(el => obj[el].includes(str))){
            res.push(obj);
        }
    }
    return res;
}


export function signUp(appwrite, setUser,obj){
    const {fName, lName, email, password, phonenumber, userType} = obj;
    const name = fName + " " + lName;
    appwrite.createAccount(email, name,password ).then(async (response) => {
        appwrite.login(email, password).then(async (res)=> {
            setUser(res);

        })
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

export async function saveFile(uri, name){
    let formData = new FormData();
    let filename = name;

    let match = /\.(\w+)$/.exec(uri);
    
    let type = match ? `image/${match[1]}` : uri;
    formData.append("fileId", 'unique()')
    formData.append("file", {
        uri,
        name: filename, 
        type
    });

    return await fetch(`${ENDPOINT}/v1/storage/buckets/${userBucket}/files/`, {
        method: 'POST',
        headers: {
            Accept: 'multipart/form-data',
            "X-Appwrite-Project": PROJECTID,
            "x-sdk-version": "appwrite:web:11.0.0",
        },
        body: formData,
        credentials: "include"
    });
}

// export async function checkSpace(string){
//     const regex = /^\s*$/
//     return regex.test(string)
// }