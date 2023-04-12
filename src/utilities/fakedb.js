const AddDb =(cart)=>{
    const getlocalstorage = JSON.parse(localStorage.getItem('allcart'))
    let storeCard;
    if(getlocalstorage){
        const previousCart = getlocalstorage.find(d => d.id== cart.id)
        if(previousCart){
            return alert('already addded')
        }
        else{
            const currentCart = [...getlocalstorage,cart]
            localStorage.setItem('allcart',JSON.stringify(currentCart))

        }
    }
    else{
        storeCard= [cart ]
        localStorage.setItem('allcart',JSON.stringify(storeCard))
    }
}
const getDb = ()=>{
    const getlocalstorage = JSON.parse(localStorage.getItem('allcart'))
    return getlocalstorage;
}
export {
    AddDb,getDb
}