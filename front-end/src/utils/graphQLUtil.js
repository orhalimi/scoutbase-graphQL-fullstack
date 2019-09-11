import { gql } from "apollo-boost";

const queries = {
    countriesQuery: gql`
    query{
        countries {
            name
            languages {
                native
                name
            }
            continent{
                name
            }
        }
    }
    `,
    countryCodeQuery: gql`
        query country($code: String){
            country(code: $code){
                name
                currency
                phone
            }
        }
    `
};

export default {queries};