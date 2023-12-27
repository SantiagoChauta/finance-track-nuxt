
<template>
    <div class="grid grid-cols-2 py-4 border-b border-gray-200 font-bold dark:border-gray-800 text-gray-500 dark:text-gray-400">
        <div class="flex items-center justify-between">
            {{date}}
        </div>
        <div class="flex items-center justify-end space-x-2 mr-10">
            {{ currency }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    transactions: Array,
    date:String
})

const sum = computed(()=>{
    return props.transactions.reduce((ac,el) =>{
        if(el.type==='Income'){
            return ac+el.amount
        }else{
            return ac-el.amount
        }
    },0)
})

const {currency} = useCurrency(sum)
</script>