const prenoms = ["Jul2ien", "P1ierre", "Pau23line", "Patrick23"]
let resultat = [];
for (let prenom of prenoms) {
    let fix = prenom.replace(/[0-9]/g, '');
    resultat.push(fix)
}