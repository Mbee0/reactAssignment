import { React, useState, useEffect } from 'react';

export default function QuoteGenerator() {

    const [quotes, getQuotes] = useState([]);

    useEffect(() => {
        fetch("https://api.quotable.io/quotes/random?limit=5")
            .then((response) => response.json())
            .then((json) => {
                // here we are setting our quotes variable with the contents we have
                // grabbed from the api
                getQuotes(json);
            });
    }, []);

    return (
        <div>
            <h1><b>Quotes of the day! Some may be good, most will be bad</b></h1>
            {quotes.map((quote) => (
                <div>
                    <h3>{quote.content}</h3>
                    <text>By: {quote.author}</text>
                    <h4>  -----  </h4>
                </div>
            ))}
        </div>
    );

}

