<template>
        <div class="data">
                <h3>Información...</h3>
                <h4>
                        <span class="cripto">{{cripto}}</span> > <span class="moneda">{{ moneda }}</span>
                </h4>
                <img :src="`https://www.cryptocompare.com${img}`" />
                <p>Precio: <strong>${{ precio }}</strong></p>
        </div>
</template> 

<script>
export default {
        props: {
                cripto: {
                        type: String,
                        required: true
                },
                moneda: {
                        type: String,
                        required: true
                },
                img: {
                        type: String,
                        required: true
                },
                precio: {
                        type: String,
                        required: true
                }
        }
}
</script>

<style></style>
