new Vue({
   
    el: "#app",

   
    data :{
        title: "adnan"
    },

    methods: {
        changeTitle(event){
           return this.title = event.target.value;
        }
    }

});