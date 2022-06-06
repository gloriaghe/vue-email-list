const myApp = new Vue({
    el: "#app",
    data: {
        mails: [],
        mail: false,
    },

    mounted() {
        this.mails10()
        console.log(this.mails)
    },

    methods: {
        mails10() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((result) => {
                        const risultato = result.data.response;
                        this.mail = risultato;
                        this.mails.push(risultato)
                    });
            };
        },
    }
});