import React from "react";
import {connect} from 'react-redux';
import {salonServicesRequest, salonRequest} from "actions";
import {Table, TableColumn, TableRow} from "components/table";
import {SheduleOfWeek} from "./shedule-of-week/index";
import style from './salon-details.css'

class SalonDetails extends React.Component {
    componentDidMount() {
        const {fetchSalon, fetchSalonServices, match: {params: {salonId}}} = this.props;
        fetchSalon(salonId);
        fetchSalonServices(salonId);
    }

    render() {
        const {isLoadingSalon, salon, services} = this.props;
        if (isLoadingSalon || !salon) {
            return (
                <section>loading</section>
            );
        }
        return (
            <article className={style.container}>
                <h1>{salon.name}</h1>
                <section className={style.contentItem}>
                    <h2>Working hours</h2>
                    <SheduleOfWeek workHours={salon.hours}/>
                </section>
                <section className={style.contentItem}>
                    <h2>Description</h2>
                    <p>{salon.description}</p>
                </section>
                <section className={style.contentItem}>
                    <h2>Services</h2>
                    <Table>
                        {
                            !!services && services.map(x => (
                                <TableRow key={x.id}>
                                    <TableColumn>{x.name}</TableColumn>
                                    <TableColumn>{`${x.duration} minutes`}</TableColumn>
                                    <TableColumn>{`${x.price} KD`}</TableColumn>
                                </TableRow>
                            ))
                        }
                    </Table>
                </section>
            </article>
        );
    }
}

const mapStateToProps = state => ({
    isLoadingSalon: state.salons.item.isLoading,
    isLoadingServices: state.salonServices.isLoading,
    salon: state.salons.item.salon,
    services: state.salonServices.services
});
const mapDispatchToProps = dispatch => ({
    fetchSalon: (salonId) => dispatch(salonRequest(salonId)),
    fetchSalonServices: (salonId) => dispatch(salonServicesRequest(salonId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalonDetails);
