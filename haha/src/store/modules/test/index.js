import * as mutations from "./mutations"
import * as actions from "./actions"

export default  {
    state(){
        return{
            data: [],
            apiLink: "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json"

        }
    },
    mutations,
    actions
}