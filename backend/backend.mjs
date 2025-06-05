import PocketBase from 'pocketbase';
export const pb = new PocketBase("https://matinochaudpb.breuil-kilian.fr:443")


export async function getAllarticle() {
    const getAllarticles = await pb.collection('article').getFullList() ;
    return getAllarticles;
}

export async function getArticleById(id) {
    const getOnearticle = await pb.collection('article').getOne(id) ;
    return getOnearticle;
}

export async function getAllboulangerie() {
    const getAllboulangerie = await pb.collection('boulangerie').getFullList() ;
    return getAllboulangerie;
}

export async function getBoulangerieById(id) {
    const getBoulangerieById = await pb.collection('boulangerie').getOne(id) ;
    return getBoulangerieById;
}

export async function getAllarticlesbycategorie(categorie) {
    const getAllarticlesbyboulangerie = await pb.collection('article').getFullList({
        filter: `categorie = "${categorie}"`,
    }) ;
    return getAllarticlesbyboulangerie;
}

export async function getAllarticlesbygout(gout) {
    const getgout = await pb.collection('article').getFullList({
        filter: `gout = "${gout}"`,
    }) ;
    return getgout;
}

export async function getAllarticlesbyboulangerie(boulangerie) {
    const articlebyboulangerie = await pb.collection('article').getFullList({
        filter: `articleboulnagerie = "${boulangerie}"`,
    }) ;
    return articlebyboulangerie;
}

export async function getAllarticlesbydisponibilite(disponibilite) {
    const articlesbydisponibilite = await pb.collection('article').getFullList({
        filter: `disponibilite = "${disponibilite}"`,
    }) ;
    return articlesbydisponibilite;
}

export async function getAllarticlesbyindisponibilite(indisponibilite) {
    const records = await pb.collection('article').getFullList({
        filter: `disponibilite = "${indisponibilite}"`,
    }) ;
    return records;
}

export async function getpricebyarticle(id) {
    const record = await pb.collection('article').getOne(id) ;
    return record.prix;
}

export async function getAllclients() {
    const records = await pb.collection('client').getFullList() ;
    return records;
}

export async function getClientById(id) {
    const record = await pb.collection('client').getOne(id) ;
    return record;
}

export async function getAllcommandes() {
    const records = await pb.collection('commande').getFullList() ;
    return records;
}

export async function getCommandeById(id) {
    const record = await pb.collection('commande').getOne(id) ;
    return record;
}

export async function getCommandebydate(date) {
    const record = await pb.collection('commande').getFullList({
        filter: `date = "${date}"`,
    }) ;
    return record;
}

export async function getCommandebylivreur(livreur) {
    const record = await pb.collection('commande').getFullList({
        filter: `nom_livreur = "${livreur}"`,
    }) ;
    return record;
}

export async function getCommandebyclient(client) {
    const record = await pb.collection('commande').getFullList({
        filter: `nom_client = "${client}"`,
    }) ;
    return record;
}

export async function getClientbyadresse(adresse) {
    const record = await pb.collection('client').getFullList({
        filter: `adresse = "${adresse}"`,
    }) ;
    return record;
}

export async function addNewclient(newclient) {
    await pb.collection('client').create(newclient) ;
}

export async function deleteclient(id) {
    await pb.collection('client').delete(id) ;
}

export async function updateclient(id, newclient) {
    await pb.collection('client').update(id, newclient) ;
}

export async function addNewarticle(newarticle) {
    await pb.collection('article').create(newarticle) ;
}

export async function deletearticle(id) {
    await pb.collection('article').delete(id) ;
}

export async function updatearticle(id, newarticle) {
    await pb.collection('article').update(id, newarticle) ;
}

export async function addNewcommande(newcommande) {
    await pb.collection('commande').create(newcommande) ;
}
export async function deletecommande(id) {
    await pb.collection('commande').delete(id) ;
}
export async function updatecommande(id, newcommande) {
    await pb.collection('commande').update(id, newcommande) ;
}
export async function getAlllivreurs() {
    const records = await pb.collection('livreur').getFullList() ;
    return records;
}
export async function getLivreurById(id) {
    const record = await pb.collection('livreur').getOne(id) ;
    return record;
}
export async function addNewlivreur(newlivreur) {
    await pb.collection('livreur').create(newlivreur) ;
}
export async function deletelivreur(id) {
    await pb.collection('livreur').delete(id) ;
}
export async function updatelivreur(id, newlivreur) {
    await pb.collection('livreur').update(id, newlivreur) ;
}
export async function addNewboulangerie(newboulangerie) {
    await pb.collection('boulangerie').create(newboulangerie) ;
}
export async function deleteboulangerie(id) {
    await pb.collection('boulangerie').delete(id) ;
}
export async function updateboulangerie(id, newboulangerie) {
    await pb.collection('boulangerie').update(id, newboulangerie) ;
}
