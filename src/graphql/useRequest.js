import {useMutation, useQuery} from "react-query";
import {GraphQLClient, gql} from "graphql-request";
import {jsonToGraphQLQuery} from 'json-to-graphql-query';
import {Cookies} from "react-cookie";

const API_URL = 'http://localhost:3001/graphql';
const cookies = new Cookies();

const graphQLClient = new GraphQLClient(API_URL, {
    headers: () => {
        const token = cookies.get('token')
        const headers = {
            'Content-Type': 'application/json',
        }
        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }
        return headers
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

export function useGetBook(id) {
    return useQuery("getBooks", async () => {
        return await graphQLClient.request(gql`
            query {
                book(_id: "${id}") {
                    _id
                    title
                    description
                    image
                    author
                    rating
                }
            }
        `);
    });
}

export function useCreateUser(userData) {
    const createUserMutation = {
        mutation: {
            createUser: {
                __args: {
                    data: userData,
                },
            }
        }
    };
    const createUserMutationRequest = jsonToGraphQLQuery(createUserMutation, {pretty: true});
    return useMutation("createUser", async () => {
        return await graphQLClient.request(createUserMutationRequest);
    });
}


export function useCurrentUser() {
    return useQuery("currentUser", async () => {
        return await graphQLClient.request(gql`
            query {
                currentUser {
                    _id
                    roles
                    firstName
                    lastName
                }
            }
        `);
    }, {
        refetchOnWindowFocus: false,
        retry: 1,
    });
}


//review(_id: "${id}"{
//  _id
//     opinion
//      bookAuthor
//     createBY
//     bookTitle
//    rating

//  } 

/*   export function useGetReview() {
       return useQuery("getBooks", async () => {
           return await graphQLClient.request(gql`
               query {
                   review(_id: "${id}") {
                       _id
                       opinion



                   }
               }
           `);
       });

*/
