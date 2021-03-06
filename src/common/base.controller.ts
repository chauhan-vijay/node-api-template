import { Header } from "routing-controllers";

@Header("Cache-Control", "none") 
export class BaseController {
    constructor(){

    }
}
