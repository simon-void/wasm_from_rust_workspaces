## PoC of splitting Rust code to be compiled to wasm into workspaces

3 workspaces are used:
- "lib" which contains the functionality
- "wasm" which contains the boilerplate code to access this functionality from within wasm
- "bin" which contains a binary crate invoking the functionality and being unaware of its use in wasm

You can see the resulting website [here](https://simon-void.github.io/wasm_from_rust_workspaces/).

#### Compiling the code

Make sure wasm-pack is [installed](https://rustwasm.github.io/wasm-pack/installer/), then execute 
```
./build-wasm
```
Make sure the file is executable.