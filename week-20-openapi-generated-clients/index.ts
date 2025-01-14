import { DefaultService } from "./generated/services/DefaultService";

async function main(){
    const response = await DefaultService.getUser("123123");
    console.log(response);
}

main();