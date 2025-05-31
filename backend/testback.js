import { getAllarticles, getArticleById,getAllboulangerie, getBoulangerieById, getAllarticlesbycategorie, getAllarticlesbygout, getAllarticlesbyboulangerie, getAllarticlesbydisponibilite, getAllarticlesbyindisponibilite, getpricebyarticle, getAllclients, getClientById, getAllcommandes, getCommandeById, getCommandebydate, getCommandebylivreur, getCommandebyclient, getClientbyadresse, addNewclient, deleteclient, updateclient, addNewarticle, deletearticle, updatearticle, addNewcommande, deletecommande, updatecommande, getAlllivreurs, getLivreurById, addNewlivreur, deletelivreur, updatelivreur, addNewboulangerie, deleteboulangerie, updateboulangerie} from "./backend.mjs";

try {
    const records = await getAllarticles();
    console.log(records);
} catch (error) {
    console.error("Error fetching articles:", error);
}

try {
    const record = await getArticleById('article_id');
    console.log(record);
}   catch (error) {
    console.error("Error fetching article by ID:", error);
}
try {
    const records = await getAllboulangerie();
    console.log(records);
} catch (error) {
    console.error("Error fetching boulangeries:", error);
}

try {
    const record = await getBoulangerieById('boulangerie_id');
    console.log(record);
} catch (error) {
    console.error("Error fetching boulangerie by ID:", error);
}

try {
    const records = await getAllarticlesbycategorie('categorie_name');
    console.log(records);
}
catch (error) {
    console.error("Error fetching articles by category:", error);
}

try {
    const records = await getAllarticlesbygout('gout_name');
    console.log(records);
}
catch (error) {
    console.error("Error fetching articles by taste:", error);
}

try {
    const records = await getAllarticlesbyboulangerie('boulangerie_name');
    console.log(records);
}
catch (error) {
    console.error("Error fetching articles by boulangerie:", error);
}

try {
    const records = await getAllarticlesbydisponibilite('disponibilite_name');
    console.log(records);
}
catch (error) {
    console.error("Error fetching articles by availability:", error);
}

try {
    const records = await getAllarticlesbyindisponibilite('indisponibilite_name');
    console.log(records);
}
catch (error) {
    console.error("Error fetching articles by unavailability:", error);
}

try {
    const price = await getpricebyarticle('article_id');
    console.log(price);
}   catch (error) {
    console.error("Error fetching price by article:", error);
}
try {
    const records = await getAllclients();
    console.log(records);
}catch (error) {
    console.error("Error fetching clients:", error);
}

try {
    const record = await getClientById('client_id');
    console.log(record);

} catch (error) {
    console.error("Error fetching client by ID:", error);
}

try {
    const records = await getAllcommandes();
    console.log(records);
} catch (error) {
    console.log(records);
}

try {
    const record = await getCommandeById('commande_id');
    console.log(record);

} catch (error) {
    console.error("Error fetching commande by ID:", error);
}

try {
    const records = await getCommandebydate('2023-10-01');
    console.log(records);

} catch (error) {
    console.error("Error fetching commandes by date:", error);
}

try {
    const records = await getCommandebylivreur('livreur_name');
    console.log(records);

}
catch (error) {
    console.error("Error fetching commandes by livreur:", error);
}

try {
    const records = await getCommandebyclient('client_name');
    console.log(records);

}
catch (error) {
    console.error("Error fetching commandes by client:", error);
}

try {
    const records = await getClientbyadresse('adresse_name');
    console.log(records);

}
catch (error) {
    console.error("Error fetching client by address:", error);
}

try {
    const newClient = await addNewclient({ name: 'John Doe', address: '123 Main St' });
    console.log(newClient);
}
catch (error) {
    console.error("Error adding new client:", error);
}
await deleteclientbyid('');

try {
    const updatedClient = await updateclient('client_id', { name: 'Jane Doe' });
    console.log(updatedClient);
}
catch (error) {
    console.error("Error updating client:", error);
}

try {
    const newArticle = await addNewarticle({ name: 'Croissant', price: 1.50 });
    console.log(newArticle);
}
catch (error) {
    console.error("Error adding new article:", error);
}


  await deletearticle('');

  
