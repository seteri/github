import navbar from "./navbar.vue"
export default{
    install: (app,options) =>{

        app.component("test",navbar)

    }
}