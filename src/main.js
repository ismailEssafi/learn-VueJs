
const template =`<div>{{title}}</div>`;
const data = function data(){
   return {
       title : "vueJs cours"
   }
};
const app ={data,template};
Vue.createApp(app).mount("#vue_app");
    