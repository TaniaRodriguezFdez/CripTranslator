<template>
        <Cabecera />
        <div class="container">
                <Grid>
                        <Formulario @info-monedas="obtener" />
                        <Data
                         :cripto="info.cripto" 
                        :moneda="info.moneda" 
                        :img="info.img" 
                        :precio="info.precio" />
                </Grid>
        </div>
</template>
<reload-prompt />
<script>
import Data from './components/Data.vue';
import Formulario from './components/Formulario.vue';
import Cabecera from './components/Cabecera.vue';
import Grid from './components/Grid.vue';
import ReloadPrompt from "./components/ReloadPrompt.vue";
export default {
        components: { Formulario, Data, Cabecera, Grid, ReloadPrompt },
        data: () => ({
                info: {
                        cripto: "*",
                        moneda: "*",
                        img: "/media/37746251/btc.png",
                        precio: 0
                }
        }),
        methods: {
                async obtener(cripto, moneda) {
                        const res = await fetch(
                                ` https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(cripto)}&tsyms=${encodeURI(moneda)}`);

                        const { RAW } = await res.json();
                        const dataCripto = RAW[cripto];
                        const data = dataCripto[moneda]
                     
                        console.log(data)
                        this.info.cripto = cripto;
                        this.info.moneda = moneda;
                        this.info.img = data.IMAGEURL;
                        this.info.precio = data.PRICE;

                }
        }
}
</script>
<style></style>