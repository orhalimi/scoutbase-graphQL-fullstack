import React from 'react';
import { Query } from "react-apollo";

const GraphQLQuery = ({query, render, variables = null})=>{
    if(!query ) return null;
    return (
        <Query query={query} variables={variables}>
            {({ data, loading, error }) =>{
                return render({ data, loading, error });
            }}
        </Query>
    );
}

export default GraphQLQuery;