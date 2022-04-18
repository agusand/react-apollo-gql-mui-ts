import { gql, useQuery } from "@apollo/client";
import "./App.css";

function App() {
    const query = gql`
        query {
            allUsers {
                id
                name
                email
            }
        }
    `;

    const { data, error, loading } = useQuery(query);

    console.log(error || data);

    return (
        <div className="App">
            {loading ? (
                <p>Loading</p>
            ) : error ? (
                <p>Sorry, not found</p>
            ) : (
                <p>Data getted</p>
            )}
        </div>
    );
}

export default App;
