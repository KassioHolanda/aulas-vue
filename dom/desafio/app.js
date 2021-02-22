new Vue({

    el: "#desafio",
    data: {
        nome: 'Kassio Lucas',
        idade: 23,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezesTres() {
            return this.idade * 3
        }
    }

})