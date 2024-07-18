import React, {useState, useEffect} from "react";

const BookReviews = ({bookAsin}) => {
    //array state per memorizare tutte le recensioni
    const [reviews, setReviews] = useState([]);
    //state per la gestione di nuova recensione
    const [newReview, setNewReview] = useState('');

    const [newRate,setNewRate] = useState(5)

    //effeto che si attiva quando cambiamo book
    useEffect(() => {
        const fetchReviews = async () => {
            
        }
        fetchReviews();
    },[bookAsin]);

    // funzione per vedere le recensioni 
    async function fetchReviews() {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookAsin}/comments/`);
            const data = await res.json();
            setReviews(data);
        }
        catch (error) {
            alert('Errore nel caricamento delle recensioni', error);
        }
    }

    //inviamo una nupva recensione 

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        //verifichiamo se la recensione e vuota

        if(!newReview.trim()) return;
        try{
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                headers : {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNiZWRlZmRkN2I3MTAwMTRhMzEzYTYiLCJpYXQiOjE3MjA3MjE0OTQsImV4cCI6MTcyMTkzMTA5NH0.VjVUOuLT8Px1yEHTnkzDNilbmulXMkkCxYeF7yZWq3o",
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    comment : newReview,
                    rate : newRate,
                    elementId : bookAsin
                }),
            });
            if(res.ok){
                setNewReview('')
                setNewRate(5)
                fetchReviews();
            }
        }catch(error){
            alert('Errore nel invio della recensione')
        }
    };
    return (
        <div className="book-reviews" >
            <h3>Recensioni</h3>
            {
                reviews.map((review, index) => (
                    <div key={index} className="review" >
                        <p>{review.comment}</p>
                        <p> Valutazione{review.rate}</p>
                    </div>
                ) )}
                <form onSubmit={handleSubmitReview}>
                    <textarea 
                        value={newReview}
                        onChange={(e)=> setNewReview(e.target.value)}
                        placeholder="Scrivi la tua recensione" 
                    />
                    <select 
                    value={newRate}
                    onChange={(e) => setNewRate(Number(e.target.value))}
                    >
                        {[1,2,3,4,5].map(num =>(
                            <option key={num} value={num} >{num}</option>
                        ))}
                    </select>
                    <button type="submit">Invia Recensione</button>
                </form>
                </div>
    )
}
export default BookReviews;