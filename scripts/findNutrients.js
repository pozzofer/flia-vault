var my_function = function(tp) {
var food = tp.file.cursor();
var nutrients = app.vault.getAbstractFileByPath('ruta/a/su/base/de/datos/' + food + '.md');
return nutrients;
};
module.exports = my_function;