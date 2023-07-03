import AsyncStorage from "@react-native-async-storage/async-storage";

// This should receive an array of the items in the cart,
export function totalCost(arr){
    // for each object, check the Qty and Price
    // return the total cost of all items
    if(arr.length === 0) return null;
    else {
        const amount = [];
        arr.forEach(element => {
            amount.push(element["Qty"] * Number(element["price"].slice(1)));
        });

        return amount.reduce((pre, curr) => pre+curr ,0)
    }
}

// Store data to the local storage
export async function localCart(obj){
    // store the cartItems to the local storage
    // so, that on reload, the user doesn't not loose the cart selection.
    const jsonValue = JSON.stringify(obj)
    await AsyncStorage.setItem('cartItemList', jsonValue).then( async ()=>{
        // await AsyncStorage.getItem('cartItemList').then(item => {
        //     console.log("Item stored: ", item);
        // })
    }).catch(e=>{
        console.log(e)
    })
}

// retrieving data from the localstorage
export async function getLocalItem(value){
    // retrieve data from the local storage.
    // cartItemList
    // accessToken
     return await AsyncStorage.getItem(value);
}

// clear the localstorage.
export function clearStorage(value){
    try {
        AsyncStorage.removeItem(value);
    } catch (error) {
        
    }
}

export function searchItems(text){
    // Search and display only the data that matches the search.
}