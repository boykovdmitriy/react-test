import React from 'react';
import PropTypes from 'prop-types';

export class InfiniteScroll extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => this.handleOnScroll());
    }

    handleOnScroll() {
        const {handleScroll} = this.props;
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            handleScroll();
        }
    };

    render() {
        const {children} = this.props;
        return (
            <section>
                {children}
            </section>
        )
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.object.isRequired,
    handleScroll: PropTypes.func.isRequired
};