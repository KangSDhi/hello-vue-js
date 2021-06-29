<template>
    <div>
        <Template>
            <b-container>
                <b-row class="mb-4" v-for="row in rows" :key="'row' + row">
                    <b-col class="d-flex align-items-stretch" v-for="(produk, column) in bookablesInRow(row)" :key="'row' + row + column">
                        a
                    </b-col>
                </b-row>
            </b-container>
        </Template>
    </div>
</template>

<script>
import Template from '../layouts/template'
import axios from 'axios'

export default {
    components: {
        Template
    },
    data(){
        return {
            produk: null,
            columns: 3
        }
    },
    computed: {
        rows(){
            return this.produk === null 
            ? 0
            : Math.ceil(this.produk.length / this.columns);
        }
    },
    methods: {
        bookablesInRow(row){
            return this.produk.slice((row - 1) * this.columns, row * this.columns);
        }
    },
    created(){
        axios.get("http://localhost:8000/produk").then(response => {
            console.log(response.data.data);
            this.produk = response.data.data;
        });
    }
}
</script>