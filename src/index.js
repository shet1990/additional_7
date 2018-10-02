module.exports = function solveSudoku(matrix) {
    res = matrix;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (matrix[i][j] == 0) {
                res[i][j] = unique(res[i]);
            }

        }
    }
    buff = [];
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (matrix[j][i].length > 1) {
                buff.push(i);
            }
        }
    }
    var mass = [];
    var submass = [];
    for (var j = 0; j < buff.length; j++) {
        for (var i = 0; i < 9; i++) {
            if (!Array.isArray(matrix[i][buff[j]])) {

                submass.push(matrix[i][buff[j]]);
            }
        }
        if (submass.length != 0)
            mass.push(submass);
        var submass = [];
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < buff.length; j++) {
            if (Array.isArray(matrix[i][buff[j]])) {
                if (Array.isArray(mass[j])) {
                    res[i][buff[j]] = unique2(mass[j], matrix[i][buff[j]]);
                    if (Array.isArray(res[i][buff[j]]))
                        if (res[i][buff[j]].length == 1)
                            res[i][buff[j]] = res[i][buff[j]];
                }



            }
        }
        if (submass.length != 0)
            mass.push(submass);
        var submass = [];
    }
    return res;
}


function unique(arr) {
    var res = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var index = res.indexOf(arr[i]);
        if (index !== -1) res.splice(index, 1);
    }
    return res;
}

function unique2(arr, arr2) {
    var res = arr2;
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var index = res.indexOf(arr[i]);
        if (index !== -1) res.splice(index, 1);
    }
    return res;
}