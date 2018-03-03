import React from "react";
import {connect} from 'react-redux';
import {salonsRequest} from "actions";

class Salons extends React.Component {
    componentDidMount() {
        const {fetchSalons} = this.props;
        fetchSalons(1, 25);
    }

    render() {
        const {isLoading} = this.props;
        return (
            <span>{isLoading.toString()}</span>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.salons.isLoading,
    salons: state.salons.salons,
    totalPage: state.salons.total
});
const mapDispatchToProps = dispatch => ({
    fetchSalons: (page, pageSize) => dispatch(salonsRequest(page, pageSize))
});
export default connect(mapStateToProps, mapDispatchToProps)(Salons);



