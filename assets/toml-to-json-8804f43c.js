import{_ as e}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-7f88ae94.js";import{p as s}from"./toml-esm-9c5f6a1e.js";import{w as n}from"./defaults-4d6daddf.js";import{i}from"./toml.services-387bcfeb.js";import{d as m,o as p,c as l}from"./index-f8ba620c.js";import"./TextareaCopyable-fdc2016d.js";import"./Copy-c7a01897.js";import"./Scrollbar-a11f7803.js";import"./boolean-c7e7c785.js";const v=m({__name:"toml-to-json",setup(u){const r=o=>o===""?"":n(()=>JSON.stringify(s(o),null,3),""),t=[{validator:i,message:"Provided TOML is not valid."}];return(o,c)=>{const a=e;return p(),l(a,{"input-label":"Your TOML","input-placeholder":"Paste your TOML here...","output-label":"JSON from your TOML","output-language":"json","input-validation-rules":t,transformer:r})}}});export{v as default};
