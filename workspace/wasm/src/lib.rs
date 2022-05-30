use lib::math::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn increase_by_one(should_be_i32: &str) -> JsValue {
    let msg = match should_be_i32.parse::<i32>() {
        Ok(int) => {plus_one(int).to_string()}
        Err(_) => {format!("couldn't convert value {should_be_i32} to i32")}
    };
    JsValue::from_str(msg.as_str())
}
