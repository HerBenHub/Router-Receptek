
import { useState } from "react";

export default function Receptek() {
    const [filteredReceptek, setFilteredReceptek] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");


    
    const receptek = [
        { id: '1', nev: 'Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...' },
        { id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Pirítsd meg a hagymát...' },
        { id: '3', nev: 'Sushi tál', kateg: 'Japán', leiras: 'Használj friss halat...' }
    ];

    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.elements[0].value.toLowerCase();
        setSearchQuery(query);
        const filtered = receptek.filter(recept => 
            recept.nev.toLowerCase().includes(query) || 
            recept.kateg.toLowerCase().includes(query) ||
            recept.leiras.toLowerCase().includes(query)
        );
        // if (filtered.length === 0) {
        //     alert("Nincs találat a keresésre.");
        // }
        console.log(filtered);
        setFilteredReceptek(filtered);
    };

    const handleClearSearch = () => {
        setFilteredReceptek(null);
        setSearchQuery("");
    };
    const receptekToDisplay = filteredReceptek !== null ? filteredReceptek : receptek;

    return (
        <div>
            <h1 className="text-center mt-5">Receptek listája</h1>
            <p className="text-center">Itt találhatók a különböző receptek.</p>

            <form className="d-flex p-3 w-50 mx-auto my-3" role="search" onSubmit={handleSearch}>
                <input className="form-control me-2" type="search" placeholder="Keresés" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="btn btn-outline-success" type="submit">Keresés</button>
                {filteredReceptek !== null && (
                    <button className="btn btn-outline-danger ms-2" type="button" onClick={handleClearSearch}>Törlés</button>
                )}
            </form>

            <div className="container">
                <div className="row">
                    {filteredReceptek !== null && (
                        <h3 className="mb-3">Szűrt receptek ({receptekToDisplay.length} találat)</h3>
                    )}
                    {receptekToDisplay.map((recept) => (
                        <div key={recept.id} className="col-md-4 mb-4">
                            <div className={`card h-100 ${filteredReceptek !== null ? 'border-primary' : ''}`}>
                                <div className="card-body">
                                    <h5 className="card-title">{recept.nev}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{recept.kateg}</h6>
                                    <p className="card-text">{recept.leiras}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}