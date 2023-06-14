import { FlutterwaveInitV2 } from "flutterwave-react-native";

export default async function MakePayment(transactionRef, amount, currency){
    try {
        // initialize the payment
        const payment = await FlutterwaveInitV2({
            txref: transactionRef,
            PBFPubKey: process.env.TZ, // My flutterwave public key
            amount: amount,
            currency: currency,
            customer_email: 'wasswaenockmale@gmail.com',
            payment_options: 'card, mobilemoney, ussd',

        });

    usePaymentLink(payment);
    } catch (error) {
        console.log(error)
    }
    
}

export function generateTransactionRef(num){
    return "abkclweoeriowioansdfoapwehfifsdfndf".slice(1,num)
}