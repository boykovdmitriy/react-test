import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {InfiniteScroll} from 'components/infinite-scroll';

import {ProfileImage} from "components/profile-image";
import {salonsRequest} from "actions";
import {Table, TableColumn, TableRow} from "components/table";

class Salons extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            pageSize: 25
        }
    }

    componentDidMount() {
        const {fetchSalons} = this.props;
        const {page, pageSize} = this.state;
        fetchSalons(page, pageSize);
    }

    handleScroll() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            const {page, pageSize} = this.state;
            const {fetchSalons} = this.props;
            fetchSalons(page, pageSize);
        });
    }

    render() {
        const {isLoading, salons} = this.props;
        if (isLoading || salons.length === 0) return (
            <section>loading</section>
        );
        return (
            <InfiniteScroll handleScroll={() => this.handleScroll()}>
                <Table headers={['Name', 'Website', 'Image']}>
                    {salons.map(x => (
                        <TableRow key={x.id}>
                            <TableColumn>{x.name}</TableColumn>
                            <TableColumn>{!!x.website && <a href={x.website}>link</a>}</TableColumn>
                            <TableColumn>{
                                !!x.profile_image_urls &&
                                <ProfileImage thumb={x.profile_image_urls.thumb}
                                              origin={x.profile_image_urls.original}/>
                            }</TableColumn>
                            <TableColumn><Link to={`salon/${x.id}`}>Details</Link></TableColumn>
                        </TableRow>
                    ))}
                </Table>
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.salons.list.isLoading,
    salons: state.salons.list.items,
    totalPage: state.salons.list.total
});
const mapDispatchToProps = dispatch => ({
    fetchSalons: (page, pageSize) => dispatch(salonsRequest(page, pageSize))
});
export default connect(mapStateToProps, mapDispatchToProps)(Salons);



