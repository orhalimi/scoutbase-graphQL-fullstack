import React from 'react'
import GraphQLQuery from '../../components/GraphQLQuery';
import graphQLUtil from '../../utils/graphQLUtil';
import Table from '../../components/Table';

import './PageCountries.css';

const PageCountries = ({match}) => {

    function renderCountryCodeData(code) {
        return (
            <GraphQLQuery query={graphQLUtil.queries.countryCodeQuery} variables={{code}} render={({ data, loading, error }) =>{
                if (loading || error) return <div>{'loading....' || error.message}</div>  
                if (!data || data.country == null) return <div>Coulndn't find {code} area code</div>  
                const tableMap = {name: 'name', currency: 'currency', area: 'phone'};
                return <Table data={[data.country]} tableMap={tableMap} className="countriesTable"/>
            }}/>
        );
    }

    function renderCountriesList(){
        return (
            <GraphQLQuery query={graphQLUtil.queries.countriesQuery}  render={({ data, loading, error }) =>{
                if (loading || error) return <div>{'loading....' || error.message}</div>  
                if (!data || !data.countries || data.countries.length < 1)  return <div>Coulndn't load data</div>  
                const tableMap = {name: 'name', language: 'languages.0.name', native: 'languages.0.native', content: 'continent.name'};
                return     <Table data={data.countries} tableMap={tableMap} className="countriesTable tableDivinder"/>
             }}/>
        );
    }

    const content = match.params && match.params.code? renderCountryCodeData(match.params.code): renderCountriesList()
 
    return (
        <div className="Page PageCountries">
            <div style={{width: 'inherit'}}>
                {content}
            </div>
        </div>
    )
};

export default PageCountries;