import { Directive } from "vue";

const model:Directive = function(el:HTMLSpanElement,binding){
    el.textContent = binding.arg||'';
    
}

export default model;