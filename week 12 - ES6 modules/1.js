// 📁 1.js
import { admin } from './admin.js';
console.log('From Module 1', admin.name); // john
admin.name = "Pete";
console.log('From After Modification', admin.name);