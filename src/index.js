import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'; 
 
function MyComponent(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsloaded] = useState(false);
    const [items, setItems] = useState([]);

    // let url = "https://jsonplaceholder.typicode.com/photos"; 
    
    let url = "/produits.json";
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) =>{
                setIsloaded(true);
                setItems(result.produits);
            },
            (error) =>{
                setIsloaded(true);
                setError(error);
            }
        )
    }, [url] )
    if(error){
        return <div> Error: {error.message}</div>;
    }else if (!isLoaded){
        return <div> Chargement...</div>;
    }else {
        return ( 
            <div style={{ display: 'flex', justifyContent: 'center' }}>
             
            <table border="1" width="60%">
                <thead> 
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Prix</th> 
                        <th>Details</th> 
                    </tr>
                </thead>
                <tbody>
                {items.map(item =>(
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.description}</td>
                        <td>
                        <img src={item.image} alt="laptop.img" width="200"/>
                        </td>
                        <td>{item.prix}</td> 
                        <td>{item.details}</td> 
                     </tr>  
                ))} 
                </tbody>
            </table> 
            </div>
        );
    } 
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);  
 
