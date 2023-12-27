
export const useCurrency = (amount : any) =>{
    const currency = computed(()=>{
        return new Intl.NumberFormat('es-CO',{
            style:'currency',
            currency:'COP',
        }).format(isRef(amount) ? amount.value : amount)
    })

    return {
        currency
    }
}