new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        registerLog(text, cls) {
            // coloca o item no inicio do array
            this.logs.unshift({ text, cls })
        },
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },

        attack(special) {
            this.hurt('playerLife', 5, 10, false, 'Monstro', 'Jogador', 'monster')
            if (this.monsterLife > 0) this.hurt('monsterLife', 7, 12, special, 'Jogador', 'Monstro', 'player')
        },

        hurt(nameLife, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.getRadom(min + plus, max + plus)
            this[nameLife] = Math.max(this[nameLife] - hurt, 0)
            this.registerLog("${source} atingiu ${target} com ${hurt}", cls)
        },

        getRadom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value);
        },

        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },

        heal(min, max) {
            const heal = this.getRadom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})