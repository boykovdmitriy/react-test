import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {InfiniteScroll} from 'components/infinite-scroll';

import {ProfileImage} from "components/profile-image";
import {salonsRequest} from "actions";
import {Table, TableColumn, TableRow} from "components/table";
import {Spinner} from 'components/spinner';

class Salons extends React.Component {
    constructor(props) {
        super(props);
        this.pageSize = 25;
    }

    componentDidMount() {
        const {loadedUntilPage} = this.props;
        if (!loadedUntilPage) {
            this.loadNextPage();
        }
    }

    loadNextPage() {
        const {fetchSalons, loadedUntilPage, total} = this.props;
        const nextPage = loadedUntilPage ? loadedUntilPage + 1 : 1;
        if (!total || nextPage <= total) {
            fetchSalons(nextPage, this.pageSize);
        }
    }

    handleScroll() {
        this.loadNextPage();
    }

    render() {
        const {isLoading, salons} = this.props;
        return (
            <section>
                <InfiniteScroll handleScroll={() => this.handleScroll()}>
                    <Table headers={['Name', 'Website', 'Image']}>
                        {salons.length !== 0 && salons.map(x => (
                            <TableRow key={x.id}>
                                <TableColumn>{x.name}</TableColumn>
                                <TableColumn>{!!x.website && <a href={x.website}>link</a>}</TableColumn>
                                <TableColumn>{
                                    !!x.profile_image_urls &&
                                    <ProfileImage thumb={x.profile_image_urls.thumb}/>
                                }</TableColumn>
                                <TableColumn><Link to={`salon/${x.id}`}>Details</Link></TableColumn>
                            </TableRow>
                        ))}
                    </Table>
                </InfiniteScroll>
                {isLoading && <Spinner/>}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.salons.list.isLoading,
    salons: state.salons.list.items,
    totalPage: state.salons.list.total,
    loadedUntilPage: state.salons.list.page
});
const mapDispatchToProps = dispatch => ({
    fetchSalons: (page, pageSize) => dispatch(salonsRequest(page, pageSize))
});
export default connect(mapStateToProps, mapDispatchToProps)(Salons);



