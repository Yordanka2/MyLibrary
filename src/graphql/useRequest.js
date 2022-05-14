import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = 'http://localhost:3001/graphql';

const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
        // Authorization: `Bearer ${process.env.API_KEY}`
        'Content-Type': 'application/json',
    }
});

export function useGetBooks() {
    return useQuery("getBooks", async () => {
        return await graphQLClient.request(gql`
            query {
                books {
                    _id
                    title
                    description
                    author
                    rating
                    image
                    reviews {
                        _id
                        bookAuthor
                        bookTitle
                        opinion
                        rating
                    }
                }
            }
        `);
    });
}