import ReactDOM from "react-dom/client";
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import "./index.css";

import App from "./App";

const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.REACT_APP_GRAPHQL_API_URI,
    }),
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
