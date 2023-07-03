import { Client, Databases, Account, ID, Query, Storage, } from 'appwrite';
import { APPWRITE_PROJECT_ID, APPWRITE_API_ENDPOINT } from "@env";
import { userBucket } from '../constants/constants';

const appwriteClient = new Client();

export default class AppwriteService {
    account;
    databases;
    storage;

    constructor(){

        appwriteClient
        .setEndpoint(APPWRITE_API_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient);
        this.databases = new Databases(appwriteClient);
        this.storage = new Storage(appwriteClient);
    }
    
       async createAccount(email, name, password){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name).then(async () => {
                //TODO: create a trigger that saves a user in the user's database.
            })

            if(userAccount){
                //TODO: send a verification link to the user to verify there email.
                //TODO: allow login
                // return this.login(email, password);

            }else{
                return userAccount;
            }
        } catch (error) {
            alert(error);
            // console.log("Appwrite -- createAccount() -- ", error);
        }
    }

    // update email
    async updateEmail(email, passowrd){
        try {
            return this.account.updateEmail(email, passowrd)
        } catch (error) {
            alert(error);
            // console.log("appwrite -- updateEmail() -- ",error)
        }
    }

    // create a login session
    async login(email, password){
        // try {
            // const res = await this
            const result = await this.account.createEmailSession(email, password)
            return result;
        // } catch (error) {
        //     alert(error);
        //     console.log("Appwrite -- login() -- ", error);
        // }
    }

    // get account/currentUser
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            alert(error)
            // console.log("Appwrite -- getCurrentUser() -- ", error);
        }
    }

    // log the user out
    async logout(){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            alert(error);
            // console.log("Appwrite -- logout() -- ", error);
        }
    }

    // update password / on forgot password action.
    async accountPassword(){
        try {
            return await this.account.updatePassword()
        } catch (error) {
            alert(error);
            // console.log("Appwrite -- accountPassword -- ", error);
        }
    }

    // create document
    async createDocument(databaseId, collectionId, data){
        try {
            // returns a document object.
           return await this.databases.createDocument(databaseId, collectionId, ID.unique(), data)
        } catch (error) {
            alert(error);
            // console.log("Appwrite -- createDocument() -- ", error);
        }
    }

    // update document
    async updateDocument(databaseId, collectionId, documentId, data){
        try {
            return await this.databases.updateDocument(databaseId, collectionId, documentId, data);
        } catch (error) {
            alert(error);
            // console.log("Appwrite -- updateDocument() -- ", error);
        }
    }

    // get document 
    async getDocument(databaseId, collectionId, documentId){
        try {
            return this.databases.getDocument(databaseId, collectionId, documentId);
        } catch (error) {
            alert(error);
            // console.log("appwrite -- getDocument() -- ", error);
        }
    }

    // delete a document
    async deleteDocument(databaseId, collectionId, documentId){
        try {
            return this.databases.deleteDocument(databaseId, collectionId, documentId);
        } catch (error) {
            alert(error);
            // console.log("appwrite -- deleteDocument() --", error);
        }
    }

    // list a document
    async listDocument(databaseId, collectionId){
        try {
            return await this.databases.listDocuments(databaseId, collectionId)
        } catch (error) {
            alert(error);
            // console.log("appwrite -- listDocument() -- ", error)
        }
    }

    async list_documents(databaseId, uCollection, user){
        return await this.databases.listDocuments(databaseId, uCollection, [
            Query.equal("userId", [user.userId])
        ])
    }

    // return Document
    async returnDocument(databaseId, collectionId, userId){
        try{
            return await this.databases.listDocuments(databaseId, collectionId, [
                Query.equal('userId', [userId])
            ])
        }catch(error) {
            alert("failed to get document.")
        }
    }
    
    // update user preferences
    async updateUserPref(data){
        try {
            return this.account.updatePrefs(data);
        } catch (error) {
            alert(error);
            console.log("appwrite -- returnUserPref() -- ", error)
        }
    }

    // get the user preferences
    async getUserPref(){
        try {
            return await this.account.getPrefs()
        } catch (error) {
            console.log("appwrite -- getUserPref() -- ", error);
        }
    }

    // get a user using jwt token.
    async getUser(jwt){
        try {
            appwriteClient.setJWT(jwt);
            let user;
            await this.account.get().then(response => {
                user = response
            });
            return user;
        } catch (error) {
            alert("Something went wrong");
            // console.log("appwrite -- getUser() -- ", error)
        }
    }


    // get the file in a storage bucket
    async userFile(bucketId, fileId){
        try {
            return this.storage.getFile(bucketId, fileId);
        } catch (error) {
            console.log("Appwrite -- userFile() -- ", error)
        }
    }

    async listFiles(bucketId){
        try {
            return this.storage.listFiles(bucketId)
        } catch (error) {
            console.log("appwrite -- listFiles -- ", error);
        }
    }

     // Storage section
     async storeFiles(file){
        try {

            const response = await fetch(file.uri);
            // console.log("Response ", response)
            const blob = await response.blob();

            // console.log("Blob ",blob);

            const fileObject = new File([blob], file.assetId ? file.assetId : "large_image", { type: "image/jpeg" });

            const createFileResponse = await this.storage.createFile(userBucket, ID.unique(),fileObject);
            // console.log(createFileResponse.sizeOriginal);
            return createFileResponse;

        } catch (error) {
            alert("Something went wrong -- appwrite");
            console.log("appwrite -- storeFiles() -- ", error)
        }
    }
    
}