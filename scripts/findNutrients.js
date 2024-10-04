var my_function = function(tp) {
    try {
        var food = tp.file.cursor();
        var foodFile = app.vault.getAbstractFileByPath('ruta/a/su/base/de/datos/' + food + '.md');

        if (!foodFile) {
            return 'Archivo del alimento no encontrado. Compruebe el nombre y la ubicación del archivo.';
        }
        
        var fileContent = app.vault.read(file);
        var metadata = JSON.parse(fileContent.slice(fileContent.indexOf('---'), fileContent.lastIndexOf('---')));
        var nutrients = metadata.nutrients;
        
        if (!nutrients || nutrients.length == 0) {
            return 'No se encontraron nutrientes para este alimento.';
        } else {
            return 'Nutrientes: ' + nutrients.join(', ');
        }
    } catch (e) {
        return 'Error al buscar los nutrientes: ' + e.message;
    }
};

module.exports = my_function;