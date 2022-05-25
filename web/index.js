import init from './pkg/wasm_from_lib_workspace.js';
import * as wasm from './pkg/wasm_from_lib_workspace.js';

function setText(text) {
    let msg_div=document.getElementById("msg_box");
    msg_div.innerText = text;
    console.log("set text to: " + text);
}

window.onload = function () {
    async function update_greeting(event){
        console.log("init wasm");
        await init();
        console.log("invoking wasm");
        let greeting = await wasm.increase_by_one(event.target.value);
        console.log("received from wasm: " + greeting);
        setText(greeting);
    }
    let nameTextField = document.getElementById('number');
    nameTextField.addEventListener("keyup", update_greeting,false);
}