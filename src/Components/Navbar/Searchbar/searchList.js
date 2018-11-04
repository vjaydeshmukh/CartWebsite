import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './searchList.css';

const mapStateToProps = state => {
	return{
		searchField: state.searchProducts.searchField,
		searchResults: state.requestProductsOnSearch.searchProductResults,
	}
}

class SearchList extends Component {
	
	render(){
		const {searchField, searchResults}= this.props;
		if(searchField.length>2 && Object.keys(searchResults).length){
			const brands = searchResults.aggregations.by_brand.buckets;
			const categs = searchResults.aggregations.by_category.buckets;

			return(
				<div id='searchlist'>
				    <a href="#about">'{searchField}' in {brands[0].key}</a>
					<a href="#base">'{searchField}' in {brands[1].key}</a>
					<a href="#blog">'{searchField}' in {categs[0].key}</a>
					<a href="#contact">'{searchField}' in {categs[1].key}</a>
					<a href="#custom">Search '{searchField}'</a>
				</div>
			)
		}
		return <div />
	}
}

export default connect(mapStateToProps)(SearchList);