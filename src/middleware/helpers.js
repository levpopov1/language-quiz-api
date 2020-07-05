// Middleware helper functions

function capitalizeFirstLetter(input = ''){
    if(input && input.length !== 0){
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    return null;
}

function capitalizeEachFirstLetter(input = []){
    if(input && input.length !== 0){
        return input.map(function(item){
            return item.charAt(0).toUpperCase() + item.slice(1);
        });
    }
    return null;
}

module.exports = {
    capitalizeFirstLetter,
    capitalizeEachFirstLetter
}