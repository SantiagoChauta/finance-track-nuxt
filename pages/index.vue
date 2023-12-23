
<template>
    <section class="flex items-center justify-between mb-10">
        <h1 class="text-xl sm:text-4xl font-extrabold">Summary</h1>
        <div>
            <USelectMenu :options="transactionViewOptions" v-model="selectedView"/>
        </div>
    </section>
    <section class="grid text-center lg:text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
        <Trend title="Income" :amount="4000" :lastAmount="5000" :loading="false"/>
        <Trend  title="Expense" :amount="4000" :lastAmount="2311" :loading="false"/>
        <Trend  title="Invesments" :amount="4000" :lastAmount="603" :loading="false"/>
        <Trend  title="Saves" :amount="4000" :lastAmount="7238" :loading="false"/>
        
    </section>
</template>

<script setup>

import { transactionViewOptions } from '~/constants';
const selectedView = ref(transactionViewOptions[1])

</script>