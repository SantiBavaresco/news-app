export function HashStr(string){
    var hash = 0;
    if (string.length == 0) return hash;
    for (var x = 0; x <string.length; x++) {
        var ch = string.charCodeAt(x);
        hash = ((hash <<5) - hash) + ch;
        hash = hash & hash;
    }
    return hash;
}
