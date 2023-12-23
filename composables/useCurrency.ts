
export const useCurrency = (amount : number | Proxy) =>{
    const currency = computed(()=>{
        return new Intl.NumberFormat('es-CO',{
            style:'currency',
            currency:'COP',
        }).format(isRef(amount) ? amount.value : amount)
    })
}