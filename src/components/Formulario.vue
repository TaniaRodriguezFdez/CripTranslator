<template>
        <div>
                <form @submit.prevent="$emit('infoMonedas', cripto, moneda)">
                        <label>
                                Moneda Nacional :
                        </label>
                        <select v-model="moneda" required>
                                <option value="" disabled selected>
                                        Seleciona una mondea
                                </option>
                                <option>MXN</option>
                                <option>USD</option>
                                <option>EUR</option>
                        </select>
                        <label>
                                Criptomoneda :
                        </label>
                        <select v-model="cripto" required>
                                <option value="" disabled selected>
                                        Seleciona una mondea
                                </option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>LTC</option>
                        </select>
                        <button type="submit">Cotizar</button>
                </form>
        </div>
</template>

<script>

export default {
        data: () => ({
                moneda: " ",
                cripto: " ",
        }),

        props: ["obtener"]
}
</script>
