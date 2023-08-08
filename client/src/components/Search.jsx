import React, { useState } from "react";
import axios from "axios";
import { SectionWrapper } from "../hoc";

const Search = () => {
    const [searchText, setSearchText] = useState(""); // Initialize state
    const [sentimentResult, setSentimentResult] = useState(null); // Initialize state

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://twinword-sentiment-analysis.p.rapidapi.com/analyze/', {
                params: {
                    text: searchText
                },
                headers: {
                    'X-RapidAPI-Key': 'beb832eb9emsh0ba22b478ef7f14p194d29jsn3812d0e6091d',
                    'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
                }
            });

            setSentimentResult(response.data);
        } catch (error) {
            if (error.response) {
                console.error("API responded with:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error during request setup:", error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter lyrics"
                    required
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
            {sentimentResult && (
                <div className="mt-4">
                    <p>Sentiment: {sentimentResult.type}</p>
                    <p>Score: {sentimentResult.score}</p>
                </div>
            )}
        </form>
    );
};

export default SectionWrapper(Search, "search");