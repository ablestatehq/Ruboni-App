export function paymentData({email, amount}){
    return {
        public_key: 'YOUR_PUBLIC_KEY',
        tx_ref: 'YOUR_TRANSACTION_REFERENCE',
        amount: amount,
        currency: 'UGX',
        payment_options: 'card',
        customer: {
            email: email,
        },
        meta: {
            consumer_id: '23',
            consumer_mac: '92a3-912ba-1192a',
        },
        callback: (response) => {
            console.log('Payment response:', response);

        },
        onclose: () => {
            console.log('Payment closed');
            // Handle payment closure
        },
    }
}