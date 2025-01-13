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
                "https://i.pinimg.com/736x/06/ad/da/06adda610b5c8af46f61afa7779760a0.jpg",
                "https://i.pinimg.com/736x/36/b5/35/36b5352028f7f20b6e655fde834fce55.jpg",
                "https://i.pinimg.com/736x/c7/88/e4/c788e48e56bf44a1d61f867b12db2bc0.jpg",
                "https://i.pinimg.com/736x/bc/79/94/bc7994f107baf66106fc47804cfcad08.jpg",
                "https://i.pinimg.com/736x/ee/9d/ae/ee9daebe4c6ff554b59034f0f699738d.jpg"
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
