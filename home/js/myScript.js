const { createApp } = Vue;

createApp({
    data() {
        return {
            newComment: {
                name: '',
                message: ''
            },
            comments: [],
            images: [
                "https://i.pinimg.com/474x/ee/2a/71/ee2a7149341c2b23ae2e9c7358ec247d.jpg",
                "https://i.pinimg.com/736x/ac/e3/16/ace3163f3edb4b0c311ea0e56bb9d5d1.jpg",
                "https://i.pinimg.com/736x/bb/e9/85/bbe985b0966c8cd51df295e6389e080c.jpg",
                "https://i.pinimg.com/736x/06/ad/da/06adda610b5c8af46f61afa7779760a0.jpg"
            ]
        };
    },
    methods: {
        addComment() {
            if (this.newComment.name && this.newComment.message) {
                this.comments.push({
                    name: this.newComment.name,
                    message: this.newComment.message
                });
                this.newComment.name = '';
                this.newComment.message = '';
            }
        }
    }
}).mount('#app');

function redirectToSocials() {
    window.location.href = "https://frankie-socmeds.carrd.co/";
}

