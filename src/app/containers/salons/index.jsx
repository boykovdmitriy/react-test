import React from "react";
import {connect} from 'react-redux';
import {salonsRequest} from "actions";
import {Table, TableItem} from "components/table";

class Salons extends React.Component {
    componentDidMount() {
        const {fetchSalons} = this.props;
        fetchSalons(1, 25);
    }

    render() {
        const {isLoaded, salons} = this.props;
        if (!isLoaded) return (
            <section>loading</section>
        );
        return (
            <Table>
                {salons.map(x => (
                    <TableItem salon={x} key={x.id}/>
                ))}
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    isLoaded: state.salons.isLoaded,
    salons: state.salons.salons,
    totalPage: state.salons.total
});
const mapDispatchToProps = dispatch => ({
    fetchSalons: (page, pageSize) => dispatch(salonsRequest(page, pageSize))
});
export default connect(mapStateToProps, mapDispatchToProps)(Salons);



