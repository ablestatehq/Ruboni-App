import { useContext, useEffect } from 'react';
import appwriteContext, { AppwriteProvider } from './src/components/contexts/appwriteContext';
import { CartProvider } from './src/components/contexts/cart';
import AuthStack from './src/routes/AuthStack';
import { getLocalItem } from './src/utils/cartFunctions';

export default function App() {
  const { appwrite, isLoggedIn, setIsLoggedIn, isLoading, setIsLoading, user, setUser, token, setToken} = useContext(appwriteContext);

//   useEffect(  ()=>{
//     getLocalItem('accessToken').then(data => {
//       const res = data;
//       // console.log(res)

//       if(res){
//         const { jwt } = JSON.parse(res);
//         setToken(jwt);
//         appwrite.getUser(jwt).then(response => {
//           console.log(response)
//           setUser(response)
//         }).catch(error => {
//           console.log("error", error)
//         })
//         }
//       }).catch(error => {
//       // console.log("handled here")
//       console.log(error)
//     })
// },[])

  return (
    <AppwriteProvider>
      <CartProvider>
        <AuthStack />
      </CartProvider>
    </AppwriteProvider>
    );
  }
